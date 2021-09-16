module.exports = {
    apps: [
      {
        name: 'develop',
        script: 'npm',
        args: 'develop',
      }, {
        script: 'npm',
        // seperate error logs
        error_file: 'err.log',
        out_file: 'out.log',
        //combine error logs and other logs
        log_file: 'combined.log',
        time: true
      }
    ],
  };