function validateColor(value) {
    return /^#([0-9A-Fa-f]{6})$/.test(value.color);
}

function validateLogin(values) {
    return ((isEncLoginState() && values.encKey !== "") ?
        (values.encKey.length > 0 && values.username.length > 0 && values.password.length > 0) :
        (values.username.length > 0 && values.password.length > 0));
}

function encrypt(password, encryptionKey) {
    const keyLength = encryptionKey.length;
    const result = new Uint8Array(password.length);

    for (let i = 0; i < password.length; i++) {
        result[i] = password.charCodeAt(i) ^ encryptionKey.charCodeAt(i % keyLength);
    }

    return String.fromCharCode(...result);
}


function login(username, password) {
    document.getElementById("UserName").value = username;
    document.getElementById("Password").value = password;
    sleep(300);
    document.querySelector(".btn.btn-primary").click();
    sleep(500);
}

function toggleVisualMode(darkMode) {
    const colors = darkMode ? darkModeColor : whiteModeColor;
    document.documentElement.style.setProperty('--navColor',  colors.navColor);
    document.documentElement.style.setProperty('--backgroundColor',  colors.backgroundColor);
    document.documentElement.style.setProperty('--planColor',  colors.planColor);
    document.documentElement.style.setProperty('--glyphicon',  colors.glyphicon);
    document.documentElement.style.setProperty('--lessonColor',  colors.lessonColor);
    document.documentElement.style.setProperty('--hourOverlay',  colors.hourOverlay);
    document.documentElement.style.setProperty('--hourCanceled',  colors.hourCanceled);
    document.documentElement.style.setProperty('--hourCanceled',  colors.hourCanceled);
    document.documentElement.style.setProperty('--hourChanged',  colors.hourChanged);
    document.documentElement.style.setProperty('--white',  colors.white);
    document.documentElement.style.setProperty('--activeTab',  colors.activeTab);
    document.documentElement.style.setProperty('--timerBackgound',  colors.timerBackgound);
}

function markCurrentDay() {
    const date = new Date().toLocaleDateString("de-DE");

    const tables = document.getElementsByTagName("table");
    for (const table of tables) {
        const rows = table.getElementsByTagName("tr");
        for (const row of rows) {
            const strong = row.querySelector("strong");
            if (strong && strong.textContent.includes(date)) {
                row.style.backgroundColor = color;
                return;
            }
        }
    }
}

function hidePassedDays() {
    const box = document.getElementById("umgebung");
    if (box === null) return;

    let firstVisible = -1;
    for (let i = 0; i < 5; i++) {
        if (box.children[i].children[0].children[0].classList.contains("weekdayToday")) {
            firstVisible = i;
            break;
        }
    }

    if (firstVisible === -1) return;

    for (let i = 0; i < firstVisible; i++) {
        box.children[i].children[0].children[1].classList.add("passedDay");
    }
}

function checkTime(period, index) { //TODO: Clean up, because it's a mess
    const currentTime = new Date();
    const startTime = getTimeObject(period.start[0], period.start[1]);
    const endTime = getTimeObject(period.end[0], period.end[1]);

    let box = document.getElementById("umgebung");
    if (box === null) return;

    box = window.location.pathname.includes("Stundenplan") ? 
        box.children[0] :
        box.document.getElementById("umgebung").children[0].children[1].children[0];

    const currentBox = box.children[index];

    if (currentTime > endTime) {
        currentBox.children[0].classList.remove("weekdayToday");
        for (const i of [1, 2, 3]) {
            currentBox.children[i].style.fill = hourOver;
        }
    } else if (currentTime > startTime && currentTime < endTime) {
        currentBox.children[0].classList.add("weekdayToday");
    }
}

function createTimer() { //TODO: Clean up, because it's a mess
    if (!window.location.pathname.includes("Stundenplan")) return;

    const headerBox = document.getElementById("stdplanheading") || document.querySelector('div[style="margin-left:10px;"]');
    if (!headerBox) return;

    const timerElement = document.createElement("span");
    timerElement.id = "timerText";
    headerBox.appendChild(timerElement);

    const updateTimerDisplay = (minutes, seconds) => {
        const timerText = isNaN(minutes) ? "Schule zu Ende :)" : `${minutes}m ${seconds}s`;
        timerElement.textContent = timerText;
    };

    const calculateTimeDiff = () => {
        const currentTime = new Date();
        const nextLessonStart = timeTable.reduce((nextStart, period) => {
            const endTime = getTimeObject(period.end[0], period.end[1]);
            return currentTime < endTime && (!nextStart || endTime < nextStart) ? endTime : nextStart;
        }, getTimeObject(timeTable[0].start[0], timeTable[0].start[1]));

        const timeDiff = Math.max(nextLessonStart - currentTime, 0);
        const minutes = Math.floor(timeDiff / 60000);
        const seconds = Math.floor((timeDiff % 60000) / 1000);

        updateTimerDisplay(minutes, seconds);
    };

    calculateTimeDiff();
    setInterval(calculateTimeDiff, 1000);
}


function createMebisButton() {
    const box = document.getElementById("stdplanheading") || document.querySelector('div[style="margin-left:10px;"]');
    if (box) {
        const mebisButton = Object.assign(document.createElement('button'), {
            textContent: 'Mebis',
            id: 'mebisButton',
            style: {
                padding: '10px 20px',
                fontSize: '16px',
                cursor: 'pointer'
            },
            onclick: () => window.open('https://portal.bycs.de/', '_blank')
        });
        box.appendChild(mebisButton);
    }
}