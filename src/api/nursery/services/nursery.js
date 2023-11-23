'use strict';

/**
 * nursery service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::nursery.nursery');
