// Menu mobile
document.addEventListener("DOMContentLoaded", function () {
    const mobileBtn = document.querySelector('#mobile_btn');
    const mobileMenu = document.querySelector('#mobile_menu');
    const mobileIcon = mobileBtn.querySelector("i");


    mobileBtn.addEventListener('click', function () {
        mobileMenu.classList.toggle('active');
        mobileIcon.classList.toggle('fa-x');
    });

});

document.querySelector('#nav_logo').addEventListener('click', function (event) {
    event.preventDefault();
    location.reload();
});

// Scroll to top button
window.onscroll = function () {
    let button = document.getElementById("topBtn");
    if (document.documentElement.scrollTop > 300) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// Intersection Observer animation
const myObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting == true) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => myObserver.observe(el));


