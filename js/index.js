

  
$(function() {

//---This is my scrollify Jquery plug-in---//

  $.scrollify({
    section : "section",
  });


        

//---This is my custom Jquery---//


  

  //-- This is my masonry Jquery plug-in--//

  $('.grid').masonry({
  "itemSelector": '.grid-item',
  "gutter": 10,
  
  "isFitWidth": true,
  
  
});

  

  //---this is my jcloud attempt---//

  $('#sky').jQlouds({
  wind: true,
  minClouds: 5,
  maxClouds: 10
});


        
});