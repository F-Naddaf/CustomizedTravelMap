'use strict';

import { addCountry, displayFlag, displayVisitedLocation } from './mapHandler.js'

export const submitBtn = () => {
    addCountry();
    displayFlag();
    displayVisitedLocation();
}