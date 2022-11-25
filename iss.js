



 const fetchMyIP = function(callback) { 
  // use request to fetch IP address from JSON API
}

module.exports = { fetchMyIP };

// //steps:
// We'll be making API requests to three different services to solve this problem.

// Fetch our IP Address
// Fetch the geo coordinates (Latitude & Longitude) for our IP
// Fetch the next ISS flyovers for our geo coordinates

/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */