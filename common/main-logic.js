// 1. GLOBAL STYLES (One place to change colors for all maps)
const styles = {
    dormStyle: { color: "#2c3e50", fillColor: "#3498db", fillOpacity: 0.6, weight: 2 },
    academicStyle: { color: "#c0392b", fillColor: "#e74c3c", fillOpacity: 0.6, weight: 2 },
    greenStyle: { color: "#1b5e20", fillColor: "#4caf50", fillOpacity: 0.6, weight: 2 },
    defaultStyle: { color: "#333", fillColor: "#999", fillOpacity: 0.5, weight: 2 },
    commercialStyle: { color: "#d4af37", fillColor: "#f1c40f", fillOpacity: 0.6, weight: 2 }
};

// 2. INITIALIZE MAP (Uses campusData from your data.js file)
var map = L.map('map').setView(campusData.center, campusData.zoom);
// --- SATELLITE LAYER ---
var satellite = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    maxZoom: 19,
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
}).addTo(map);

// 3. BUILDING GENERATOR (Loops through the data and draws polygons)
function renderBuildings() {
    campusData.buildings.forEach(function(bldg) {
        // Select style based on type, fallback to default
        var bStyle = styles[bldg.type + "Style"] || styles.defaultStyle;

        // Create the polygon
        var polygon = L.polygon(bldg.coords, bStyle).addTo(map);

        // Click event to show details (you can link this to your info drawer)
        
        // Inside renderBuildings() logic...
        polygon.on('click', function() {
                // 1. Update the content inside the drawer
                document.getElementById('drawer-title').innerText = bldg.name;
                document.getElementById('drawer-content').innerHTML = bldg.details;
    
                // 2. Add the 'active' class to slide the drawer out
                document.getElementById('drawer').classList.add('active');
        });
    });
}

// 4. GPS / LOCATION TRACKING LOGIC
var userMarker, userCircle;

function onLocationFound(e) {
    var radius = e.accuracy / 2;

    if (!userMarker) {
        userMarker = L.marker(e.latlng).addTo(map);
        userCircle = L.circle(e.latlng, radius).addTo(map);
    } else {
        userMarker.setLatLng(e.latlng);
        userCircle.setLatLng(e.latlng).setRadius(radius);
    }
}

function onLocationError(e) {
    // This triggers if the user denies permission or GPS is off
    alert("Location access denied. Please enable GPS in your settings.");
}

map.on('locationfound', onLocationFound);
map.on('locationerror', onLocationError);

// Function to start tracking (Can be called via button or window.onload)
function toggleTracking() {
    map.locate({ 
        watch: true, 
        enableHighAccuracy: true, 
        setView: true, 
        maxZoom: 18 
    });
}

// 5. AUTO-START
window.onload = function() {
    renderBuildings();
    // Optional: toggleTracking(); // Uncomment if you want to find user immediately
};
