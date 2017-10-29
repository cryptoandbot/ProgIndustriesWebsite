/* Prog Industries: website
 * version: 0.1
 * desc: javascript functions for index page
 */

var headerSizer = function() {
	$(document).scroll(function() {
		if($(window).scrollTop() <= 50) {
			$('#header').css('height', '100px');
			$('#header').css('background-color', 'rgba(255, 255, 255, 0.25)');
			$('.dropbtn').css('height', '100px');
			$('.dropbtn').css('padding-top', '16px');
			$('#headerLogo').css('font-size', '48px');
			$('#headerLogo').css('margin-top', '25px');
			$('#headerButton > a > i').css('font-size', '50px');
			$('#headerButton > a > i').css('margin-top', '25px');
			$('#scrollUp').css('transform', 'translateY(0px)');
		} else {
			$('#header').css('height', '50px');
			$('#header').css('background-color', 'rgba(0, 0, 0, 0.75)');
			$('.dropbtn').css('height', '50px');
			$('.dropbtn').css('padding-top', '10px');
			$('#headerLogo').css('font-size', '24px');
			$('#headerLogo').css('margin-top', '12.5px');
			$('#headerButton > a > i').css('font-size', '25px');
			$('#headerButton > a > i').css('margin-top', '12.5px');
			$('#scrollUp').css('transform', 'translateY(-50px)');
		}
	})
}

$(document).ready(headerSizer);

var hideSplash = function() {
	$(document).scroll(function() {
		if($(window).scrollTop() < 150) {
			$('#splashBox').fadeIn('slow');
		} else {
			$('#splashBox').fadeOut('slow');
		}
	})
}

$(document).ready(hideSplash);

var moveRocket = function() {
	$(document).scroll(function() {
		var adjust = $(window).scrollTop();
		$('#rocketImage').css('transform', 'translate(calc(100vw - ' + adjust + 'px), calc(100vh - ' + adjust + 'px)');
	})
}

$(document).ready(moveRocket);

var scrollToContent = function() {
	$("#splashBoxButton > button").click(function() {
		$('html, body').animate({
			scrollTop: $('#content').offset().top - 50
		}, 1000);
	});
}

$(document).ready(scrollToContent);

var scrollUpButton = function() {
	$("#scrollUp").click(function() {
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
	});
}

$(document).ready(scrollUpButton);