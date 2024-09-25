// chrome.tabs..... { <identifier>: true, parameter… });
document.getElementById('changeColorBtn').addEventListener('click', () => {
    const color = document.getElementById('colorPicker').value;
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { changeColorBtn: true, color: color });
    });
});

document.getElementById('autologinBtn').addEventListener('click', () => {
    const username = document.getElementById('autologinUsername').value;
    const password = document.getElementById('autologinPassword').value;
    const enabled = document.getElementById('autologinCheckbox').checked;
    const encryptEnabled = document.getElementById('autologinPasswordProtection').checked;
    const key = document.getElementById('autologinEncryptionPassword').value;
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { autologinBtn: true, pawssword: password, username: username, enabled: enabled, encryptEnabled: encryptEnabled, key: key });
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
        chrome.tabs.sendMessage(tabs[0].id, { autologinEncryptionBtn: true, key: key });
    });
});

function getAutologinState() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { get_AutologinState: true }, (response) => {
            document.getElementById("autologinCheckbox").checked = response.autologinEnableState;
            document.getElementById("autologinPasswordProtection").checked = response.autologinPasswordProtection;
        });
    });
}
function getDarkMode() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { getDarkModeState: true }, (response) => {
            document.getElementById("darkModeToggle").checked = response.darkModeState;
        });
    });
}

getAutologinState();
getDarkMode();