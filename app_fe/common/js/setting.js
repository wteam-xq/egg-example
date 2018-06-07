'use strict';

let localSetting = {
  HOST: 'http://127.0.0.1:7001',
  API_SERVER: 'http://127.0.0.1:7001/api',
  // 0: local  1: test  2: prod
  ENVIRONMENT: 0,
  CONSTANT_SUCCEED: 'SUCCEED',
  CONSTANT_ERROR: 'ERROR'
};

let testSetting = {
  HOST: '',
  API_SERVER: '',
  // 0: local  1: test  2: prod
  ENVIRONMENT: 1,
  CONSTANT_SUCCEED: 'SUCCEED',
  CONSTANT_ERROR: 'ERROR'
};

let prodSetting = {
  HOST: '',
  API_SERVER: '',
  // 0: local  1: test  2: prod
  ENVIRONMENT: 2,
  CONSTANT_SUCCEED: 'SUCCEED',
  CONSTANT_ERROR: 'ERROR'
}

module.exports = localSetting;