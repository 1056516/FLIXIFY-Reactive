// background.js
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.downloads.download({
    url: tab.url,
    filename: 'shortcut.url'
  });
});
