// 1. GLOBAL VARIABLES
var map;
var allBuildingPolygons = []; // This will store every building to ensure we can hide them all

// 2. INITIALIZE MAP
map = L.map('map', { maxZoom: 18 }).setView(campusData.center, campusData.zoom);

L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    maxZoom: 18,
    attribution: 'Tiles &copy; Esri'
}).addTo(map);

// 3. THE "NUCLEAR" CLOSE FUNCTION
window.closeDrawer = function() {
    console.log("Closing drawer and hiding all boxes...");

    // Hide the sidebar UI
    var drawer = document.getElementById('drawer');
    if (drawer) drawer.classList.remove('active');

    // HIDE EVERY BUILDING (The fail-safe way)
    allBuildingPolygons.forEach(function(polygon) {
        polygon.setStyle({ 
            fillOpacity: 0, 
            opacity: 0 
        });
    });
};

// 4. BUILDING GENERATOR
function renderBuildings() {
    const styles = {
        dormStyle: { color: "#2c3e50", fillColor: "#3498db" },
        academicStyle: { color: "#c0392b", fillColor: "#e74c3c" },
        classStyle: { color: "#1b5e20", fillColor: "#4caf50" },
        defaultStyle: { color: "#333", fillColor: "#999" }
    };

    campusData.buildings.forEach(function(bldg) {
        var s = styles[bldg.type + "Style"] || styles.defaultStyle;

        var polygon = L.polygon(bldg.coords, {
            color: s.color,
            fillColor: s.fillColor,
            fillOpacity: 0, // Initially hidden
            opacity: 0,      // Initially hidden
            weight: 2,
            interactive: true
        }).addTo(map);

        // Add this polygon to our global list so we can hide it later
        allBuildingPolygons.push(polygon);

        polygon.on('click', function(e) {
            L.DomEvent.stopPropagation(e);

            // Hide ALL buildings first so only one shows at a time
            allBuildingPolygons.forEach(function(p) {
                p.setStyle({ fillOpacity: 0, opacity: 0 });
            });

            // Show THIS specific building
            this.setStyle({ fillOpacity: 0.5, opacity: 1 });

            // Zoom and Open Drawer
            map.flyTo(this.getBounds().getCenter(), 18, { animate: true, duration: 1 });
            document.getElementById('drawer-title').innerText = bldg.name;
            document.getElementById('drawer-content').innerHTML = bldg.details;
            document.getElementById('drawer').classList.add('active');
        });
    });
}

// 5. START
renderBuildings();
