const refreshTimeout = 10000;
const mainLoopInterval = 600;
const hourOverColor = "grey";
const defaultHighlightColor = "#4281ff";
const darkModeColor = {
    navColor: "#1f2124",
    backgroundColor: "#292b30",
    planColor: "#37393f",
    lessonColor: "#434549",
    hourOverlay: "#67696d",
    hourCanceled: "#FF4041",
    hourChanged: "#fab433",
    white: "#DDDDDD",
    activeTab: "#ffffff",
    glyphicon: "#ffffff",
    timerBackgound: "#434549",
}
const whiteModeColor = {
    navColor: "#767174",
    backgroundColor: "#ffffff",
    planColor: "#bfbfbf",
    lessonColor: "#a3a5a9",
    hourOverlay: "#6e6e6e",
    hourCanceled: "#FF4041",
    hourChanged: "#fab433",
    white: "#000000",
    activeTab: "#000000",
    glyphicon: "#ffffff",
    timerBackgound: "#A3A5A9"
}


const timeTable = [
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