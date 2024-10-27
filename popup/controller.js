/**
 * Get popup init state
 * 
 * set……
 * colorPickerState
 * darkmodeState
 *  looginState
 *  storeCre
 *  deleteCre
 *  encState
 *  encLogin
 */

function getPopupInitState() {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { key: "getPopupInitState" }, (response) => {
            if (response !== undefined) {
                initalizePopup ({
                    validResponse: true,
                    popupState: true,
                    darkmodeState: response.darkmodeState,
                    loginState: response.loginState,
                    encState: response.encState
                });
            }
            else {
                initalizePopup({
                    validResponse: false,
                    popupState: false
                });
            }
        });
    });
}

function setValues(key, values) {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { key: key, values: values }, (response) => {
            if(response !== undefined) {
                return response;
            }
            else {
                return false;
            }
        });
    });
}



function resetInputs() {
    setLoginEncKey("");
    setLoginUsername("");
    setLoginPassword("");
}


function initalizePopup(values) {
    if (values !== undefined && values.validResponse === true) {
        setPopupState(values.popupState);
        setDarkMode(values.darkmodeState);
        setLoginState(values.loginState);
        setEncLoginState(values.encState);
    }
    else {
        setPopupState(false);
    }
}

getPopupInitState();

// Events

function colorButtonEvent() {
    const response = setValues('colorButtonEvent', {
        color: getColorInput()
    });
    if (response !== false) {
        if (response.failedInputValidation === true) {
            showError('message-color', "Color must be written as #RRGGBB");
        } else {
            showSuccess('message-color', "Color set successfully!");
        }
    }
}

function loginCheckboxEvent() {
    setValues('loginCheckboxEvent', {
        setLoginState: getLoginState()
    });
    onLoginStateChange(getLoginState());
}

function loginEncCheckboxEvent() {
    setValues('loginEncCheckboxEvent', {
        setEncLoginState: getEncLoginState()
    });
    onEncLoginStateChange(getEncLoginState());
}

function loginEncKeyEvent(event) {
    if (event.key === 'Enter') {
        if (getLoginUsername() === "" && getLoginPassword() === "") {
            loginEncButtonEvent();
        }
    }
}

function loginSaveButtonEvent() {
    const response = setValues('loginSaveButtonEvent', {
        username: getLoginUsername(),
        password: getLoginPassword(),
        encKey: getLoginEncKey()
    });
    if (response.failedInputValidation === false) {
        showSuccess('error-message-login', "Autologin setup was successful!");
    } else {
        showError('error-message-login', 'Input Validation Failed! Please Check Your Input and Try Again. View the <a style="color: white; font-weight: bold;" href="https://github.com/Random-user420/bestKabu" target="_blank">GitHub Repo</a> for more info.');
        resetInputs();
    }
}

function loginDeleteButtonEvent() {
    setValues({
        deleteLogin: true
    });
    showSuccess('message-login', "Login successfully deleted!");
}

function loginEncButtonEvent() {
    const response = setValues('loginEncButtonEvent', {
        encKey: getLoginEncKey()
    });
    if (response.failedInputValidation === true) {
        showError('message-login', 'Input Validation Failed! Please Check Your Input and Try Again. View the <a style="color: white; font-weight: bold;" href="https://github.com/Random-user420/bestKabu" target="_blank">GitHub Repo</a> for more info.');
        resetInputs();
    }
}

function darkmodeToggleEvent() {
    setValues('darkmodeToggleEvent', {
        darkModeState: getDarkMode()
    });
}

function createMebisButton() {
    let box = document.getElementById("stdplanheading");

    if (box === null) {
        box = document.querySelector('div[style="margin-left:10px;"]');
    }
    if (box) {
        const mebisButton = document.createElement('button');
        mebisButton.textContent = 'Mebis';
        mebisButton.id = 'mebisButton';
        mebisButton.style.padding = '10px 20px';
        mebisButton.style.fontSize = '16px';
        mebisButton.style.cursor = 'pointer';
        mebisButton.addEventListener('click', () => {
            window.open('https://portal.bycs.de/', '_blank');
        });
        box.appendChild(mebisButton);
    }
}