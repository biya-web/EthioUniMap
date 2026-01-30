// 1. GLOBAL STYLES (Colors for the buildings when clicked)
const styles = {
    dormStyle: { color: "#2c3e50", fillColor: "#3498db", weight: 2 },
    academicStyle: { color: "#c0392b", fillColor: "#e74c3c", weight: 2 },
    classStyle: { color: "#1b5e20", fillColor: "#4caf50", weight: 2 },
    defaultStyle: { color: "#333", fillColor: "#999", weight: 2 },
    commercialStyle: { color: "#d4af37", fillColor: "#f1c40f", weight: 2 }
};

// 2. INITIALIZE MAP
// Uses center and zoom levels defined in your data.js
var map = L.map('map').setView(campusData.center, campusData.zoom);

// Satellite Base Layer (Esri)
var satellite = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    maxZoom: 19,
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri'
}).addTo(map);

// Standard Street Map Layer (Optional toggle)
var streetMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');

var baseMaps = {
    "Satellite": satellite,
    "Street Map": streetMap
};

L.control.layers(baseMaps).addTo(map);
L.control.scale({ imperial: false }).addTo(map);

// 3. BUILDING GENERATOR 
var activePolygon = null; // Stores the currently visible building

function renderBuildings() {
    campusData.buildings.forEach(function(bldg) {
        // Select style based on type
        var bStyle = styles[bldg.type + "Style"] || styles.defaultStyle;

        // Create the polygon but keep it invisible initially
        var polygon = L.polygon(bldg.coords, {
            color: bStyle.color,
            fillColor: bStyle.fillColor,
            fillOpacity: 0, // Hidden until click
            opacity: 0,     // Hidden until click
            weight: 2
        }).addTo(map);

        // Click Event: Show the building and open the drawer
        polygon.on('click', function() {
            // Hide the previous building if one was open
            if (activePolygon) {
                activePolygon.setStyle({ fillOpacity: 0, opacity: 0 });
            }

            // Make the clicked building visible
            this.setStyle({
                fillOpacity: 0.5,
                opacity: 1
            });
            activePolygon = this;

            // Update drawer content and slide it out
            document.getElementById('drawer-title').innerText = bldg.name;
            document.getElementById('drawer-content').innerHTML = bldg.details;
            document.getElementById('drawer').classList.add('active');
        });
    });
}

// 4. DRAWER CONTROLS
function closeDrawer() {
    // Hide the drawer UI
    document.getElementById('drawer').classList.remove('active');

    // Hide the building color on the map
    if (activePolygon) {
        activePolygon.setStyle({ fillOpacity: 0, opacity: 0 });
        activePolygon = null;
    }
}

// 5. GPS / LOCATION TRACKING
var userMarker, userCircle;

function onLocationFound(e) {
    var radius = e.accuracy / 2;

    if (!userMarker) {
        userMarker = L.circleMarker(e.latlng, {
            radius: 8,
            fillColor: "#007AFF",
            color: "white",
            weight: 2,
            opacity: 1,
            fillOpacity: 1
        }).addTo(map);
        userCircle = L.circle(e.latlng, radius).addTo(map);
    } else {
        userMarker.setLatLng(e.latlng);
        userCircle.setLatLng(e.latlng).setRadius(radius);
    }
}

function onLocationError(e) {
    alert("Location access denied. Please use HTTPS and enable GPS.");
}

map.on('locationfound', onLocationFound);
map.on('locationerror', onLocationError);

function toggleTracking() {
    map.locate({ 
        watch: true, 
        enableHighAccuracy: true, 
        setView: true, 
        maxZoom: 18 
    });
}

// 6. STARTUP
window.onload = function() {
    renderBuildings();
};
