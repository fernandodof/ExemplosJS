function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        document.getElementById('mapa').innerHTML = "Geolocalização não suportada poelo nevegador";
    }
}
function showPosition(position) {
 
    var latlon = position.coords.latitude + "," + position.coords.longitude;

    var img_url = "http://maps.googleapis.com/maps/api/staticmap?center="
    +latlon+"&zoom=16&size=640x480&sensor=false";
    document.getElementById('mapa').innerHTML = "<img src='"+img_url+"'>";
    
}

getLocation();