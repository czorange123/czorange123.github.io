---
title: hexo一键部署到云服务器
date: 2018-05-01 11:44:37
tags:
	-hexo, blog
---
上一篇记录了[如何搭建一个简易的个人网站](hexo-build.html)，采用`hexo`，`github pages`进行搭建与部署。
本篇主要记录下如何将hexo博客部署到非`github pages`的第三方云服务器上，并实现一键部署。

> 以下本地操作均在Ubuntu 18.04.1 LTS中进行测试。
> 以下云服务器上操作在阿里云Ubuntu 16.04.4 LTS \n \l中进行测试。

### 准备工作
- [x] 一台云服务器（阿里云、腾讯云等）
- [x] 已有hexo博客框架搭建的博客（具体可参考我[上一篇记录文章](hexo-build.html)）

### 常用部署方法

#### 打包本地hexo博客项目，上传到云服务器上，再配置nginx。

##### 打包生成静态文件
```shell
$ hexo generate
```
##### 把根目录下生成的`public`文件夹压缩上传到云服务器根目录下
```shell
# 压缩成html.zip
$ zip -q -r html.zip public
# 将html.zip上传到云服务器
$ scp html.zip 用户名@服务器公网ip:~
```
##### 服务器上解压文件
```shell
# 先登录自己的服务器
$ ssh 用户名@服务器公网ip
# 找到刚上传上来的html.zip并解压缩，我这里把解压缩的文件放在/var/www/blog/下面
$ cd /var/www
$ sudo mkdir blog
$ cd blog
$ sudo cp ~/html.zip .
$ sudo unzip html.zip
# 得到public文件
```
##### 配置nginx
如果你服务器上已经安装了nginx，直接看下面。否则参考[nginx的安装与配置](https://yq.aliyun.com/articles/710641?spm=5176.10695662.1996646101.searchclickresult.155256a0P4F06Z&aly_as=MUa5PXuo)
启动ngxin，正常安装完成后默认已经启动
```shell
$ sudo nginx
```
浏览器访问服务器ip查看nginx是否安装并启动。
出现`Welcome to nginx!`字样说明启动成功，否则自行搜索解决问题。

现在配置hexo博客nginx
```shell
# nginx配置文件在/etc/nginx下
$ cd /etc/nginx/sites-enabled
# 文件夹下有default文件，是默认配置文件，修改它
$ sudo vim default
```
打开以后如下图显示
![](/images/hexo-deploy/nginx-default.png)
修改红框标注的地方为你之前解压html.zip的目录，即`/var/www/blog/public`。
保存退出，重载nginx。
```shell
$ sudo nginx -s reload
```
再次访问访问服务器ip，现在应该出现的是你博客主页了。
