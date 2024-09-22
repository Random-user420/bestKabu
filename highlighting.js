function checkTime(item, index) {
    const currentTime = new Date();
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

function hidePassedDays() {
    if (window.location.pathname.includes("Stundenplan")) {
        const box = document.getElementById("umgebung");
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
    const today = new Date(),
        day = String(today.getDate()).padStart(2, "0"),
        month = String(today.getMonth() + 1).padStart(2, "0"),
        date = day + "." + month + ".";

    const tables = document.getElementsByTagName("table");
    for (let i = 0; i < tables.length; i++) {
        const strongs = tables[i].getElementsByTagName("strong");
        for (let j = 0, len = strongs.length; j < len; j++) {
            const strong = strongs[j];
            if (strong.textContent.includes(date)) {
                strong.closest("tr").style.backgroundColor = color;
                return;
            }
        }
    }
}