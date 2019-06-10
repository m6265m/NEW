$(window).on('scroll', function () {
    if($(window).scrollTop()){
        $('#navbar').addClass('black')
        $('#navbar').addClass('drop-shadow')
    }
    else{
        $('#navbar').removeClass('black')
        $('#navbar').removeClass('drop-shadow')
    }
})

$(function() {
    $('.fa-user').hover(function() {
        $('.sign-in').css('visibility', 'visible');
    }, function() {
        // on mouseout, reset the background colour
        $('.sign-in').css('visibility', 'hidden');
    });
});
$(function() {
    $('.sign-in').hover(function() {
        $('.sign-in').css('visibility', 'visible');
    }, function() {
        // on mouseout, reset the background colour
        $('.sign-in').css('visibility', 'hidden');
    });
});

var x = 0;


const hamburger = document.getElementById("menuButton");
const navLinks = document.getElementById("menu");
const links = document.getElementById("menu li");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });
});





