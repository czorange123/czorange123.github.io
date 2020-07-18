// preload.js
  // let imagesList = []
  // imagesList = document.getElementsByTagName('img')
  // console.log(imagesList)
  // for(let item of imagesList) {
  //   console.log(item)
  // }
  //   let imageSrc = item.currentSrc
  //   const img = new Image()
    
  //   img.onload = function() {
  //     console.log(img)
  //   }
  //   img.src = imageSrc
  // }

  $(function () {
    // 第一次需要先加载一次
    lazyLoad();

    $(window).scroll(lazyLoad);

    function isInSight(el) {
        const bound = el.getBoundingClientRect();
        const clientHeight = $(window).height(); // 可视区高度
        return bound.top <= clientHeight + 100; // 这里有个+100是为了提前加载。
    }
    function lazyLoad() {
        $.each($('.markdown-body img'), (index,item)=>{
          // console.log(item)
          $(item).attr('data-src', $(item).attr('src'))
          // $(item).attr('src', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATUAAACjCAMAAADciXncAAAAdVBMVEX////39/cAAADq6urMzMyvr69tbW0tLS1/f39bW1s/Pz/7+/uTk5PJycn8/Pyqqqp2dnbx8fG4uLjk5ORjY2NNTU1SUlLf39/b29vU1NSdnZ1oaGjExMQnJyc1NTWkpKSWlpaEhIQREREcHByDg4NFRUWMjIxnJyjVAAADiElEQVR4nO3c13LqMBRGYYQbxrjTjYGQxO//iEcyh4BLgEBC0/ouNU5G88/eklyGTgcAAAAAAAAAAAAAAAAAAAAAANxWai3uPYXnY4zGoyi49yyezWzkuqPZvWfxbAyZ2ji59yyeTTCWqc3vPYtHFptpczBzXfejOTyb/P18nkI6HLqrxuiHTC1rjLp5Ht1iTo8vGdr2sHHMmKsW9WqDC6ffzzmRKBOZmj2sd14iUxsZtUG33+877BElVWy2LaqDZsvRw5el1v/kFLdVZLadFdWxtOXokcnQluHt5vXYhKq1oVUdax49ZqrUlvW1Tl/bpa3aj9Zo/GlWRuylDI0z3N6iXNriyli6qO4Q01yVWvUaza3V0vZ29JKeKrXi6CW6CSIZ27DlHmEvkqk59bOI5owsy4ZH22+ydHJKrcYIV0dLTd6vJtwW4I68mS67qjkPTzTj2ZJld6PH3cIs6vWi+W88KEvdjeM4XS021kSmJnMbXJubKLq5o1Kb/sq0HlwclbHJ3K56nZIs31Vm+UaT40gc7nIrLs7NKJvTcTYjLSqtFFu73N4u3ALHZaG959bpS19InPS2ua0v+/vPXDVnT5djxxeRlPV2/Jb9W4vu++ZTy9fM3qIXRebp61qlc21fIASpdi0GAAAA4E/MkiSxrDBczecWn4Cc6a17wHnV2ESyWsmyWK/Xg0ExuP795vthat3mh6qvYVUMDhT+tf8v0yG1oBLaYHD1SzkxPgjNftUOtQ5jK4pLH64d8MTrf3IaLOS6FoahZVly89PnRQkAAAAA4FF4k9/6slkjUysMk9d/avGrjEQ9/Qh59vEDnq8yk6lp+fXehWRzbkOzxOmLUdo2pwrNZFk7l7/LLOFrybOlu+bkF3R+YBJum/NV3yr9DU+WGc35Y8Jc0Jw35XnsulWecfLw5gmhwZvjn4h93z/VuUK5yWyexcw0Tf9EJKrWBJvvXuyr1E5trYLYKlSpmfU7rMYqFpSxsbT9J8pSqz2ljA3DqBWWx9J2YFqWWjWiQIZm1HuW2Pa2pVbfQlVqjd+eYGn7UpZaYwdtTY2lbacsNbPxNFyta/WFjR79MvFbD2tlas18PIpNCdpLrSPaU+tQa0rwzQlXtG2iisdu0Ck71G95W+W1bgfYMaatr+FJ7RKkdon2oweO++bogaM8OvQSXhzToAAAAAAAAAAAAAAAAAAAAHh4/wDKBim7K6g3lwAAAABJRU5ErkJggg==')
            // if(isInSight(item)) {
            //     $(item).attr('src', $(item).attr('data-src'));
            // }
            $(item).on('load', function() {
              console.log(item)
              $(item).attr('src', $(item).attr('data-src'));
            })
        });
    }
});