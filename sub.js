
var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://test.mosquitto.org')


client.subscribe('running')
client.on('message', function (topic, message) {
  console.log(message.toString())
})
