const saveButton = document.getElementById("saveButton");

const buttonUpdate = () => {
    saveButton.innerText = "Credentials saved";
    saveButton.style.opacity = 0.3;
    saveButton.style.pointerEvents = "none";
    setTimeout(() => {
        saveButton.innerText = "Save credentials";
        saveButton.style.opacity = 1;
        saveButton.style.pointerEvents = "unset";
    }, 1000);
}

saveButton.addEventListener('click', () => {
    const iiit_wifi_username = document.getElementById("iiit_wifi_username").value;
    const iiit_wifi_password = document.getElementById("iiit_wifi_password").value;
    chrome.storage.sync.set({ "iiit_wifi_username": iiit_wifi_username, "iiit_wifi_password": iiit_wifi_password }, buttonUpdate);
})