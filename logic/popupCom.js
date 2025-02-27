chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    switch(request.key) {
        case "getPopupInitState":
            sendResponse(getPopupInitState());
            break;
        case "colorButtonEvent":
            response = setColor(request.values);
            sendResponse({ failedInputValidation: response });
            break;
        case "loginCheckboxEvent":
            setLoginState(request.values);
            break;
        case "loginEncCheckboxEvent":
            setEncLoginState(request.values);
            break;
        case "loginSaveButtonEvent":
            response = saveLogin(request.values);
            sendResponse({ failedInputValidation: response });
            break;
        case "loginDeleteButtonEvent":
            deleteLogin();
            break;
        case "loginEncButtonEvent":
            response = onEncLogin(request.values);
            sendResponse({ failedInputValidation: response });
            break;
        case "darkmodeToggleEvent":
            setDarkModeState(request.values);
            break;
        case "updateColorFields":
            updateColorFields(request.values);
            break;
        case "resetSubColors":
            sendResponse({ colors: getPresetColorsAsObjects() });
            break;
        default:
            console.warn("Popup received unknown key: " + request.key);
    }
});

function getPopupInitState() {
    return {
        darkmodeState: isDarkModeState(),
        loginState: isLoginState(),
        encState: isEncLoginState(),
        colorFields: getColorFields()
    };
}