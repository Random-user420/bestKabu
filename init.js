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

timeTable = [
    {
        start: [8, 30],
        end: [9, 15],
    },
    {
        start: [9, 15],
        end: [10, 0],
    },
    {
        start: [10, 0],
        end: [11, 0],
    },
    {
        start: [11, 0],
        end: [11, 45],
    },
    {
        start: [11, 45],
        end: [12, 30],
    },
    {
        start: [12, 30],
        end: [13, 15],
    },
    {
        start: [13, 15],
        end: [14, 0],
    },
    {
        start: [14, 0],
        end: [14, 45],
    },
    {
        start: [14, 45],
        end: [15, 30],
    },
    {
        start: [15, 30],
        end: [16, 15],
    },
];

const refreshTimeout = 10000;
const hourOver = "grey";

function get_stored_color() {
    const color_ = localStorage.getItem("color");
    if (color_ !== null) {
        return color_;
    }
    else {
        return "#4281ff";
    }
}

function processCredentials(username, password) {
    set_stored_credentials(username, password);
}

function set_stored_credentials(username, password) {
    if (username !== null && username !== undefined && username !== "" && password !== null && password !== undefined && password !== "") {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
    }
}

function get_stored_credentials() {
    const username = localStorage.getItem("username");
    const password = localStorage.getItem("password");
    if (username !== null && password !== null) {
        return [username, password];
    }
    else {
        console.log("No credentials found");
        return [null, null];
    }
}

function set_stored_color(color_) {
    if (color_ !== null && color_ !== undefined && color_ !== "" && color_.includes("#")) {
        color = color_;
        localStorage.setItem("color", color);
    }
}

function set_style_color() {
    // Change the --weekdayToday variable to a new color
    document.documentElement.style.setProperty('--weekdayToday', color);
}

let color = get_stored_color();
set_style_color();

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
    }
};

function getTimeObject(hours, minutes) {
    let obj = new Date();
    obj.setHours(hours);
    obj.setMinutes(minutes);
    obj.setSeconds(0);
    return obj;
}

function checkTime(item, index) {
    let currentTime = new Date();
    const startTime = getTimeObject(item.start[0], item.start[1]);
    const endTime = getTimeObject(item.end[0], item.end[1]);

    let box;

    if (window.location.pathname.includes("Stundenplan")) {
        box = document.getElementById("umgebung").children[0];
    } else {
        box =
            document.getElementById("umgebung").children[0].children[1].children[0];
    }

    const currentBox = box.children[index];

    if (currentTime > endTime) {
        currentBox.children[0].classList.remove("weekdayToday");
        currentBox.children[1].style.fill = hourOver;
        currentBox.children[2].style.fill = hourOver;
        currentBox.children[3].style.fill = hourOver;
    } else if (currentTime > startTime && currentTime < endTime) {
        currentBox.children[0].classList.add("weekdayToday");
    }
}

function showTimer() {
    if (window.location.pathname.includes("Stundenplan")) {
        const box = document.getElementById("stdplanheading");

        const timerText = document.createElement("span");
        timerText.id = "timerText";

        box.append(timerText);

        function updateTimerDisplay(minutes, seconds) {
            let timerText = `${minutes}m ${seconds}s`;
            if (isNaN(minutes)) {
                timerText = "Schule zu Ende :)";
            }
            document.querySelector("#timerText").textContent = timerText;
        }

        function calculateTimeDiff() {
            const currentTime = new Date();

            let nextLessonStart;
            for (let i = 0; i < timeTable.length; i++) {
                const endTime = getTimeObject(timeTable[i].end[0], timeTable[i].end[1]);
                if (currentTime < endTime) {
                    nextLessonStart = endTime;
                    break;
                }
            }

            const timeDiff = Math.max(nextLessonStart - currentTime, 0);
            const minutes = Math.floor(timeDiff / 60000);
            const seconds = Math.floor((timeDiff % 60000) / 1000);

            updateTimerDisplay(minutes, seconds);
        }

        calculateTimeDiff();

        setInterval(calculateTimeDiff, 1000);
    }
}

function hidePassedDays() {
    let box;

    if (window.location.pathname.includes("Stundenplan")) {
        box = document.getElementById("umgebung");
        for (let i = 1; i < 5; i++) {
            if (
                box.children[i].children[0].children[0].classList.contains(
                    "weekdayToday",
                )
            ) {
                break;
            } else {
                box.children[i].children[0].children[1].classList.add("passedDay");
            }
        }
    }
}

function markCurrentDay() {
    let today = new Date(),
        day = String(today.getDate()).padStart(2, "0"),
        month = String(today.getMonth() + 1).padStart(2, "0"),
        date = day + "." + month + ".";

    let tables = document.getElementsByTagName("table");
    for (let i = 0; i < tables.length; i++) {
        let strongs = tables[i].getElementsByTagName("strong");
        for (let j = 0, len = strongs.length; j < len; j++) {
            let strong = strongs[j];
            if (strong.textContent.includes(date)) {
                strong.closest("tr").style.backgroundColor = color;
                return;
            }
        }
    }
}