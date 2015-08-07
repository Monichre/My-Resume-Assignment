

  
$(function() {

//---This is my scrollify Jquery plug-in---//

  $.scrollify({
    section : "section",
  });

//---This is my custom Jquery---//

  $('.img-circle').fadeIn(1000);

  $('#email').hide();

  $('.img-circle').click(function(){

    $('a').fadeIn(1000);

  });

  //-- This is my masonry Jquery plug-in--//

  $('.grid').masonry({
  "itemSelector": '.grid-item',
  "gutter": 10,
  "isFitWidth": true
});

  //---this is my jcloud attempt---//

  $('#sky').jQlouds({
  wind: true,
  minClouds: 5,
  maxClouds: 10
});


        
});