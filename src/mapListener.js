'use strict';

import { addCountry, displayFlag, displayVisitedLocation } from './mapHandler.js'
import { getIPData } from './ipInfoAPI.js'
import { createElements } from './views/mapViews.js'

export const logIn = () => {
    getIPData();
    // createElements();
}
export const submitBtn = () => {
    addCountry();
    displayFlag();
    displayVisitedLocation();
}