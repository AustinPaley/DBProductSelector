let header = document.querySelector('body > h1')
let abmInfo = document.querySelector('#abm-info')
let targetingInfo = document.querySelector('#targeting-info')
let engagementInfo = document.querySelector('#engagement-info')
let conversionInfo = document.querySelector('#conversion-info')
let proInfo = document.querySelector('#pro-info')

// LOGIC TO HAVE LOADING WHEEL SHOW UP WHILE STUFF IN THE BACKGROUND WORKS
// document.querySelector('#Submit').addEventListener('click', () => {
//   chrome.tabs.executeScript({
//     code: `document.body.querySelector('#root > div > div > div > div:nth-child(2) > div > div > table').innerHTML = "<img src='https://media.giphy.com/media/l4FGv5Ci0WIp8kYhO/source.gif' />";`
//   })
// })

window.addEventListener('load', () => {
    console.log("Popup DOM fully loaded and parsed");

    function getClientName() {
        //You can play with your DOM here or check URL against your regex
        return document.body.querySelector('.fg-dark-blue').innerHTML.replace("Viewing: ", "");
    }

    function getABMData(){
      var formattedLink = "<a id='abmLink'" + document.body.querySelector('.table-striped > tbody > tr:nth-child(1)').innerHTML.split("<a")[1]
      return document.body.querySelector('.table-striped > tbody > tr:nth-child(1)').innerHTML.split("<a")[0] + formattedLink;
    }

    function getTargetingData(){
      var formattedLink = "<a id='targetingLink'" + document.body.querySelector('.table-striped > tbody > tr:nth-child(2)').innerHTML.split("<a")[1]
      return document.body.querySelector('.table-striped > tbody > tr:nth-child(2)').innerHTML.split("<a")[0] + formattedLink;
    }

    function getEngagementData(){
      var formattedLink = "<a id='engagementLink'" + document.body.querySelector('.table-striped > tbody > tr:nth-child(3)').innerHTML.split("<a")[1]
      return document.body.querySelector('.table-striped > tbody > tr:nth-child(3)').innerHTML.split("<a")[0] + formattedLink;
    }

    function getConversionData(){
      var formattedLink = "<a id='conversionLink'" + document.body.querySelector('.table-striped > tbody > tr:nth-child(4)').innerHTML.split("<a")[1]
      return document.body.querySelector('.table-striped > tbody > tr:nth-child(4)').innerHTML.split("<a")[0] + formattedLink;
    }

    function getProData(){
      var formattedLink = "<a id='proLink'" + document.body.querySelector('.table-striped > tbody > tr:nth-child(5)').innerHTML.split("<a")[1]
      return document.body.querySelector('.table-striped > tbody > tr:nth-child(5)').innerHTML.split("<a")[0] + formattedLink;
    }

    //We have permission to access the activeTab, so we can call chrome.tabs.executeScript:
    chrome.tabs.executeScript({
        code: '(' + getClientName + ')();' //argument here is a string but function.toString() returns function's code
    }, (results) => {
        //Here we have just the innerHTML and not DOM structure
        header.innerHTML = results[0]
    });

    chrome.tabs.executeScript({
      code: '(' + getABMData + ')();'
    }, (results) => {
      console.log(results)
      abmInfo.innerHTML = results[0]
    })

    chrome.tabs.executeScript({
      code: '(' + getTargetingData + ')();'
    }, (results) => {
      targetingInfo.innerHTML = results[0]
    })

    chrome.tabs.executeScript({
      code: '(' + getEngagementData + ')();'
    }, (results) => {
      engagementInfo.innerHTML = results[0]
    })

    chrome.tabs.executeScript({
      code: '(' + getConversionData + ')();'
    }, (results) => {
      conversionInfo.innerHTML = results[0]
    })

    chrome.tabs.executeScript({
      code: '(' + getProData + ')();'
    }, (results) => {
      proInfo.innerHTML = results[0]
    })
});
