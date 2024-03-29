let path = require("path");

const DIST_DIR = path.resolve(__dirname, "dist");
const SRC_DIR = path.resolve(__dirname, "src");

let config = {
    entry: SRC_DIR + "/app/index.js",
    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath: "/app/"
    }, 
    module: {
        rules: [
          {
            test: /\.js?/,
            include: SRC_DIR,
            loader: "babel-loader",
            query: {
              "presets": [
                "es2015",
                "react",
                "stage-2"
              ]
            }
          }
        ]
      }
};

module.exports = config;