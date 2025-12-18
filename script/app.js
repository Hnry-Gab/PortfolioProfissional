const html = document.querySelector("html");
// add name to after tech icon state
(() => {
    const theme = localStorage.getItem("theme");
    if (theme) {
        html.classList.add(theme);
    } else {
        html.classList.add("dark");
    }

    list = document.querySelectorAll(".container--tech").forEach((element) => {
    const content = element.getAttribute("after-content");
        element.style.setProperty("--after-content", `"${content}"`);
    })
})()




document.getElementById("dark-theme").addEventListener("click", () => {
    html.classList.toggle("dark")
    html.classList.toggle("light")
})
document.getElementById("light-theme").addEventListener("click", () => {
    html.classList.toggle("dark")
    html.classList.toggle("light")
})
