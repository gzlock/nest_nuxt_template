#bin /bin/bash
DIRNAME=$0
if [ "${DIRNAME:0:1}" = "/" ];then
    CURDIR=`dirname $DIRNAME`
else
    CURDIR="`pwd`"/"`dirname $DIRNAME`"
fi
echo $CURDIR

nginx -s stop
nginx -c $CURDIR/config/nginx/dev.nginx
