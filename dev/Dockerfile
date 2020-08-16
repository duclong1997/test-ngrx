# build dev
FROM node:12.18.3-alpine3.12 as dev-app
LABEL version="1.0"
WORKDIR /app
#set up library
COPY package.json ./
COPY yarn.lock ./
#install library
RUN yarn
COPY . .
EXPOSE 4200
CMD yarn start
