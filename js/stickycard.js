$(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > $(".place-details-point").offset().top + $(".place-details-point").height() && $(window).scrollTop() <= $(".checking-date_open").offset().top + $(".checking-date_open").height()) {
            $(".pricing-card").addClass("sticky");
        } else {
            $(".pricing-card").removeClass("sticky");
        }
    });
});