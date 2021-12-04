'use strict';

import { createDOMElement, getDOMElement, clearDOMElement } from './DOMUtils.js';
import { fetchLocationData, visitedCountry, visitedLocation, visitedLocationCheck, visitedCountryFlag } from './APIs/positionStackAPI.js'
import { createTabElements } from './views/appViews.js';

// const Compress = require('compress.js');
// const compress = new Compress();

const apiForward = 'http://api.positionstack.com/v1/forward?access_key=fa2c3cb76f128bf3971efaa75baf033b';

export const showTripTab = () => {
    createTabElements();
    const tripTab = getDOMElement('trip-tab');
    const figuresTab = getDOMElement('figures-tab');
    const MapTab = getDOMElement('map-tab');
    tripTab.className = 'tab-links active';
    figuresTab.className = 'tab-links';
    MapTab.className = 'tab-links';
    const tripTabContent = getDOMElement('trip-tab-content');
    const figuresTabContent = getDOMElement('figures-tab-content');
    tripTabContent.style.display = 'flex';
    figuresTabContent.style.display = 'none';
}

export const showFiguresTab = () => {
    createTabElements();
    const visitedCountryCounter = getDOMElement('country-counter');
    const visitedCountries = JSON.parse(localStorage.getItem('visitedCountries'));
    visitedCountryCounter.innerHTML = `You have visited ${visitedCountries.length}/193`;
    const figureCountryImage = getDOMElement('figure-country-image');
    figureCountryImage.src = 'media/Flags.png';
    const coveredWorldPercentage = getDOMElement('world-percentage');
    const coveredPercent = (visitedCountries.length * 100) / 193;
    coveredWorldPercentage.innerHTML = `You have covered ${Math.floor(coveredPercent)}% of the World`;
    const figureWorldImage = getDOMElement('figure-world-image');
    figureWorldImage.src = 'media/World.jpg';
    const visitedLocationCounter = getDOMElement('location-counter');
    const visitedLocations = JSON.parse(localStorage.getItem('visitedLocations'));
    visitedLocationCounter.innerHTML = `You have visited<br> ${visitedLocations.length} Locations`;
    const figureLocationImage = getDOMElement('figure-location-image');
    figureLocationImage.src = 'media/Locations.jpg';
    const crossedDistanceCounter = getDOMElement('crossed-distance');
    const visitedLocationObject = JSON.parse(localStorage.getItem('visitedLocations'));
    console.log(visitedLocationObject);
    crossedDistanceCounter.innerHTML = `You have crossed ${visitedLocationObject[visitedLocationObject.length - 1].crossedDistance} KM`;
    const figureDistanceImage = getDOMElement('figure-distance-image');
    figureDistanceImage.src = 'media/Kilometers.jpg';
    const tripTab = getDOMElement('trip-tab');
    const figuresTab = getDOMElement('figures-tab');
    const MapTab = getDOMElement('map-tab');
    tripTab.className = 'tab-links';
    figuresTab.className = 'tab-links active';
    MapTab.className = 'tab-links';
    const tripTabContent = getDOMElement('trip-tab-content');
    const figuresTabContent = getDOMElement('figures-tab-content');
    tripTabContent.style.display = 'none';
    figuresTabContent.style.display = 'flex';
}

export const showMapTab = () => {
    createTabElements();
    const tripTab = getDOMElement('trip-tab');
    const figuresTab = getDOMElement('figures-tab');
    const MapTab = getDOMElement('map-tab');
    tripTab.className = 'tab-links';
    figuresTab.className = 'tab-links';
    MapTab.className = 'tab-links active';
    const tripTabContent = getDOMElement('trip-tab-content');
    const figuresTabContent = getDOMElement('figures-tab-content');
    tripTabContent.style.display = 'none';
    figuresTabContent.style.display = 'none';
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

export const saveTrip = () => {
    chooseLocation();
}