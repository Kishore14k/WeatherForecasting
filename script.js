let cityname=document.querySelector('.cityname')
let btn=document.querySelector('.btn')

btn.addEventListener('click',()=>{
    fetch(`https://api.weatherapi.com/v1/current.json?key=402efa4c8fd642d690184256240207&q=${cityname.value}&aqi=no`)
    .then(res=>res.json())
    .then(json=>assign(json))
    document.querySelector('.cityname').value=""
})

function assign(json){
    let params=json
    document.querySelector('.displaycityname').innerHTML = `<i class="fa-solid fa-city"></i> ${params.location.name}`;
    document.querySelector('.temp').innerHTML = `<i class="fa-solid fa-temperature-half"></i> ${params.current.temp_c}°C`;
    document.querySelector('.fahrenheit').innerHTML = `<i class="fa-solid fa-temperature-half"></i> ${params.current.temp_f}°F`;
    document.querySelector('.windspeed').innerHTML = `<i class="fa-solid fa-wind"></i> ${params.current.wind_kph} km/h`;
}