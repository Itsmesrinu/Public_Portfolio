const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");

styleSwitcherToggler.addEventListener("click", () => {

document.querySelector(".style-switcher").classList.toggle("open");


})

window.addEventListener("scroll", () => {
if(document.querySelector(".style-switcher").classList.contains("open"))
{

document.querySelector(".style-switcher").classList.remove("open");
}
})

const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color)
{
    alternateStyles.forEach((style) => {
    if(color === style.getAttribute("title"))
    {
    style.removeAttribute("disabled");
    }
    else
    {
    style.setAttribute("disabled", "true");
    }
})
}

/*<!--======== theme light and dark mode ========-->*/


window.addEventListener("load", () => {
    const dayNight = document.querySelector(".day-night"); // Assuming you have a container element with this class

    if (document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.add("fa-sun");
        dayNight.querySelector("i").style.color = "yellow"; // Change sun icon color
    } else {
        dayNight.querySelector("i").classList.add("fa-moon");
        dayNight.querySelector("i").style.color = "black"; // Change moon icon color to black
    }
});

const dayNight = document.querySelector(".day-night");

dayNight.addEventListener("click", () => {
dayNight.querySelector("i").classList.toggle("fa-sun");
dayNight.querySelector("i").classList.toggle("fa-moon");
document.body.classList.toggle("dark");
if (document.body.classList.contains("dark")) {
    dayNight.querySelector("i").style.color = "yellow"; // Sun icon color in dark mode
} else {
    dayNight.querySelector("i").style.color = "black"; // Moon icon color in light mode
}
});



