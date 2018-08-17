//makes chnages to popup.html page
fetch('https://dog.ceo/api/breeds/image/random')
.then(response => response.json())
.then((response) => {
    console.log('my response', response)
    // let getDiv = document.getElementById('changeColor');
    let getDiv = document.getElementById('changeColor');
    let newElement = document.createElement('img');
    newElement.src = response.message
    getDiv.appendChild(newElement);


    return response;
})
.then(response => {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {imageReceived: 'image', src: response.message})
    })
})


// let changeColor = document.getElementById('changeColor');

// chrome.storage.sync.get('color', function(data) {
//   changeColor.style.backgroundColor = data.color;
//   changeColor.setAttribute('value', data.color);
// });

















// fetch('https://dog.ceo/api/breeds/image/random')
// .then(response => response.json())
// // .then((response) => {
// //     // console.log(response.message);
// //     // let getDiv = document.getElementById('hookInMe');
// //     // let newElement = document.createElement('img');
// //     // newElement.src = response.message
// //     // getDiv.appendChild(newElement);
// //     console.log('you know',response)
// //     return response;
// // })
.then(response => {
    console.log(response)
    console.log('this is popup.js', chrome.tabs)
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {imageReceived: 'image', src: response.message}, function(response) {
            console.log(response)
        })
    })
})

