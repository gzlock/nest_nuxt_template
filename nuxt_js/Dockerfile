FROM node:alpine

MAINTAINER srleo@qq.com

WORKDIR /nuxt

COPY . /nuxt

RUN npm config set registry http://mirrors.cloud.tencent.com/npm/

RUN npm install

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]
