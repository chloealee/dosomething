module.exports = {
  prod: {
    options: {
      report: "gzip",
      compress: {
        dead_code: true,
        drop_debugger: true,
        join_vars: true,
        drop_console: true,
        global_defs: {
          DEBUG: false
        }
      }
    },
    files: {
      "dist/app.js": ["dist/app.js"],
    }
  },
  dev: {
    options: {
      mangle: false,
      compress: false,
      beautify: true
    },
    files: {
      "dist/app.js": [
        "bower_components/jquery/dist/jquery.js",
        "bower_components/requirejs/require.js",
        "js/config.js",
        "js/config.dev.js"
      ]
    }
  }
}