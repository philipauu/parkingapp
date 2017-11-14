console.log('loaded front_end.js');

$(document).ready(initMap);

var places = [{
    lat: -22.3964,
    lng: 114.1095
}]

function initMap() {
    var uluru = {
        lat: -22.3964,
        lng: 114.1095
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: uluru
    });

    for (var counter = 0; counter < places.length; counter++) {
        var marker = new google.maps.Marker({
            position: places[counter],
            map: map
        });
    }
}