---
title: Something about CSS（持续更新⏳）
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

- 利用css滤镜模糊效果实现图片**自身色彩**阴影效果

  <div class="filter-shadow demo-1"></div><div class="filter-shadow demo-2"></div><div class="filter-shadow demo-3"></div>

<details>
  <summary>显示代码</summary>

  ```html HTML
  <div class="filter-shadow demo-1"></div>
  <div class="filter-shadow demo-2"></div>
  <div class="filter-shadow demo-3"></div>
  ```
  ```scss SCSS
  .filter-shadow {
    margin: 0 10px;
    display: inline-block;
    height: 100px;
    width: 100px;
    border-radius: 50%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    &::after {
      content: "";
      height: 100%;
      width: 100%;
      border-radius: 50%;
      z-index: -1;
      background: inherit;
      position: absolute;
      top: 10px;
      left: 0;
      filter: blur(10px) brightness(80%) opacity(.8);
      transform: scale(.95);
    }
    &.demo-1 {
      background-image: url("/images/something/css-filter-test1.png");
    }
    &.demo-2 {
      background-image: url("/images/something/css-filter-test2.png");
    }
    &.demo-3 {
      background-image: url("/images/something/css-filter-test3.png");
    }
  }
  ```
</details>

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
    <div class="card-1">
      <div class="card-title">Oranges</div>
      <div class="card-footer">zcheng.site</div>
    </div>
    <!-- <div class="shadow-demo-item ellipse-600"></div> -->
    <!-- <div class="shadow-demo-item ellipse-700"></div>
    <div class="shadow-demo-item ellipse-800"></div> -->
    <div class="shadow-demo-item ellipse-900"></div>
  </div>

<h2 class="to-be-continued headerlink" id="To be continued">To be continued<dot></dot></h2>
