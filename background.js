chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({color: '#3aa757'}, function() {
      console.log("The color is green.");
    });
    
    //Add declared rules to the background script
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
          conditions: [new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {hostEquals: 'developer.chrome.com'},
          })
          ],
              actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
      });
  });



//   chrome.runtime.onMessage.addListener(
//     function(request, sender, sendResponse) {
//       console.log(sender.tab ?
//                   "from a content script:" + sender.tab.url :
//                   "from the extension");
//       if (request.imageReceived == "image"){
//           console.log('hey')
//         let newDiv = document.createElement("div");
//         newDiv.setAttribute('style',"font-size:16px;color:red;width:50em;height:50em;background:gray;opacity:.1;margin:auto;");
//           //let element = document.createElement('div');
//           //element.style.background
//           let imgs = document.querySelectorAll('img');
//           for (let i = 0; i < imgs.length; i++) {
//             imgs[i].src = request.src
//         }
//     }
// });