(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

  $(document).ready(function(){
    $('.carousel').carousel();
  });

$('.menu').click(function(){
  $('.links-container').toggleClass('open')
 })
