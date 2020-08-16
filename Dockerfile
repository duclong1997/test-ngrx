# build app
FROM node:12.18.3-alpine3.12 as build-app
LABEL author="nguyen duc long"
WORKDIR /app
#set up library
COPY package.json ./
COPY yarn.lock ./
# install library
RUN yarn
COPY . .
RUN yarn build

# build nginx
FROM  nginx:1.18-alpine as prod-app
# /usr/share/nginx/html folder của nginx (cố định)
COPY --from=build-app /app/dist/test-ngrx /usr/share/nginx/html
EXPOSE 80
CMD [ "nginx", "-g","daemon off;" ]
