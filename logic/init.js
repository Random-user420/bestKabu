if (
    document.referrer === "https://www.digikabu.de" ||
    document.referrer === "https://www.digikabu.de/Main/TestRedirect"
) {
    window.location.href = "https://www.digikabu.de/Stundenplan/Klasse";
}

if (
    document.referrer === "https://www.digikabu.de" ||
    document.referrer === "https://www.digikabu.de/Main/TestRedirect"
) {
    window.location.href = "https://www.digikabu.de/Stundenplan/Klasse";
}


function init() {
    urlpath = window.location.pathname;
    if (urlpath.includes("SchulaufgabenPlan")) {
        markCurrentDay();
    }
    toggleVisualMode(isDarkModeState());
    if (urlpath.includes("Stundenplan")) {
        callHidePassedDays();
        retrieveLessonColors();
        highlightLessons();
        rewriteFirstBreak();
    }
    if (urlpath.includes("Stundenplan") || urlpath.includes("Main")) {
        createTimer();
        createMebisButton();
        activeColor(getColor());
        mainLoop();
    }
    if ((urlpath === "/" || urlpath.includes("Login")) && isLoginState() && !isEncLoginState()) {
        loginUnenc();
    }

}

function mainLoop() {
    setInterval(() => {
        timeTable.forEach(checkTime);
    }, 10);
}


let urlpath = window.location.pathname;


window.addEventListener("pageshow", () => {
    setTimeout(init, 800);
});
