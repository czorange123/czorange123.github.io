---
title: Something about CSS
date: 2020-05-01 12:03:39
tags:
    - CSS
categories:
  - 前端
---
<link href="/scss/something.css" rel="stylesheet"></link>

> 一切来源于生活，看到或想到感兴趣的东西，仅仅用自己想要的形式表现出来。

## CSS `::before`&`::after`
### transition

- 利用伪元素实现文本选中效果，光标移动上去查看效果
<span class="transition-demo demo-1">zcheng.site</span>
<span class="transition-demo demo-2">zcheng.site</span>
<span class="transition-demo demo-3-parent"><span class="transition-demo demo-3-child">zcheng.site</span></span>

### animation

- 利用`transform`结合伪元素实现加载动画
<div class="animation-demo demo-1"></div>
<div class="animation-demo demo-2"></div><br>

## CSS filter
### 类`box-shadow`阴影效果

- 利用css滤镜模糊效果实现图片自身色彩阴影效果

<div class="filter-shadow demo-1"></div><div class="filter-shadow demo-2"></div><div class="filter-shadow demo-3"></div>

### 类Windows10毛玻璃效果

- 利用`filter`结合`background-attachment:fixed`实现

<div class="acrylic-filer demo-1">
  <div class="acrylic">Acrylic</div>
</div>

- 使用`backdrop-filter`实现(使用起来简单，但目前兼容性较差，[查看](https://www.caniuse.com/#search=backdrop-filter)兼容性)

<div class="acrylic-backdrop-filter demo-2">
  <div class="acrylic">Acrylic</div>
</div>

## CSS position
### 类[pinterest](https://www.pinterest.com/)瀑布流布局

## CSS border
### 小书签
- 使用`border`结合`::before`& `::after`实现书签效果
<div class="border-demo demo-1">书签</div><br>
<div class="border-demo demo-2">书签</div><br>
<div class="border-demo demo-3">我是一个小书签</div><br>

### 奇形怪状

- 使用`border`结合`::before`& `::after`实现平行四边形效果
<div class="border-demo demo-4"></div><br>

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

- 其实有更简单的实现方式，`transform`倾斜即可😂
<div class="border-demo demo-6"></div><br>

- 按钮边角
<div class="border-button-demo demo-1">
  <button type="button">看看我</button>
</div>

<h2 class="to-be-continued headerlink" id="To be continued">To be continued<dot></dot></h2>
