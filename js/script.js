$(document).ready(function () {
	var url = window.location.href;

	
	$(".links__list_li ul li a").each(function () {
		if (url == (this.href)) {
			$(this).parent().addClass("activ");
		}
	});

	$('.burger__header_container').click(function() {
		$('.burger__header_container').toggleClass("change");
		$('.burger__menu__list').toggleClass("brgr_activ");
	});

});
