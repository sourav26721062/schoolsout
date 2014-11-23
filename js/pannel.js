$(".openpanel").on("click", function() {
    $("#panel3").collapse('show');
});
$(".closepanel").on("click", function() {
    $("#panel3").collapse('hide');
});

/* ensure any open panels are closed before showing selected */
$('#accordion').on('show.bs.collapse', function () {
    $('#accordion .in').collapse('hide');
});





$(document).ready(function() {
    $('[id^=detail-]').hide();
    $('.toggle').click(function() {
        $input = $( this );
        $target = $('#'+$input.attr('data-toggle'));
        $target.slideToggle();
     
    });
});


$('.items li').click(function() {
    $('.items li').removeClass('selected');
    $(this).addClass('selected');
        $('.list-group-item').css("background-color","#FFFFCC");
});