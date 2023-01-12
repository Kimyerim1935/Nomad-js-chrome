function onGeoOk() {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;

    console.log("you live in", lat, lng);
}

function onGeoError() {}

navigator.geolocation.getCurrentPosition();
