
//navbar

$('.expandHome').mouseover(function() {
    $('.sub-home').css({
          'display': 'block'
      }); 
  });
  $('.subnavbtn').mouseover(function() {
    $('.sub-home').css({
          'display': 'none'
      }); 
  });
  
  $('#trapezoid').mouseleave(function() {
    $('#trapezoid').css({
          'margin-top': '-53px'
      }); 
      $('.sub-home').css({
          'display': 'none'
      }); 
  }).mouseenter(function() {
    $('#trapezoid').css({
          'margin-top': '0px'
      }); 
  });
                




//skillbar

jQuery(document).ready(function() {
    window.onscroll = function() {
    jQuery('.skillbar').each(function() {
        jQuery(this).find('.skillbarlength').animate({ width: jQuery(this).attr('data-percent') }, 4000);
    });
}});





