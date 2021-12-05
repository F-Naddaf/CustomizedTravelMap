'use strict';

import { getDOMElement } from './DOMUtils.js';
import { fetchLocationData } from './APIs/positionStackAPI.js';
import { createTripTabElements } from './views/tripTabViews.js';

// const Compress = require('compress.js');
// const compress = new Compress();

const apiForward = 'http://api.positionstack.com/v1/forward?access_key=fa2c3cb76f128bf3971efaa75baf033b';

export const showTripTab = () => {
    createTripTabElements();
    const tripTab = getDOMElement('trip-tab');
    const figuresTab = getDOMElement('figures-tab');
    const MapTab = getDOMElement('map-tab');
    tripTab.className = 'tab-links active';
    figuresTab.className = 'tab-links';
    MapTab.className = 'tab-links';
}

export const showFiguresTab = () => {
    const visitedCountries = JSON.parse(localStorage.getItem('visitedCountries'));
    const visitedLocations = JSON.parse(localStorage.getItem('visitedLocations'));
    const visitedLocationObject = JSON.parse(localStorage.getItem('visitedLocations'));

    const visitedCountryCounter = getDOMElement('country-counter');
    const coveredWorldPercentage = getDOMElement('world-percentage');
    const visitedLocationCounter = getDOMElement('location-counter');
    const crossedDistanceCounter = getDOMElement('crossed-distance');

    if (visitedCountries) {
        if (visitedCountries.length === 1) {
            visitedCountryCounter.innerHTML = `You have visited ${visitedCountries.length}/193 Country`;
        } else {
            visitedCountryCounter.innerHTML = `You have visited ${visitedCountries.length}/193 Countries`;
        }
        const coveredPercent = (visitedCountries.length * 100) / 193;
        coveredWorldPercentage.innerHTML = `You have covered ${Math.floor(coveredPercent)}% of the World`;
        if (visitedLocations.length === 1) {
            visitedLocationCounter.innerHTML = `You have visited<br> ${visitedLocations.length} Location`;
        } else {
            visitedLocationCounter.innerHTML = `You have visited<br> ${visitedLocations.length} Locations`;
        }
        crossedDistanceCounter.innerHTML = `You have crossed ${visitedLocationObject[visitedLocationObject.length - 1].crossedDistance} KM`;
    }
    if (!visitedCountries) {
        visitedCountryCounter.innerHTML = `You have visited 0/193 Country`;
        coveredWorldPercentage.innerHTML = `You have covered 0% of the World`;
        visitedLocationCounter.innerHTML = `You have visited<br> 0 Location`;
        crossedDistanceCounter.innerHTML = `You have crossed 0 KM`;
    }
    const tripTab = getDOMElement('trip-tab');
    const figuresTab = getDOMElement('figures-tab');
    const MapTab = getDOMElement('map-tab');
    tripTab.className = 'tab-links';
    figuresTab.className = 'tab-links active';
    MapTab.className = 'tab-links';
}

export const showMapTab = () => {
    const tripTab = getDOMElement('trip-tab');
    const figuresTab = getDOMElement('figures-tab');
    const MapTab = getDOMElement('map-tab');
    tripTab.className = 'tab-links';
    figuresTab.className = 'tab-links';
    MapTab.className = 'tab-links active';
}

export function addCoverPhoto() {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
        getDOMElement('profile-cover').style.backgroundImage = `url(${reader.result})`;
        //     compress.compress(reader.result, {
        //         size: 4,
        //         quality: 0.75,
        //         maxWidth: 1920,
        //         maxHeight: 1920,
        //         resize: true
        //     }).then((compressedImg) => {
        //         localStorage.setItem('userCoverPhoto', compressedImg);
        //     });
        // },
        //     false
        // );
    });
    reader.readAsDataURL(this.files[0]);
}

export function addProfilePicture() {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
        getDOMElement('profile-photo').style.backgroundImage = `url(${reader.result})`;
        // localStorage.setItem('userCoverPhoto', reader.result);
    });
    reader.readAsDataURL(this.files[0]);
}

export const chooseLocation = () => {
    const region = getDOMElement('location-input').value;
    if (region) {
        const url = `${apiForward}&query=${region}&limit=1&country_module=1`;
        fetchLocationData(url);
    }
    else {
        alert('Please enter a location first');
    }
}

export function addLocationHeaderPhoto() {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
        const locationHeaderPhoto = reader.result;
        console.log(locationHeaderPhoto);
        // localStorage.setItem('userCoverPhoto', reader.result);
    });
    reader.readAsDataURL(this.files[0]);
}