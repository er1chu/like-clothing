/* globals $:false */

$(function () {
	var app = {
		init: function () {
			this._initCheckWidth();
			this._initParallaxScroll();
			this._initScrollConvert();
		},

		_initScrollConvert: function () {
			scrollConverter.activate();
		},

		_initParallaxScroll: function () {
			$('.masthead').parallax();
			
			// $(window).bind('scroll',function(e){
			//     parallaxScroll();
			// });

			// $(window).scroll($.throttle( 500, scrollVideoThree));

			$(window).scroll($.debounce( 250, true, function(){
			    $('video').removeClass('big-wavy')
			    $('.masthead').addClass('logo-wavy')
			}));
			$(window).scroll($.debounce( 250, function(){
			     $('video').addClass('big-wavy')
			     $('.masthead').removeClass('logo-wavy')
			}));

			$(window).scroll(function() {
				 if ($(window).scrollLeft() + document.documentElement.clientWidth >= $(document).width()) {
        			$(window).scrollLeft(0);
      			}
			});

		},

		_initCheckWidth: function () {
			
			$(window).load(function() {
				$('body').css('opacity','1');
				var i = 0;
				$('.piece').each(function(index,elem){
					i = i + $(this).outerWidth(true) + 0.5;
				});
				$('.wrapper').css('width',i+'px');
				// $lastImage = $('.wrapper img:last').position().left + $('.wrapper img:last').outerWidth(true) + 20;
				// $('.wrapper').css('width', $lastImage + 'px')
			});

			$(window).resize($.debounce(500, function(){
				var i = 0;
				$('.piece').each(function(index,elem){
					i = i + $(this).outerWidth(true) + 0.5;
				});
				$('.wrapper').css('width',i+'px');
			}));

		}
	};

	app.init();
});