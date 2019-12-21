var sense = require("node-sense-hat");

var Blynk = require("blynk-library");

var wia = require('wia')('XXXXXXXXXXXXXXXXX');

var AUTH = 'XXXXXXXXXXXXXXXXXXXXXXX';

var blynk = new Blynk.Blynk(AUTH);


var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://test.mosquitto.org')


var v1 = new blynk.VirtualPin(1);
var v2 = new blynk.VirtualPin(2);
var v4 = new blynk.VirtualPin(4);
var v5 = new blynk.VirtualPin(5);

var distance = require('gps-distance');

var latLng = [];
var latitude = [];
var longitude = [];
var dist = [];
var i;
var calories = 0;
var speeders = [];
var str;

client.on('message', function (topic, message) {
  console.log(message.toString())
  client.end()
})


v4.on('write', function(param) {
var speeder = Math.round(param[3]*100)/100;
speeders = speeder*4; //this is the corect km/h speed
latitude = param[0];
longitude = param[1];
latLng.push([param[0], param[1]]);

var result2 = distance(latLng);
dist = Math.round(result2*100)/100;

calories = dist * 100;

console.log("distance ====> " + result2 + "km/h");
console.log("speed ====> " + speeders + "km/h");

console.log("Calories ===> " + calories);

});

v1.on('read', function() {  // Widget calls for data
  v1.write(dist);
});

v2.on('read', function() {  // Widget calls for data
  v2.write(speeders);
});

 setInterval(function(){
 console.log("working 10 seconds");

client.publish('running','speed: ' + speeders.toString())

//wia.stream.on('connect', function() {
 wia.events.publish({
   name: 'distance',
   data: dist

});

 wia.events.publish({
  name: 'calories',
  data: calories

});

 wia.events.publish({
  name: 'speed',
  data: speeders

});

 wia.locations.publish({
  latitude: latitude,
  longitude: longitude

});
//});

}, 10000);



wia.stream.connect();
