$(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > $(".place-details-point").offset().top + $(".place-details-point").height() + 50 && $(window).scrollTop() <= $(".checking-date_open").offset().top + $(".checking-date_open").height() - 200) {
            $(".pricing-card").addClass("sticky");
        } else {
            $(".pricing-card").removeClass("sticky");
        }
    });
});