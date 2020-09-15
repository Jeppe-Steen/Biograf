// Selection of HTML objects
const burger = document.querySelector("#burgerBar");
const menu = document.querySelector(".menu");

//function
function toggleNav() {
    burger.classList.toggle("fa-bars");
    burger.classList.toggle("fa-times");
    menu.classList.toggle("menu-active");
}

// click event
burger.addEventListener("click", function() {
    toggleNav();
});