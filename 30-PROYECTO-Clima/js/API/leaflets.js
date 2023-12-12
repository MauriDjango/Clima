var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18, attribution: '[insert correct attribution here!]' });

var clouds = L.OWM.clouds({showLegend: false, opacity: 0.5, appId: 'YOUR_OWN_APPID'});
var city = L.OWM.current({intervall: 15, lang: 'de'});

var map = L.map('map', { center: new L.LatLng(51.5, 10), zoom: 10, layers: [osm] });
var baseMaps = { "OSM Standard": osm };
var overlayMaps = { "Clouds": clouds, "Cities": city };
var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);

