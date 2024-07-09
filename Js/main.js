//Nav
$('.openNav').on('click', function() {
    $('#sideMenu').animate({ left: '0px' }, 500);
});

$('.closebtn').on('click', function() {
    $('#sideMenu').animate({ left: '-300px' }, 500);
});

// Signers Section
$('.toggle').on('click', function() {
    $('.text').not($(this).next()).slideUp();
    $(this).next('.text').slideToggle();
});

// Count Section 
$(document).ready(function() {
    var countDownDate = new Date("Dec 31, 2024 23:59:59").getTime();

    var x = setInterval(function() {

        var now = new Date().getTime();

        var distance = countDownDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        $("#days").text(days + " Days");
        $("#hours").text(hours + " Hours");
        $("#minutes").text(minutes + " Minutes");
        $("#seconds").text(seconds + " Seconds");

        if (distance < 0) {
            clearInterval(x);
            $("#days").text("0D");
            $("#hours").text("0H");
            $("#minutes").text("0M");
            $("#seconds").text("0S");
        }
    }, 1000); 

});

// textarea words
$('#Message').on('input',function(){

    var length = $(this).val().length;
    
    if(length != 0){
        $('.remaining').text( (100 - length)  + ' Character Reamining')
    }else{
        $('.remaining').text( '100 Character Reamining')
    }

})