FROM node:alpine

MAINTAINER srleo@qq.com

# 更换为腾讯云源
RUN echo "deb http://mirrors.cloud.tencent.com/debian stretch main contrib non-free" > /etc/apt/sources.list && \
    echo "deb-src http://mirrors.cloud.tencent.com/debian stretch main contrib non-free" >> /etc/apt/sources.list  && \
    echo "deb http://mirrors.cloud.tencent.com/debian stretch-updates main contrib non-free" >> /etc/apt/sources.list && \
    echo "deb-src http://mirrors.cloud.tencent.com/debian stretch-updates main contrib non-free" >> /etc/apt/sources.list && \
    echo "deb http://mirrors.cloud.tencent.com/debian-security stretch/updates main contrib non-free" >> /etc/apt/sources.list && \
    echo "deb-src http://mirrors.cloud.tencent.com/debian-security stretch/updates main contrib non-free" >> /etc/apt/sources.list

RUN apt-get update -y

WORKDIR /nest

COPY . /nest

RUN rm -rf ./node_modules

RUN rm -rf ./dist

RUN yarn config set registry "http://mirrors.cloud.tencent.com/npm/"

RUN yarn install

RUN npm run build

EXPOSE 3001

CMD ["npm", "run", "start:prod"]
