const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");
const latitudeInput = document.querySelector("#latitude");
const longitudeInput = document.querySelector("#longitude");

const apiKey = "eebc6880-891f-11eb-8b57-8dbc5772db39";  // take yours !!!

let url = `https://app.geocodeapi.io/api/v1/reverse?apikey=`;


const whereAmI = function (lat, lng) {
	let lastURL = url + apiKey + `&point.lat=` + lat + `&point.lon=` + lng;
	
    let flagURL = "https://restcountries.eu/rest/v2/name/";
	
	fetch(lastURL)
        .then( (response)=> {
            if(response.ok){
                console.log(response)
                return response.json();
            } else {
                return new Error(`request failed!!!`)
            }
        })
        .then( data => {
            const region = data.features[0].properties.region;
            const country = data.features[0].properties.country;
            console.log(`You are in ${region}, country of ${country}!`);
		
            
});
}
//whereAmI(36.991 , 35.330)
	
	
  
};


btn.addEventListener("click", displayCountry);
