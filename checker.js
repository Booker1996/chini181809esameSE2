
const fetch = require('node-fetch')

function check(url, invocationParameters,  expectedResultData, expectedResultStatus) {
    var urlGET = url + '?' + 'lato1=' + invocationParameters.lato1 + '&' + 'lato2=' + invocationParameters.lato2;
    console.log(urlGET);
    return fetch(url).then(response => {
            console.log("Okay!");

            if(response.status===expectedResultStatus){
                console.log('Lo status è giusto!');

            }
    }).catch(error => console.log("Si è verificato un errore!"));

    const checkResult = { // this is the object you need to set and return
        urlChecked: url,
        resultData: null,
        resultStatus: null,
        statusTestPassed: null,
        resultDataAsExpected: null
    }



}


// funzione che confronta due oggetti semplici e verifica se actual contiene tutti gli attributi di expected, e se per
// questi ha gli stessi valori
function compareResults(expected, actual) {
    if (!expected) return true //always ok if there are no expectations
    if (!actual) return false
    for (let e of Object.keys(expected)) {
        if (actual[e]===undefined || expected[e]!=actual[e]  ) return false
    }
    return true
}

module.exports = check

check('https://example.com',{lato1:3,lato2:5},{area:15},200);