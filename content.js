chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.changeColorBtn) {
        set_stored_color(request.color);
        const elements = document.querySelectorAll('.weekdayToday');
        elements.forEach((el) => {
            el.style.setProperty('fill', request.color, 'important');
        });
    }
    else if (request.autologinresetBtn) {
        delete_credentials();
    }
    else if (request.get_AutologinState) {
        const autologinEnableState = getAutoLoginState();
        sendResponse({ autologinEnableState });
    }
    else if (request.autologinBtn) {
        processCredentials(request.username, request.pawssword, request.enabled, request.encryptEnabled, request.key);
    }
    else if (request.darkModeToggle) {
        setDarkMode(request.darkMode);
    }
    else if (request.getDarkModeState) {
        const darkModeState = getDarkMode();
        sendResponse({ darkModeState: darkModeState });
    }
    else if (request.autologinEncryptionBtn) {
        loginEncrypted(request.key);
    }
});