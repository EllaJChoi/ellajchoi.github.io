$(function () {
	$(window).scroll(function () {
		var windowPosY = $(this).scrollTop();
		if (windowPosY >= 200 && windowPosY <= 300) {
			$('#header').hide();
		}
		if ($(this).scrollTop() > 300) {
			$('#header').addClass("s");
		} else {
			$('#header').fadeIn("fast").removeClass("s");
		}
	});
});

$(function () {
	$(".fa-bars").click(function () {
		$("html,.fa-bars, .catebox").toggleClass("open");
		$(".catebox").fadeToggle();
		if ($(this).hasClass("open") == true) {
			$(this).attr('class', 'fa fa-times');
		} else {
			$(this).attr('class', 'fa fa-bars');
		}
	});
});

$(function () {
	$(".top").hide();
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('.top').fadeIn();
			} else {
				$('.top').fadeOut();
			}
		});
		$('.top').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 400);
			return false;
		});
	});
});