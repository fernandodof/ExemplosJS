function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(initializeMap);
    } else {
        document.getElementById('mapa').innerHTML = "Geolocalização não suportada poelo nevegador";
    }
}

function initializeMap(position) {
    var myCenter = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    var marker = new google.maps.Marker({
        position: myCenter,
        title: 'Você está aqui'
    });

    var mapProp = {
        center: myCenter,
        zoom: 16
    };

    var map = new google.maps.Map(document.getElementById('mapa'), mapProp);
    marker.setMap(map);

    google.maps.event.addListener(marker, 'click', function () {

        infowindow.setContent(contentString);
        infowindow.open(map, marker);
    });

}
;

getLocation();