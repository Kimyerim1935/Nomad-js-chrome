function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const API_KEY = "a37c799a1d407e868db800bb47a76cda";

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`;

    fetch(url)
        .then((Response) => Response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");

            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        });
}

function onGeoError() {
    alert("Can't find you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
