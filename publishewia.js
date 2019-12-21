var wia = require('wia')('XXXXXXXXXXXXXXXX');

wia.events.subscribe({
  device: 'dev_MmfC6pf9'
}, function(event) {
  console.log(event);
});

// Connect to the MQTT API
wia.stream.connect();
