'use strict';

import { createDOMElement, getDOMElement } from './DOMUtils.js';
import { chooseLocation } from './mapHandler.js'
import { submitBtn } from './mapListener.js';

export const createElements = () => {
    const userInterfaceContainer = getDOMElement('user-interface');

    const addLocationElement = createDOMElement('input', { id: 'location-input' });
    addLocationElement.addEventListener('keyup', chooseLocation);

    const displayLocationResultElement = createDOMElement('textarea', { id: 'location-result' });

    const addBtnElement = document.createElement('button');
    addBtnElement.addEventListener('click', submitBtn);

    const visitedCountryCounter = createDOMElement('label', { id: 'country-counter' });
    const coveredWorldPercentage = createDOMElement('label', { id: 'world-percentage' });
    const visitedLocationCounter = createDOMElement('label', { id: 'location-counter' });
    const visitedCountryFlagContainer = createDOMElement('div', { id: 'country-flag-container', className: 'flag-container' });

    const displayIPResultElement = createDOMElement('textarea', { id: 'ip-result' });
    const crossedDistanceElement = createDOMElement('label', { id: 'crossed-distance' });

    addBtnElement.innerHTML = 'Submit';
    visitedCountryCounter.innerHTML = `You have visited 0/193`;
    coveredWorldPercentage.innerHTML = `You have covered 0% of the World`;
    visitedLocationCounter.innerHTML = `You have visited 0 Locations`;
    crossedDistanceElement.innerHTML = `You have crossed 0 KM`;

    userInterfaceContainer.appendChild(addLocationElement);
    userInterfaceContainer.appendChild(displayLocationResultElement);
    userInterfaceContainer.appendChild(addBtnElement);
    userInterfaceContainer.appendChild(visitedCountryCounter);
    userInterfaceContainer.appendChild(coveredWorldPercentage);
    userInterfaceContainer.appendChild(visitedLocationCounter);
    userInterfaceContainer.appendChild(visitedCountryFlagContainer);
    userInterfaceContainer.appendChild(displayIPResultElement);
    userInterfaceContainer.appendChild(crossedDistanceElement);

    return userInterfaceContainer;
}