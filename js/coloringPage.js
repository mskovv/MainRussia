$(document).ready(function () {
	// let bol = $(".links__list_li ul li").addClass("activ");
	// console.log(bol);

	var url = window.location.href;

	// passes on every "a" tag
	$(".links__list_li ul li a").each(function () {
		// checks if its the same on the address bar
		if (url == (this.href)) {
			$(this).parent().addClass("activ");
		}
	});
});
