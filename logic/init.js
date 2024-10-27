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
    const urlpath = window.location.pathname;
    if (urlpath.includes("SchulaufgabenPlan")) {
        markCurrentDay();
    }
    toggleVisualMode(isDarkModeState());
    if (urlpath.includes("Stundenplan")) {
        
    }
    if (urlpath.includes("Stundenplan") || urlpath.includes("Main")) {
        createMebisButton();
        //showTimer();
        hidePassedDays();
        mainLoop();
    }
    if ((urlpath === "/" || urlpath === "/Login") && isLoginState() && !isEncLoginState()) {
        login();
    }

}

function mainLoop() {
    setInterval(() => {
        timeTable.forEach(checkTime);
        startInfiniteLoop();
    }, 1000);
}