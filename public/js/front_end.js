console.log('loaded front_end.js');

$(document).ready(initMap);

var default_location = {
    lat: 22.3964,
    lng: 114.1095
}

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: default_location
    });

    var script = document.createElement('script');
    script.src = 'https://api.data.gov.hk/v1/carpark-info-vacancy';
    document.getElementsByTagName('head')[0].appendChild(script);

    for (var counter = 0; counter < data.results.length; counter++) {
        var location = {
            lat: data.results[counter].latitude,
            lng: data.results[counter].longitude
        }

        var marker = new google.maps.Marker({

            position: location,
            map: map
        });
    }
}