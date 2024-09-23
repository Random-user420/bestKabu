function showTimer() {
    if (window.location.pathname.includes("Stundenplan")) {
        const box = document.getElementById("stdplanheading");

        const timerElement = document.createElement("span");
        timerElement.id = "timerText";

        box.append(timerElement);

        function updateTimerDisplay(minutes, seconds) {
            let timerText;
            if (isNaN(minutes)) {
                timerText = "Schule zu Ende :)";
            } else {
                timerText = `${minutes}m ${seconds}s`;
            }
            document.querySelector("#timerText").textContent = timerText;
        }

        function calculateTimeDiff() {
            const currentTime = new Date();

            let nextLessonStart;
            if (getTimeObject(timeTable[0].start[0], timeTable[0].start[1]) > currentTime) {
                nextLessonStart = getTimeObject(timeTable[0].start[0], timeTable[0].start[1]);
            }
            else {
                for (let i = 0; i < timeTable.length; i++) {
                    const endTime = getTimeObject(timeTable[i].end[0], timeTable[i].end[1]);
                    if (currentTime < endTime) {
                        nextLessonStart = endTime;
                        break;
                    }
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