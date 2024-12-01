/* Typing animation */
var typed = new Typed(".typing", {
    strings: ["", "Web Designer", "Web Developer"],//"Graphic Designer",, "YouTuber"
    typeSpeed: 100,
    backSpeed: 60, // Corrected 'backSpeed' casing
    loop: true // Enables continuous looping of the typing animation
});

var typed = new Typed(".typing2", {
    strings: ["", "Python", "C"],//"Graphic Designer",, "YouTuber"
    typeSpeed: 80,
    backSpeed: 100, // Corrected 'backSpeed' casing
    loop: true // Enables continuous looping of the typing animation
});
/* Aside Navigation */
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;

// Handling navigation menu item clicks
for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a"); 
    a.addEventListener("click", function() {
        removeBackSection(); // Removes the background section class for all sections
        for (let j = 0; j < totalNavList; j++) {
            if (navList[j].querySelector("a").classList.contains("active")) {
                addBackSection(j); // Adds back-section class to the previously active section
            }
            navList[j].querySelector("a").classList.remove("active"); // Removes active class from all nav items
        }
        this.classList.add("active"); // Adds active class to the clicked nav item
        showSection(this); // Displays the section corresponding to the clicked nav item

        // Toggle nav for smaller screens
        if (window.innerWidth < 1200) {
            asideSectionTogglerBtn(); // Toggles the aside navigation for smaller screens
        }
    });
}

// Remove back-section class from all sections
function removeBackSection() {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("back-section"); // Removes background section class
    }
}

// Add back-section class to the section
function addBackSection(num) {
    allSection[num].classList.add("back-section"); // Adds background section class to the specified section
}

// Display the clicked section and hide others
function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active"); // Hides all sections
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active"); // Shows the target section
}

// Update the navigation items based on section visibility
function updateNav(element) {
    for (let i = 0; i < totalNavList; i++) {
        navList[i].querySelector("a").classList.remove("active"); // Resets active class for nav items
        const target = element.getAttribute("href").split("#")[1];
        if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
            navList[i].querySelector("a").classList.add("active"); // Updates active class based on visible section
        }
    }
}

// Hire Me button functionality to jump to a section
document.querySelector(".hire-me").addEventListener("click", function() {
    const sectionIndex = this.getAttribute("data-section-index");
    showSection(this); // Shows the section corresponding to the Hire Me button
    updateNav(this); // Updates the navigation based on the current section
    removeBackSection(); // Removes background section class
    addBackSection(sectionIndex); // Adds background section class to the target section
});

// Nav-toggler functionality for smaller screens
const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");

// Event listener for the nav-toggler click
navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn(); // Toggles the aside navigation
});

// Toggles the aside navigation and sections
function asideSectionTogglerBtn() {
    aside.classList.toggle("open"); // Toggles open class for aside (slide effect)
    navTogglerBtn.classList.toggle("open"); // Toggles open class for nav-toggler button
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.toggle("open"); // Toggles open class for all sections (slide effect)
    }
}

// Activate the first nav item and show the corresponding section on page load
document.addEventListener("DOMContentLoaded", function() {
    navList[0].querySelector("a").classList.add("active"); // Set the first nav item as active
    showSection(navList[0].querySelector("a")); // Show the corresponding section
    addBackSection(0); // Add back-section class to the first section
});

