'use strict';

import { createDOMElement, getDOMElement, clearDOMElement } from '../DOMUtils.js';
import { displayForm, createFiguresTab, createMapTab } from '../mapListener.js';
import { createTheTab } from './profileViews.js';
import { showTripTab } from '../mapHandler.js';

export const createLocationCard = (tripInfo) => {
    const userInterfaceContainer = getDOMElement('user-interface-container');
    const userInterfaceContent = getDOMElement('user-interface-content');
    clearDOMElement(userInterfaceContent);

    tripInfo = JSON.parse(localStorage.getItem('tripInfo'));

    const navOverlay = createDOMElement('div', { id: 'nav-overlay' });
    const appNav = createDOMElement('div', { id: 'app-nav', className: 'tab' });
    const tripTab = createDOMElement('button', { id: 'trip-tab', className: 'tab-links active' });
    tripTab.addEventListener('click', showTripTab);
    const figuresTab = createDOMElement('button', { id: 'figures-tab', className: 'tab-links' });
    figuresTab.addEventListener('click', createFiguresTab);
    const mapTab = createDOMElement('button', { id: 'map-tab', className: 'tab-links' });
    mapTab.addEventListener('click', createMapTab);

    tripTab.textContent = 'Trip';
    figuresTab.textContent = 'Figures';
    mapTab.textContent = 'Map';

    appNav.appendChild(tripTab);
    appNav.appendChild(figuresTab);
    appNav.appendChild(mapTab);

    navOverlay.appendChild(appNav);

    const tripTabContent = createDOMElement('div', { id: 'trip-tab-content', className: 'tab-content' });
    const dashedWindow = createDOMElement('div', { id: 'dashed-window' });
    const addTripButton = createDOMElement('button', { id: 'add-trip-btn' });
    const plusIcon = createDOMElement('i', { className: 'fas fa-plus' });
    const addTripText = createDOMElement('h2', { id: 'add-trip-txt' });

    addTripButton.appendChild(plusIcon);
    addTripButton.addEventListener('click', () => {
        clearDOMElement(locationCardsContainer);
        displayForm();
    });
    addTripText.innerHTML = 'Add Trip';

    dashedWindow.appendChild(addTripButton);
    dashedWindow.appendChild(addTripText);

    tripTabContent.appendChild(dashedWindow);
    dashedWindow.style.setProperty('top', 'calc(100vh - 87px - 10px - 110px)');


    const locationCardsContainer = createDOMElement('div', { id: 'location-card-container' });

    tripInfo.forEach((trip) => {
        const locationCard = createDOMElement('div', { id: 'location-card' });
        const locationCardHeaderPhoto = createDOMElement('div', { id: 'location-card-header-photo' });

        const tripHeaderPhoto = localStorage.getItem('tripHeaderPhoto');

        if (tripHeaderPhoto === null) {
            locationCardHeaderPhoto.innerHTML = trip.tripHeaderPhoto;
            locationCardHeaderPhoto.style.cssText = `
                background-color: #E0E0E0;
                width: 150px;
                height: 50px;
                text-align: center;
                font-size: 1.5rem;
                font-weight: bold;
                line-height: 50px;
            `;
        }
        if (tripHeaderPhoto) {
            locationCardHeaderPhoto.style.backgroundImage = `url(${trip.tripHeaderPhoto})`;
        }

        const duplicateButton = createDOMElement('button', { id: 'duplicate-button' });
        const duplicateIcon = createDOMElement('i', { className: 'fas fa-copy fa-2x' });
        duplicateButton.appendChild(duplicateIcon);

        const editButton = createDOMElement('button', { id: 'edit-button' });
        const editIcon = createDOMElement('i', { className: 'fas fa-edit fa-2x' });
        editButton.appendChild(editIcon);

        const displayButton = createDOMElement('button', { id: 'display-button' });
        const displayIcon = createDOMElement('i', { className: 'fas fa-eye fa-2x' });
        displayButton.appendChild(displayIcon);

        const deleteButton = createDOMElement('button', { id: 'delete-button' });
        const deleteIcon = createDOMElement('i', { className: 'fas fa-backspace fa-2x' });
        deleteButton.appendChild(deleteIcon);

        locationCard.appendChild(locationCardHeaderPhoto);
        locationCard.appendChild(duplicateButton);
        locationCard.appendChild(editButton);
        locationCard.appendChild(displayButton);
        locationCard.appendChild(deleteButton);

        locationCardsContainer.appendChild(locationCard);
    });

    const appFooter = createDOMElement('div', { className: 'app-footer' });
    const optionToolStrip = createDOMElement('div', { className: 'option-tool-trip' });

    const toolStripList = createDOMElement('ul');
    const optionList = ['Profile', 'Home', 'Settings'];
    optionList.forEach((item) => {
        const toolStripItem = createDOMElement('li', { id: 'tool-strip-item' });
        const itemAnchor = createDOMElement('a');
        itemAnchor.href = '#';
        const anchorIconSpan = createDOMElement('span');
        const anchorTextSpan = createDOMElement('span', { className: 'anchor-text-span' });
        if (item === 'Profile') {
            anchorTextSpan.innerHTML = 'Profile';
            anchorIconSpan.className = 'anchor-icon-span fas fa-user';
            toolStripItem.style.marginLeft = '10%';
            toolStripItem.addEventListener('click', () => {
                createTheTab(
                    JSON.parse(localStorage.getItem('visitedLocations')),
                    JSON.parse(localStorage.getItem('visitedCountries')),
                    localStorage.getItem('profileCover'),
                    localStorage.getItem('profilePhoto')
                );
            });
        }
        if (item === 'Home') {
            anchorTextSpan.innerHTML = 'Home';
            anchorIconSpan.className = 'anchor-icon-span fas fa-house-user';
            toolStripItem.className = 'active';
        }
        if (item === 'Settings') {
            anchorTextSpan.innerHTML = 'Settings';
            anchorIconSpan.className = 'anchor-icon-span fas fa-user-cog';
            toolStripItem.addEventListener('click', () => {
                console.log('Create Dark & Light Mode');
            });
        }
        itemAnchor.appendChild(anchorIconSpan);
        itemAnchor.appendChild(anchorTextSpan);
        toolStripItem.appendChild(itemAnchor);
        toolStripList.appendChild(toolStripItem);
    });

    const optionIndicator = createDOMElement('div', { className: 'option-indicator' });
    optionIndicator.style.transform = "translateX(98px)";
    if (window.matchMedia('(min-width: 920px)')) {
        optionIndicator.style.transform = "translateX(160px)";
    }
    toolStripList.appendChild(optionIndicator);
    optionToolStrip.appendChild(toolStripList);
    appFooter.appendChild(optionToolStrip);

    navOverlay.style.top = '0px';
    userInterfaceContent.appendChild(navOverlay);
    userInterfaceContent.appendChild(tripTabContent);
    userInterfaceContent.appendChild(locationCardsContainer);
    userInterfaceContent.appendChild(appFooter);

    localStorage.setItem('tripHeaderPhoto', null);

    userInterfaceContainer.appendChild(userInterfaceContent);
}