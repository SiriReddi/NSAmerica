$(document).ready(function() {
 const flights = document.getElementById("Flights");
 const accomodations = document.getElementById("Accomodations");
 const restaurants = document.getElementById("Restaurants");
 const mainattractions = document.getElementById("MainAttractions");
 const tours = document.getElementById("Tours");
 const shopping = document.getElementById("Shopping");
 const home = document.getElementById("City");
 const riodejanerio = document.getElementById("Rio de Janerio");
 const riodejanerio2 = document.getElementById("Rio De Janerio");
 const bahia = document.getElementById("Bahia");
 const bahia2 = document.getElementById("Bahia City");
 const fozdoiguaca = document.getElementById("Foz do Iguacu");

//Create a function that when a picture is clicked on
//it was call a function in the javascript
//that passes in the name of the picture clicked on
// Make sure to change the links to match each city


// this function changeCityName  calls the  function city when the picture is clicked
// when the picture is clicked the home button will changed to the city that it is linked to and the links below will change to fit what is going on in each city.
function changeCityName(city) {
    home.innerHTML=(city);
}
//
riodejanerio.addEventListener("click",function(){
    changeCityName("Rio de Janerio");

    flights.setAttribute("href", "https://brazilianairlines.com/?gclid=Cj0KCQjwuNbsBRC-ARIsAAzITueXcUvorGBBGg3H2pKWz1ffauOg9BGpgO5ciEeDcvuDgJZo1MdA61UaAkqKEALw_wcB");
    accomodations.setAttribute("href", "https://www.touropia.com/best-places-to-stay-in-brazil/");
    restaurants.setAttribute("href", "https://www.tripadvisor.com/Restaurants-g303631-Sao_Paulo_State_of_Sao_Paulo.html");
    mainattractions.setAttribute("href", "https://www.planetware.com/tourist-attractions/brazil-bra.htm");
    tours.setAttribute("href", "https://www.tourradar.com/d/brazil");
    shopping.setAttribute("href", "https://traveltriangle.com/blog/shopping-in-brazil/");
    let cityName = "Rio De Janeiro, Brazil"
    apiWeather(cityName);
});

riodejanerio2.addEventListener("click",function(){
    changeCityName("Rio De Janerio");

    flights.setAttribute("href", "https://brazilianairlines.com/?gclid=Cj0KCQjwuNbsBRC-ARIsAAzITueXcUvorGBBGg3H2pKWz1ffauOg9BGpgO5ciEeDcvuDgJZo1MdA61UaAkqKEALw_wcB");
    accomodations.setAttribute("href", "https://www.touropia.com/best-places-to-stay-in-brazil/");
    restaurants.setAttribute("href", "https://www.tripadvisor.com/Restaurants-g303631-Sao_Paulo_State_of_Sao_Paulo.html");
    mainattractions.setAttribute("href", "https://www.planetware.com/tourist-attractions/brazil-bra.htm");
    tours.setAttribute("href", "https://www.tourradar.com/d/brazil");
    shopping.setAttribute("href", "https://traveltriangle.com/blog/shopping-in-brazil/");
    let cityName = "Rio De Janeiro, Brazil"
    apiWeather(cityName);
});

bahia2.addEventListener("click", function(){
    changeCityName("Bahia City");

    flights.setAttribute("href", "https://brazilianairlines.com/?gclid=Cj0KCQjwuNbsBRC-ARIsAAzITueXcUvorGBBGg3H2pKWz1ffauOg9BGpgO5ciEeDcvuDgJZo1MdA61UaAkqKEALw_wcB");
    accomodations.setAttribute("href", "https://www.touropia.com/best-places-to-stay-in-brazil/");
    restaurants.setAttribute("href", "https://www.tripadvisor.com/Restaurants-g303631-Sao_Paulo_State_of_Sao_Paulo.html");
    mainattractions.setAttribute("href", "https://www.planetware.com/tourist-attractions/brazil-bra.htm");
    tours.setAttribute("href", "https://www.tourradar.com/d/brazil");
    shopping.setAttribute("href", "https://traveltriangle.com/blog/shopping-in-brazil/");
    let cityName = "Bahia, Brazil"
    apiWeather(cityName);
});

bahia.addEventListener("click", function(){
    changeCityName("Bahia");

    flights.setAttribute("href", "https://brazilianairlines.com/?gclid=Cj0KCQjwuNbsBRC-ARIsAAzITueXcUvorGBBGg3H2pKWz1ffauOg9BGpgO5ciEeDcvuDgJZo1MdA61UaAkqKEALw_wcB");
    accomodations.setAttribute("href", "https://www.touropia.com/best-places-to-stay-in-brazil/");
    restaurants.setAttribute("href", "https://www.tripadvisor.com/Restaurants-g303631-Sao_Paulo_State_of_Sao_Paulo.html");
    mainattractions.setAttribute("href", "https://www.planetware.com/tourist-attractions/brazil-bra.htm");
    tours.setAttribute("href", "https://www.tourradar.com/d/brazil");
    shopping.setAttribute("href", "https://traveltriangle.com/blog/shopping-in-brazil/");
    let cityName = "Bahia, Brazil";
    apiWeather(cityName);
});

fozdoiguaca.addEventListener("click", function(){
    changeCityName("Foz do Iguacu");
    flights.setAttribute("href", "https://brazilianairlines.com/?gclid=Cj0KCQjwuNbsBRC-ARIsAAzITueXcUvorGBBGg3H2pKWz1ffauOg9BGpgO5ciEeDcvuDgJZo1MdA61UaAkqKEALw_wcB");
    accomodations.setAttribute("href", "https://www.touropia.com/best-places-to-stay-in-brazil/");
    restaurants.setAttribute("href", "https://www.tripadvisor.com/Restaurants-g303631-Sao_Paulo_State_of_Sao_Paulo.html");
    mainattractions.setAttribute("href", "https://www.planetware.com/tourist-attractions/brazil-bra.htm");
    tours.setAttribute("href", "https://www.tourradar.com/d/brazil");
    shopping.setAttribute("href", "https://traveltriangle.com/blog/shopping-in-brazil/");
    let cityName = "Foz do Iguacu, Brazil";
    apiWeather(cityName);
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
    $.getJSON(`https://api.exchangeratesapi.io/latest?base=BRL&symbols=${userCurrency}`, function(data){
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
        $("#hotelBrazilCost").html(`R$${usHotelPrice}`)
        $('#foodBrazilCost').html(`R$${usFoodCost}`)
        $('#entertainmentBrazilCost').html(`R$${usEntertainmentCost}`)
        $('#transportationBrazilCost').html(`R$${usTransportationCost}`)

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



