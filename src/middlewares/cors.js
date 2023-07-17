'use strict';

/**
 * `cors` middleware
 */

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In cors middleware.');

    await next();
  };
};
