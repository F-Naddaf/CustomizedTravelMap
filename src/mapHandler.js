'use strict';

import { createDOMElement, getDOMElement, clearDOMElement } from './DOMUtils.js';
import { fetchLocationData, visitedCountry, visitedLocation, visitedLocationCheck, visitedCountryFlag } from './APIs/positionStackAPI.js'
import { createTabElements } from './views/appViews.js';

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
    visitedCountryCounter.innerHTML = `You have visited 0/193`;
    const figureCountryImage = getDOMElement('figure-country-image');
    figureCountryImage.src = 'media/Flags.png';
    const coveredWorldPercentage = getDOMElement('world-percentage');
    coveredWorldPercentage.innerHTML = `You have covered 0% of the World`;
    const figureWorldImage = getDOMElement('figure-world-image');
    figureWorldImage.src = 'media/World.jpg';
    const visitedLocationCounter = getDOMElement('location-counter');
    visitedLocationCounter.innerHTML = `You have visited 0 Locations`;
    const figureLocationImage = getDOMElement('figure-location-image');
    figureLocationImage.src = 'media/Locations.jpg';
    const crossedDistanceCounter = getDOMElement('crossed-distance');
    crossedDistanceCounter.innerHTML = `You have crossed 0 KM`;
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
        // localStorage.setItem('userCoverPhoto', reader.result);
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