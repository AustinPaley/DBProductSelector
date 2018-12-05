let header = document.querySelector('body > h1')
let abmInfo = document.querySelector('#abm-info')
let targetingInfo = document.querySelector('#targeting-info')
let engagementInfo = document.querySelector('#engagement-info')
let conversionInfo = document.querySelector('#conversion-info')
let proInfo = document.querySelector('#pro-info')

document.getElementById("test").addEventListener('click', () => {
    console.log("Popup DOM fully loaded and parsed");

    function getClientName() {
        //You can play with your DOM here or check URL against your regex
        return document.body.querySelector('.fg-dark-blue').innerHTML.replace("Viewing: ", "");
    }

    function getABMData(){
      return document.body.querySelector('.table-striped > tbody > tr:nth-child(1)').innerHTML;
    }

    function getTargetingData(){
      return document.body.querySelector('.table-striped > tbody > tr:nth-child(2)').innerHTML;
    }

    function getEngagementData(){
      return document.body.querySelector('.table-striped > tbody > tr:nth-child(3)').innerHTML;
    }

    function getConversionData(){
      return document.body.querySelector('.table-striped > tbody > tr:nth-child(4)').innerHTML;
    }

    function getProData(){
      return document.body.querySelector('.table-striped > tbody > tr:nth-child(5)').innerHTML;
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
