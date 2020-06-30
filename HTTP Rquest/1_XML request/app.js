const firstReq = new XMLHttpRequest();
firstReq.addEventListener('load', function () {
    console.log('FIRST REQUEST WORKED!!!');
    //console.log(this.responseText);
    const data = JSON.parse(this.responseText);
    const filmURL = data.results[0].films[0];
    const filmReq = new XMLHttpRequest();
    filmReq.addEventListener('load', function () {
        console.log('SECOND REQUEST WORKED!!!');
        const filmData = JSON.parse(this.responseText);
        console.log(filmData.title);
    });
    filmReq.addEventListener('error', function (e) {
        console.log('ERROR!!', e);
    });
    filmReq.open('GET', filmURL);
    filmReq.send();
});
firstReq.addEventListener('error', (e) => {
    console.log('ERROR!!!!!!');
});
firstReq.open('GET', 'https://swapi.dev/api/planets/');
firstReq.send();
console.log('Request Sent!');


fetch("https://swapi.dev/api/planets/").
then((response) =>{
    if (!response.ok) {
        throw new Error(`Status code error : ${response.status}`);
    }
    return response.json();
}).then((data) => {
    const filmURL = data.results[0].films[0];
    // promise
    return fetch(filmURL);
}).then((response) =>{
    if(!response.ok){
        throw new Error(`Status code error : ${response.status}`);
    }
    return  response.json();
}).then((data)=>{
    console.log(data.title);
}).catch((err) => {
    console.log('Something went wrong with fetch');
    console.log(err);

});
// skip json parse, only  202 code will be passed down 
axios.get("https://swapi.dev/api/planets/")
    .then(({data})=>{

        for (let info of data.results){
            console.log(info.name);
        }
    })
    .catch((err)=>{
        console.log(err);
    });