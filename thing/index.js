const awsIot = require("aws-iot-device-sdk");
const levelStore = require("mqtt-level-store");
const payload = require("./payload.js").payload;
const levelManager = levelStore("./store");

const path = "./certs/";
const device = awsIot.device({
  incomingStore: levelManager.incoming,
  outgoingStore: levelManager.outgoing,
  keyPath: `${path}449da88e49-private.pem.key`,
  certPath: `${path}449da88e49-certificate.pem.crt`,
  caPath: `${path}AmazonRootCA1.pem`,
  clientId: "MyRaspberryPi",
  host: "a3j1bzslspz95c-ats.iot.ap-southeast-1.amazonaws.com",
  offlineQueueing: false,
  port: 8883
});

var pubOpts = { qos: 1 };
var interval = null;
var timeInterval = 60; // 5 seconds

interval = setInterval(function() {
  var dat = new Date();
  var pdate = dat.getHours() + ":" + dat.getMinutes() + ":" + dat.getSeconds();
  console.log("interval date:" + pdate);

  //payload.logger.d = pdate;
  // payload.logger._id = ``;

  device.publish("publish/reading", JSON.stringify(payload), pubOpts);
}, timeInterval * 1000);

device.on("connect", function() {
  console.log("connected");
});

device.on("message", function(topic, payload) {
  console.log("receiving message");
  //console.log('message', topic, payload.toString());
});

device.on("close", function() {
  console.log("disconnected");
  //console.log('disconnected', arguments);
});

device.on("error", function() {
  //console.log('error', arguments);
});

device.on("reconnect", function() {
  console.log("reconnect...");
  //console.log('reconnect', arguments);
});

device.on("timeout", function() {
  //console.log('timeout', arguments);
});
