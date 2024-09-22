
function processCredentials(username, password) {
    set_stored_credentials(username, password);
}

function set_stored_credentials(username, password) {
    if (username !== null && username !== undefined && username !== "" && password !== null && password !== undefined && password !== "") {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
    }
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