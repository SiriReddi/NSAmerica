$(document).ready(function() {
const florida = document.getElementById("Florida");
const newYork = document.getElementById("NewYork");
const losangeles = document.getElementById("losangeles");
const sandiego= document.getElementById("sandiego");
const dc = document.getElementById("dc");
const vegas = document.getElementById("vegas");
const alaska = document.getElementById("alaska");
const hawaii = document.getElementById("hawaii");
const homePanel = document.getElementById("city");
const adventure= document.getElementById("link");
const attraction = document.getElementById("attractions");
const shop = document.getElementById("shop");
const food = document.getElementById("restaurant");
const stay = document.getElementById("stay");



function changeCityName(city){
   homePanel.innerHTML=(city);
}
florida.addEventListener("click",function(){
	changeCityName("Florida");
	adventure.setAttribute('href',"https://www.viator.com/Florida-tours/Outdoor-Activities/d276-g9");
	attraction.setAttribute('href',"https://www.planetware.com/tourist-attractions/florida-usfl.htm");
	shop.setAttribute('href',"https://www.visitflorida.com/en-us/things-to-do/shopping/florida-shopping-malls-outlets.html");
	food.setAttribute('href',"https://www.onlyinyourstate.com/florida/restaurant-bucket-list-fl/");
	stay.setAttribute('href',"https://www.booking.com/region/us/florida.html");
	let cityName = "Florida,US"
	apiWeather(cityName)
});
newYork.addEventListener("click",function(){
	changeCityName("NewYork");
	adventure.setAttribute('href',"https://www.getyourguide.com/new-york-city-l59");
	attraction.setAttribute('href',"https://www.timeout.com/newyork/attractions/new-york-attractions");
	shop.setAttribute('href',"https://loving-newyork.com/shopping-in-new-york/");
	food.setAttribute('href',"https://www.thrillist.com/eat/new-york/most-famous-nyc-restaurants");
	stay.setAttribute('href',"https://www.booking.com/city/us/new-york.html");
	let cityName = "New York, US";
	apiWeather(cityName)
});
losangeles.addEventListener("click",function(){
	changeCityName("Los Angeles");
	adventure.setAttribute('href',"https://www.viator.com/Los-Angeles-tours/Outdoor-Activities/d645-g9");
	attraction.setAttribute('href',"https://theculturetrip.com/north-america/usa/california/articles/20-must-visit-attractions-in-los-angeles/");
	shop.setAttribute('href',"https://www.discoverlosangeles.com/things-to-do/discover-the-best-shopping-centers-in-los-angeles");
	food.setAttribute('href',"https://la.eater.com/maps/best-los-angeles-restaurants-eater-38-essential");
	stay.setAttribute('href',"https://www.booking.com/city/us/los-angeles.html");
	let cityName = "Los Angeles, US";
	apiWeather(cityName)
});
sandiego.addEventListener("click",function(){
	changeCityName("San Diego");
	adventure.setAttribute('href',"https://www.viator.com/San-Diego-tours/Outdoor-Activities/d736-g9");
	attraction.setAttribute('href',"https://www.thecrazytourist.com/top-25-things-to-do-in-san-diego/");
	shop.setAttribute('href',"https://www.sandiego.org/articles/shopping/list-of-outlet-malls-and-shopping-centers-in-san-diego.aspx");
	food.setAttribute('href',"https://www.thrillist.com/eat/san-diego/best-restaurants-san-diego");
	stay.setAttribute('href',"https://www.booking.com/city/us/san-diego.html");
	let cityName = "San Diego, US";
	apiWeather(cityName)
});
dc.addEventListener("click",function(){
	changeCityName("Washington DC");
	adventure.setAttribute('href',"https://www.viator.com/Washington-DC/d657-ttd");
	attraction.setAttribute('href',"https://washington.org/things-do-washington-dc");
	shop.setAttribute('href',"https://washington.org/dc-guide-to/dcs-shopping-districts");
	food.setAttribute('href',"https://washington.org/visit-dc/hot-new-restaurants-try-now-washington-dc");
	stay.setAttribute('href',"https://www.booking.com/city/us/washington.html");
	let cityName = "District Of Columbia, US";
	apiWeather(cityName)
});
vegas.addEventListener("click",function(){
	changeCityName("Las Vegas");
	adventure.setAttribute('href',"https://www.viator.com/Las-Vegas/d684-ttd");
	attraction.setAttribute('href',"https://www.planetware.com/tourist-attractions-/las-vegas-us-nv-lv.htm");
	shop.setAttribute('href',"https://www.lavishvegas.com/news/7-best-places-go-shopping-las-vegas-12676.html");
	food.setAttribute('href',"https://vegas.eater.com/maps/best-restaurants-las-vegas-38-map");
	stay.setAttribute('href',"https://www.booking.com/city/us/las-vegas.html");
	let cityName = "Las Vegas, US";
	apiWeather(cityName)
});
alaska.addEventListener("click",function(){
	changeCityName("Alaska");
	adventure.setAttribute('href',"https://www.viator.com/Alaska/d270-ttd");
	attraction.setAttribute('href',"https://www.planetware.com/tourist-attractions/alaska-usak.htm");
	shop.setAttribute('href',"https://www.alaska.org/destination/anchorage/shopping-malls");
	food.setAttribute('href',"https://www.alaska.org/dining-and-nightlife");
	stay.setAttribute('href',"https://www.booking.com/region/us/alaska.html");
	let cityName = "Alaska, US";
	apiWeather(cityName)
});
hawaii.addEventListener("click",function(){
	changeCityName("Hawaii");
	adventure.setAttribute('href',"https://www.viator.com/Hawaii/d278-ttd");
	attraction.setAttribute('href',"https://www.planetware.com/tourist-attractions/hawaii-ushi.htm");
	shop.setAttribute('href',"https://www.best-of-oahu.com/shopping-on-oahu.html");
	food.setAttribute('href',"https://www.onlyinyourstate.com/hawaii/famous-restaurants-worth-waiting-for-hi/");
	stay.setAttribute('href',"https://www.booking.com/region/us/hawaii.html");
	let cityName = "Hawaii, US";
	apiWeather(cityName)
});


    //Populates API information on pressing the submit button
    //Fetches the 5 day weather forecast API
    const apiWeather = (cityName) => {$.getJSON(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=imperial&APPID=d5bfe8a65a2dce437fd2e6c635989395`, function(data){

        //Gets the current temperature
        const currentDayTemp = data.list[0].main.temp
        //Gets the current sky conditions
        const currentDayPrecipitation = data.list[0].weather[0].main
        // Gets the current humidity level
        const currentDayHumidity = data.list[0].main.humidity
        //Gets the current wind speed
        const currentDayWind = data.list[0].wind.speed
        //Gets the current day's low temperature
        const currentDayLow = data.list[0].main.temp_min
        //Gets the current day's high temperature
        const currentDayHigh = data.list[0].main.temp_max

        //The following methods just input the variable values into the document

        $("#cityName").html(cityName)
        $("#day1").html(`${Math.round(currentDayTemp)}°`)
        $("#precipitation").html(currentDayPrecipitation)
        $("#humidity").html(` humidity: ${currentDayHumidity}%`)
        $("#windSpeed").html(` wind: ${currentDayWind}mph`)
        $("#highLow").html(`${Math.round(currentDayLow)}°/${Math.round(currentDayHigh)}°`)

        //The API lists temperatures per 3 hour interval, meaning 8 indexes per day, so each day's index list retrieval increments by 8, then the temperature is rounded.
        const secondDayTemp = Math.round(data.list[8].main.temp)
        const thirdDayTemp = Math.round(data.list[16].main.temp)
        const fourthDayTemp = Math.round(data.list[24].main.temp)
        const fifthDayTemp = Math.round(data.list[32].main.temp)

        //This long-winded series of code blocks just caluate the date using unix timecodes, converts that date into a string, splits it into an array, then takes the first index of that array, which is the three-letter day abbreviation.
        secondDayDate = new Date(data.list[8].dt*1000);
        dateToString = secondDayDate.toString();
        dateToArray = dateToString.split(" ")
        secondDayName = dateToArray[0]

        thirdDayDate = new Date(data.list[16].dt*1000);
        dateToString = thirdDayDate.toString();
        dateToArray = dateToString.split(" ")
        thirdDayName = dateToArray[0]
        
        fourthDayDate = new Date(data.list[24].dt*1000);
        dateToString = fourthDayDate.toString();
        dateToArray = dateToString.split(" ")
        fourthDayName = dateToArray[0]
        
        fifthDayDate = new Date(data.list[32].dt*1000);
        dateToString = fifthDayDate.toString();
        dateToArray = dateToString.split(" ")
        fifthDayName = dateToArray[0]

        //Again, appends each variable to DOM. Creates a span and break tag to place day under temperature
        $("#day2").html(`${secondDayTemp}°<span class="days"></br>${secondDayName}</span>`)
        $("#day3").html(`${thirdDayTemp}°<span class="days"></br>${thirdDayName}</span>`)
        $("#day4").html(`${fourthDayTemp}°<span class="days"></br>${fourthDayName}</span>`)
        $("#day5").html(`${fifthDayTemp}°<span class="days"></br>${fifthDayName}</span>`)



    });
}

//Adds event listener for submitting data, when data is submit, the userVariable data is created and the function is run
currencyForm.addEventListener('submit', exchangeSubmit)

function exchangeSubmit(e) {
    e.preventDefault();
    let userCurrency = $("#userCurrency").val();
    currencyExchange(userCurrency);
}

const currencyExchange = (userCurrency) => {
    $.getJSON(`https://api.exchangeratesapi.io/latest?base=USD&symbols=${userCurrency}`, function(data){
        //Pulling data from both the API for currency rate and the user-input from the HTML document for traveler number and nights.
        const travelerNumber = $("#travelerNumber").val();
        const nightsNumber = $("#nightsNumber").val();
        const travelerCurrency = data.rates[userCurrency]

        //Calculating the cost of each category based on general average price statistics.
        const usHotelPrice = 150 * (nightsNumber * travelerNumber)
        const usFoodCost = 82 * (travelerNumber * nightsNumber)
        const usEntertainmentCost = 150 * (travelerNumber * nightsNumber)
        const usTransportationCost = 1000 + (60 * (travelerNumber * nightsNumber))
        
        //Adding cost calculations to HTML document
        $("#costTab").html(`Cost in ${userCurrency}`)
        $("#hotelUsCost").html(`$${usHotelPrice}`)
        $('#foodUsCost').html(`$${usFoodCost}`)
        $('#entertainmentUsCost').html(`$${usEntertainmentCost}`)
        $('#transportationUsCost').html(`$${usTransportationCost}`)

        //Calculates the user cost in their native currency by multiplying it times USD
        const userHotelPrice = `${(usHotelPrice * travelerCurrency).toFixed(2)}${userCurrency}`
        const userFoodCost = `${(usFoodCost * travelerCurrency).toFixed(2)}${userCurrency}`
        const userEntertainmentCost = `${(usEntertainmentCost * travelerCurrency).toFixed(2)}${userCurrency}`
        const userTransportationCost = `${(usTransportationCost * travelerCurrency).toFixed(2)}${userCurrency}`

        //Adding cost calculations to HTML document
        $("#hotelUserCost").html(userHotelPrice)
        $("#foodUserCost").html(userFoodCost)
        $("#entertainmentUserCost").html(userEntertainmentCost)
        $("#transportationUserCost").html(userTransportationCost)
    })
} 

});

