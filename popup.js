document.getElementById('changeColorBtn').addEventListener('click', () => {
    const color = document.getElementById('colorPicker').value;
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { color: color });
    });
});

document.getElementById('autologinBtn').addEventListener('click', () => {
    const username = document.getElementById('autologinUsername').value;
    const password = document.getElementById('autologinPassword').value;
    const enabled = document.getElementById('autologinCheckbox').checked;
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { pawssword: password, username: username, enabled: enabled });
    });
});