
// 1. Define your styles once in the shared logic
var dormStyle = { color: "blue", fillColor: "lightblue", fillOpacity: 0.5 };
var academicStyle = { color: "red", fillColor: "pink", fillOpacity: 0.5 };

// 2. Setup the Map using the data from data.js
var map = L.map('map').setView(campusData.center, campusData.zoom);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// 3. The "Universal" Building Creator
function drawAllBuildings() {
    campusData.buildings.forEach(function(bldg) {
        // Decide which style to use based on the 'type' in data.js
        var currentStyle = (bldg.type === "dorm") ? dormStyle : academicStyle;

        // Create the polygon
        var polygon = L.polygon(bldg.coords, currentStyle).addTo(map);

        // Add the click/popup logic
        polygon.bindPopup(bldg.details);
    });
}

// Run the function
drawAllBuildings();
