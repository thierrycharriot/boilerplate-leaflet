window.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM entièrement chargé et analysé! :)");
    initializeSimple()
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