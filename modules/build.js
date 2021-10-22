const { exec } = require('child_process');

const testAutomaticBuilding = true;
const windowsCommand = "start cmd /k build.bat";
const ubuntuCommand = "pm2 stop build || : && pm2 start build --no-autorestart"

const buildNuxtApp = () => {

  //Code to test automatic building locally on Windows
  if (process.platform === 'win32' && testAutomaticBuilding) {
    exec(windowsCommand)
  }

  //Code for building Nuxt Application on the Server
  if (process.platform === 'linux') {
    exec(ubuntuCommand)
    console.log("Generated Website")
  }
}

module.exports.buildNuxtApp = buildNuxtApp;