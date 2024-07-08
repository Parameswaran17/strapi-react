'use strict';

/**
 * strapi-project service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::strapi-project.strapi-project');
