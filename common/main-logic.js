// 1. GLOBAL STYLES
const styles = {
    dormStyle: { color: "#2c3e50", fillColor: "#3498db", weight: 2 },
    academicStyle: { color: "#c0392b", fillColor: "#e74c3c", weight: 2 },
    classStyle: { color: "#1b5e20", fillColor: "#4caf50", weight: 2 },
    defaultStyle: { color: "#333", fillColor: "#999", weight: 2 },
    commercialStyle: { color: "#d4af37", fillColor: "#f1c40f", weight: 2 }
};

// 2. INITIALIZE MAP (Max Zoom set to 19)
var map = L.map('map', {
    maxZoom: 19
}).setView(campusData.center, campusData.zoom);

// Satellite Base Layer
var satellite = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    maxZoom: 19,
    attribution: 'Tiles &copy; Esri'
}).addTo(map);

// 3. BUILDING GENERATOR 
var activePolygon = null; 

function renderBuildings() {
    campusData.buildings.forEach(function(bldg) {
        var bStyle = styles[bldg.type + "Style"] || styles.defaultStyle;

        var polygon = L.polygon(bldg.coords, {
            color: bStyle.color,
            fillColor: bStyle.fillColor,
            fillOpacity: 0, 
            opacity: 0,     
            weight: 2
        }).addTo(map);

        // CLICK EVENT: Zoom, Center, and Show
        polygon.on('click', function(e) {
            // Reset previous building if one was open
            if (activePolygon) {
                activePolygon.setStyle({ fillOpacity: 0, opacity: 0 });
            }

            // 1. Make the building visible
            this.setStyle({ fillOpacity: 0.5, opacity: 1 });
            activePolygon = this;

            // 2. ZOOM AND CENTER: Fly to the building at max zoom
            // getBounds().getCenter() ensures we hit the middle of the building
            map.flyTo(this.getBounds().getCenter(), 19, {
                animate: true,
                duration: 1.5 // Seconds for the smooth zoom effect
            });

            // 3. Update drawer content
            document.getElementById('drawer-title').innerText = bldg.name;
            document.getElementById('drawer-content').innerHTML = bldg.details;
            document.getElementById('drawer').classList.add('active');
        });
    });
}

// 4. DRAWER CONTROLS (Hides color on close)
function closeDrawer() {
    // Hide drawer UI
    document.getElementById('drawer').classList.remove('active');

    // Hide colored box and clear active reference
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
        userMarker = L.circleMarker(e.latlng, { radius: 8, fillColor: "#007AFF", color: "white", weight: 2, fillOpacity: 1 }).addTo(map);
        userCircle = L.circle(e.latlng, radius).addTo(map);
    } else {
        userMarker.setLatLng(e.latlng);
        userCircle.setLatLng(e.latlng).setRadius(radius);
    }
}

function onLocationError(e) {
    alert("Location access denied.");
}

map.on('locationfound', onLocationFound);
map.on('locationerror', onLocationError);

function toggleTracking() {
    map.locate({ watch: true, enableHighAccuracy: true, setView: true, maxZoom: 18 });
}

// 6. STARTUP
window.onload = function() {
    renderBuildings();
};

// Layer Control
var streetMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
var baseMaps = { "Satellite": satellite, "Street Map": streetMap };
L.control.layers(baseMaps).addTo(map);
