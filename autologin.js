function encrypt(password, encryptionKey) {
    if (!password || !encryptionKey) {
        throw new Error('Password and encryption key cannot be null or undefined');
    }
    let encryptedPassword = '';
    for (let i = 0; i < password.length; i++) {
        const passwordCharCode = password.charCodeAt(i);
        const keyCharCode = encryptionKey.charCodeAt(i % encryptionKey.length);
        const encryptedCharCode = passwordCharCode ^ keyCharCode;
        if (isNaN(encryptedCharCode)) {
            throw new Error('Error during XOR operation');
        }
        encryptedPassword += String.fromCharCode(encryptedCharCode);
    }
    return encryptedPassword;
}


function processCredentials(username, password, enabled, encryptEn, key) {
    if (encryptEn) {
        let password_ = encrypt(password, key);
        let username_ = encrypt(username, key);
        set_stored_credentials(username_, password_, enabled, encryptEn);
    }
    else {
        set_stored_credentials(username, password, enabled, encryptEn);
    }
}

function set_stored_credentials(en_usr, en_pw, enabled, encrypt) {
    if (en_usr !== null && en_usr !== undefined && en_usr !== "" && en_pw !== null && en_pw !== undefined && en_pw !== "") {
        localStorage.setItem("username", en_usr);
        localStorage.setItem("password", en_pw);
        localStorage.setItem("encrypt", encrypt);
    }
    localStorage.setItem("enabled", enabled);
}

function get_stored_credentials() {
    const username = localStorage.getItem("username");
    const password = localStorage.getItem("password");
    if (username !== null && password !== null) {
        return [username, password];
    }
    else {
        console.log("No credentials found");
        return [null, null];
    }
}

function get_credentials_enabled() {
    return localStorage.getItem("enabled");
}

function getEnrcyptEnabled() {
    return localStorage.getItem("encrypt");
}

function loginEncrypted(key) {
    [username_, password_] = get_stored_credentials();
    if (username_ == null || password_ == null) {
        return;
    }
    document.getElementById("UserName").value = encrypt(username_, key);
    document.getElementById("Password").value = encrypt(password_, key);
    sleep(300);
    document.querySelector(".btn.btn-primary").click();
    sleep(1000);
}


function delete_credentials() {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
}

function login() {
    let [username_, password_] = get_stored_credentials();
    if (username_ == null || password_ == null) {
        return;
    }
    document.getElementById("UserName").value = username_;
    document.getElementById("Password").value = password_;
    sleep(300);
    document.querySelector(".btn.btn-primary").click();
    sleep(1000);
}

function getAutoLoginState() {
    const autologinEnableState = localStorage.getItem("enabled");
    if (autologinEnableState != null || autologinEnableState != undefined) {
        if (autologinEnableState === "true") {
            return true;
        }
    }
    else {
        return false;
    }
}