var aviation_data = [0, 1, 2, 3, 4, 5]
console.log(aviation_data)

var link = "static/data/AviationData.csv";

// Grabbing our GeoJSON data..
d3.json(link).then(function(data) {
    // Creating a GeoJSON layer with the retrieved data
    L.csv(data).addTo(myMap);
  });
  