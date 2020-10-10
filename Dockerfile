FROM pierrezemb/gostatic 

ENV APP /app
WORKDIR $APP

COPY . $APP
EXPOSE 8080

CMD ["-port", "8080", "-path", "/app"]