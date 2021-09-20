'use strict';

const axios = require('axios');
const { exec } = require('child_process');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
  lifecycles:{
    async afterUpdate(data) {
      console.log("afterUpdate")

      if(process.env.OS && process.env.USERNAME){
        if (process.env.OS.includes("Windows") && process.env.USERNAME === "FJORDEN") {
          exec("build.sh")
        }
      }

      if(process.env.OS === undefined && process.env.USER === "tubadmin"){
        exec("cd'../team-uitbehandeld' && npm run generate")
        console.log("Generated Website")
      }
    },

    async afterDelete(data) {
      console.log("afterDelete")
    },
  }
};
