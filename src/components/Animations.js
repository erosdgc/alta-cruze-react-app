$(function(){
    var $menu = $('.dropdown-menu');
  
    $('.dropdown-toggle').hover(
      function() {
        $menu.css('opacity',1);
      },
      function() {
        $menu.css('opacity',0);
      });
  })();
  