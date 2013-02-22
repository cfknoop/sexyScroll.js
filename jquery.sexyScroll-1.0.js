/*
 * sexyScroll.js	1.0
 *
 * Copyright 2013, Christian Knoop, http://www.christianknoop.com
 * Released under the WTFPL license
 * http://sam.zoy.org/wtfpl/
 *
 * Date: Thu 22 Feb 2013 10:48 Pm
 */
 
 ;(function ($) {
	$.fn.sexyScroll = function (arg) {
		
		$.fn.sexyScroll.defaults = {
			visibleStart: 100,
			bottomOffset: 300,
			position: 10
		};

		var options = $.extend({}, $.fn.sexyScroll.defaults, arg);

		return this.each(function () {
			$('.scrollup').hide();

			var scrollBottom;
			var targetPos;

			$(window).scroll(function () {
				if ($(this).scrollTop() > options.visibleStart) {
					$('.scrollup').fadeIn();
				} else {
					$('.scrollup').fadeOut();
				}

				scrollBottom = $(window).scrollTop() + $(window).height();
				targetPos = $(window).scrollTop() + $(window).height() - $(document).height() + options.bottomOffset + options.position;

				if (scrollBottom >= jQuery(document).height() - options.bottomOffset) {
					$('.scrollup').css({
						bottom: (targetPos) + "px",
						//top: "auto"
					});
				} else {
					$('.scrollup').css({
						bottom: (options.position) + "px",
						//top: "auto"
					});
				}
			});

			$('.scrollup').click(function () {
				$("html, body").animate({
					scrollTop: 0
				}, 600);
				return false;
			});
		});
	};
})(jQuery);
