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
        callHidePassedDays();
        highlightLessons();
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
    }, 1000);
}


let urlpath = window.location.pathname;

const observer = new MutationObserver((mutations, obs) => {
    if (document.readyState === 'complete') {
        urlpath = window.location.pathname;
        setTimeout(init, 800);
        obs.disconnect();
    }
});

observer.observe(document, { childList: true, subtree: true });