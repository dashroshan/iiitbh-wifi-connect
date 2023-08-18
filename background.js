const RESETURL = "https://192.168.1.250/connect/Reset";
const LOGINURL = "https://192.168.1.250/connect/PortalMain";

chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.update(tab.id, { url: RESETURL });
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status == "complete" && tab.active && tab.url == LOGINURL) {
        chrome.tabs.executeScript(tabId, {
            file: "inject.js"
        });
        chrome.tabs.update(tabId, { pinned: true });
    }
})

chrome.contextMenus.create({
    title: "Configure WiFi portal credentials",
    contexts: ["browser_action"],
    onclick: () => chrome.tabs.create({ url: "/credentials.html" })
});

