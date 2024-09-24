function setDarkMode(state) {
    console.log(state);
    localStorage.setItem("darkMode", state);
}

function getDarkMode() {
    const state = localStorage.getItem("darkMode");
    if (state != null) {
        if (state === "true") {
            return true;
        }
    }
    else {
        return false;
    }
}

function initDarkMode() {
    if (localStorage.getItem("darkMode") === null) {
        setDarkMode(true);
    }
}