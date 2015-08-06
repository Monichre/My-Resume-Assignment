$(function(){

$('.grid').masonry({
	"itemSelector": '.grid-item',
	"gutter": 10,
	"isFitWidth": true
});

 Waves.attach('.grid-item');
    Waves.init();


});