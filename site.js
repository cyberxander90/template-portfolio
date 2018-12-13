$(document).ready(function() {

  $('.open-sidebar').click(function() {
    $('.sidebar').addClass('visible');
    $('.overlay').addClass('visible');
  });
  
  $('.close-sidebar').click(function() {
    $('.sidebar').removeClass('visible');
    $('.overlay').removeClass('visible');
  });

  $('.overlay').click(function() {
    $('.sidebar').removeClass('visible');
    $('.overlay').removeClass('visible');
  });
});