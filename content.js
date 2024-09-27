chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.changeColorBtn) {
        const return_ = processColorResponse(request.color);
        if (return_ === "faieldColorValidation") {
            sendResponse({ faieldColorValidation: true });
        }
    }
    else if (request.autologinresetBtn) {
        delete_credentials();
    }
    else if (request.get_AutologinState) {
        const autologinEnableState = getAutoLoginState();
        const autologinPasswordProtection = getEnrcyptEnabled();
        sendResponse({ autologinEnableState, autologinPasswordProtection });
    }
    else if (request.autologinBtn) {
        const return_ = processCredentials(request.username, request.pawssword, request.enabled, request.encryptEnabled, request.key);
        if (return_ === "failedInputValidation") {
            sendResponse({ failedInputValidation: true });
        }
    }
    else if (request.darkModeToggle) {
        setDarkMode(request.darkMode);
    }
    else if (request.getDarkModeState) {
        const darkModeState = getDarkMode();
        sendResponse({ darkModeState: darkModeState });
    }
    else if (request.autologinEncryptionBtn) {
        const return_ = loginEncrypted(request.key);
        if (return_ === "failedInputValidation") {
            sendResponse({ failedInputValidation: true });
        }
    }
});