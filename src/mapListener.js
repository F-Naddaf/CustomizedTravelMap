'use strict';

import { showFiguresTab, addCountry, displayFlag, displayVisitedLocation } from './mapHandler.js'
import { getIPData } from './APIs/ipInfoAPI.js'
import { createTabElements } from './views/appViews.js'
import { createTheTab } from './views/profileViews.js';

export const logIn = () => {
    getIPData();
    createTheTab();
}

export const submitBtn = () => {
    addCountry();
    displayFlag();
    displayVisitedLocation();
}