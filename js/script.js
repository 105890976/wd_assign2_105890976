// toggles the hamburger menu and nav bar for mobile/tablet view
function toggleHamburgerMenu() {
    var hamburger = document.getElementById('hamburger-btn');
    var nav = document.getElementById('nav-bar');

    hamburger.classList.toggle("open");
    nav.classList.toggle("open");
}
// closes the nav bar slows redirect to allow for the closing animation 
function closeNavAndRedirect(event) {
    var link = event.target.closest(".nav-item");
    if (!link) {
        return;
    }

    event.preventDefault();
    var hamburger = document.getElementById("hamburger-btn");
    var nav = document.getElementById("nav-bar");

    nav.classList.remove("open");
    hamburger.classList.remove("open");

    setTimeout(function() {
        location.href = link.href;
    }, 100);
}
// initialises html elements to correct event functions
function init() {
    var hamburger = document.getElementById("hamburger-btn");
    var nav = document.getElementById("nav-bar");

    if (hamburger) {
        hamburger.onclick = toggleHamburgerMenu;
    }

    if (nav) {
        nav.onclick = closeNavAndRedirect;
    }
}

window.onload = init;