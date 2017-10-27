/* Prog Industries: website
 * version: 0.1
 * desc: javascript functions for index page
 */

var headerSizer = function() {
	$(document).scroll(function() {
		if($(window).scrollTop() <= 50) {
			$('#header').css('height', '100px');
		} else {
			$('#header').css('height', '50px');
		}
	})
}

$(document).ready(headerSizer);