(function () {
    const interval = setInterval(function () {
        if (document.getElementById("LoginUserPassword_auth_username") != null) {
            chrome.storage.sync.get(["iiit_wifi_username", "iiit_wifi_password"], function (items) {
                document.getElementById("LoginUserPassword_auth_username").value = items["iiit_wifi_username"];
                document.getElementById("LoginUserPassword_auth_password").value = items["iiit_wifi_password"];
                document.getElementById("UserCheck_Login_Button").click();
                clearInterval(interval);
            });
        }
    }, 500);
})();