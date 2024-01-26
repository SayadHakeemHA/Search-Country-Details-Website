let btn = document.querySelector('button')
console.log(btn);
let countriescontainer = document.querySelector('.countriescontainer')

//---------------------------------
// renderData or create card

function renderCountrydata(data){
    let lang = Object.values(data.languages)
//    console.log(lang);
let conLang = lang.join(' ')
// console.log(conLang);

   let curr = Object.values(data.currencies)[0]
//    console.log(curr);

let html =`
<section class="country">
    <img height="150px"   src=${data?.flags?.png} alt="">
    <h1>Country</h1>
    <h3>Name = ${data?.name?.official} </h3>
    <h3>Language = ${conLang}</h3>
    <h3>Currency =  ${curr?.symbol} ${curr?.name}  </h3>
    <h3>Population = ${Math.round(data?.population/1000000)} mill</h3>
</section>
`
countriescontainer.insertAdjacentHTML('beforeend',html)
}

//renderNeighbour data
function renderNeighbourdata(data){
    let lang = Object.values(data.languages)
//    console.log(lang);
let conLang = lang.join(' ')
// console.log(conLang);

   let curr = Object.values(data.currencies)[0]
//    console.log(curr);

let html =`
<section class="country">
   
    <img height="150px"   src=${data?.flags?.png} alt="">
    <h1>Neighbour</h1>
    <h3>Name = ${data?.name?.official} </h3>
    <h3>Language = ${conLang}</h3>
    <h3>Currency =  ${curr?.symbol} ${curr?.name}  </h3>
    <h3>Population = ${Math.round(data?.population/1000000)} mill</h3>
</section>
`
countriescontainer.insertAdjacentHTML('beforeend',html)
}

//Fetching neighbourData

//Fetching countryData 
function getCountry(para){

console.log(para);

fetch(`https://restcountries.com/v3.1/name/${para}`)
.then(res=>res.json()) // data parsed
.then(data=>{
    console.log(data)
    // render country
    renderCountrydata( data[0] )

// render neighbour data
let neighbour = data[0]?.borders?.[0]
console.log(neighbour);

fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
.then(res=>res.json()) // data parsed
.then(data=>{
    console.log(data);
    // renderNeighbour
    renderNeighbourdata(data[0])
})
})

}

// onclick function
btn.addEventListener('click',getData)
function getData(){
    let inp = document.getElementById('inp')
    console.log(inp.value);
    getCountry(inp.value)
}


// fetch data = getCountry
// render country data = renderCountrydata
// take data from country , and fetch  neighbour
// render neighbour country  = renderNeighbor

