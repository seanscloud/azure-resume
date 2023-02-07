window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})

const functionsApiURL = 'https://getresumecountersc.azurewebsites.net/api/GetResumeCounter?code=Ga3cWxDeMJhC3dMyUetzLujc4j89_trV_tT2JSOdgrFFAzFu6Cy5bg=='
const localFunctionsApi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count = 30;
    fetch(functionsApiURL).then(response => {
        return response.json()
    }).then(response =>{
        console.log("Website called function API.");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error)
    });
    return count;
}