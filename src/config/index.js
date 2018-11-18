/* eslint-disable global-require */
import merge from 'lodash.merge';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const env = process.env.NODE_ENV;

const baseConfig = {
  port: 3000,
  secrets: {},
  db: {
    url: 'localhost://5432',
  },
};

let envConfig = {};

switch (env) {
  case 'development':
  case 'dev':
    envConfig = require('./dev').config;
    break;
  case 'testing':
  case 'test':
    envConfig = require('./testing').config;
    break;
  case 'production':
  case 'prod':
    envConfig = require('./prod').config;
    break;
  default:
    envConfig = require('./dev').config;
    break;
}

export default merge(baseConfig, envConfig);
