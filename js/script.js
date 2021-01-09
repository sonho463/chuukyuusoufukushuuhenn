
//drawer
$(function(){
  //drawerjs
  $('.drawer').drawer();
})


//スムーススクロール
$(function(){
  $('a[href^="#"]').click(function(){
    let header = $(".header").innerHeight();
    let speed = 700;
    let id = $(this).attr("href");
    let target = $("#" == id ? "html" : id);     // 三項演算子
    let position = $(target).offset().top - header;
    $("html,body").animate({scrollTop : position  },speed);
    return false;
  });
});

//wow-js
$(function(){
  new WOW().init();
});

//google form
$(function(){

  let form = $('#js-form')
  $form.submit(function(e) { 
    $.ajax({ 
     url: $form.attr('action'), 
     data: $form.serialize(), 
     type: "POST", 
     dataType: "xml", 
     statusCode: { 
        0: function() { 
          //送信に成功したときの処理 
          $form.slideUp()
          $('#js-success').slideDown()
        }, 
        200: function() { 
          //送信に失敗したときの処理 
          $form.slideUp()
          $('#js-error').slideDown()
        } 
      } 
    });
    
    e.preventDefault();
    return false; 
  }); 
});



// formの入力
// let submit = $('#js-submit')
// $('#js-form input, #js-form textarea').on('change', function(){
//   if(
//     $('#js-form input[type="text"]').val() !== "" &&
//     $('#js-form input[type="email"]').val() !== "" &&
//     $('#js-form input[name="entry.577350080"]').prop('checked') === true
//   ){
//     $submit.addClass('-active')
//   } else{
//     $submit.removeClass('-active')

//   }
// });