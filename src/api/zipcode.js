/**
 * Returns an array of objects with zipcodes within the radius of a zipcode
 * @param {number} zipcode 5 digit number (USA Zipcodes Only)
 * @param {number} radius in miles
 */

const zipcodesWithinRange = (zipcode, radius) => {
  const zipcodeAPIKey = process.env.REACT_APP_ZIPCODE_API_KEY;
  const url = `https://www.zipcodeapi.com/rest/${zipcodeAPIKey}/radius.json/${zipcode}/${radius}/mile`

  // TODO: Async Fetch zipcodes 

}
 
export default zipcodesWithinRange;

/**
 * e.g. https://www.zipcodeapi.com/rest/<apikey>/radius.json/94110/1/mile
 * RETURNS
 * 
{
  "zip_codes": [
    {
      "zip_code": "94146",
      "distance": 0.814,
      "city": "San Francisco",
      "state": "CA"
    },
    {
      "zip_code": "94110",
      "distance": 0,
      "city": "San Francisco",
      "state": "CA"
    },
    {
      "zip_code": "94140",
      "distance": 0.281,
      "city": "San Francisco",
      "state": "CA"
    },
    {
      "zip_code": "94141",
      "distance": 0.744,
      "city": "San Francisco",
      "state": "CA"
    }
  ]
}
 */