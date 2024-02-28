// Toggling Button JavaScript functionality

var menuBtn = document.getElementById("menu-btn");
const toggleMenu = document.getElementById("toggle-menu");
const closeBtn = document.getElementById("close-btn");
const backgroundFixed = document.querySelector(".back");

// getattribute is used to check out the class icon and for changing the icon onclick



menuBtn.addEventListener("click", () => {
    toggleMenu.style.display = "block";
    toggleMenu.classList.remove("slideupmenu");
    toggleMenu.classList.add("slidemenu");
    backgroundFixed.style.overflow = "hidden";


});

closeBtn.addEventListener("click", () => {
    toggleMenu.classList.remove("slidemenu");
    toggleMenu.classList.add("slideupmenu");
    setTimeout(() => {
        toggleMenu.style.display = "none";
        backgroundFixed.style.overflow = "";
    }, 600);
});

// Add click event listener to the document body
document.body.addEventListener("click", (event) => {
    // Check if the clicked element is outside the toggleMenu
    if (!toggleMenu.contains(event.target) && event.target !== menuBtn) {
        toggleMenu.classList.remove("slidemenu");
        // toggleMenu.classList.add("slideupmenu");
        setTimeout(() => {
            toggleMenu.style.display = "none";
            backgroundFixed.style.overflow = "";
        }, 10);
    }
});

// Prevent the click event from propagating when clicking inside the toggleMenu
toggleMenu.addEventListener("click", (event) => {
    event.stopPropagation();
});


// --------------------------------------------------------------------------------------------------------------------------------------------------



// 2.
// Get the navbar element and when scrolled.. the background color changes from transparent any color .
var navbar = document.querySelector('.navbar-body');

// Add a scroll event listener
window.addEventListener('scroll', function() {
    // Check if the scroll position from Y axis is greater than 0... means to say that 
    // if the position is 0 the color is to be transparent but if scrolled the color changes from transparent to any other color.
    if (window.scrollY > 0) {
        // Add the 'scrolled' class to update the background color
        navbar.classList.add('scrolled');
    } else {
        // Remove the 'scrolled' class to revert to the initial background color
        navbar.classList.remove('scrolled');
    }
});