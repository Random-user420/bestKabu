function getPopupInitState() {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { key: "getPopupInitState" }, (response) => {
            if (response !== undefined) {
                initalizePopup ({
                    validResponse: true,
                    popupState: true,
                    darkmodeState: response.darkmodeState,
                    loginState: response.loginState,
                    encState: response.encState,
                    colorFields: response.colorFields
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

function setValues(key, values, callback) {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { key: key, values: values }, (response) => {
            if (callback !== null) {
                callback(response);
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
        createSubjectColorFields(values.colorFields);
    }
    else {
        setPopupState(false);
    }
}

getPopupInitState();

let colorFields = [];

// Events


function createSubjectColorFields(values) {
    values = values.map(val => new objectColorField(val.name, val.color, val.id));
    values.forEach(val => {
        const id = val.id;
        const color = val.color;
        const name = val.name;
        document.getElementById('sColors').innerHTML += `
            <label for="${id}Picker">${name}</label>
            <input type="color" id="${id}Picker" >
            <input class="styled-input" type="text" maxlength="7" id="${id}Field" placeholder="Example: #add8e6"><br/>`;
        document.getElementById(`${id}Picker`).value = color;
        document.getElementById(`${id}Field`).value = color;
        val.updateField();
        colorFields.push(val);
    });
}

function saveSubColorEvent() {
    colorFields.forEach(val => {
        val.getColorInput();
    })
    setValues("updateColorFields", colorFields, null);
}


function colorButtonEvent() {
    setValues('colorButtonEvent', {
        color: getColorInput()
    }, colorButtonCallback);
}

function colorButtonCallback(response) {
    if (response !== undefined) {
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
    }, null);
    onLoginStateChange(getLoginState());
}

function loginEncCheckboxEvent() {
    setValues('loginEncCheckboxEvent', {
        setEncLoginState: getEncLoginState()
    }, null);
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
    setValues('loginSaveButtonEvent', {
        username: getLoginUsername(),
        password: getLoginPassword(),
        encKey: getLoginEncKey()
    }, loginSaveButtonCallback);
}

function loginSaveButtonCallback(response) {
    if (response !== undefined) {
        if (response.failedInputValidation === false) {
            showSuccess('message-login', "Autologin setup was successful!");
        } else {
            showError('message-login', 'Input Validation Failed! Please Check Your Input and Try Again. View the <a style="color: white; font-weight: bold;" href="https://github.com/Random-user420/bestKabu" target="_blank">GitHub Repo</a> for more info.');
            resetInputs();
        }
    }
}

function loginDeleteButtonEvent() {
    setValues( "loginDeleteButtonEvent", {
        deleteLogin: true
    }, null);
    showSuccess('message-login', "Login successfully deleted!");
}

function loginEncButtonEvent() {
    setValues('loginEncButtonEvent', {
        encKey: getLoginEncKey()
    }, loginEncButtonCallback);
}

function loginEncButtonCallback(response) {
    if (response !== undefined) {
        if (currentResponse.failedInputValidation === true) {
            showError('message-login', 'Input Validation Failed! Please Check Your Input and Try Again. View the <a style="color: white; font-weight: bold;" href="https://github.com/Random-user420/bestKabu" target="_blank">GitHub Repo</a> for more info.');
            resetInputs();
        }
    }
}

function darkmodeToggleEvent() {
    setValues('darkmodeToggleEvent', {
        darkModeState: getDarkMode()
    }, null);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
