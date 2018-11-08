var awsIot = require('aws-iot-device-sdk');
var levelStore = require('mqtt-level-store');
var payload = require('./payload.js').payload;
var levelManager = levelStore('/home/pi/PlusSolar/store');

//
// Replace the values of '<YourUniqueClientIdentifier>' and '<YourCustomEndpoint>'
// with a unique client identifier and custom host endpoint provided in AWS IoT.
// NOTE: client identifiers must be unique within your AWS account; if a client attempts 
// to connect with a client identifier which is already in use, the existing 
// connection will be terminated.
//
var device = awsIot.device({
  incomingStore: levelManager.incoming,
  outgoingStore: levelManager.outgoing,
  keyPath: '/home/pi/PlusSolar/certs/449da88e49-private.pem.key',
  certPath: '/home/pi/PlusSolar/certs/449da88e49-certificate.pem.crt',
  caPath: '/home/pi/PlusSolar/certs/AmazonRootCA1.pem',
  clientId: 'MyRaspberryPi',
  host: 'a3j1bzslspz95c-ats.iot.ap-southeast-1.amazonaws.com',
  offlineQueueing: false,
  //	debug: true,
  port: 8883,
  //	qos:2,
  //	clean: false,
  //	clearSession: false,
  //	reconnectPeriod: 1000
});

var pubOpts = { qos: 1 };

//
// Device is an instance returned by mqtt.Client(), see mqtt.js for full
// documentation.
//

var interval = null;
var timeInterval = 10; // 5 seconds

interval = setInterval(function () {
  var dat = new Date();
  var pdate = dat.getHours() + ":" + dat.getMinutes() + ":" + dat.getSeconds();
  console.log('interval date:' + pdate);
  payload.logger.d = pdate;

  //device.subscribe('test/from_aws_console');
  device.publish('test/from_aws_testing', JSON.stringify(payload), pubOpts);
}, timeInterval * 1000);


device.on('connect', function () {
  console.log('connected');

  // if (interval) return;

});

device.on('message', function (topic, payload) {
  console.log('receiving message');
  //console.log('message', topic, payload.toString());
});


device.on('close', function () {
  console.log('disconnected');
  //console.log('disconnected', arguments);
});


device.on('error', function () {
  //console.log('error', arguments);
});

device.on('reconnect', function () {
  console.log('reconnect...');
  //console.log('reconnect', arguments);
});

device.on('timeout', function () {
  //console.log('timeout', arguments);
});




