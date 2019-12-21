var wia = require('wia')('XXXXXXXXXXXXXXXX');

wia.events.subscribe({
  device: 'XXXXXXXXXXXXXXXX'
}, function(event) {
  console.log(event);
});

// Connect to the MQTT API
wia.stream.connect();
