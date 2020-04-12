$(document).ready(function() {

	$(".about-button").click(function() {
		$("body").append("<div class='popup'>" +
						 "<div class='popup_bg'></div>" +
                         "<div class='feedback'>" +
						 "<form class='feedback-form'>" +
						 "<h2>Заказать банкет</h2>" +
						 "<input type='text' placeholder='Ваше имя:'>" +
						 "<input type='text' placeholder='Ваш Email:'>" +
						 "<input type='text' placeholder='Телефон:'>" +
						 "<textarea placeholder='Сообщение:'></textarea>" +
						 "<input class='feedback-form__submit' type='submit' value='Заказать'>" +
						 "</form>" +
                         "</div>" +
						 "</div>");
		$(".popup").fadeIn(300);
		$(".popup_bg").click(function() {
			$(".popup").fadeOut(300);
			setTimeout(function() {
			  $(".popup").remove();
			}, 800);
		});
	});
});
