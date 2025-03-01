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
                    highlightColor: response.highlightColor,
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
        setHighlightColor(values.highlightColor);
        createSubjectColorFields(values.colorFields);
    }
    else {
        setPopupState(false);
    }
}

getPopupInitState();

let colorFields = [];

// Events


function createSubjectColorFields(input) {
    if (input == null || input == undefined || input < 1) {
        document.getElementById("subjectColors").hidden = true;
    }

    values = input.map(val => new objectColorField(val.name, val.color, val.id));
    values.forEach(val => {
        const id = val.id;
        const name = val.name;
        document.getElementById('sColors').innerHTML += `
            <label for="${id}Picker">${name}</label><br/>
            <input type="color" id="${id}Picker" >
            <input class="styled-input" type="text" maxlength="7" id="${id}Field" placeholder="Example: #add8e6"><br/>`;
    });
    values.forEach(val => {
        const id = val.id;
        const color = val.color;
        document.getElementById(`${id}Picker`).value = color;
        document.getElementById(`${id}Field`).value = color;
        document.getElementById(`${id}Picker`).addEventListener("input", function () {
            document.getElementById(`${id}Field`).value = document.getElementById(`${id}Picker`).value.toLowerCase();
        });
        colorFields.push(val);
    });
}

function saveSubColorEvent() {
    colorFields.forEach(field => {
        let color = document.getElementById(`${field.id}Field`).value;
        if (!/^#([0-9A-Fa-f]{6})$/.test(color))
        {
            document.getElementById(`${field.id}Field`).value = "";
            color = "";
            showError("sCMessage", "Some colors in the input Fields have the wrong Format. Color must be written as #rrggbb")
        }
        field.color = color;
    });
    setValues("updateColorFields", colorFields, null);
}

function resetSubColorEvent() {
    setValues("resetSubColors", null, resetSubColosCallback);
}

function resetSubColosCallback(values) {
    colorFields = [];
    document.getElementById('sColors').innerHTML = ""
    createSubjectColorFields(values.colors);
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

function setHighlightColor(color) {
    setColorInput(color);
    setColorInputPicker(color);
}