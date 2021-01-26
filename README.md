# Nest.js + Nuxt.js 模板

### 包含
- Nest.js
    - Sequelize@6
    - Redis
- Nuxt.js
    - Vue@2
    - Ant Design of Vue(UI)
- Docker镜像
    - Node.js@alpine(Nest.js, Nuxt.js)
    - Postgres@alpine
    - Redis@alpine

### 文件夹介绍

- /nest_js 服务器程序
- /nuxt_js 网页界面
- /config/nginx Nginx的配置文件
- /config/redis redis的持久化存储配置文件
- /db_data 存放PostgreSQL数据库数据的文件夹
- /redis_data 存放Redis持久化存储数据的文件夹

### Nginx路径配置
- / 管理后台的前端(Nuxt.js)
- /api 后端接口(Nest.js)

### Nuxt.js中验证是否已经登录的逻辑
- [中间件Auth.ts](./nuxt_js/middleware/auth.ts)判断store.state.admin是否有值
    1. 如果有赋值，显示管理后台
    2. 如果没有赋值，显示登录表单
     
### 默认的管理账号
- 账号admin密码admin
    - [db.module.ts](./nest_js/src/db/db.module.ts) 在首次启动初始化数据库时添加到数据库
    
### docker-compose.yaml中的环境变量说明
- `docker-compose.yml`和`docker-compose-dev.yml`两个文件里都有一些环境变量
- **DB_USER** **DB_PASSWORD** 数据库连接地址，数据库用户，数据库密码
- **COOKIE_SECRET** 参与Cookies签名的盐
- **REDIS_URL** Redis连接地址
- **REDIS_PASSWORD** Redis连接密码



### 开发环境启动步骤
- 启动Nginx

    `$ sh nginx_dev.sh`
    
- 启动Postgres和Redis

    `$ docker-compose up -d -f docker-compose-dev.yml`
    
- 启动Nest.js

    `$ cd ./nust_js && npm run start:dev`
    
- 启动Nuxt.js

    `$ cd ./next_js && npm run dev`
    
### 产生环境启动
- 如果有文件变动需要构建Docker镜像

    ```
    $ docker-compose build nest nuxt
    $ docker-compose stop nest nuxt
    ```
    
- 启动 或 重启 有变动的nest或nuxt服务

    `$ docker-compose up -d`
    