
FROM alpine:3.16

LABEL maintainer="alukodami@ymail.com"

RUN apk add --update nodejs npm curl 

COPY . /src

WORKDIR /src

RUN npm install

EXPOSE 5000

ENTRYPOINT [ "node", "./app.js" ]

