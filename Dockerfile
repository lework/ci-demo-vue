#syntax=harbor.leops.local/library/docker/dockerfile:1
#                                                                                                                                         
# ---- 编译环境 ----                                                                                                                      

FROM harbor.leops.local/common/tools/node:22 as builder

ARG APP_ENV=test \
    APP=undefine
ENV APP_ENV=$APP_ENV \
    APP=$APP

WORKDIR /app_build

COPY package.json package-lock.json ./

RUN --mount=type=cache,id=${APP}-npm,target=/root/.npm \
    --mount=type=cache,id=${APP}-npm-modules,target=./node_modules \
    npm install

COPY ./ ./

RUN --mount=type=cache,id=${APP}-npm,target=/root/.npm \
    --mount=type=cache,id=${APP}-npm-modules,target=./node_modules \
    npm run build:${APP_ENV}


#
# ---- 运行环境 ----

FROM harbor.leops.local/common/runtime/nginx-csr:1.26 as running

ARG APP_ENV=test \
    APP=undefine
ENV APP_ENV=$APP_ENV \
    APP=$APP

WORKDIR /app

COPY --from=builder /app_build/dist /app/
