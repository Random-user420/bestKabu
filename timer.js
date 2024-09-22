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