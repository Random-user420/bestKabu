
document.getElementById('changeColorBtn').addEventListener('click', () => {
    colorButtonEvent();
});

document.getElementById('loginCheckbox').addEventListener('click', () => {
    loginCheckboxEvent();
});

document.getElementById('loginEncCheckbox').addEventListener('click', () => {
    loginEncCheckboxEvent();

});

document.getElementById('loginEncKey').addEventListener('keypress', (e) => {
    loginEncKeyEvent(e);
});

document.getElementById('loginSaveButton').addEventListener('click', () => {
    loginSaveButtonEvent();
})

document.getElementById('loginDeleteButton').addEventListener('click', () => {
    loginDeleteButtonEvent();
})
document.getElementById('loginEncButton').addEventListener('click', () => {
    loginEncButtonEvent();
})

document.getElementById('darkModeToggle').addEventListener('click', () => {
    darkmodeToggleEvent();
});



function getColorInput() {
    return document.getElementById('colorInput').value;
}

function setPopupState(state) {
    document.getElementById("mainPopup").hidden = !state;
    document.getElementById("gotoPopup").hidden = state;
}

function setDarkMode(state) {
    getElementById("darkModeToggle").checked = state;
}

function getDarkMode() {
    return document.getElementById('darkModeToggle').checked;
}

function setLoginState(state) {
    document.getElementById("loginCheckbox").checked = state;
    onLoginStateChange(state);
}

function getLoginState() {
    return document.getElementById('loginCheckbox').checked;
}

function onLoginStateChange(state) {
    document.getElementById("loginBody").hidden = !state;
}

function setEncLoginState(state) {
    document.getElementById("loginEncCheckbox").checked = state;
    onEncLoginStateChange(state);
}

function getEncLoginState() {
    return document.getElementById('loginEncCheckbox').checked;
}

function onEncLoginStateChange(state) {
    document.getElementById("loginEncKey").hidden = !state;
    document.getElementById("loginEncButton").hidden = !state;
}

function getLoginUsername() {
    return document.getElementById('loginUsername').value;
}

function setLoginUsername(username) {
    document.getElementById('loginUsername').value = username;
}

function getLoginPassword() {
    return document.getElementById('loginPassword').value;
}

function setLoginPassword(password) {
    document.getElementById('loginPassword').value = password;
}

function getLoginEncKey() {
    return document.getElementById('loginEncKey').value;
}

function setLoginEncKey(key) {
    document.getElementById('loginEncKey').value = key;
}



function showError(id, message) {
    const errorMessage = document.getElementById(id);
    errorMessage.innerHTML = message;
    errorMessage.style.display = 'block';
    errorMessage.style.color = "#FF0000FF";
    resetInputs();
}

function showSuccess(id, message) {
    const errorMessage = document.getElementById(id);
    errorMessage.innerHTML = message;
    errorMessage.style.display = 'block';
    errorMessage.style.color = "#85ff85";
    resetInputs();
}
