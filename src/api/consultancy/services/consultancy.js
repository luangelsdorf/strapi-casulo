'use strict';

/**
 * consultancy service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::consultancy.consultancy');
