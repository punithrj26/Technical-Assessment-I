if (!process.env.NODE_ENV) {
    process.env.NODE_ENV = 'localhost'
}

let config = require("./env/localhost.js"); //require(" ./env/" + process.env.NODE_ENV + ".js");

module.exports = config;