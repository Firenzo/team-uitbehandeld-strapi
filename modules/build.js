const { exec } = require('child_process');

const buildNuxtApp = () => {
  //Code to test automatic building locally on Windows
  if(process.env.OS && process.env.USERNAME){
    if (process.env.OS.includes("Windows") && process.env.USERNAME === "FJORDEN") {
      exec("start cmd /k build.bat")
    }
  }

  //Code for building Nuxt Application on the Server
  if(process.env.OS === undefined && process.env.USER === "tubadmin"){
    exec("build.sh")
    console.log("Generated Website")
  }
}

module.exports.buildNuxtApp = buildNuxtApp;