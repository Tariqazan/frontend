$(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > $(".place-details-point").offset().top + $(".place-details-point").height() -250 &&
            $(window).scrollTop() <= $(".checking-date_open").offset().top + $(".checking-date_open").height() - 300) {
            $("#card-pricing").addClass("sticky");
        } else {
            $("#card-pricing").removeClass("sticky");
        }
    });


}); $(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > $("#photos").offset().top + $(".place-details-point").height()) {
            $(".main-nav").addClass("sticky-header visible");
        } else {
            $(".main-nav").removeClass("sticky-header visible");
        }
    });
});