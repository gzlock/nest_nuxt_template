#bin /bin/bash

DIRNAME=$0
if [ "${DIRNAME:0:1}" = "/" ];then
    CURDIR=`dirname $DIRNAME`
else
    CURDIR="`pwd`"/"`dirname $DIRNAME`"
fi
echo $CURDIR

# 定位到项目目录
cd $CURDIR
# 创建Docker镜像
docker-compose build nest nuxt
# 停止Docker容器
docker-compose stop nuxt nest
# 启动Docker容器
docker-compose up -d
# 删除旧的Docker镜像
docker rmi $(docker images | grep "none" | awk '{print $3}')