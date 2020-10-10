FROM pierrezemb/gostatic 

ENV APP /app
WORKDIR $APP

COPY . $APP
EXPOSE 8043

CMD ["-path", "/app"]