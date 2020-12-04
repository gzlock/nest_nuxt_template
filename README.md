# Nest.js + Nuxt.js 模板

### 包含
- Nest.js
- Nuxt.js
    - Vue@2
    - Ant Design of Vue(UI)
- Docker
    - Postgres
    - Redis

### 文件夹介绍

- /nest_js 服务器程序
- /nuxt_js 网页界面
- /nginx_config Nginx 配置文件
- /db_data postgres

### Nginx路径配置
- / 前端(Nuxt.js)
- /api 后端(Nest.js)

### 前端验证是否已经登录的逻辑
- [中间件Auth.ts](./nuxt_js/middleware/auth.ts)判断store.state.admin是否有值
    1. 如果有赋值，显示管理后台
    2. 如果没有赋值，显示登录表单
     
### 默认的管理账号
- 账号admin密码admin
    - [db.module.ts](./nest_js/src/db/db.module.ts) 在首次启动初始化数据库时添加到数据库
    
### 开发前的配置
配置好两个docker-compose文件里数据库名称、用户名、密码等字符串



### 开发环境启动步骤
- 启动Nginx

    `sh nginx_dev.sh`
    
- 启动Postgres和Redis

    `docker-compose up -d -f docker-compose-dev.yml`
    
- 启动Nest.js

    `cd ./nust_js && npm run start:dev`
    
- 启动Nuxt.js

    `cd ./next_js && npm run dev`
    
### 产生环境启动
- 如果有文件变动需要构建docker镜像

    ```
    docker-compose build nest nuxt
    docker-compose stop nest nuxt
    ```
    
- 启动 或 重启 有变动的nest或nuxt服务

    `docker-compose up -d`
    