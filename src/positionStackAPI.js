'use strict';

import { getDOMElement } from "./DOMUtils.js";
import { distance } from './calculateDistance.js'
import { getIPData } from './ipInfoAPI.js'

export const visitedCountry = [];
export const visitedLocationCheck = [];
export const visitedLocation = [];
export const visitedCountryFlag = [];

let crossedDistance = 0;
export async function fetchLocationData(url) {
    try {
        const locationData = await fetch(url);
        if (locationData.ok) {
            const jsonLocationData = await locationData.json();
            getDOMElement('location-result').value = `Latitude: ${jsonLocationData.data[0].latitude},
Longitude: ${jsonLocationData.data[0].longitude},
Country: ${jsonLocationData.data[0].country},
Flag: ${jsonLocationData.data[0].country_module.flag}
            `;
            if (!visitedCountry.includes(jsonLocationData.data[0].country)) {
                visitedCountry.push(jsonLocationData.data[0].country);

                const visitedCountryFlagObject = {
                    countryFlag: jsonLocationData.data[0].country_module.flag,
                    countryName: jsonLocationData.data[0].country
                };
                visitedCountryFlag.push(visitedCountryFlagObject);

                const destinationLat = jsonLocationData.data[0].latitude;
                const destinationLon = jsonLocationData.data[0].longitude;
                const userLocation = await getIPData();
                const userLat = userLocation[0];
                const userLon = userLocation[1];
                if (destinationLat !== 0 && destinationLon !== 0) {
                    crossedDistance += distance(userLat, destinationLat, userLon, destinationLon);
                    getDOMElement('crossed-distance').innerHTML = `You have crossed ${crossedDistance.toFixed(2)} KM`;
                }
            }
            if (!visitedLocationCheck.includes(jsonLocationData.data[0].region)) {
                const visitedLocationObject = {
                    visitedLocation: jsonLocationData.data[0].region,
                    visitedLocationCountry: jsonLocationData.data[0].country
                };
                visitedLocation.push(visitedLocationObject);
                visitedLocationCheck.push(jsonLocationData.data[0].region);
            }
        }
    }
    catch (error) {
        console.log(error.stack);
    }
}