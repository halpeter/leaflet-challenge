// Creating map object
var myMap = L.map("mapid", {
    center: [37.7749, -122.4194],
    zoom: 5,
});
  
// Adding tile layer
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
}).addTo(myMap);
  
// Use this link to get the geojson data.
var link = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson";

// Grabbing our GeoJSON data..
d3.json(link).then(function(data) {

    // Create function for circle colors
    function circleColors(coordinates) {
        switch(true) {
            case coordinates[2] > 90:
                return "#ff0000";
            case coordinates[2] > 70:
                return "#ff6600";
            case coordinates[2] > 60:
                return "#ff9900";
            case coordinates[2] > 30:
                return "#ffcc00";
            case coordinates[2] > 10:
                return "#ffff00";
            default:
                return "#9fff80";
          }
    }

    // Create function for cirlce sizes
    function cirlceSize(mag) {
        if (mag === 0) {
            return 1
        }
        else {
            return mag * 3000
        }
    }
    // Function for style info
    // function styleInfo(feature) {
    //     return {
    //         color: "black",
    //         // Call the circleColors function to decide which color to color the circles
    //         fillColor: circleColors(feature.geometry.coordinates[2]),
    //         // Call the circleSize function to decide the circles radius
    //         radius: cirlceSize(feature.properties.mag),
    //         fillOpacity: 1,
    //         weight: 0.5, 
    //         stroke: true
    //     };
    // }

    // Creating a geoJSON layer with the retrieved data
    L.geoJson(data, {
        // Add layer
        pointToLayer: function(feature, latlng) {
            return L.circle(latlng, {
                radius: cirlceSize(feature.properties.mag),
                color: circleColors(feature.geometry.coordinates[2]),
                fillOpacity: 1
            });
        },
      
        // Call style function
        // style: styleInfo,

        // Call on each feature
        onEachFeature: function(feature, layer) {
            // Giving each feature a pop-up with information pertinent to it
            layer.bindPopup(`
                <h1>Earthquake Info</h1> <hr>
                <h2>Magnitude: ${feature.properties.mag}</h2> </br> 
                <h2>Depth: ${feature.geometry.coordinates[2]}</h2>`);
            }
    }).addTo(myMap);
});