
# nginx 的安装及配置
下载安装包 [地址](http://nginx.org/en/download.html)

建议下载稳定版本（Stable version），以nginx-1.18.0为例：

```bash
linux环境："nginx-1.18.0"
windows环境："nginx/Windows-1.18.0 "
```
# 安装

## Windows

随便放在一个位置，我一般前端测试的时候放在桌面，解压文件夹。

## Linux

一般放在 /usr/local 下面。

<!-- more -->

### 安装步骤

```bash
cd /usr/local
rz	上传文件，选择下载的压缩包
tar -zxvf nginx-1.18.0.tar.gz	解压压缩包
cd nginx-1.18.0	进入nginx文件夹
./configure --prefix=/usr/local/nginx-1.18.0	明确接下来文件的安装位置，也可直接： "./configure"  此命令执行完会生成"Makefile"文件
make	编译
make install	会出现"sbin"文件夹
```

# 启动

## Widows

可以通过命令启动，也可以通过双击nginx.exe启动。

## Linux

```bash
cd sbin		文件夹下启动命令
./nginx
```
***如果有类似错误信息：***

```bash
nginx:  open() "/usr/local/nginx/logs/error.log" failed (2: No such file or directory)
open() "/usr/local/nginx/logs/access.log" failed (2: No such file or directory)
```
此提示表示缺少**logs**文件夹或者缺少**error.log**和**access.log**文件。

**解决方案：**
```bash
mkdir logs		创建logs文件夹
touch error.log		创建error.log文件
touch access.log		创建access.log文件
```
再次进入 **sbin** 文件夹，输入 **./nginx** 后就启动成功了。

# 查看nginx是否启动成功

## Windows

直接再网页输入：**127.0.0.1**，注意此时是默认端口号：80，如果你的端口号发生变化，请输入：**127.0.0.1:port**
页面有如下提示，则表示安装并启动成功：
```bash
Welcome to nginx!
If you see this page, the nginx web server is successfully installed and working. Further configuration is required.

For online documentation and support please refer to nginx.org.
Commercial support is available at nginx.com.

Thank you for using nginx.
```

## Linux

### 查看进程

```bash
ps -ef|grep nginx
```

```bash
root      8268     1  0 Oct22 ?        00:00:00 nginx: master process ./nginx
nobody    8269  8268  0 Oct22 ?        00:00:00 nginx: worker process
root     21953 21923  0 10:00 pts/0    00:00:00 grep --color=auto nginx
```
有**master**，则表示启动成功。

### 查看页面

```bash
curl 127.0.0.1 		默认端口80
或
curl 127.0.0.1:port 	修改端口后
```

```html
<!DOCTYPE html>
<html>
<head>
<title>Welcome to nginx!</title>
<style>
    body {
        width: 35em;
        margin: 0 auto;
        font-family: Tahoma, Verdana, Arial, sans-serif;
    }
</style>
</head>
<body>
<h1>Welcome to nginx!</h1>
<p>If you see this page, the nginx web server is successfully installed and
working. Further configuration is required.</p>

<p>For online documentation and support please refer to
<a href="http://nginx.org/">nginx.org</a>.<br/>
Commercial support is available at
<a href="http://nginx.com/">nginx.com</a>.</p>

<p><em>Thank you for using nginx.</em></p>
</body>
</html>
```
有此输出，则表示启动成功。


# nginx配置

## Windows

直接打开 **nginx-1.18.0/conf/nginx.conf** 进行修改。

## Linux

```bash
cd /usr/local/nginx-1.18.0/conf
vim nginx.conf		编辑nginx.conf文件
按键盘 a 键			开始编辑
按键盘 esc 键		  退出编辑
:wq			       保存并退出
```

查看nginx.conf文件内容

```bash
cat nginx.conf
或
more nginx.conf
```

## 配置详情

包含了端口号、域名、代理的配置。

```bash
#user  nobody;
worker_processes  1;

#error_log  logs/error.log;
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info;

#pid        logs/nginx.pid;


events {
    worker_connections  1024;
}


http {
    include       mime.types;
    default_type  application/octet-stream;

    #log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
    #                  '$status $body_bytes_sent "$http_referer" '
    #                  '"$http_user_agent" "$http_x_forwarded_for"';

    #access_log  logs/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    #keepalive_timeout  0;
    keepalive_timeout  65;

    #gzip  on;

    server {
		# 端口号修改
        listen       8088;
		# 域名修改 默认：localhost
        server_name  xxx.yyy.com;

        #charset koi8-r;

        #access_log  logs/host.access.log  main;

        location / {
            root   html;
            index  index.html index.htm;
        }

        # 配置代理 
		# /var 发送请求以此开头 例:axios.get(/var/api路径)  var是个变量，可以取任意名字
		# http://ip:port 代理地址
        location /var {
            rewrite  ^.+var/?(.*)$ /$1 break;
            include  uwsgi_params;
            proxy_pass   http://ip:port;
        }

        #error_page  404              /404.html;

        # redirect server error pages to the static page /50x.html
        #
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }

        # proxy the PHP scripts to Apache listening on 127.0.0.1:80
        #
        #location ~ \.php$ {
        #    proxy_pass   http://127.0.0.1;
        #}

        # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
        #
        #location ~ \.php$ {
        #    root           html;
        #    fastcgi_pass   127.0.0.1:9000;
        #    fastcgi_index  index.php;
        #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
        #    include        fastcgi_params;
        #}

        # deny access to .htaccess files, if Apache's document root
        # concurs with nginx's one
        #
        #location ~ /\.ht {
        #    deny  all;
        #}
    }


    # another virtual host using mix of IP-, name-, and port-based configuration
    #
    #server {
    #    listen       8000;
    #    listen       somename:8080;
    #    server_name  somename  alias  another.alias;

    #    location / {
    #        root   html;
    #        index  index.html index.htm;
    #    }
    #}


    # HTTPS server
    #
    #server {
    #    listen       443 ssl;
    #    server_name  localhost;

    #    ssl_certificate      cert.pem;
    #    ssl_certificate_key  cert.key;

    #    ssl_session_cache    shared:SSL:1m;
    #    ssl_session_timeout  5m;

    #    ssl_ciphers  HIGH:!aNULL:!MD5;
    #    ssl_prefer_server_ciphers  on;

    #    location / {
    #        root   html;
    #        index  index.html index.htm;
    #    }
    #}

}
```

## 验证nginx配置文件是否正确

```bash
cd /usr/local/nginx-1.18.0/sbin
./nginx -t
```
出现一些信息则表示配置正确：

```bash
nginx.conf syntax is ok
nginx.conf test is successful
```

# 启动成功，但外部机器访问不到的原因

```bash
ping ip		机器是否可以ping通访问机器
防火墙		端口号是否允许被访问，默认80有防火墙设置
最基础的一点：ip地址有没有配置到可访问虚拟机上，比如阿里云，华为云等。！！！我当时因为这个原因校验了很久，其他的配置都是通的，然后外部机器不能访问，后来被通知，ip没有配置。
```

# 防火墙修改

iptables是centos7之前常用的防火墙，在centos7上使用了firewall。

防火墙常用命令：

```bash
# 查询防火墙状态
	service iptables status
# 关闭防火墙
	service iptables stop
# 开启防火墙
	service iptables start
# 重启防火墙
	service iptables restart
# 永久关闭防火墙
	chkconfig iptables off
# 永久关闭后开启防火墙
	chkconfig iptables on 
# 查询当前iptables的规则
	iptables -L --line-numbers
```

**开放端口和关闭端口**

```bash
cd /etc/sysconfig/
vim iptables

添加信息一定要在 COMMIT 之前

-A INPUT -p tcp --dport 22 -j ACCEPT	  # 开放端口
-A INPUT -p tcp --dport 22 -j DROP		# 关闭端口
```

```bash
*filter
:INPUT ACCEPT [31:1840]
:FORWARD ACCEPT [0:0]
:OUTPUT ACCEPT [21:5070]
-A INPUT -p tcp -m tcp --dport 443 -j ACCEPT
-A INPUT -p tcp -m tcp --dport 8088 -j ACCEPT		开放8088端口
COMMIT
```



# 说明

```bash
yum -y install lrzsz    rz安装命令
ls                      查看
ls -a                   查看全部

# nginx相关命令
whereis nginx			查找nginx路径
service nginx start	  启动
nginx -s stop			停止
nginx -s quit			退出
nginx -s reload		  重启加载

如果nginx命令不能执行，请进行以下操作：
cd /usr/local/nginx-1.18.0/sbin
./nginx -s stop			停止
./nginx -s quit			退出
./nginx -s reload		  重启加载
```
