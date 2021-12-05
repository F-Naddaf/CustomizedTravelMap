'use strict';

import { createDOMElement, getDOMElement, clearDOMElement } from '../DOMUtils.js';
import { addCoverPhoto, addProfilePicture } from '../mapHandler.js'
import { createTripTabElements } from './tripTabViews.js'

export const createTheTab = () => {
    const userInterfaceContainer = getDOMElement('user-interface-container');
    const userInterfaceContent = getDOMElement('user-interface-content');
    clearDOMElement(userInterfaceContent);

    const visitedLocations = JSON.parse(localStorage.getItem('visitedLocations'));
    const visitedCountries = JSON.parse(localStorage.getItem('visitedCountries'));

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
    if (visitedCountries) {
        if (visitedCountries.length > 0) {
            visitedCountries.forEach((country) => {
                const visitedCountryFlag = createDOMElement('div', { id: 'visited-country-flag', className: 'flags-chip' });
                const visitedCountrySpan = createDOMElement('span', { id: 'visited-country-span' });
                visitedCountryFlag.innerHTML = country.countryName;
                visitedCountrySpan.innerHTML = country.countryFlag;
                const toolTipSpan = createDOMElement('span', { className: 'tool-tip-text' });

                visitedLocations.forEach((location) => {
                    if (location.visitedLocationCountry === country.countryName) {
                        toolTipSpan.innerHTML += `${location.visitedLocation}<br>`;

                        visitedCountryFlag.appendChild(toolTipSpan);
                        visitedCountryFlag.addEventListener('mouseover', () => {
                            toolTipSpan.style.visibility = 'visible';
                        });
                    }
                });
                visitedCountryFlag.appendChild(visitedCountrySpan);
                visitedCountryFlagContainer.appendChild(visitedCountryFlag);
            });
        }
    }

    const appFooter = createDOMElement('div', { className: 'app-footer' });
    const optionToolStrip = createDOMElement('div', { className: 'option-tool-trip' });

    const toolStripList = createDOMElement('ul');
    const optionList = ['Profile', 'Home', 'Settings'];
    for (let i = 0; i < optionList.length; i++) {
        const toolStripItem = createDOMElement('li', { id: 'tool-strip-item' });
        const itemAnchor = createDOMElement('a');
        itemAnchor.href = '#';
        const anchorIconSpan = createDOMElement('span');
        const anchorTextSpan = createDOMElement('span', { className: 'anchor-text-span' });
        if (i === 0) {
            anchorTextSpan.innerHTML = 'Profile';
            anchorIconSpan.className = 'anchor-icon-span fas fa-user';
            toolStripItem.className = 'active';
            toolStripItem.style.marginLeft = '10%';
        }
        if (i === 1) {
            anchorTextSpan.innerHTML = 'Home';
            anchorIconSpan.className = 'anchor-icon-span fas fa-house-user';
            toolStripItem.addEventListener('click', createTripTabElements);
        }
        if (i === 2) {
            anchorTextSpan.innerHTML = 'Settings';
            anchorIconSpan.className = 'anchor-icon-span fas fa-user-cog';
            toolStripItem.addEventListener('click', () => {
                console.log('Create Dark & Light Mode Later');
            });
        }
        itemAnchor.appendChild(anchorIconSpan);
        itemAnchor.appendChild(anchorTextSpan);
        toolStripItem.appendChild(itemAnchor);
        toolStripList.appendChild(toolStripItem);
    }

    const optionIndicator = createDOMElement('div', { className: 'option-indicator' });
    toolStripList.appendChild(optionIndicator);
    optionToolStrip.appendChild(toolStripList);
    appFooter.appendChild(optionToolStrip);

    userInterfaceContent.appendChild(profileCover);
    userInterfaceContent.appendChild(addProfileCoverLabel);
    userInterfaceContent.appendChild(profilePhoto);
    userInterfaceContent.appendChild(addProfilePhotoLabel);
    userInterfaceContent.appendChild(profileName);
    userInterfaceContent.appendChild(visitedCountryFlagContainer);
    userInterfaceContent.appendChild(appFooter);

    userInterfaceContainer.appendChild(userInterfaceContent);
}