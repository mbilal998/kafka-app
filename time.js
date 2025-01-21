// Import the required Moment-Timezone library
const moment = require('moment-timezone');

// Function to convert UTC time to local time in a specific timezone
function convertUtcToLocalTime(utcTime, timeZone) {
    return moment.tz(utcTime, timeZone).format("YYYY-MM-DD hh:mm A z");
}

// Example Inputs
const utcTimeDST = "2023-07-15T18:00:00Z"; // 6 PM UTC (DST Active)
const utcTimeNonDST = "2023-12-15T19:00:00Z"; // 7 PM UTC (DST Not Active)

// Timezone to use
const timeZone = "America/New_York";

// Convert UTC times to local times
const localTimeDST = convertUtcToLocalTime(utcTimeDST, timeZone);
const localTimeNonDST = convertUtcToLocalTime(utcTimeNonDST, timeZone);

// Output the results
console.log("Local Time (DST Active):", localTimeDST); // 2:00 PM EDT
console.log("Local Time (DST Not Active):", localTimeNonDST); // 2:00 PM EST
