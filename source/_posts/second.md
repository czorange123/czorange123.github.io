---
title: “windows下sublime 安装GitGutter插件无法正常使用”的问题
date: 2018-03-28 19:18:18
keywords: hexo,hexo进阶
tags:
---

前几日开始使用windows下的子系统，在sublime安装“GitGutter插件”时，Gitgutter 控制台遇到:{% blockquote %}git -veision [WinError 2] “无法找到指定文件”{% endblockquote %}
想了想，应该是安装成功，没有配置的问题。接下来进入正题：

{% blockquote %}
1.安装git,去官网下载windows版本git => https://git-scm.com/downloads

2.安装过程，全部下一步。

3.进入sublime => Preferrences => Package Settings 然后选择GitGutter => settings

4.在出现的窗口右边大括号里加上：
{% codeblock %}
"git_binary": "D:\\\Program Files (x86)\\\Git\\\bin\\\git.exe"
{% endcodeblock %}
注意：后面的路径是你刚刚安装的git 的bin路径，替换即可，路径分隔符是'\\\'双斜线。
{% endblockquote %}

重启sublime，你的问题应该得到了解决。
