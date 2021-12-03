'use strict';

import { createDOMElement, getDOMElement, clearDOMElement } from '../DOMUtils.js';
import { showTripTab, showFiguresTab, showMapTab } from '../mapHandler.js'

export const createTheTab = () => {
    const userInterfaceContainer = getDOMElement('user-interface-container');
    const userInterfaceContent = getDOMElement('user-interface-content');
    clearDOMElement(userInterfaceContent);

    const profileCover = createDOMElement('div', { id: 'profile-cover' }); //To be changed later
    const profilePhoto = createDOMElement('div', { id: 'profile-photo' }); //To be changed later
    const profileName = createDOMElement('h1', { id: 'profile-name' });
    profileName.innerHTML = window.localStorage.getItem('userName');

    const visitedCountryFlagContainer = createDOMElement('div', { id: 'country-flag-container', className: 'flag-container' });
    const originCountryFlag = createDOMElement('div', { id: 'origin-country-flag', className: 'flags-chip' })
    const originCountrySpan = createDOMElement('span', { id: 'origin-country-span' });
    originCountryFlag.innerHTML = window.localStorage.getItem('userCountry');
    originCountrySpan.innerHTML = window.localStorage.getItem('userCountryFlag');
    originCountryFlag.appendChild(originCountrySpan);
    visitedCountryFlagContainer.appendChild(originCountryFlag);

    const navOverlay = createDOMElement('div', { id: 'nav-overlay' });
    const appNav = createDOMElement('div', { id: 'app-nav', className: 'tab' });
    const tripTab = createDOMElement('button', { id: 'trip-tab', className: 'tab-links' });
    tripTab.addEventListener('click', showTripTab);
    const figuresTab = createDOMElement('button', { id: 'figures-tab', className: 'tab-links' });
    figuresTab.addEventListener('click', showFiguresTab);
    const mapTab = createDOMElement('button', { id: 'map-tab', className: 'tab-links' });
    mapTab.addEventListener('click', showMapTab);

    tripTab.textContent = 'Trip';
    figuresTab.textContent = 'Figures';
    mapTab.textContent = 'Map';

    appNav.appendChild(tripTab);
    appNav.appendChild(figuresTab);
    appNav.appendChild(mapTab);

    navOverlay.appendChild(appNav);

    userInterfaceContent.appendChild(profileCover);
    userInterfaceContent.appendChild(profilePhoto);
    userInterfaceContent.appendChild(profileName);
    userInterfaceContent.appendChild(visitedCountryFlagContainer);
    userInterfaceContent.appendChild(navOverlay);

    userInterfaceContainer.appendChild(userInterfaceContent);
}