FROM node:alpine

MAINTAINER srleo@qq.com

WORKDIR /nuxt

COPY . /nuxt

RUN rm -rf ./node_modules

RUN rm -rf ./dist

RUN rm -f ./yarn.lock

RUN yarn config set registry "http://mirrors.cloud.tencent.com/npm/"

RUN yarn install

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]
