function validateColor(value) {
    return /^#([0-9A-Fa-f]{6})$/.test(value.color);
}

function validateLogin(values) {
    return isEncLoginState() && values.encKey ?
        values.encKey.length > 0 && values.username.length > 0 && values.password.length > 0 :
        values.username.length > 0 && values.password.length > 0;
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