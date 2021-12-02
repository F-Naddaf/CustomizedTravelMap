'use strict';

import { createDOMElement, getDOMElement } from './DOMUtils.js';
import { fetchLocationData, visitedCountry, visitedLocation, visitedLocationCheck, visitedCountryFlag } from './APIs/positionStackAPI.js'

const apiForward = 'http://api.positionstack.com/v1/forward?access_key=fa2c3cb76f128bf3971efaa75baf033b';

let timeout = null;
export const chooseLocation = () => {
    clearTimeout(timeout);
    setTimeout(() => {
        const region = getDOMElement('location-input').value;
        const url = `${apiForward}&query=${region}&limit=1&country_module=1`;
        fetchLocationData(url);
    }, 1500);
}

let countryFlagName = '';
export const addCountry = () => {
    let countryCount = visitedCountry.length;
    getDOMElement('country-counter').innerHTML = `You have visited ${countryCount}/193`;
    let percent = (countryCount * 100) / 193;
    getDOMElement('world-percentage').innerHTML = `You have covered ${percent.toFixed(1)}% of the World`;
    let locationCount = visitedLocationCheck.length;
    getDOMElement('location-counter').innerHTML = `You have visited ${locationCount} Locations`;

    getDOMElement('country-flag-container').innerHTML = '';
}

export const displayFlag = () => {
    visitedCountryFlag.forEach((countryFlag) => {
        const visitedCountryFlagElement = createDOMElement('button');
        visitedCountryFlagElement.innerHTML = countryFlag.countryFlag;
        countryFlagName = countryFlag.countryName;
        getDOMElement('country-flag-container').appendChild(visitedCountryFlagElement);
        visitedCountryFlagElement.addEventListener('mouseover', displayVisitedLocation(visitedCountryFlagElement, countryFlagName));
    });
}

export const displayVisitedLocation = (visitedCountryFlagElement, countryFlagName) => {
    const visitedLocationList = visitedLocation.map((location) => {
        if (location.visitedLocationCountry === countryFlagName) {
            visitedCountryFlagElement.title += `${location.visitedLocation}, `;
        }
    });
}