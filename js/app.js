/* globals $:false */

$(function () {
	var app = {
		init: function () {
			this._initCheckWidth();
			this._initParallax();
			this._initScrollFunctions();
		},

		_initScrollFunctions: function () {
			
			// Convert Vertical to Horizontal Scroll
			scrollConverter.activate();

			// Unblur Videos, Blur Logo on Scroll
			$(window).scroll($.debounce( 250, true, function(){
			    $('video').removeClass('big-wavy')
			    $('.masthead').addClass('logo-wavy')
			}));
			
			// Blur Videos, Unblur Logo on Scroll stop
			$(window).scroll($.debounce( 250, function(){
			     $('video').addClass('big-wavy')
			     $('.masthead').removeClass('logo-wavy')
			}));

			// Loop scroll at end of document
			$(window).scroll(function() {
				 if ($(window).scrollLeft() + document.documentElement.clientWidth >= $(document).width()) {
        			$(window).scrollLeft(0);
      			}
			});
		},

		_initParallax: function () {
			// Parallax Mouse movement
			$('.masthead').parallax();

		},

		_initCheckWidth: function () {
			
			$(window).load(function (){
				calculateWidth()
				// Content hidden until everything loaded
				$('.wrapper').addClass('loaded');

			});
			$(window).resize($.debounce(500, calculateWidth));

			function calculateWidth() {

				// Initialize variable containing total width of all images
				var i = 0;
				// Loop through each image, calculate Width
				$('.piece').each(function(index,elem){
					i = i + $(this).outerWidth(true) + 0.5;
				});
				// Width of Wrapper is equal to Width of all images
				$('.wrapper').css('width',i+'px');
			}

		}
	};

	app.init();
});