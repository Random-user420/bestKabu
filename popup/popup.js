// chrome.tabs..... { <identifier>: true, parameter… });
document.getElementById('changeColorBtn').addEventListener('click', () => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, {
            changeColorBtn: true,
            color: document.getElementById('colorPicker').value
        }, (response) => {
            if (response !== undefined && response.faieldColorValidation) {
                showError('error-message-color', "Color must be written as #RRGGBB");
            }
        });
    });
});

document.getElementById('autologinBtn').addEventListener('click', () => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, {
            autologinBtn: true,
            pawssword: document.getElementById('autologinPassword').value,
            username: document.getElementById('autologinUsername').value,
            enabled: document.getElementById('autologinCheckbox').checked,
            encryptEnabled: document.getElementById('autologinPasswordProtection').checked,
            key: document.getElementById('autologinEncryptionPassword').value
        }, (response) => {
            if (response !== undefined && response.failedInputValidation) {
                showError('error-message-login', 'Input Validation Failed! Please Check Your Input and Try Again. View the <a style="color: white; font-weight: bold;" href="https://github.com/Random-user420/bestKabu" target="_blank">GitHub Repo</a> for more info.');
            }
        });
    });
    getAutologinState();
});

document.getElementById('autologinresetBtn').addEventListener('click', () => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, {autologinresetBtn: true});
    });
    getAutologinState();
});

document.getElementById('darkModeToggle').addEventListener('click', () => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, {
            darkModeToggle: true,
            darkMode: document.getElementById('darkModeToggle').checked
        });
    });
});

document.getElementById('autologinEncryptionBtn').addEventListener('click', () => {
    const key = document.getElementById('autologinEncryptionPassword').value;
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, {
            autologinEncryptionBtn: true, key: key
        }, (response) => {
            if (response !== undefined && response.failedInputValidation) {
                showError('error-message-login', "Input Validation Failed! Please Check Your Input and Try Again. View the GitHub Repo for more info.");
            }
        });
    });
});

document.getElementById('autologinEncryptionPassword').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        if(document.getElementById('autologinUsername').value === "" && document.getElementById('autologinPassword').value === "") {
            document.getElementById('autologinEncryptionBtn').click();
        }
    }
});

function getAutologinState() {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, {get_AutologinState: true}, (response) => {
            if (response !== undefined) {
                if (response.autologinEnableState == true || response.autologinEnableState == "true") {
                    document.getElementById("autologinCheckbox").checked = true;
                } else {
                    document.getElementById("autologinCheckbox").checked = false;
                }
                if (response.autologinPasswordProtection == true || response.autologinPasswordProtection == "true") {
                    document.getElementById("autologinPasswordProtection").checked = true;
                    document.getElementById("autologinEncryptionBtn").hidden = false;
                } else {
                    document.getElementById("autologinPasswordProtection").checked = false;
                    document.getElementById("autologinEncryptionBtn").hidden = true;
                }
            }
        });
    });
}

function getDarkMode() {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, {getDarkModeState: true}, (response) => {
            if (response !== undefined) {
                document.getElementById("darkModeToggle").checked = response.darkModeState;
                document.getElementById("divMainSettings").hidden = false;
                document.getElementById("divNotKabu").hidden = true;
            }
        });
    });
}

function showError(id, message) { 
    const errorMessage = document.getElementById(id);
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
}

getAutologinState();
getDarkMode();
