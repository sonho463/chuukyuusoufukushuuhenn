
//drawer
$(function(){
  //drawerjs
  $('.drawer').drawer();
})


//スムーススクロール
$(function(){
  $('a[href^="#"]').click(function(){
    let header = $(".header").innerHeight();
    let speed = 300;
    let id = $(this).attr("href");
    let target = $("#" == id ? "html" : id);
    let position = $(target).offset().top - header;
    $("html,body").animate({scrollTop : position  },speed);
    return false;
  });
});

//wow-js
$(function(){
  new WOW().init();
});