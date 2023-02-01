'use strict';

const bootstrap = require('./bootstrap')
const services = require('./services');
const routes = require('./routes');
const controllers = require('./controllers');
const contentTypes = require('./content-types');

module.exports = {
  bootstrap,
  contentTypes,
  controllers,
  routes,
  services,
};
