'use strict';

import { createElements } from './mapViews.js'
import { getIPData } from './ipInfoAPI.js'


const initializeMap = () => {
    document.body.appendChild(createElements());
}

window.addEventListener('load', initializeMap);
window.addEventListener('load', getIPData());