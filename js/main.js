window.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM entièrement chargé et analysé! :)");
    initializeIcone()
});
// https://www.google.com/maps/@45.8651633,-0.3220895,21z?hl=fr

// https://francois-parrou.com/blog/carte-leaflet/
// https://leafletjs.com/examples/quick-start/

function initializeSimple() {
    var map = L.map('map').setView([45.8651633, -0.3220895], 18); 

    var osmLayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', { 
        attribution: '© OpenStreetMap et O\'Clock contributors',
        // Plus le zoom est grand plus la carte est précise, 18 étant le max de zzom
        maxZoom: 18 
    });

    map.addLayer(osmLayer);
}

// https://www.datavis.fr/index.php?page=leaflet-firstmap
// https://www.iconspng.com/image/20967/red-map-locator-marker
function initializeIcone() {
    var map = L.map('map').setView([45.8651633, -0.3220895], 18); 

    var customIcon = L.icon({
        iconUrl: 'img/red-map-locator-marker.png',
        iconSize:     [32, 64], // taille de l'icone
        iconAnchor:   [32, 64], // point de l'icone qui correspondra à la position du marker
        popupAnchor:  [-3, -76] // point depuis lequel la popup doit s'ouvrir relativement à l'iconAnchor
    });

    var osmLayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', { 
        attribution: '© OpenStreetMap et O\'Clock contributors',
        // Plus le zoom est grand plus la carte est précise, 18 étant le max de zzom
        maxZoom: 18 
    });

    L.marker([45.8651633, -0.3220895], {icon: customIcon}).addTo(map).bindTooltip("Je n'habite pas ici ! :)", {permanent: true, direction: 'bottom'});
    map.addLayer(osmLayer);
}