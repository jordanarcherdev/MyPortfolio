$(document).ready(function(){

  // hide our element on page load
  $('.masters').css('opacity', 0);
  $('.left-song').css('opacity', 0);
  $('.right-song').css('opacity', 0);

  $('.left-song').waypoint(function() {
      $('.left-song').addClass('fadeInLeft');
  }, { offset: '90%' });

  $('.right-song').waypoint(function() {
      $('.right-song').addClass('fadeInRight');
  }, { offset: '90%' });

  $('.masters').waypoint(function() {
      $('.masters').addClass('fadeInLeft');
  }, { offset: '60%' });

  $('.big').hover(
       function(){ $(this).addClass('rubberBand') },
       function(){ $(this).removeClass('rubberBand') }
)

$('.purple').hover(
     function(){ $(this).addClass('rubberBand') },
     function(){ $(this).removeClass('rubberBand') }
)

$('.masters-img').hover(
     function(){ $(this).addClass('bounce') },
     function(){ $(this).removeClass('bounce') }
)



});
