// Creating map object
var myMap = L.map("map", {
  center: [42.77, -102.0902],
  zoom: 3.5,
  minZoom: 3
    
  });

var layers = {
  Airplane:
  Balloon:
  Glider:
  Gyroplane:
  

}
  
// Adding tile layer
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 15,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);


d3.csv("static/data/aviation2015.csv").then(function(response)  {
//d3.json("static/data/Aviation.json").then(function(response)  {
console.log(response);

var planeIcon = L.icon({
  iconUrl: "images/planes.png",
  iconSize: [25, 25],

})

var incidents = response;
var incidentMarkers = [];

for (var index = 0; index < incidents.length; index++) {
  var incident = incidents[index];

var incidentMarker = L.marker([incident.LATITUDE, incident.LONGITUDE],{icon: planeIcon}).addTo(myMap);

incidentMarker.bindPopup("Date: " + incident.EVENT_DATE + "<br>Accident Number: " + incident.ACCIDENT_NUMBER + "<br>City: " + incident.CITY + "<br>State: " + incident.STATE + "<br>Total Fatalities: " + incident.TOTAL_FATALITIES + "<br>Total Injuries: " + incident.TOTAL_INJURIES + "<br>Total Uninjured: " + incident.TOTAL_UNINJURED).openPopup;
//incidentMarker.bindPopup("Date: " + incident.EVENT_DATE + "<br>Accident Number: " + incident.ACCIDENT_NUMBER + "<br>City: " + incident.CITY + "<br>Total Fatalities: " + incident.TOTAL_FATALITIES).openPopup;

//ADD TIMESLIDER PLUGIN

}  

});
  




