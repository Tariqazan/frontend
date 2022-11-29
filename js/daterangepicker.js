$('#checking-date_close').dateRangePicker({
    inline: true,
    format: 'MM-DD-YYYY',
    container: '#datepicker_calender',
    alwaysOpen: false,
    singleMonth: false,
    showTopbar: true,
    setValue: function (s) {

        $(this).val('12-01-2017');
    }
})
    .bind('datepicker-change', (e, data) => {
        $('#datepicker_calender-closed').val(data.value);
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
    })