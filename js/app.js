$(document).ready(function(){
  var widthW = $(window).width();
  var heightW = $(window).height();
  var widthD = $(document).width();
  var heightD = $(document).height();

  console.log('DOCUMENT width: '+widthD+'   height: '+heightD);
  console.log('WINDOW width: '+widthW+'   height: '+heightW);

  $(document).scroll(function(){
    if(widthW<901){
      var divStarts = [heightW*0.00, heightW*0.29, heightW*.75 ];
      var y = $(document).scrollTop();
      console.log(y);

      if(y>divStarts[0] && y<divStarts[1]){
        $('.main, .contact').removeClass('hovered');
        $('.about-me').addClass('hovered');
      } else if(y>=divStarts[1] && y<divStarts[2]){
        console.log('contact hovered');
        $('.main, .contact').removeClass('hovered');
        $('.portfolio').addClass('hovered');
      } else if(y>divStarts[2]){
        console.log('end of the line');
        $('.main').removeClass('hovered');
        $('.travel, .contact, .something').addClass('hovered');
      }
    }
  });




});
