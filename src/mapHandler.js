'use strict';

import { createDOMElement, getDOMElement } from './DOMUtils.js';
import { fetchLocationData } from './APIs/positionStackAPI.js';

const apiForward = 'http://api.positionstack.com/v1/forward?access_key=fa2c3cb76f128bf3971efaa75baf033b';

export const showTripTab = () => {
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

    reader.addEventListener('load', (uploadEvent) => {
        const imgElement = createDOMElement('img');
        imgElement.src = uploadEvent.target.result;
        getDOMElement('profile-cover').style.backgroundImage = `url(${reader.result})`;

        imgElement.addEventListener('load', (e) => {
            const canvas = createDOMElement('canvas');
            const MOBILE_MAX_WIDTH = 375;
            const TABLET_MAX_WIDTH = 640;
            const DESKTOP_MAX_WIDTH = 940;

            const scaleSize = MOBILE_MAX_WIDTH / e.target.width;
            canvas.width = MOBILE_MAX_WIDTH;
            canvas.height = e.target.height * scaleSize;

            const ctx = canvas.getContext('2d');
            ctx.drawImage(e.target, 0, 0, canvas.width, canvas.height);

            const compressedProfileCover = ctx.canvas.toDataURL(e.target, 'image/jpeg');
            localStorage.setItem('profileCover', compressedProfileCover);
        });
    });
    reader.readAsDataURL(this.files[0]);
}

export function addProfilePicture() {
    const reader = new FileReader();

    reader.addEventListener('load', (uploadEvent) => {
        const imgElement = createDOMElement('img');
        imgElement.src = uploadEvent.target.result;
        getDOMElement('profile-photo').style.backgroundImage = `url(${reader.result})`;

        imgElement.addEventListener('load', (e) => {
            const canvas = createDOMElement('canvas');
            const MOBILE_MAX_WIDTH = 140;
            const TABLET_MAX_WIDTH = 170;
            const DESKTOP_MAX_WIDTH = 200;

            const scaleSize = MOBILE_MAX_WIDTH / e.target.width;
            canvas.width = MOBILE_MAX_WIDTH;
            canvas.height = e.target.height * scaleSize;

            const ctx = canvas.getContext('2d');
            ctx.drawImage(e.target, 0, 0, canvas.width, canvas.height);

            const compressedProfilePhoto = ctx.canvas.toDataURL(e.target, 'image/jpeg');
            localStorage.setItem('profilePhoto', compressedProfilePhoto);
        });
    });
    reader.readAsDataURL(this.files[0]);
}

export const chooseLocation = (tripInfo) => {
    const region = getDOMElement('location-input').value;
    if (region) {
        const url = `${apiForward}&query=${region}&limit=1&country_module=1`;
        fetchLocationData(url, tripInfo);
    }
}

export function addLocationHeaderPhoto() {
    const file = getDOMElement('add-header-location-photo').files[0];

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.addEventListener('load', (uploadEvent) => {
        const imgElement = createDOMElement('img');
        imgElement.src = uploadEvent.target.result;

        imgElement.addEventListener('load', (e) => {
            const canvas = createDOMElement('canvas');
            const MOBILE_MAX_WIDTH = 150;
            const TABLET_MAX_WIDTH = 300;
            const DESKTOP_MAX_WIDTH = 450;

            const scaleSize = MOBILE_MAX_WIDTH / e.target.width;
            canvas.width = MOBILE_MAX_WIDTH;
            canvas.height = e.target.height * scaleSize;

            const ctx = canvas.getContext('2d');
            ctx.drawImage(e.target, 0, 0, canvas.width, canvas.height);

            const compressedLocationHeaderPhoto = ctx.canvas.toDataURL(e.target, 'image/jpeg');
            localStorage.setItem('tripHeaderPhoto', compressedLocationHeaderPhoto);
        });
    });
}

export const enableSaveTripButton = () => {
    setTimeout(() => {
        const tripLocation = getDOMElement('location-input').value;
        const tripStartDate = getDOMElement('from-date-input').value;
        const tripEndDate = getDOMElement('to-date-input').value;
        const saveTripInfo = getDOMElement('save-trip-info');
        if (tripLocation && tripStartDate && tripEndDate) {
            saveTripInfo.disabled = false;
        }
    }, 1000);
}


export const getFormData = (tripInfo) => {
    if (!tripInfo) {
        const trip = [];
        const tripInfoObject = {
            tripLocation: getDOMElement('location-input').value,
            tripHeaderPhoto: getDOMElement('location-input').value,
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
        const tripHeaderPhoto = localStorage.getItem('tripHeaderPhoto');
        if (tripHeaderPhoto !== null) {
            tripInfoObject.tripHeaderPhoto = tripHeaderPhoto;
        }
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

        trip.push(tripInfoObject);
        localStorage.setItem('tripInfo', JSON.stringify(trip));
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