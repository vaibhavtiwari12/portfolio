var portfolio = angular.module("portfolio",[]);
/*portfolio.provider('myAppProvider',function(){
    var providerer = {};
    
    providerer.$get = function(){
        var service = {};
        service.doget =  function(){ 
            console.log("this is a service");
        };
        return service;
    };
    return providerer;
});*/
portfolio.controller('portfolioController',['$scope',function($scope){
     $( '.fab-cont,.about,.top-menu-sub' ).click(function(){
        $('#one').toggleClass('expand1');
        $('#two').toggleClass('expand2');
        $('#three').toggleClass('expand3');
        $('#top-menu').toggleClass('show');
    })
    $scope.hideMenu = function(){
        $('#top-menu').toggleClass('show');
    };
    $scope.scroller = function(elementName){
        $('html, body').animate({
            scrollTop: $(elementName).offset().top
        }, 700);
    };
     $scope.scrollerByClass = function(elementName){
        $('html, body').animate({
            scrollTop: $("."+elementName).offset().top
        }, 700);
    };
     $scope.scrollerById = function(elementName){
        $('html, body').animate({
            scrollTop: $("#"+elementName).offset().top
        }, 700);
    };
}]);

jQuery(function($){
/**********************  Knob Starts  ***********************/
    var dialCounter=0;
    var dialCountLimit=$('.dial').length;
    $('.dial').each(function () { 
          var elm = $(this);
          var color = elm.attr("data-fgColor");  
          var perc = elm.attr("value");  
          elm.knob({ 
                 'width' : 100,
                     'height' : 100,
                     'thickness':.03,
                     'readOnly':true,
                     'bgColor':'transparent',
                     'fgColor':'#fff',
                     'lineCap':'round',
                     'font':'cool',
                     'fontWeight':200,
                     'dynamicDraw': true,                         
                     'format' : function (value) {return value + '%'} 
          });
           startrKnob=function(){
               if(dialCounter<dialCountLimit){
             $({value: 0}).animate({ value: perc }, {
                  duration: 2000,
                  easing: 'swing',
                  progress: function () {
                      elm.val(Math.ceil(this.value)).trigger('change')
                  }
              });
         
             $(this).append(function() {
                  elm.parent().parent().find('.circular-bar-content').css('color',color);
                  elm.parent().parent().find('.circular-bar-content label').text(perc+'%');
              });
            }
            dialCounter++;
           };
            $('.knob-sub').bind('inview', startrKnob);
    });
/**********************  Knob Ends ***********************/
    
/**********************  Smooth Scroll Starts  ***********************/
    
  	
	var $window = $(window);		//Window object
	
	var scrollTime = 0.6;			//Scroll time
	var scrollDistance = 220;		//Distance. Use smaller value for shorter scroll and greater value for longer scroll
		
	$window.on("mousewheel DOMMouseScroll", function(event){
		
		event.preventDefault();	
										
		var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
		var scrollTop = $window.scrollTop();
		var finalScroll = scrollTop - parseInt(delta*scrollDistance);
			
		TweenMax.to($window, scrollTime, {
			scrollTo : { y: finalScroll, autoKill:true },
				ease: Power1.easeOut,	//For more easing functions see http://api.greensock.com/js/com/greensock/easing/package-detail.html
				autoKill: true,
				overwrite: 5							
			});
					
	});
    /**********************  Smooth Scroll Ends  ***********************/
    var counter=0;
    var maxSize=$('.progress-bar-sub').length;
    $('.progress-bar-sub').each(function(){
        var element=$(this);
        var valueIn=element.attr('valueIn');
        var finalValue = element.attr('value');
        startProgressBar=function(){
            if(counter<maxSize){
        $({value: 0 }).animate({value : finalValue},{
             duration: 2000,
             easing: 'swing',
             progress:function() {
                element.width(Math.ceil(this.value)+'%');
                $('#'+valueIn).text(Math.ceil(this.value)+'%');
            }
        });
        counter++;
        }
       };
        
        $('.progress-bar-text').bind('inview', startProgressBar);
    })
/*******SCROLL TO TOP -- START ********/
    $(document).ready(function(){ 
    $(window).scroll(function(){
        
		if ($(this).scrollTop() > 150) {
			$('.go-to-top').fadeIn();
		} else {
			$('.go-to-top').fadeOut();
		}
	});
	
	$('.go-to-top').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
    });
/*******SCROLL TO TOP -- END********/    
})
/********************* MAPS API **********************************/
     function initMap() {
        var myLatLng = {lat: 19.009170, lng: 73.011266};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 16,
          center: myLatLng,
          scrollwheel:false,
          draggable: false
        });
       var image ={
           url:'location-24-128.png',
           scaledSize: new google.maps.Size(50, 50)
       };
        var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: 'I am here',
          icon: image,
          animation: google.maps.Animation.DROP
        });
          
      }
/********************* MAPS API **********************************/
 var bg = jQuery("body");
jQuery(window).resize("resizeBackground");
function resizeBackground() {
    bg.height(jQuery(window).height());
}
resizeBackground();
