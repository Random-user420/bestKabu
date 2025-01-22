//legacy

function store_l(key, value) {
    localStorage.setItem(key, value);
}

function retrieve_l(key) {
    return localStorage.getItem(key);
}

function retrieveBool_l(key) {
    return localStorage.getItem(key) == true || localStorage.getItem(key) == "true" ? true : false;
}
  

//new bk version >= 2.1.0

const storage = {
    set: (data) => {
      if (typeof browser !== "undefined") {
        return browser.storage.local.set(data);
      } else if (typeof chrome !== "undefined") {
        return new Promise((resolve, reject) => {
          chrome.storage.local.set(data, () => {
            if (chrome.runtime.lastError) reject(chrome.runtime.lastError);
            else resolve();
          });
        });
      }
    },
  
    get: (keys) => {
      if (typeof browser !== "undefined") {
        return browser.storage.local.get(keys);
      } else if (typeof chrome !== "undefined") {
        return new Promise((resolve, reject) => {
            chrome.storage.local.
                get(keys, (result) => {
            if (chrome.runtime.lastError) reject(chrome.runtime.lastError);
            else resolve(result);
          });
        });
      }
    },
};

function store(key, value) {


    switch (key) {
        case "cre enc":
            storage.set({ boolModules: { autologin: storage.get("boolModules").autologin, darkmode: storage.get("boolModules").darkmode, creEnc: value } });
            break;
        case "autologin":
            storage.set({ boolModules: { creEnc: storage.get("boolModules").creEnc, darkmode: storage.get("boolModules").darkmode, autologin: value } });
            break;
        case "darkmode":
            storage.set({ boolModules: { creEnc: storage.get("boolModules").creEnc, autologin: storage.get("boolModules").autologin, darkmode: value } });
            break;
        case "username":
            storage.set({ cre: { password: storrage.get("cre").password, username: value } })
            break;
        case "password":
            storage.set({ cre: { username: storrage.get("cre").username, password: value } })
            break;
        case "lessonColors":
            // finalize docu
            break;
        case "mode colors":
            // finalize naming
            break;
        case "links":
            // finalize docu
    }
}


