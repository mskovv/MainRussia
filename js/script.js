$(document).ready(function () {
	var url = window.location.href;

	// passes on every "a" tag
	$(".links__list_li ul li a").each(function () {
		if (url == (this.href)) {
			$(this).parent().addClass("activ");
		}
	});

});

