// Import the required Moment-Timezone library
const moment = require('moment-timezone');

// Function to convert local time to UTC in a specific timezone
function convertLocalTimeToUTC(localTime, timeZone) {
    return moment.tz(localTime, "YYYY-MM-DD hh:mm A", timeZone).utc().format("YYYY-MM-DD HH:mm:ss [UTC]");
}

// Example Inputs
const localTimeDST = "2023-07-15 02:00 PM"; // 2 PM (DST Active)
const localTimeNonDST = "2023-12-15 02:00 PM"; // 2 PM (DST Not Active)

// Timezone to use
const timeZone = "America/New_York";

// Convert local times to UTC
const utcTimeDST = convertLocalTimeToUTC(localTimeDST, timeZone);
const utcTimeNonDST = convertLocalTimeToUTC(localTimeNonDST, timeZone);

// Output the results
console.log("UTC Time (DST Active):", utcTimeDST); // 6:00 PM UTC
console.log("UTC Time (DST Not Active):", utcTimeNonDST); // 7:00 PM UTC
