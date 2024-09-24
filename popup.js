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
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { autologinBtn: true, pawssword: password, username: username, enabled: enabled });
    });
});

document.getElementById('autologinresetBtn').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { autologinresetBtn: true });
    });
});

function get_AutologinState() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { get_AutologinState: true }, (response) => {
            document.getElementById("autologinCheckbox").checked = response.autologinEnableState;
        });
    });
}

get_AutologinState();