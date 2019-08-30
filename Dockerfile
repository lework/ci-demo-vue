From nginx:1.17.0-alpine


RUN apk --update -t --no-cache add tzdata \
    && ln -snf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime \
    && echo "Asia/Shanghai" > /etc/timezone \
    && ln -sf /dev/stdout /var/log/nginx/access.log \
    && ln -sf /dev/stderr /var/log/nginx/error.log

COPY dist/ /app/
COPY nginx.conf /etc/nginx/nginx.conf


CMD ["nginx","-g","daemon off;"]
