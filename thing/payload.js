module.exports.payload = {
  logger: {
    _id: "loggerId",
    locationId: "8574723183",
    lotId: "lot123",
    companyId: "com-123",
    deviceId: "device123",
    active: true,
    createdAt: "2018-10-23T06:46:48.782Z",
    updatedAt: "2018-10-23T06:46:48.782Z",
    powerAdjustment: 2,
    ambientTemp: 34,
    moduleTemp: 45,
    irrSensor: 18,
    totalBuildingLoad: 230,
    activePower: 12,
    windSpeed: 7
  },

  inverter: [
    {
      _id: "49546986683135544286507457936321625675700192471156785154-i",
      dataLoggerId: "loggerId", // refer to logger.)ud
      active: true,
      createdAt: "2018-10-23T06:46:48.782Z",
      updatedAt: "2018-10-23T06:46:48.782Z",
      ref: 1,
      effInverter: 8,
      acPower: 1,
      dcPower: 20,
      pvCurrent: 14,
      pcVoltage: 19,
      mpptPower: 6
    },
    {
      _id: "49546986683135544286507457936321625675700192471156785154-i",
      dataLoggerId: "loggerId",
      active: true,
      createdAt: "2018-10-23T06:46:48.782Z",
      updatedAt: "2018-10-23T06:46:48.782Z",
      ref: 2,
      effInverter: 8,
      acPower: 1,
      dcPower: 20,
      pvCurrent: 14,
      pcVoltage: 19,
      mpptPower: 6
    },
    {
      _id: "49546986683135544286507457936321625675700192471156785154-i",
      dataLoggerId: "loggerId",
      active: true,
      createdAt: "2018-10-23T06:46:48.782Z",
      updatedAt: "2018-10-23T06:46:48.782Z",
      ref: 3,
      effInverter: 8,
      acPower: 1,
      dcPower: 20,
      pvCurrent: 14,
      pcVoltage: 19,
      mpptPower: 6
    },
    {
      _id: "49546986683135544286507457936321625675700192471156785154-i",
      dataLoggerId: "loggerId",
      active: true,
      createdAt: "2018-10-23T06:46:48.782Z",
      updatedAt: "2018-10-23T06:46:48.782Z",
      ref: 4,
      effInverter: 8,
      acPower: 1,
      dcPower: 20,
      pvCurrent: 14,
      pcVoltage: 19,
      mpptPower: 6
    },
    {
      _id: "49546986683135544286507457936321625675700192471156785154-i",
      dataLoggerId: "loggerId",
      active: true,
      createdAt: "2018-10-23T06:46:48.782Z",
      updatedAt: "2018-10-23T06:46:48.782Z",
      ref: 5,
      effInverter: 8,
      acPower: 1,
      dcPower: 20,
      pvCurrent: 14,
      pcVoltage: 19,
      mpptPower: 6
    }
  ],

  powerMeter: [
    {
      _id: "49546986683135544286507457936321625675700192471156785154-pm",
      dataLoggerId: "loggerId",
      active: true,
      createdAt: "2018-10-23T06:46:48.782Z",
      updatedAt: "2018-10-23T06:46:48.782Z",
      ref: 1,
      activeEnergy: 10,
      activePower: 13,
      voltage: {
        1: 7,
        2: 6,
        3: 8
      },
      current: {
        1: 7,
        2: 3,
        3: 1
      },
      power: {
        1: 9,
        2: 2,
        3: 7
      },
      maxDemand: 16,
      mDlevel: {
        1: 23,
        2: 23
      }
    },
    {
      _id: "49546986683135544286507457936321625675700192471156785154-pm",
      dataLoggerId: "loggerId",
      active: true,
      createdAt: "2018-10-23T06:46:48.782Z",
      updatedAt: "2018-10-23T06:46:48.782Z",
      ref: 2,
      activeEnergy: 10,
      activePower: 13,
      voltage: {
        1: 7,
        2: 6,
        3: 8
      },
      current: {
        1: 7,
        2: 3,
        3: 1
      },
      power: {
        1: 9,
        2: 2,
        3: 7
      },
      maxDemand: 16,
      mDlevel: {
        1: 23,
        2: 23
      }
    }
  ]
};
