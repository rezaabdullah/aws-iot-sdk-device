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
var timeInterval = 60; // seconds

interval = setInterval(function() {
  var dat = new Date();
  var pdate = dat.getHours() + ":" + dat.getMinutes() + ":" + dat.getSeconds();
  console.log("interval date:" + pdate);

  //sample data
  payload.logger._id = "213213123-l";
  payload.logger.locationId = "8574723183";
  payload.logger.lotId = "l48";
  payload.logger.companyId = "234343";
  payload.logger.deviceId = "d48";
  payload.logger.active = true;
  payload.logger.createdAt = dat;
  payload.logger.updatedAt = dat;
  payload.logger.powerAdjustment = 400;
  payload.logger.ambientTemp = 30;
  payload.logger.moduleTemp = 30;
  payload.logger.irrSensor = 0;
  payload.logger.totalBuildingLoad = 500;
  payload.logger.activePower = 8;
  payload.logger.windSpeed = 9;

  const totalInverter = 5;
  for (let i = 0; i < totalInverter; i++) {
    payload.inverter[i]._id = "asdasdsad-i";
    payload.inverter[i].dataLoggerId = payload.logger._id;
    payload.inverter[i].active = true;
    payload.inverter[i].createdAt = dat;
    payload.inverter[i].updatedAt = dat;
    payload.inverter[i].ref = i + 1;
    payload.inverter[i].effInverter = 100;
    payload.inverter[i].acPower = 0.2;
    payload.inverter[i].dcPower = 0.2;
    payload.inverter[i].pvCurrent = 0.2;
    payload.inverter[i].pcVoltage = 700;
    payload.inverter[i].mpptPower = 0.02;
  }

  const totalPwerMeter = 2;
  for (let j = 0; j < totalPwerMeter; j++) {
    payload.powerMeter[j]._id = "adasdasda-pm";
    payload.powerMeter[j].dataLoggerId = payload.logger._id;
    payload.powerMeter[j].active = true;
    payload.powerMeter[j].createdAt = dat;
    payload.powerMeter[j].updatedAt = dat;
    payload.powerMeter[j].ref = j + 1;
    payload.powerMeter[j].activeEnergy = 200000;
    payload.powerMeter[j].activePower = 2;
    payload.powerMeter[j].maxDemand = 200;
    payload.powerMeter[j].voltage = {
      "1": 2,
      "2": 2,
      "3": 3
    };
    payload.powerMeter[j].current = {
      "1": 2,
      "2": 2,
      "3": 3
    };
    payload.powerMeter[j].power = {
      "1": 2,
      "2": 2,
      "3": 3
    };
    payload.powerMeter[j].mDlevel = {
      "1": 1,
      "2": 2
    };
  }

  console.log(payload.logger);

  //push to aws
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
