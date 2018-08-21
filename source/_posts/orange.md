---
title: Windows10子系统linux“无法访问此网站，localhost 拒绝了我们的连接请求”。
date: 2018-03-28
tags: [服务,系统]
---
作者遇到的这个问题是出现在windows10 linux子系统上的，所以可能只适用以下情况
{% blockquote %}
windows10子系统linux运行服务
{% endblockquote %}
执行"hexo s"运行我的hexo博客，并提示服务已运行在"localhost:4000"，如下：
<img src="/images/cmder.png" width="70%" height="70%" alt="">
当我访问"localhost:4000"时，却出现“无法访问此网站，localhost 拒绝了我们的连接请求。”
<img src="/images/localhost.png" width="70%" height="70%" alt="">
后来查了github上的<a href="https://github.com/Microsoft/WSL/issues/1554#issuecomment-341407417" target="_blank">issues</a>，发现这个问题是电脑上某些软件导致的，tx的wegame的锅，不过tx官方表示会尽快修复，临时解决办法请点击<a href="https://github.com/Microsoft/WSL/issues/1554#issuecomment-341407417" target="_blank">issues</a>，按照官方的方法解决，或者直接卸载wegame，问题应该可以解决。

The End😀
