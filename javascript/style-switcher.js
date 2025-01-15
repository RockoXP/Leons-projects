/* ========================== toggle style switcher ====================================*/
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})
// hide style switcher on scroll
window.addEventListener("scroll", () => {
    if(document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})
/* ================================ Theme Colors ===============================*/
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(colors)
{
    alternateStyles.forEach((style) => {
        if(colors === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else
        {
            style.setAttribute("disabled", "true");
        }
        
    })
}
/*======================================== theme light and dark mode   ==========================================*/
const dayNightToggle = document.querySelector(".day-night");
dayNightToggle.addEventListener("click", () => {
    dayNightToggle.querySelector("i").classList.toggle("fa-sun");
    dayNightToggle.querySelector("i").classList.add("fa-moon");
    document.body.classList.toggle("dark");
})

window.addEventListener("load", () => {
    if(document.body.classList.contains("dark"))
    {
        dayNightToggle.querySelector("i").classList.add("fa-sun");
    }
    else
    {
        dayNightToggle.querySelector("i").classList.add("fa-moon");
    }
})
