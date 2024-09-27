// chrome.tabs..... { <identifier>: true, parameter… });
document.getElementById('changeColorBtn').addEventListener('click', () => {
    const color = document.getElementById('colorPicker').value;
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { changeColorBtn: true, color: color }, (response) => {
            if (response !== undefined && response.faieldColorValidation) {
                alert("Color must be written as #RRGGBB");
            }
        });
    });
});

document.getElementById('autologinBtn').addEventListener('click', () => {
    const username = document.getElementById('autologinUsername').value;
    const password = document.getElementById('autologinPassword').value;
    const enabled = document.getElementById('autologinCheckbox').checked;
    const encryptEnabled = document.getElementById('autologinPasswordProtection').checked;
    const key = document.getElementById('autologinEncryptionPassword').value;
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { autologinBtn: true, pawssword: password, username: username, enabled: enabled, encryptEnabled: encryptEnabled, key: key }, (response) => {
            if (response !== undefined && response.failedInputValidation) {
                alert("Input Validation Failed! Please Check Your Input and Try Again. View the GitHub Repo for more info.");
            }
        });
    });
});

document.getElementById('autologinresetBtn').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { autologinresetBtn: true });
    });
});

document.getElementById('darkModeToggle').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { darkModeToggle: true, darkMode: document.getElementById('darkModeToggle').checked });
    });
});

document.getElementById('autologinEncryptionBtn').addEventListener('click', () => {
    const key = document.getElementById('autologinEncryptionPassword').value;
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { autologinEncryptionBtn: true, key: key }, (response) => {
            if (response !== undefined && response.failedInputValidation) {
                alert("Input Validation Failed! Please Check Your Input and Try Again. View the GitHub Repo for more info.");
            }
        });
    });
});

function getAutologinState() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { get_AutologinState: true }, (response) => {
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
                }
            }
        });
    });
}
function getDarkMode() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { getDarkModeState: true }, (response) => {
            if (response !== undefined) {
                document.getElementById("darkModeToggle").checked = response.darkModeState;
                document.getElementById("divMainSettings").hidden = false;
                document.getElementById("divNotKabu").hidden = true;
            }
        });
    });
}

getAutologinState();
getDarkMode();