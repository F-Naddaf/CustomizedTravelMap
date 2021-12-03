'use strict';

import { showFiguresTab, addCountry, displayFlag, displayVisitedLocation } from './mapHandler.js';
import { getIPData } from './APIs/ipInfoAPI.js';
import { createTheTab } from './views/profileViews.js';
import { createFormElement } from './views/formViews.js';

export const logIn = () => {
    getIPData();
    createTheTab();
}

export const displayForm = () => {
    createFormElement();
}

export const submitBtn = () => {
    addCountry();
    displayFlag();
    displayVisitedLocation();
}