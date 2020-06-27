---
title: Something about CSS（updating⏳）
date: 2020-05-01 12:03:39
tags:
  - CSS
categories:
  - 前端
---
<link href="/scss/something-about-css.css" rel="stylesheet"></link>

> 一切来源于生活，看到或想到感兴趣的东西，仅仅用自己想要的形式表现出来。

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

### 阳光阴影效果 (test)

  <div class="shadow-demo demo-1">
    <div class="shadow-demo-item ellipse-600"></div>
    <div class="shadow-demo-item ellipse-700"></div>
    <div class="shadow-demo-item ellipse-800"></div>
    <div class="shadow-demo-item ellipse-900"></div>
  </div>

<h2 class="to-be-continued headerlink" id="To be continued">To be continued<dot></dot></h2>
