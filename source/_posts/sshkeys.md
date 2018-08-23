---
title: GitHub与GitLab同时使用ssh key的解决方案
date: 2018-08-09 12:23:41
tags: [linux,git]
---
<h3 id="放在前面的话">一、放在前面的话</h3>
设置sshkey的目的是“免去每次提交代码都需要输入账号和密码”的操作，能更快速的提交或者部署项目。
{% blockquote %}
1、确保你安装了Git
2、确保在linux环境下（windows下需安装windows版本的git，然后打开桌面右键菜单打开gitbash同样适用）
{% endblockquote %}
Let's do it😀
{% blockquote %}
首先，GitHub与GitLab不同的是他们的注册的邮箱肯定是不一样的
GitHub使用的是私人邮箱，最常见的比如qq邮箱
GitLab使用的是企业邮箱，也就是你公司的邮箱
{% endblockquote %}
然后根据两者不同的邮箱分别去生成不同的sshkey

<h3 id="根据GitHub邮箱生成sshkey">一、根据GitHub邮箱生成sshkey</h3>

```shell
$ ssh-keygen -t rsa -C "your_name@github.com"（此处填写你的GitHub绑定的邮箱）
```
接着会出现类似如下信息：
{% blockquote %}
Generating public/private rsa key pair.
Enter file in which to save the key (/home/user_name/.ssh/id_rsa):
{% endblockquote %}
此时输出一个名称，最好有意义的名称，比如：`rsa_github`，回车，接着会出现：
{% blockquote %}
Enter passphrase (empty for no passphrase): => 提示你输入密码（我一般会留空）==>回车即可
Enter same passphrase again: => 提示再次输入密码 ==>回车即可
{% endblockquote %}
最后会出现：
{% blockquote %}
Generating public/private rsa key pair.
Enter file in which to save the key (/home/user_name/.ssh/id_rsa): rsa_github
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in rsa_github.
Your public key has been saved in rsa_github.pub.
The key fingerprint is:
SHA256:zUXma9igea9llTvtRqLd+LzUQhoXuKWAWr24C3+W5Z0 `"your_name@github.com"`
The key's randomart image is:
+---[RSA 2048]----+
|            o    |
|         o + .   |
|        o + + o  |
|       o * B = o |
|      . S * B =  |
|         o o.*.oo|
|      . .  +=++Bo|
|       o .++o E=o|
|        oo.    +=|
+----[SHA256]-----+
{% endblockquote %}
这样就生成了rsa_github文件，此时打开rsa_github文件，怎样打开呢？
```shell
$ cd ~/.ssh
$ cat rsa_github.pub
```
出现的信息复制粘贴到GitHub即可，如下:
<img src="/images/ssh_key.png" width="70%" height="70%" alt="ssh_key">
到这里，GitHub的sshkey已经添加成功，可以正常使用了。

------

<h3 id="根据GitLab邮箱生成sshkey">二、根据GitLab邮箱生成sshkey</h3>
步骤基本与生成GitHub sshkey一致，稍有不同，理解每一步的含义很重要

```shell
$ ssh-keygen -t rsa -C "your_name@gitlab.com" （此处填写你的GitLab绑定的邮箱，一般为企业邮箱）
```
在出现的信息后面输入与github区分的名称，比如`rsa_gitlab`,接着直接<b>回车</b>即可

这样就会在**~/.ssh**目录下生成两个新文件：`rsa_gitlab` 和 `rsa_gitlab.pub`

```shell
$ cd ~/.ssh
$ cat rsa_gitlab.pub
```
复制出现的信息，粘贴到你的GitLab的sshkey页面上，如下：
<img src="/images/sshkey.png" width="70%" height="70%" alt="ssh_key">
OK,此时已经成功添加了两者的sshkey,但我们还需要一些配置去使用它。
<h3 id="配置">三、配置</h3>
配置是为了让github与gitlab能够区分他们各自的sshkey，所以需要创建一个config文件来管理sshkeys

```shell
$ cd ~/.ssh/
$ touch config
$ sudo vim config
```
在config里面加上以下内容：
{% blockquote %}
<em># github</em>
Host github.com
HostName github.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/**rsa_github**
<em># gitlab</em>
Host **gitlab.company's web site.com**
HostName **gitlab.company's web site.com**
PreferredAuthentications publickey
IdentityFile ~/.ssh/**rsa_gitlab**
{% endblockquote %}

**注：加粗的地方根据自己实际情况进行修改**.

现在你应该能正常使用了
The End😀