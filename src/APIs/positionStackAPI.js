'use strict';

import { distance } from '../calculateDistance.js'

const visitedCountries = JSON.parse(localStorage.getItem('visitedCountries'));
const visitedLocations = JSON.parse(localStorage.getItem('visitedLocations'));

let visitedCountry = [];
const visitedLocationCheck = [];
let visitedLocation = [];
let visitedCountryFlag = [];

if (visitedCountries) {
    visitedLocation = visitedLocations;
    visitedCountryFlag = visitedCountries;
    visitedCountries.forEach(element => {
        visitedCountry.push(element.countryName);
    });
}

let crossedDistance = 0;
export async function fetchLocationData(url) {
    try {
        const locationData = await fetch(url);
        if (locationData.ok) {
            const jsonLocationData = await locationData.json();
            if (!visitedCountry.includes(jsonLocationData.data[0].country)) {
                visitedCountry.push(jsonLocationData.data[0].country);

                const visitedCountryFlagObject = {
                    countryFlag: jsonLocationData.data[0].country_module.flag,
                    countryName: jsonLocationData.data[0].country
                };
                visitedCountryFlag.push(visitedCountryFlagObject);
                localStorage.setItem('visitedCountries', JSON.stringify(visitedCountryFlag));

                const destinationLat = jsonLocationData.data[0].latitude;
                const destinationLon = jsonLocationData.data[0].longitude;

                const userInfo = JSON.parse(localStorage.getItem('userInfo'));
                const userLat = parseFloat(userInfo.userLat);
                const userLon = parseFloat(userInfo.userLon);

                if (destinationLat !== 0 && destinationLon !== 0) {
                    crossedDistance += distance(userLat, destinationLat, userLon, destinationLon);
                }
            }
            if (!visitedLocationCheck.includes(jsonLocationData.data[0].region)) {
                const visitedLocationObject = {
                    visitedLocation: jsonLocationData.data[0].region,
                    visitedLocationCountry: jsonLocationData.data[0].country,
                    visitedLocationLan: jsonLocationData.data[0].latitude,
                    visitedLocationLon: jsonLocationData.data[0].longitude,
                    crossedDistance: crossedDistance.toFixed(2)
                };
                visitedLocation.push(visitedLocationObject);
                visitedLocationCheck.push(jsonLocationData.data[0].region);
                localStorage.setItem('visitedLocations', JSON.stringify(visitedLocation));
            }
        }
    }
    catch (error) {
        console.log(error.stack);
    }
}