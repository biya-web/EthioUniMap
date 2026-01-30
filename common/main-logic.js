// 1. Setup Global Variable
window.activePolygon = null; 

// 2. Initialize Map
var map = L.map('map', { maxZoom: 18 }).setView(campusData.center, campusData.zoom);

L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    maxZoom: 18,
    attribution: 'Tiles &copy; Esri'
}).addTo(map);

// 3. THE FIX: The Close Function
window.closeDrawer = function() {
    // Hide the sidebar
    var drawer = document.getElementById('drawer');
    if (drawer) drawer.classList.remove('active');

    // FORCE hide the colored building
    if (window.activePolygon) {
        window.activePolygon.setStyle({ 
            fillOpacity: 0, 
            opacity: 0 
        });
        window.activePolygon = null; 
    }
};

// 4. Building Generator
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
            fillOpacity: 0, 
            opacity: 0,
            weight: 2,
            interactive: true
        }).addTo(map);

        polygon.on('click', function(e) {
            L.DomEvent.stopPropagation(e);

            // Hide previous building if it exists
            if (window.activePolygon) {
                window.activePolygon.setStyle({ fillOpacity: 0, opacity: 0 });
            }

            // Show this building and SAVE to the global window object
            this.setStyle({ fillOpacity: 0.5, opacity: 1 });
            window.activePolygon = this; 

            // UI and Zoom
            document.getElementById('drawer-title').innerText = bldg.name;
            document.getElementById('drawer-content').innerHTML = bldg.details;
            document.getElementById('drawer').classList.add('active');
            map.flyTo(this.getBounds().getCenter(), 18);
        });
    });
}

// 5. Start
renderBuildings();
