// preload.js

  $(function () {
    // 第一次需要先加载一次
    lazyLoad();

    function lazyLoad() {
        $.each($('.markdown-body img'), (index, item) => {

          $(item).attr('data-src', $(item).attr('src'))

          $(item).attr('src', '/images/loading.png');

          const img = new Image();

          if(img.complete) {
            $(item).attr('src', $(item).attr('data-src'));
          } else {
            img.onload = function() {
              $(item).attr('src', $(item).attr('data-src'));
              console.log('onload', img)
            }
          }

          img.src = $(item).attr('data-src')

          // $(item).on('load', () => {
          //   console.log(item)
          // });

          // setTimeout( () => {
          //   $(item).attr('src', '/images/loading.png');
          // }, 0)

          // var img = new Image(),
          // src = item.attr('data-src');
          // $(item).attr('src', '')
          // $(item).on('load', function() {
          //   console.log(item)
          //   item.src = src
          //   // $(item).attr('src', $(item).attr('data-src'));
          // })
          // img.src = src
        });
    }
});
