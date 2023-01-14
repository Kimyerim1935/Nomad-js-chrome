function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const API_KEY = "a37c799a1d407e868db800bb47a76cda";

    console.log("you live in", lat, lng);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`;
    console.log(url);
}

function onGeoError() {
    alert("Can't find you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
