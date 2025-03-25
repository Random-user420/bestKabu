function setColor(value) {
    if (validateColor(value.color)) {
        store('color', value.color);
        activeColor(value.color);
        return false;
    }
    else {
        return true;
    }
}

function getColor() {
    return validateColor(retrieve('color')) ? retrieve('color') : defaultHighlightColor;
}

function activeColor(color) {
    document.documentElement.style.setProperty('--weekdayToday', color);
}

function setLoginState(state) {
    store('loginState', state.setLoginState);
    if (state) {
        loginUnenc();
    }
}

function isLoginState() {
    return retrieveBool('loginState');
}

function setEncLoginState(state) {
    store('encLoginState', state.setEncLoginState);
}

function isEncLoginState() {
    return retrieveBool('encLoginState');
}

function saveLogin(values) {
    if (isEncLoginState() && validateLogin(values)) {
        store('username', encrypt(values.username, values.encKey));
        store('password', encrypt(values.password, values.encKey));
        return false;
    }
    else if (validateLogin(values)) {
        store('username', values.username);
        store('password', values.password);
        loginUnenc();
        return false;
    }
    else {
        return true;
    }
}

function deleteLogin() {
    store('username', '');
    store('password', '');
    store('loginState', false);
    store('encLoginState', false);
}

function loginUnenc() {
    if ((urlpath === "/" || urlpath === "/Login") && isLoginState() && !isEncLoginState()) {
        login(retrieve('username'), retrieve('password'));
    }
}

function onEncLogin(values) {
    if ((urlpath === "/" || urlpath === "/Login") && isLoginState() && isEncLoginState()){
        login(encrypt(retrieve('username'), values.encKey), encrypt(retrieve('password'), values.encKey));
    }
    return false;
}

function setDarkModeState(values) {
    store('darkmodeState', values.darkModeState);
    toggleVisualMode(values.darkModeState);
}

function isDarkModeState() {
    return retrieveBool('darkmodeState');
}

function highlightLessons() {
    if (urlpath.includes("Stundenplan")) {
        paintLessons();
    }
}

function callHidePassedDays() {
    if (!isFutureWeek()) {
        hidePassedDays();
    }
}

function updateColorFields(values) {

    if (urlpath.includes("Stundenplan")) {
        values.forEach(element => {
            if(validateColor(element.color)) {
                lessonColor[element.name] = element.color;
            }
        });
        paintLessons();

        store("SubColors", JSON.stringify(lessonColor));
    }
}

function getColorFields() {

    if (urlpath.includes("Stundenplan")) {
        //sets stored colors to lessonColor Object
        retrieveLessonColors()

        let objectColorFields = [];
        const lessonNames = getLessonNames(objectColorFields);
        lessonNames.forEach(name => {
            let color = lessonColor[name];
            if (color == undefined || color == null)
            {
                color = getColorFromHash(getHash(name));
                lessonColor[name] = color;
            }
            objectColorFields.push(new objectColorField(name, color, null))
        });
        paintLessons();
        return objectColorFields;
    }
}
