'use strict';

import { distance } from '../calculateDistance.js'
import { createTheTab } from '../views/profileViews.js'

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
            if (jsonLocationData.data.length === 0) {
                alert('Please Enter a Valid Location');
                createTheTab();
                return;
            }
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
            if (!tripInfo) {
                const tripInfo = [];
                const tripInfoObject = {
                    tripLocation: getDOMElement('location-input').value,
                    tripHeaderPhoto: localStorage.getItem('tripHeaderPhoto'),
                    tripStartDate: getDOMElement('from-date-input').value,
                    tripEndDate: getDOMElement('to-date-input').value,
                    travelledBy: '',
                    stayedIn: '',
                    travelledWith: '',
                    attractionName: '',
                    attractionCost: '',
                    attractionCostCurrency: '',
                    eventName: '',
                    eventLocation: '',
                    eventDate: '',
                    eventCost: ''
                };

                const getTravelledByValue = document.querySelector('input[name="TravelledBy"]:checked');
                if (getTravelledByValue != null) {
                    tripInfoObject.travelledBy = getTravelledByValue.value;
                }
                const getStayedInValue = document.querySelector('input[name="StayedIn"]:checked');
                if (getStayedInValue != null) {
                    tripInfoObject.stayedIn = getStayedInValue.value;
                }
                const getTravelledWithValue = document.querySelector('input[name="TravelledWith"]:checked');
                if (getTravelledWithValue != null) {
                    tripInfoObject.travelledWith = getTravelledWithValue.value;
                }
                tripInfoObject.attractionName = getDOMElement('visited-attraction-name').value;
                tripInfoObject.attractionCost = getDOMElement('visited-attraction-cost').value; //return a string representing a number
                tripInfoObject.attractionCostCurrency = getDOMElement('currency-select').value;
                tripInfoObject.eventName = getDOMElement('attended-event-name').value;
                tripInfoObject.eventLocation = getDOMElement('attended-event-location').value;
                tripInfoObject.eventDate = getDOMElement('attended-event-date').value;
                tripInfoObject.eventCost = getDOMElement('attended-event-cost').value; //return a string representing a number

                tripInfo.push(tripInfoObject);
                localStorage.setItem('tripInfo', JSON.stringify(tripInfo));
            }
            if (tripInfo) {
                const tripInfoObject = {
                    tripLocation: getDOMElement('location-input').value,
                    tripHeaderPhoto: localStorage.getItem('tripHeaderPhoto'),
                    tripStartDate: getDOMElement('from-date-input').value,
                    tripEndDate: getDOMElement('to-date-input').value,
                    travelledBy: '',
                    stayedIn: '',
                    travelledWith: '',
                    attractionName: '',
                    attractionCost: '',
                    attractionCostCurrency: '',
                    eventName: '',
                    eventLocation: '',
                    eventDate: '',
                    eventCost: ''
                };

                const getTravelledByValue = document.querySelector('input[name="TravelledBy"]:checked');
                if (getTravelledByValue != null) {
                    tripInfoObject.travelledBy = getTravelledByValue.value;
                }
                const getStayedInValue = document.querySelector('input[name="StayedIn"]:checked');
                if (getStayedInValue != null) {
                    tripInfoObject.stayedIn = getStayedInValue.value;
                }
                const getTravelledWithValue = document.querySelector('input[name="TravelledWith"]:checked');
                if (getTravelledWithValue != null) {
                    tripInfoObject.travelledWith = getTravelledWithValue.value;
                }
                tripInfoObject.attractionName = getDOMElement('visited-attraction-name').value;
                tripInfoObject.attractionCost = getDOMElement('visited-attraction-cost').value; //return a string representing a number
                tripInfoObject.attractionCostCurrency = getDOMElement('currency-select').value;
                tripInfoObject.eventName = getDOMElement('attended-event-name').value;
                tripInfoObject.eventLocation = getDOMElement('attended-event-location').value;
                tripInfoObject.eventDate = getDOMElement('attended-event-date').value;
                tripInfoObject.eventCost = getDOMElement('attended-event-cost').value; //return a string representing a number

                tripInfo.push(tripInfoObject);
                localStorage.setItem('tripInfo', JSON.stringify(tripInfo));
            }


        }
    }
    catch (error) {
        console.log(error.stack);
    }
}