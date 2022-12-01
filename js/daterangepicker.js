
$('.total-price').hide()
$('#btn-reserve').hide()
function getDatesInRange(startDate, endDate) {
    const date = new Date(startDate.getTime());

    const dates = [];

    while (date <= endDate) {
        dates.push(new Date(date));
        date.setDate(date.getDate() + 1);
    }

    return dates;
}
$('#checking-date_close').dateRangePicker({
    inline: true,
    format: 'MM-DD-YYYY',
    container: '#datepicker_calender',
    alwaysOpen: false,
    singleMonth: true,
    showTopbar: true,
    setValue: function (s) {

        $(this).val('12-01-2017');
    }
})
    .bind('datepicker-change', (e, data) => {
        $('#datepicker_calender-closed').val(data.value);
        var diff = data.date2 - data.date1;
        var days = diff / 1000 / 60 / 60 / 24;
        $('#total_days').html(days + 1)
        $('.total-price').show()
        $('#btn-reserve').show()
        $('#btn-check').hide()
        let dates = getDatesInRange(data.date1, data.date2)
        let html = ''
        for (var i = 0; i < dates.length; i++) {
            html = html + `<div class="d-flex justify-content-between"><p>` + dates[i].getDate() + `/` + dates[i].getMonth() + `/` + dates[i].getFullYear() + `</p><p>$370</p></div>`
        }
        $("#dates").html(html)
    })


$('#checking-date_open').dateRangePicker({
    inline: true,
    format: 'MM-DD-YYYY',
    container: '#datepicker_calender-open',
    alwaysOpen: true,
    singleMonth: false,
    showTopbar: true,
    setValue: function (s) {

        $(this).val('12-01-2017');
    }
})
    .bind('datepicker-change', (e, data) => {
        $('#datepicker_calender-open_input').val(data.value);
        var diff = data.date2 - data.date1;
        var days = diff / 1000 / 60 / 60 / 24;
        $('#total_days').html(days + 1)
        $('.total-price').show()
        $('#btn-reserve').show()
        $('#btn-check').hide()
    })