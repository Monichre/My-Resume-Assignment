

  
$(function() {

//---This is my scrollify Jquery plug-in---//

  $.scrollify({
    section : "section",
  });


        

//---This is my custom Jquery---//

$('.navbox').hide();


$('#filter').click(function(){
  $('.navbox').slideDown(1000);
  $('#filter').remove();
  
});



  

  //-- This is my masonry Jquery plug-in--//

  $('.grid').masonry({
  // options
  itemSelector: '.grid-item',
  columnWidth: 250,
  gutter: 10,
  isFitWidth: true
});


//---isotope---//

  $('.grid').isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
      masonry: {
    // use outer width of grid-sizer for columnWidth
    columnWidth: 250,
    gutter: 10
    }
  });

$('.dude').hide();

$('.filterB').click(function(){
    var mediaFilter = $(this).attr('data-filter');

    console.log(mediaFilter);

    $('.dude').show();
    $('.grid').isotope({filter: '.bro'});

    $('a[href*="soundcloud.com"]').each(function(){
      var $link = $(this);
      $.getJSON('http://soundcloud.com/oembed?format=js&url=' + $link.attr('href') + '&iframe=true&callback=?', function(response){
      $link.replaceWith(response.html);
    });
  });
    $('.dwp').hide();
});

$('.filterD').click(function(){
    var mediaFilter = $(this).attr('data-filter');

    console.log(mediaFilter);
    $('.dude').show();
    $('.grid').isotope({filter: '.dwp'});
    $('.bro').hide();
    

  
});



  

  //---this is my jcloud attempt---//

  $('#sky').jQlouds({
  wind: true,
  minClouds: 5,
  maxClouds: 10
});


        
});