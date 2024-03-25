document.addEventListener('DOMContentLoaded', function () {
    var extractTitleBtn = document.getElementById('extractTitleBtn');
    var titleContainer = document.getElementById('titleContainer');
  
    extractTitleBtn.addEventListener('click', function () {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var tab = tabs[0];
        var title = tab.title;
        titleContainer.textContent = title;
      });
    });
  });