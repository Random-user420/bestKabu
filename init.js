if (
    document.referrer === "https://www.digikabu.de" ||
    document.referrer === "https://www.digikabu.de/Main/TestRedirect"
) {
    window.location.href = "https://www.digikabu.de/Stundenplan/Klasse";
}

if (
    document.referrer === "https://digikabu.de" ||
    document.referrer === "https://digikabu.de/Main/TestRedirect"
) {
    window.location.href = "https://digikabu.de/Stundenplan/Klasse";
}

function startInfiniteLoop() {
    setTimeout(function () {
        timeTable.forEach(checkTime);
        startInfiniteLoop();
    }, refreshTimeout);
}

document.onreadystatechange = () => {
    if (document.readyState === "complete") {
        console.log("BestKabu running");
        const urlpath = window.location.pathname;
        if (urlpath.includes("SchulaufgabenPlan")) {
            markCurrentDay();
        }
        if (urlpath.includes("Stundenplan") || urlpath.includes("Main")) {
            setTimeout(() => {
                hidePassedDays();
                showTimer();
                timeTable.forEach(checkTime);
                startInfiniteLoop();
            }, 600);
        }
        if (urlpath === "/" && get_credentials_enabled() === "true") {
            login();
        }
    }
};