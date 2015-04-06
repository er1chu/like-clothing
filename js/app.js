/* globals $:false */

$(function () {
	var app = {
		init: function () {
			this._initCheckWidth();
			this._initParallax();
			this._initScrollFunctions();
			this._initInformation();
		},

		_initScrollFunctions: function () {
			var mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent); 
			
			if( !mobile ) {
				// Convert Vertical to Horizontal Scroll on Desktop
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
			} else {
				$('.piece').addClass('mobile-fallback')
			}
		},

		_initParallax: function () {
			// Parallax Mouse movement
			$('.masthead').parallax();

		},

		_initCheckWidth: function () {
			
			$(window).load(function (){
				calculateWidth()
				// Content hidden until everything loaded
				$('.content').addClass('loaded');
			});

			$(window).resize($.debounce(500, calculateWidth));

			function calculateWidth() {

				var mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent); 

				if (!mobile) {
					// Initialize variable containing total width of all images
					$('.wrapper').css('width','100%');
				} else {

					var i = 0;
					// Loop through each image, calculate Width
					$('.piece').each(function(index,elem){
						i = i + $(this).outerWidth(true) + 0.5;
					});
					// Width of Wrapper is equal to Width of all images
					$('.wrapper').css('width',i+'px');

				}
			}

		},

		_initInformation: function () {
			// Activate Information Section
			$('.masthead').click(function () {
				$('.info').addClass('info-loaded');
				$('.content').addClass('content-blur')
			})
			// Detect if Information Section is Loaded

			$('.wrapper').click(function() {
				hideInfo();
			})

			$('.hide-info').click(function() {
				hideInfo();
			});

			function hideInfo() {
				if ($('.info').hasClass('info-loaded')){
					$('.info').removeClass('info-loaded');
					$('.content').removeClass('content-blur');
				}
			}

		}
	};

	app.init();
});