const html = document.querySelector("html");
const main = document.querySelector(".main");

(() => {
    const theme = localStorage.getItem("theme");
    if (theme) {
        html.classList.add(theme);
    } else {
        html.classList.add("dark");
    }
    
    
    const state = localStorage.getItem("animation");
    if (state) {
        main.classList.add(state);
    }
})()

document.getElementById("dark-theme").addEventListener("click", () => {
    html.classList.remove("dark")
    html.classList.add("light")
    localStorage.setItem("theme", "light")
})
document.getElementById("light-theme").addEventListener("click", () => {
    html.classList.remove("light")
    html.classList.add("dark")
    localStorage.setItem("theme", "dark")
})
document.getElementById("animation").addEventListener("click", () => {
    main.classList.toggle("active");
    if (main.classList.contains("active")) {
        localStorage.setItem("animation", "active");
    } else {
        localStorage.removeItem("animation");
    }
})
