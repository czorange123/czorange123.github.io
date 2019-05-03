---
title: js实现图片转换为Base64
date: 2018-12-12 17:19:52
tags:
    - javascript
---
Base64是一种基于64个可打印字符来表示二进制数据的表示方法。
常用于在通常处理文本数据的场合，表示、传输、存储一些二进制数据，包括MIME的电子邮件及XML的一些复杂数据。

<h3 id="上传图片">上传图片</h3>

```html
<input type="file" class="form-control" name="photo" placeholder="图片" @change="getFile($event)"/>
```

<h3 id="获取图片">获取图片</h3>

```javascript
  // 获取图片并调用deal()将图片转换为Base64
  getFile(event) {
    this.deal(event.target.files[0])
  },
```

<h3 id="转换成Base64">转换成Base64</h3>

```javascript
  deal(photo) {
    // 判断支不支持FileReader
    if (!photo || !window.FileReader) {
      alert('未选择图片或不支持上传图片！')
    }
    // 判断上传的文件是否是图片格式
    if (/^image/.test(photo.type)) {
      //创建一个reader
      let reader = new FileReader();
      //将图片转成base64格式
      reader.readAsDataURL(photo);
      reader.onload = function() {
        base64_photo = reader.result; // base64_photo是转换好的结果
      }
    } else {
      alert('请选择一张图片！');
    }
  },
```

注意：
{% blockquote %}
`base64_photo`在`reader.onload`函数中，而`reader.onload`又在`deal`函数中，形成**闭包**，所以在外部无法访问到`base64_photo`，想在外部引用base64_photo就要另辟蹊径
{% endblockquote %}
在这里提供一个方法，可以将`base64_photo`定义为全局变量，这样就能在函数外部访问到

```javascript
// 定义一个全局变量
<script>
let base64_photo = ''; // 全局变量
function a() {
  let base64_photo = ''; // 局部变量
}
</script>
```
The End😀
