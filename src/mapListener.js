'use strict';

import { getIPData } from './APIs/ipInfoAPI.js';
import { createTheTab } from './views/profileViews.js';
import { createFormElement } from './views/formViews.js';
import { createFiguresTabElements } from './views/figuresTabViews.js';
import { createMapTabElements } from './views/mapTabViews.js';
import { showFiguresTab, showMapTab, chooseLocation, getFormData } from './mapHandler.js';

export const signIn = () => {
    getIPData();
}

export const logIn = (visitedLocations, visitedCountries) => {
    createTheTab(visitedLocations, visitedCountries);
}

export const displayForm = () => {
    createFormElement();
}

export const saveTrip = () => {
    chooseLocation();
    getFormData();
}

export const createFiguresTab = () => {
    createFiguresTabElements();
    showFiguresTab();
}

export const createMapTab = () => {
    createMapTabElements();
    showMapTab();
}