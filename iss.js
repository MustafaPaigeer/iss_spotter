const request = require('request');

const fetchMyIP = function(callback) {
    // use request to fetch IP address from JSON API
    request(`https://api.ipify.org?format=json`, (error, res, body) => {
      if (error) return callback("There has been an error retieving IP address: " + error, null);

      if (res.statusCode !== 200) {
        callback(Error(`Status Code ${res.statusCode} when fetching IP: ${body}`), null);
        return;
      }
  
      const myIP = JSON.parse(body).ip;
      callback(null, myIP);
    })

  };

  const fetchCoordsByIP = function(ip, callback) {
    request(`https://freegeoip.app/json/${ip}`, (error, response, body) => {
      if (error) {
        callback(error, null);
        return;
      }
  
      if (response.statusCode !== 200) {
        callback(Error(`Status Code ${response.statusCode} when fetching Coordinates for IP: ${body}`), null);
        return;
      }
  
      const { latitude, longitude } = JSON.parse(body);
  
      callback(null, { latitude, longitude });
    });
  };
  
  
  module.exports = { fetchMyIP, fetchCoordsByIP };