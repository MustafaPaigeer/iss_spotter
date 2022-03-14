const request = require('request');

const fetchMyIP = function(callback) {
    // use request to fetch IP address from JSON API
    request(`https://api.ipify.org?format=json`, (error, res, body) => {

    })

  }
  
  module.exports = { fetchMyIP };