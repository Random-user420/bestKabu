function checkTime(item, index) {
    const currentTime = new Date();
    const startTime = getTimeObject(item.start[0], item.start[1]);
    const endTime = getTimeObject(item.end[0], item.end[1]);

    let box;

    if (window.location.pathname.includes("Stundenplan")) {
        box = document.getElementById("umgebung");
        if (box === null) {
            return;
        }
        box = box.children[0];
    } else {
        box = document.getElementById("umgebung");
        if (box === null) {
            return;
        }
        box = box.children[0].children[1].children[0];
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
function hidePassedDays() {
    if (window.location.pathname.includes("Stundenplan")) {
        const box = document.getElementById("umgebung");
        if (box === null) {
            return;
        }
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
}function markCurrentDay() {
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
