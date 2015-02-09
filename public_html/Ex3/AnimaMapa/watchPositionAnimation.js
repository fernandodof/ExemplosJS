function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(initializeMap);
    } else {
        document.getElementById('mapa').innerHTML = "Geolocalização não suportada poelo nevegador";
    }
}

var map;
var marker;

function initializeMap(position) {
    var myCenter = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

    if (map === undefined) {
        var mapProp = {
            center: myCenter,
            zoom: 16
        };
        map = new google.maps.Map(document.getElementById('mapa'), mapProp);
    }

    var image = new google.maps.MarkerImage(
            'http://plebeosaur.us/etc/map/bluedot_retina.png',
            null, // size
            null, // origin
            new google.maps.Point(8, 8), // anchor (move to center of marker)
            new google.maps.Size(17, 17) // scaled size (required for Retina display icon)
            );


    if (marker === undefined) {
        marker = new google.maps.Marker({
            position: myCenter,
            title: 'Você está aqui',
            map: map,
            icon : image,
            optimized: false,
            flat: true,
            visible: true
        });
    } else {
        marker.setMap(null);
        marker.setMap(map);
        marker.setPosition(myCenter);
        map.panTo(myCenter);
    }

    document.getElementById('info').innerHTML += "<p>" + position.coords.latitude + "," + position.coords.longitude + "</p>";

}

getLocation();