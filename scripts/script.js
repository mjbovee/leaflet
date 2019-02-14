var mymap = L.map('mapid').setView([35.084, -106.618], 13)

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: token
}).addTo(mymap)

var marker = L.marker([35.084, -106.618]).addTo(mymap)

var circle = L.circle([35.084, -106.652], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(mymap)

var polygon = L.polygon([
    [35.085262, -106.635420],
    [35.089406, -106.634647],
    [35.086882, -106.625600],
    [35.084081, -106.626297]
]).addTo(mymap)

marker.bindPopup("<b>Everyone's a Lobo</b>")

var popup = L.popup()

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap)
}

mymap.on('click', onMapClick)