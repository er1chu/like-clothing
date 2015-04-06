/* globals $:false */

$(function () {
	var app = {
		init: function () {
			this._initParallaxScroll();
			this._initScrollConvert();
			// var video_counter = 0;
			// $('.test_vid_float').click(function() {
			// 	var vid_list = [

			// 	'<video id="test_vid" autoplay muted loop><source src="vid/3.mp4" type="video/mp4"></video>',
			// 	'<video id="test_vid" autoplay muted loop><source src="vid/4.mp4" type="video/mp4"></video>',
			// 	'<video id="test_vid" autoplay muted loop><source src="vid/5.mp4" type="video/mp4"></video>'

			// 	]
			//     $(this).html(vid_list[video_counter]);
			//     if (video_counter >= vid_list.length) {
			//     	video_counter = 0;
			//     } else {
			//     	video_counter = video_counter + 1;
			//     }
			//  })

		},

		_initScrollConvert: function () {
			scrollConverter.activate();
		},

		_initParallaxScroll: function () {
			// $('.masthead').parallax();
			
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

			// function scrollVideoTwo () {
			// 		var currentScrollPosition = $(window).scrollLeft();
			// 		var previousScrollPosition = 0
			// 		var videoScroll = $('#video-2').offset().left - $(window).width() / 2;
					
			// 		if (currentScrollPosition > previousScrollPosition) {
			// 			$('.big-video').addClass('big-wavy');
						
			// 		}
			// }

			// function scrollVideo () {
			// 	var currentScrollPosition = $(window).scrollLeft(),
			// 		previousScrollPosition = 0,
			// 		counter = 1;

			// 	if (currentScrollPosition - previousScrollPosition > 1000) {
			// 		$('#video-2').css('display','none');
			// 		previousScrollPosition = currentScrollPosition;
			// 		counter++;
			// 	} else if (currentScrollPosition - previousScrollPosition < 0) {
			// 		$('#video-2').css('display','block');
			// 		previousScrollPosition = currentScrollPosition;
			// 	}
			// }

			// function parallaxScroll(){
			//     var scrolled = $(window).scrollLeft();
			    // $('.images').css('left',(0-(scrolled*.75))+'px');



			    // if (scrolled > 500) {
			    // 	$('.test_vid_float').html('<video id="test_vid" autoplay muted loop><source src="vid/3.mp4" type="video/mp4"></video>');
			    // }
			// }
		}
	};

	app.init();
});