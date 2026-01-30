// 1. GLOBAL VARIABLES
var map;
var allBuildingPolygons = []; 
var userMarker, userCircle;
var isFirstLocation = true; // Flag to stop the map from snapping back

// 2. INITIALIZE MAP
map = L.map('map', { maxZoom: 18 }).setView(campusData.center, campusData.zoom);

L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    maxZoom: 18,
    attribution: 'Tiles &copy; Esri'
}).addTo(map);

// 3. THE WORKING CLOSE FUNCTION (exitDrawer)
window.closeDrawer = function() {
    console.log("Exiting drawer and hiding all boxes...");
    var drawer = document.getElementById('drawer');
    if (drawer) drawer.classList.remove('active');

    allBuildingPolygons.forEach(function(polygon) {
        polygon.setStyle({ fillOpacity: 0, opacity: 0 });
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
            fillOpacity: 0, 
            opacity: 0,
            weight: 2,
            interactive: true
        }).addTo(map);

        allBuildingPolygons.push(polygon);

        polygon.on('click', function(e) {
            L.DomEvent.stopPropagation(e);
            allBuildingPolygons.forEach(function(p) { p.setStyle({ fillOpacity: 0, opacity: 0 }); });
            this.setStyle({ fillOpacity: 0.5, opacity: 1 });
            map.flyTo(this.getBounds().getCenter(), 18, { animate: true, duration: 1 });
            document.getElementById('drawer-title').innerText = bldg.name;
            document.getElementById('drawer-content').innerHTML = bldg.details;
            document.getElementById('drawer').classList.add('active');
        });
    });
}

// 5. GPS TRACKING (THE FIX FOR AUTO-SNAP)
function onLocationFound(e) {
    var radius = e.accuracy / 2;

    if (!userMarker) {
        userMarker = L.circleMarker(e.latlng, { radius: 8, fillColor: "#007AFF", color: "white", weight: 2, fillOpacity: 1 }).addTo(map);
        userCircle = L.circle(e.latlng, radius).addTo(map);
    } else {
        userMarker.setLatLng(e.latlng);
        userCircle.setLatLng(e.latlng).setRadius(radius);
    }

    // ONLY snap to user if it's the first time they clicked the button
    if (isFirstLocation) {
        map.setView(e.latlng, 17);
        isFirstLocation = false; // Now the user can scroll away freely!
    }
}

map.on('locationfound', onLocationFound);

window.toggleTracking = function() {
    isFirstLocation = true; // Reset so it finds you when you click the button
    map.locate({ 
        watch: true, 
        enableHighAccuracy: true, 
        setView: false // <--- THIS stops the auto-return
    });
};

// 6. START
renderBuildings();
