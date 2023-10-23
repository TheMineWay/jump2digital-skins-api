FROM node:20.8-alpine3.18 AS builder
WORKDIR /build

COPY . .
RUN yarn install --frozen-lockfile
RUN yarn run build:prod

FROM node:20.8-alpine3.18
WORKDIR /app

COPY --from=builder /build /app

EXPOSE 3000
CMD ["yarn", "run", "start:prod"]
