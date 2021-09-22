'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
    lifecycles:{
        async afterUpdate(data) {
            console.log("afterUpdate")

            //Code to test automatic building locally on Windows
            if(process.env.OS && process.env.USERNAME){
                if (process.env.OS.includes("Windows") && process.env.USERNAME === "FJORDEN") {
                    exec("start cmd /k build.bat")
                }
            }

            if(process.env.OS === undefined && process.env.USER === "tubadmin"){
                //starts build process for Nuxt application on Ubuntu server
                exec("pm2 stop build || : && pm2 start build --no-autorestart")
                console.log("Generated Website")
            }
        },

        async afterDelete(data) {
            console.log("afterDelete")
        },
    }
};
