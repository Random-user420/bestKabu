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
    if (urlpath.includes("SchulaufgabenPlan")) {
        markCurrentDay();
    }
    toggleVisualMode(isDarkModeState());
    if (urlpath.includes("Stundenplan")) {
        
    }
    if (urlpath.includes("Stundenplan") || urlpath.includes("Main")) {
        createMebisButton();
        createTimer();
        hidePassedDays();
        mainLoop();
    }
    if ((urlpath === "/" || urlpath === "/Login") && isLoginState() && !isEncLoginState()) {
        loginUnenc();
    }

}

function mainLoop() {
    setInterval(() => {
        timeTable.forEach(checkTime);
        startInfiniteLoop();
    }, 1000);
}


let urlpath = window.location.pathname;

window.addEventListener("pageshow", () => {
    urlpath = window.location.pathname;
    init();
});