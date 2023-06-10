function setTheme(mode, toggleButtonExists) {
    localStorage.setItem("theme-storage", mode);
    let htmlElement = document.querySelector("html");

    if (mode === "dark") {
        if (toggleButtonExists === true) {
            document.getElementById("darkModeStyle").disabled = false;
            document.getElementById("dark-mode-toggle").innerHTML = "<i data-feather=\"sun\"></i>";
            feather.replace()
        }
        htmlElement.classList.add("dark")
        htmlElement.classList.remove("light")

    } else if (mode === "light") {
        if (toggleButtonExists === true) {
            document.getElementById("darkModeStyle").disabled = true;
            document.getElementById("dark-mode-toggle").innerHTML = "<i data-feather=\"moon\"></i>";
            feather.replace()
        }
        htmlElement.classList.add("light")
        htmlElement.classList.remove("dark")
    }
}

function toggleTheme() {
    if (localStorage.getItem("theme-storage") === "light") {
        setTheme("dark");
    } else if (localStorage.getItem("theme-storage") === "dark") {
        setTheme("light");
    }
}

// * run only if toggle mode is set 
var toggleButton = document.getElementById("dark-mode-toggle")

if (toggleButton !== null) {
    let savedTheme = localStorage.getItem("theme-storage") || "light";
    setTheme(savedTheme, true)
}

// * set theme based on current selection in config.toml `extra` section
function manualSetTheme(mode) {
    setTheme(mode, false)
}