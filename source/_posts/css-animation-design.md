---
title: 简易CSS动画设计（updating⏳）
date: 2020-05-26 20:44:52
tags:
- CSS
- 动画设计
categories:
- 前端
---

<link href="/scss/something-about-css.css" rel="stylesheet"></link>
<link href="/scss/css-animation-design/base.css" rel="stylesheet"></link>

> 一切来源于生活，看到或想到感兴趣的东西，仅仅用自己想要的形式表现出来。

### 文本聚焦动画

- 利用伪元素实现文本选中效果，光标移动上去查看效果

  <span class="transition-demo demo-1">zcheng.site</span>
  <span class="transition-demo demo-2">zcheng.site</span>
  <span class="transition-demo demo-3-parent"><span class="transition-demo demo-3-child">zcheng.site</span></span>

### 简单的加载动画

- 利用`transform`结合伪元素实现加载动画

  <div class="animation-demo demo-1"></div>
  <div class="animation-demo demo-2"></div><br>

- 类支付宝APP加载动画😁

  <div class="border-demo">
    <div class="demo-5-1"></div>
  </div>
  <div class="border-demo">
    <div class="demo-5-2"></div>
  </div>
  <div class="border-demo">
    <div class="demo-5-3"></div>
  </div><br>

- 更简单的实现方式，通过`transform`倾斜即可

  <div class="border-demo demo-6"></div><br>

- 旋转效果

  <div class="rotate-demo demo-1"></div><br>

### 按钮效果

- 按钮边角动画

  <div class="border-button-demo demo-1">
    <button type="button">看看我</button>
  </div>

### 类似沙漏加载动画

- 沙漏

  <div class="border-demo demo-7"></div>

### 跳跳跳
 - 左右横跳
  <div class="jump-demo demo-1"></div>

<h2 class="to-be-continued headerlink" id="To be continued">To be continued<dot></dot></h2>
