$(function(){
  
  // ドロップダウンメニューの表示

  var $win = $(window);

  $win.on('load resize', function() {
    var windowWidth = window.innerWidth;
      if (windowWidth <= 1200) {
        $('.nav-list-item').hover(function(){
        // $(".dropdown:not(:animated), .dropdown-short:not(:animated)", this).slideDown('slow').stop(false,true);
        $(".dropdown:not(:animated), .dropdown-short:not(:animated)", this).slideToggle('fast');
      }, function(){
        $(".dropdown, .dropdown-short",this).slideUp().stop(false,true);
      });
      } else {
        $('.nav-list-item').hover(function(){
        $(".dropdown:not(:animated), .dropdown-short:not(:animated)", this).slideToggle('fast');
        }, function(){
        $(".dropdown, .dropdown-short",this).slideUp(300).stop(false,true);
        });
      }
  });

  // ハンバーガーメニューの開閉

  $('.btn').on('click', function(){
	  $('.btn__menu').toggleClass('active');
    $('.btn').toggleClass('active');
    $('.nav').toggleClass('active');
  });

  //メインメニューのボタン（＋/-切り替え）

  $('.nav-list-item').hover(function(){
    $('.nav-btn',this).css('background-color','#f7f7f7');
    $('.nav-btn',this).toggleClass('is-open');
  },function() {
    $('.nav-btn',this).css('background-color','#FFF');
    $('.nav-btn',this).toggleClass('is-open');  
  });


  


});
