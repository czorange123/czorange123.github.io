---
title: GitHub与GitLab同时使用ssh key的解决方案
date: 2018-08-09 12:23:41
tags:
    - linux
    - git
---

### 前面要说的话
设置sshkey的目的是“免去每次提交代码都需要输入账号和密码”的操作，能更快速的提交或者部署项目。

> 确保你安装了Git
确保在linux环境下（windows下需安装windows版本的git，然后打开桌面右键菜单打开gitbash同样适用）

> 首先，GitHub与GitLab不同的是他们的注册的邮箱肯定是不一样的
GitHub使用的是私人邮箱，最常见的比如qq邮箱
GitLab使用的是企业邮箱，也就是你公司的邮箱

Let's do it😀

然后根据两者不同的邮箱分别去生成不同的sshkey

### 根据GitHub邮箱生成sshkey

```shell
$ cd ~
$ ssh-keygen -t rsa -C "your_name@github.com"（此处填写你的GitHub绑定的邮箱）
```
接着会出现类似如下信息：

> Generating public/private rsa key pair.
Enter file in which to save the key (/home/user_name/.ssh/id_rsa):

此时输出一个名称，最好有意义的名称，比如：`rsa_github`, 如果不输入则默认为`id_rsa`
接着会出现：

> Enter passphrase (empty for no passphrase): => 提示你输入密码（我一般会留空）==>回车即可
Enter same passphrase again: => 提示再次输入密码 ==>回车即可

最后会出现：
> Generating public/private rsa key pair.
  Enter file in which to save the key `(/home/user_name/.ssh/id_rsa)`: `rsa_github`
  Enter passphrase (empty for no passphrase):
  Enter same passphrase again:
  Your identification has been saved in rsa_github.
  Your public key has been saved in rsa_github.pub.
  The key fingerprint is:
  SHA256:zUXma9igea9llTvtRqLd+LzUQhoXuKWAWr24C3+W5Z0 your_name@github .com
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

这样就生成了`rsa_github`，注意上面信息中标黄色的字，表示生成的`key`所在目录。
接下来我们要查看生成的`rsa_github`，将里面的内容复制粘贴到github里面去。
查看`rsa_github`：
```shell
$ cd ~/.ssh
$ cat rsa_github.pub
```
出现的信息复制粘贴到GitHub即可，如下:
![github ssh key](/images/sshkeys/ssh_key_github.png)
到这里，GitHub的sshkey已经添加成功，可以正常使用了。

---

### 根据GitLab邮箱生成sshkey

步骤基本与生成GitHub sshkey类似，稍有不同，理解每一步的含义很重要

```shell
$ cd ~
$ ssh-keygen -t rsa -C "your_name@gitlab.com" （此处填写你的GitLab绑定的邮箱，一般为企业邮箱）
```
在出现的信息后面输入与github区分的名称，比如`rsa_gitlab`,接着直接<b>回车</b>即可

这样就会在**~/.ssh**目录下生成两个新文件：`rsa_gitlab` 和 `rsa_gitlab.pub`

```shell
$ cd ~/.ssh
$ cat rsa_gitlab.pub
```
复制出现的信息，粘贴到你的GitLab的sshkey页面上，如下：
![gitlab ssh key](/images/sshkeys/ssh_key_gitlab.png)
OK,此时已经成功添加了两者的sshkey,但我们还需要一些配置去使用它。
### 配置

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
IdentityFile ~/.ssh/`rsa_github`
<em># gitlab</em>
Host `gitlab.company's web site.com`
HostName `gitlab.company's web site.com`
PreferredAuthentications publickey
IdentityFile ~/.ssh/`rsa_gitlab`
{% endblockquote %}

**注：标注的地方根据自己实际情况进行修改**.

现在你应该能正常使用了
The End😀
