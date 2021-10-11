const { exec } = require('child_process');

const windowsCommand = "start cmd /k build.bat";
const ubuntuCommand = "pm2 stop build || : && pm2 start build --no-autorestart"

const buildNuxtApp = () => {
  //Code to test automatic building locally on Windows
  if(process.env.OS && process.env.USERNAME){
    if (process.env.OS.includes("Windows") && process.env.USERNAME === "FJORDEN") {
      exec(windowsCommand)
    }
  }

  //Code for building Nuxt Application on the Server
  if(process.env.OS === undefined && process.env.USER === "tubadmin"){
    exec(ubuntuCommand)
    console.log("Generated Website")
  }
}

module.exports.buildNuxtApp = buildNuxtApp;