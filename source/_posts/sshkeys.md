---
title: GitHub与GitLab同时使用ssh key的解决方案
date: 2018-08-09 12:23:41
tags: [linux,git]
---
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

<b>一、根据GitHub邮箱生成sshkey</b>
{% blockquote %}
$ ssh-keygen -t rsa -C "your_name@github.com" （此处填写你的GitHub绑定的邮箱）
{% endblockquote %}
接着会出现类似如下信息：
{% blockquote %}
Generating public/private rsa key pair.
Enter file in which to save the key (/home/user_name/.ssh/id_rsa):
{% endblockquote %}
此时输出一个名称，最好有意义的名称，比如：
{% blockquote %}
rsa_github (代表它是作为“GitHub”的密匙)
{% endblockquote %}
接着会出现：
{% blockquote %}
Enter passphrase (empty for no passphrase): => 提示你输入密码（我一般会留空）==>回车即可
Enter same passphrase again: => 提示再次输入密码 ==>回车即可
{% endblockquote %}
最后会出现：
{% blockquote %}
$ ssh-keygen -t rsa -C "your_name@github.com"
Generating public/private rsa key pair.
Enter file in which to save the key (/home/user_name/.ssh/id_rsa): rsa_github
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in rsa_github.
Your public key has been saved in rsa_github.pub.
The key fingerprint is:
SHA256:zUXma9igea9llTvtRqLd+LzUQhoXuKWAWr24C3+W5Z0 your_name@github.com
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
{% blockquote %}
$ cd ~/.ssh
$ ls (会发现里面有两个文件: "rsa_github" 和 "rsa_github.pub")
$ cat rsa_github.pub
{% endblockquote %}
然后复制粘贴到GitHub即可，如下:
<img src="/images/ssh_key.png" width="70%" height="70%" alt="ssh_key">
到这里，先不要着急去使用，如果你还需要在这电脑上生成GitLab的sshkey,不妨先看下面的步骤 （要知道，你来到这里是为了同时使用GitHub&GitLab的）

<b>二、根据GitLab邮箱生成sshkey</b>
步骤基本与生成GitHub sshkey一致，稍有不同，理解每一步的含义很重要
{% blockquote %}
$ ssh-keygen -t rsa -C “your_name@gitlab.com“ （此处填写你的GitLab绑定的邮箱，一般为企业邮箱）
在出现的信息后面输入与github区分的名称，比如<b>"rsa_gitlab"</b>
接着直接<b>回车</b>即可
{% endblockquote %}
这样就会在<b>~/.ssh</b>目录下生成两个新文件：“rsa_gitlab” 和 “rsa_gitlab.pub”
当然这个目录下已经有了两个文件，是之前github生成的，先不管他。
{% blockquote %}
$ cd ~/.ssh
$ cat rsa_gitlab.pub
{% endblockquote %}
复制出现的信息，粘贴到你的GitLab的sshkey页面上，如下：
<img src="/images/sshkey.png" width="70%" height="70%" alt="ssh_key">
OK,此时已经成功添加了两者的sshkey,但我们还需要一些配置去使用它。

<b>三、配置</b>
配置是为了让github与gitlab能够区分他们各自的sshkey，所以需要创建一个config文件来管理sshkeys
{% blockquote %}
$ cd ~/.ssh/
$ touch config
$ sudo vim config
{% endblockquote %}
在config里面加上以下内容：
{% blockquote %}
<em># github</em>
Host github.com
HostName github.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/<b>rsa_github</b>

<em># gitlab</em>
Host <b>gitlab.company's web site.com</b>
HostName <b>gitlab.company's web site.com</b>
PreferredAuthentications publickey
IdentityFile ~/.ssh/<b>rsa_gitlab</b>
{% endblockquote %}
<b style="color: red">注：加粗的地方根据自己实际情况进行修改</b>，然后保存即可。

现在你应该能正常使用了
The End😀