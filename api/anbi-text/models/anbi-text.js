'use strict';
const { buildNuxtApp } = require('./../../../modules/build.js');
/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
    lifecycles: {      
        async afterUpdate(data) {
            console.log("afterUpdate")
            buildNuxtApp();
        },
    
        async afterDelete(data) {
            console.log("afterDelete")
            buildNuxtApp();
        },
    }
};
