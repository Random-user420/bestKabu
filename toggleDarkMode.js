function setDarkMode(state) {
    localStorage.setItem("darkMode", state);
    setDarkModeState(state);
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

function setDarkModeState(state) {
    let navColor;
    let backgroundColor;
    let planColor;
    let lessonColor;
    let hourOverlay;
    let hourCanceled;
    let hourChanged;
    let white;
    let timerBackgound;
    if (state === true) {
        navColor = "#1f2124";
        backgroundColor = "#292b30";
        planColor = "#37393f";
        lessonColor = "#434549!important";
        hourOverlay = "#67696d";
        hourCanceled = "#FF4041";
        hourChanged = "#fab433";
        white = "#DDDDDD";
        timerBackgound = "#434549";
    }
    else {
        navColor = "#767174";
        backgroundColor = "#f0f0f0";
        planColor = "#97999f";
        lessonColor = "#a3a5a9!important";
        hourOverlay = "#97999d";
        hourCanceled = "#FF4041";
        hourChanged = "#fab433";
        white = "#DDDDDD";
        timerBackgound = "#939599";
    }
    document.documentElement.style.setProperty('--navColor', navColor);
    document.documentElement.style.setProperty('--backgroundColor', backgroundColor);
    document.documentElement.style.setProperty('--planColor', planColor);
    document.documentElement.style.setProperty('--lessonColor', lessonColor);
    document.documentElement.style.setProperty('--hourOverlay', hourOverlay);
    document.documentElement.style.setProperty('--hourCanceled', hourCanceled);
    document.documentElement.style.setProperty('--hourCanceled', hourCanceled);
    document.documentElement.style.setProperty('--hourChanged', hourChanged);
    document.documentElement.style.setProperty('--white', white);
    document.documentElement.style.setProperty('--timerBackgound', timerBackgound);
}