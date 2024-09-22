
function processCredentials(username, password, enabled) {
    set_stored_credentials(username, password, enabled);
}

function set_stored_credentials(username, password, enabled) {
    if (username !== null && username !== undefined && username !== "" && password !== null && password !== undefined && password !== "") {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
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

function login() {
    let username_;
    let password_;
    [username_, password_] = get_stored_credentials();
    console.log("username: ", username_, "password: ", password_);
    if (username_ === null || password_ === null) {
        return;
    }
    document.getElementById("UserName").value = username_;
    document.getElementById("Password").value = password_;
    sleep(300);
    document.querySelector(".btn.btn-primary").click();
}