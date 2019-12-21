var wia = require('wia')('d_sk_RWDfGrxtnfzRLfzi2Qbkc4tD');

wia.events.subscribe({
  device: 'dev_MmfC6pf9'
}, function(event) {
  console.log(event);
});

// Connect to the MQTT API
wia.stream.connect();
