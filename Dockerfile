  
FROM node:10.15.3-alpine as builder
WORKDIR /boilerplate_api
COPY . ./
RUN yarn install
RUN yarn build

FROM node:10.15.3-alpine
WORKDIR /boilerplate_api
COPY --from=builder /boilerplate_api ./
RUN yarn install --production=true
EXPOSE 8080
ENTRYPOINT ["yarn", "serve"]