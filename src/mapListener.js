'use strict';

import { getIPData } from './APIs/ipInfoAPI.js';
import { createTheTab } from './views/profileViews.js';
import { createFormElement } from './views/formViews.js';
import { createFiguresTabElements } from './views/figuresTabViews.js';
import { createMapTabElements } from './views/mapTabViews.js';
import { showFiguresTab, showMapTab, chooseLocation, getFormData } from './mapHandler.js';
import { createLocationCard } from './views/locationCardViews.js';

export const signIn = () => {
    getIPData();
}

export const logIn = (visitedLocations, visitedCountries, profileCover, profilePhoto, tripInfo) => {
    createTheTab(visitedLocations, visitedCountries, profileCover, profilePhoto, tripInfo);
}

export const displayForm = () => {
    createFormElement();
}

export const saveTrip = (tripInfo) => {
    chooseLocation();
    getFormData(tripInfo);
    createLocationCard();
}

export const createFiguresTab = () => {
    createFiguresTabElements();
    showFiguresTab();
}

export const createMapTab = () => {
    createMapTabElements();
    showMapTab();
}