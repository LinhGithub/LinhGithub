
const toTop = document.querySelector("#bttop");

window.addEventListener("scroll", () => {
    if(window.pageYOffset > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }

    if($(this).scrollTop() != 0) {
        $("#bttop").fadeIn();
    } else {
        $("#bttop").fadeOut();
    }
})

$('#bttop').click(function(){
    $('html').animate({
        scrollTop: 0
    }, 700)
})