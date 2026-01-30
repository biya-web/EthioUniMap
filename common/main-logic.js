// 1. GLOBAL VARIABLES (Accessible by both Click and Close functions)
var activePolygon = null; 
var map;

const styles = {
    dormStyle: { color: "#2c3e50", fillColor: "#3498db", weight: 2 },
    academicStyle: { color: "#c0392b", fillColor: "#e74c3c", weight: 2 },
    classStyle: { color: "#1b5e20", fillColor: "#4caf50", weight: 2 },
    greenStyle: { color: "#1b5e20", fillColor: "#4caf50", weight: 2 },
    commercialStyle: { color: "#d4af37", fillColor: "#f1c40f", weight: 2 },
    defaultStyle: { color: "#333", fillColor: "#999", weight: 2 }
};

// 2. INITIALIZE MAP
map = L.map('map', {
    maxZoom: 18
}).setView(campusData.center, campusData.zoom);

var satellite = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    maxZoom: 18,
    attribution: 'Tiles &copy; Esri'
}).addTo(map);

// 3. THE CLOSE FUNCTION (Must be outside renderBuildings)
function closeDrawer() {
    // Hide the sidebar
    var drawer = document.getElementById('drawer');
    if (drawer) {
        drawer.classList.remove('active');
    }

    // HIDE THE COLORED BOX
    if (activePolygon) {
        activePolygon.setStyle({ 
            fillOpacity: 0, 
            opacity: 0 
        });
        activePolygon = null; // Clear it so it's ready for next click
    }
}

// 4. BUILDING GENERATOR 
function renderBuildings() {
    campusData.buildings.forEach(function(bldg) {
        var bStyle = styles[bldg.type + "Style"] || styles.defaultStyle;

        var polygon = L.polygon(bldg.coords, {
            color: bStyle.color,
            fillColor: bStyle.fillColor,
            fillOpacity: 0, 
            opacity: 0,     
            weight: 2,
            interactive: true
        }).addTo(map);

        polygon.on('click', function(e) {
            L.DomEvent.stopPropagation(e);

            // If a building is already showing, hide it first
            if (activePolygon) {
                activePolygon.setStyle({ fillOpacity: 0, opacity: 0 });
            }

            // Show THIS building
            this.setStyle({ fillOpacity: 0.5, opacity: 1 });
            
            // SAVE to the global variable so closeDrawer can see it
            activePolygon = this; 

            // Zoom and center
            map.flyTo(this.getBounds().getCenter(), 18, { animate: true, duration: 1 });

            // Update drawer and show it
            document.getElementById('drawer-title').innerText = bldg.name;
            document.getElementById('drawer-content').innerHTML = bldg.details;
            document.getElementById('drawer').classList.add('active');
        });
    });
}

// 5. STARTUP
window.onload = function() {
    renderBuildings();
};

// 6. LOCATION TRACKING
function onLocationFound(e) {
    L.circleMarker(e.latlng, {radius: 8, fillColor: "#007AFF", color: "white"}).addTo(map);
}
map.on('locationfound', onLocationFound);
function toggleTracking() { map.locate({ watch: true, setView: true, maxZoom: 17 }); }
