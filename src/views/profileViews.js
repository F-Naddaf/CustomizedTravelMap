'use strict';

import { createDOMElement, getDOMElement, clearDOMElement } from '../DOMUtils.js';
import { showTripTab, showFiguresTab, showMapTab, addCoverPhoto, addProfilePicture } from '../mapHandler.js'

export const createTheTab = () => {
    const userInterfaceContainer = getDOMElement('user-interface-container');
    const userInterfaceContent = getDOMElement('user-interface-content');
    clearDOMElement(userInterfaceContent);

    const profileCover = createDOMElement('div', { id: 'profile-cover' });
    const addProfileCover = createDOMElement('input', { id: 'add-profile-cover' });
    addProfileCover.setAttribute('type', 'file');
    addProfileCover.setAttribute('hidden', 'true');
    addProfileCover.setAttribute('accept', 'image/jpg');
    const addProfileCoverLabel = createDOMElement('label');
    addProfileCoverLabel.setAttribute('for', 'add-profile-cover');
    const addProfileCoverIcon = createDOMElement('i', { id: 'cover-icon', className: 'fas fa-camera' });
    addProfileCoverLabel.appendChild(addProfileCoverIcon);
    addProfileCover.addEventListener('change', addCoverPhoto);
    profileCover.appendChild(addProfileCover);

    const profilePhoto = createDOMElement('div', { id: 'profile-photo' });
    const addProfilePhoto = createDOMElement('input', { id: 'add-profile-photo' });
    addProfilePhoto.setAttribute('type', 'file');
    addProfilePhoto.setAttribute('hidden', 'true');
    addProfilePhoto.setAttribute('accept', 'image/jpg');
    const addProfilePhotoLabel = createDOMElement('label');
    addProfilePhotoLabel.setAttribute('for', 'add-profile-photo');
    const addProfilePhotoIcon = createDOMElement('i', { id: 'profile-icon', className: 'fas fa-camera' });
    addProfilePhotoLabel.appendChild(addProfilePhotoIcon);
    addProfilePhoto.addEventListener('change', addProfilePicture);
    profilePhoto.appendChild(addProfilePhoto);

    const userInfo = JSON.parse(localStorage.getItem('userInfo'));

    const profileName = createDOMElement('h1', { id: 'profile-name' });
    profileName.innerHTML = userInfo.userName;

    const visitedCountryFlagContainer = createDOMElement('div', { id: 'country-flag-container', className: 'flag-container' });
    const originCountryFlag = createDOMElement('div', { id: 'origin-country-flag', className: 'flags-chip' });
    const originCountrySpan = createDOMElement('span', { id: 'origin-country-span' });
    originCountryFlag.innerHTML = userInfo.userCountry;
    originCountrySpan.innerHTML = userInfo.userCountryFlag;
    originCountryFlag.appendChild(originCountrySpan);
    visitedCountryFlagContainer.appendChild(originCountryFlag);

    const visitedCountries = JSON.parse(localStorage.getItem('visitedCountries'));
    if (visitedCountries.length > 0) {
        visitedCountries.forEach((country) => {
            const visitedCountryFlag = createDOMElement('div', { id: 'visited-country-flag', className: 'flags-chip' });
            const visitedCountrySpan = createDOMElement('span', { id: 'visited-country-span' });
            visitedCountryFlag.innerHTML = country.countryName;
            visitedCountrySpan.innerHTML = country.countryFlag;
            visitedCountryFlag.appendChild(visitedCountrySpan);
            visitedCountryFlagContainer.appendChild(visitedCountryFlag);
        });
    }

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
    userInterfaceContent.appendChild(addProfileCoverLabel);
    userInterfaceContent.appendChild(profilePhoto);
    userInterfaceContent.appendChild(addProfilePhotoLabel);
    userInterfaceContent.appendChild(profileName);
    userInterfaceContent.appendChild(visitedCountryFlagContainer);
    userInterfaceContent.appendChild(navOverlay);

    userInterfaceContainer.appendChild(userInterfaceContent);
}