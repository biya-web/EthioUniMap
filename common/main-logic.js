// 1. GLOBAL STYLES
const styles = {
    dormStyle: { color: "#2c3e50", fillColor: "#3498db", weight: 2 },
    academicStyle: { color: "#c0392b", fillColor: "#e74c3c", weight: 2 },
    classStyle: { color: "#1b5e20", fillColor: "#4caf50", weight: 2 },
    greenStyle: { color: "#1b5e20", fillColor: "#4caf50", weight: 2 },
    commercialStyle: { color: "#d4af37", fillColor: "#f1c40f", weight: 2 },
    defaultStyle: { color: "#333", fillColor: "#999", weight: 2 }
};

// 2. INITIALIZE MAP (Strict Zoom Limits)
var map = L.map('map', {
    maxZoom: 19,
    zoomSnap: 0.5 // Allows smoother zooming
}).setView(campusData.center, campusData.zoom);

// Satellite Base Layer (Esri World Imagery)
var satellite = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    maxZoom: 19, // Must match map maxZoom
    attribution: 'Tiles &copy; Esri'
}).addTo(map);

// 3. BUILDING GENERATOR 
var activePolygon = null; 

function renderBuildings() {
    // Safety check: ensure campusData exists
    if (!campusData || !campusData.buildings) return;

    campusData.buildings.forEach(function(bldg) {
        var bStyle = styles[bldg.type + "Style"] || styles.defaultStyle;

        // Create the polygon
        var polygon = L.polygon(bldg.coords, {
            color: bStyle.color,
            fillColor: bStyle.fillColor,
            fillOpacity: 0, 
            opacity: 0,     
            weight: 2,
            interactive: true // Essential for the click to work
        }).addTo(map);

        // CLICK EVENT: Fixed Zoom & Center
        polygon.on('click', function(e) {
            // Stop the map from clicking "through" to the ground
            L.DomEvent.stopPropagation(e);

            // Reset previous building
            if (activePolygon) {
                activePolygon.setStyle({ fillOpacity: 0, opacity: 0 });
            }

            // Show THIS building
            this.setStyle({ fillOpacity: 0.5, opacity: 1 });
            activePolygon = this;

            // ZOOM AND CENTER: Fixed to max level 19
            var center = this.getBounds().getCenter();
            map.flyTo(center, 19, {
                animate: true,
                duration: 1.0
            });

            // Update UI Drawer
            const titleEl = document.getElementById('drawer-title');
            const contentEl = document.getElementById('drawer-content');
            const drawerEl = document.getElementById('drawer');

            if (titleEl) titleEl.innerText = bldg.name;
            if (contentEl) contentEl.innerHTML = bldg.details;
            if (drawerEl) drawerEl.classList.add('active');
        });
    });
}

// 4. DRAWER CONTROLS (Fixed Close Logic)
function closeDrawer() {
    const drawerEl = document.getElementById('drawer');
    if (drawerEl) drawerEl.classList.remove('active');

    if (activePolygon) {
        activePolygon.setStyle({ fillOpacity: 0, opacity: 0 });
        activePolygon = null;
    }
}

// 5. GPS TRACKING (Refined)
var userMarker, userCircle;
function onLocationFound(e) {
    if (!userMarker) {
        userMarker = L.circleMarker(e.latlng, { radius: 8, fillColor: "#007AFF", color: "white", weight: 2, fillOpacity: 1 }).addTo(map);
        userCircle = L.circle(e.latlng, e.accuracy / 2).addTo(map);
    } else {
        userMarker.setLatLng(e.latlng);
        userCircle.setLatLng(e.latlng).setRadius(e.accuracy / 2);
    }
}
map.on('locationfound', onLocationFound);

function toggleTracking() {
    map.locate({ watch: true, enableHighAccuracy: true, setView: true, maxZoom: 18 });
}

// 6. RUN
window.onload = renderBuildings;
