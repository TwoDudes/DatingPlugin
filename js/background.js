var entryToLoad = null;

function init(launchData) {
  var fileEntry = null
  
  var options = {
    frame: 'chrome',
    minWidth: 400,
    minHeight: 400,
    width: 1000,
    height: 700
  };

  chrome.app.window.create('index.html', options);
}

chrome.app.runtime.onLaunched.addListener(init);