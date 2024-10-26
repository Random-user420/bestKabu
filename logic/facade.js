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
    store('loginState', state);
    if (state) {
        loginUnenc();
    }
}

function isLoginState() {
    return retrieveBool('loginState');
}

function setEncLoginState(state) {
    store('encLoginState', state);
}

function isEncLoginState() {
    return retrieveBool('encLoginState');
}

function saveLogin(values) {
    if (validateLogin(values)) {
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
    login(retrieve('username'), retrieve('password'));
}

function onEncLogin(values) {
    login(encrypt(retrieve('username'), values.encKey), encrypt(retrieve('password'), values.encKey));
    return false;
}

function setDarkModeState(values) {
    store('darkmodeState', values.darkModeState);
    toggleVisualMode(values.darkModeState);
}

function isDarkModeState() {
    return retrieveBool('darkmodeState');
}