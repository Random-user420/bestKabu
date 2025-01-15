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

const lessonColor = {
    "PuG": "#612f00",
    "IT-Tec": "#582a8f", 
    "BGWP": "#b9b372",
    "E": "#ad9000",
    "D": "#630000",
    "AEuP": "#37ae1c",
    "FU-IT": "#4576cd",
    "smw": "#0b4700",
    "K": "#101050",
    "DGWP": "#242b7e",
    "TRF": "#401080",
    "MSWE": "#b9b3f2",
    "AEmP": "#37ae1c",
    "IuKS": "#4546cd",
    "WU-PE": "#79bb84",
    "Ev": "#103050",
    "DBS": "#24bb7e"
}