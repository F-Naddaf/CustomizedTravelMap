'use strict';

import { createDOMElement, getDOMElement } from '../DOMUtils.js';
import { chooseLocation } from '../mapHandler.js'
import { submitBtn } from '../mapListener.js';
import { clearDOMElement } from '../DOMUtils.js';

export const createElements = () => {
    const userInterfaceContainer = getDOMElement('user-interface-container');
    const userInterfaceContent = getDOMElement('user-interface-content');
    clearDOMElement(userInterfaceContent);

    const navOverlay = createDOMElement('div', { id: 'nav-overlay' });
    const appNav = createDOMElement('div', { id: 'app-nav', className: 'tab' });
    const tripTab = createDOMElement('button', { id: 'trip-tab', className: 'tab-links active' });
    const figuresTab = createDOMElement('button', { id: 'figures-tab', className: 'tab-links' });
    const mapTab = createDOMElement('button', { id: 'map-tab', className: 'tab-links' });

    tripTab.textContent = 'Trip';
    figuresTab.textContent = 'Figures';
    mapTab.textContent = 'Map';

    appNav.appendChild(tripTab);
    appNav.appendChild(figuresTab);
    appNav.appendChild(mapTab);

    navOverlay.appendChild(appNav);

    const dashedWindow = createDOMElement('div', { id: 'dashed-window' });
    const addTripButton = createDOMElement('button', { id: 'add-trip-btn' });
    const plusIcon = createDOMElement('i', { className: 'fas fa-plus' });
    const addTripText = createDOMElement('h2', { id: 'add-trip-txt' });

    addTripButton.appendChild(plusIcon);
    addTripText.innerHTML = 'Add Trip';

    dashedWindow.appendChild(addTripButton);
    dashedWindow.appendChild(addTripText);

    // const addLocationElement = createDOMElement('input', { id: 'location-input' });
    // addLocationElement.addEventListener('keyup', chooseLocation);

    // const displayLocationResultElement = createDOMElement('textarea', { id: 'location-result' });

    // const addBtnElement = document.createElement('button');
    // addBtnElement.addEventListener('click', submitBtn);

    // const visitedCountryFlagContainer = createDOMElement('div', { id: 'country-flag-container', className: 'flag-container' });

    // const displayIPResultElement = createDOMElement('textarea', { id: 'ip-result' });

    // addBtnElement.innerHTML = 'Submit';

    userInterfaceContent.appendChild(navOverlay);
    userInterfaceContent.appendChild(dashedWindow);
    // userInterfaceContent.appendChild(addLocationElement);
    // userInterfaceContent.appendChild(displayLocationResultElement);
    // userInterfaceContent.appendChild(addBtnElement);
    // userInterfaceContent.appendChild(visitedCountryCounter);
    // userInterfaceContent.appendChild(coveredWorldPercentage);
    // userInterfaceContent.appendChild(visitedLocationCounter);
    // userInterfaceContent.appendChild(visitedCountryFlagContainer);
    // userInterfaceContent.appendChild(displayIPResultElement);
    // userInterfaceContent.appendChild(crossedDistanceElement);

    userInterfaceContainer.appendChild(userInterfaceContent);
}