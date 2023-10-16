$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 550) {
            $('.navbar').addClass('solid');
            $('.back-to-top').addClass('visible');
        } else {
            $('.navbar').removeClass('solid');
            $('.back-to-top').removeClass('visible');
        }

    });
});


$(document).ready(function () {
    $("a").on('click', function (event) {

        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                window.location.hash = hash;
            });
        }
    });
});

const textToType = "Front-end Developer and Beginner Programmer";
const element = document.getElementById("auto-typed-text");
const delay = 100; // Adjust the typing speed (in milliseconds).
let index = 0;

// Function to auto-type text
function autoTypeText() {
    if (index < textToType.length) {
        element.textContent += textToType.charAt(index);
        index++;
    } else {
        element.textContent = ""; // Clear the text when it's fully typed
        index = 0;
    }
    setTimeout(autoTypeText, delay);
}

// Start auto-typing when the page loads
window.onload = function () {
    autoTypeText();

};
document.addEventListener("DOMContentLoaded", function () {
    var typed = new Typed("#typed-text", {
        strings: ["Front-end Developer"],
        typeSpeed: 100,
        backSpeed: 25,
        backDelay: 1000,
        startDelay: 500,
        loop: false,
        showCursor: true,
        smartBackspace: true,
    });
});