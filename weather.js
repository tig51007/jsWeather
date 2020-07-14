const weather = document.querySelector(".js-weather");
const API_KEY="1a8366f67b51af6cbd9096a643bb1df3";
const COORDS = 'coords';
function getWeather(lat,lon){
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`).then(function(response){
        return response.json();
    }).then(function(json){
        console.log(json);
        const temperature = json.main.temp;
        const place = json.name;
        const country = json.sys.country;
        const weatherMain = json.weather[0].main;
        
        weather.innerText=`현재기온: ${Math.floor(temperature)}\n지역: ${place}\n나라: ${country}\n날씨: ${weatherMain}`//html기온표시
    })//then은 api가 무사히 호출됫을때 쓰여지는 함수
}
function saveCoords(coordsObj){
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}
function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj={
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude,longitude)
}
function handleGeoError(){
    console.log("error");   
}
function askForCoord(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces,handleGeoError);
}
function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords===null){
        askForCoord();
    }else{
        const parseCoords=JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude,parseCoords.longitude);
    }
}
function init(){
    loadCoords();
}
init();