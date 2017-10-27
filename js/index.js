/* Prog Industries: website
 * version: 0.1
 * desc: javascript functions for index page
 */

var headerSizer = function() {
	$(document).scroll(function() {
		if($(window).scrollTop() <= 50) {
			$('#header').css('height', '100px');
			$('#header').css('background-color', 'rgba(255, 255, 255, 0.25)');
		} else {
			$('#header').css('height', '50px');
			$('#header').css('background-color', 'rgba(0, 0, 0, 0.75)');
		}
	})
}

$(document).ready(headerSizer);