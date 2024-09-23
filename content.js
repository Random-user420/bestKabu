chrome.runtime.onMessage.addListener((request) => {
    if (request.color) {
        set_stored_color(request.color);
        const elements = document.querySelectorAll('.weekdayToday');
        elements.forEach((el) => {
            el.style.setProperty('fill', request.color, 'important');
        });
    }
    else if (request.delLogin) {
        delete_credentials();
    }
    else if (request.getEnableState) {
        getAutoLoginState();
    }
    else if (request.username || "", request.pawssword || "", request.enabled || true) {
        processCredentials(request.username, request.pawssword, request.enabled);
    }
});

function resonseLoginState(state) {
    chrome.tabs.sendMessage(tabs[0].id, { getEnableState: state });
}
