// =========================================
// MOBILE NAVIGATION TOGGLE
// =========================================

const mainNavigation = document.getElementById("mainNavigation");
const navbarToggler = document.querySelector(".navbar-toggler");

if (mainNavigation && navbarToggler) {

    mainNavigation.addEventListener("show.bs.collapse", function () {
        navbarToggler.classList.add("menu-open");
    });

    mainNavigation.addEventListener("hide.bs.collapse", function () {
        navbarToggler.classList.remove("menu-open");
    });

}
