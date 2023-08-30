let key = "cebcd482eda57fa9a6714c1c2ba91885"


function screen(data){
    console.log(data)
    document.querySelector(".city").innerHTML = "Weather in " + data.name
    document.querySelector(".temp").innerHTML =  Math.floor(data.main.temp) + "°F"
    document.querySelector(".description").innerHTML = data.weather[0].description
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png"
}

async function searchCity(city){
    let data = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + 
    city + 
    "&appid=" + 
    key 
    )
    .then(response => response.json())

    screen(data)
}


function clickButton(){
   let city = document.querySelector(".city-input").value

   searchCity(city)
}