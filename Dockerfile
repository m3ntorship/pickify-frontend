FROM node:lts-alpine3.12

RUN mkdir -p /pickly-frontend
WORKDIR /pickly-frontend
COPY out .

RUN yarn global add serve

CMD ["serve"]