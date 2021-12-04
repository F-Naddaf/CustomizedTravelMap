'use strict';

import { createDOMElement, getDOMElement, clearDOMElement } from '../DOMUtils.js';
import { showTripTab, showFiguresTab, showMapTab } from '../mapHandler.js';
import { displayForm } from '../mapListener.js';

export const createTabElements = () => {
    const userInterfaceContainer = getDOMElement('user-interface-container');
    const userInterfaceContent = getDOMElement('user-interface-content');
    clearDOMElement(userInterfaceContent);

    const navOverlay = createDOMElement('div', { id: 'nav-overlay' });
    const appNav = createDOMElement('div', { id: 'app-nav', className: 'tab' });
    const tripTab = createDOMElement('button', { id: 'trip-tab', className: 'tab-links active' });
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

    const tripTabContent = createDOMElement('div', { id: 'trip-tab-content', className: 'tab-content' });
    const dashedWindow = createDOMElement('div', { id: 'dashed-window' });
    const addTripButton = createDOMElement('button', { id: 'add-trip-btn' });
    const plusIcon = createDOMElement('i', { className: 'fas fa-plus' });
    const addTripText = createDOMElement('h2', { id: 'add-trip-txt' });

    addTripButton.appendChild(plusIcon);
    addTripButton.addEventListener('click', displayForm);
    addTripText.innerHTML = 'Add Trip';

    dashedWindow.appendChild(addTripButton);
    dashedWindow.appendChild(addTripText);

    tripTabContent.appendChild(dashedWindow);

    // const addBtnElement = document.createElement('button');
    // addBtnElement.innerHTML = 'Submit';
    // addBtnElement.addEventListener('click', submitBtn);

    userInterfaceContent.appendChild(tripTabContent);
    // userInterfaceContent.appendChild(addBtnElement);

    const figuresTabContent = createDOMElement('div', { id: 'figures-tab-content', className: 'tab-content' });

    const figureCountryCard = createDOMElement('div', { id: 'figure-country-card' });
    const figureCountryImage = createDOMElement('img', { id: 'figure-country-image' });
    const visitedCountryCounter = createDOMElement('h3', { id: 'country-counter' });
    figureCountryCard.appendChild(figureCountryImage);
    figureCountryCard.appendChild(visitedCountryCounter);

    const figureWorldCard = createDOMElement('div', { id: 'figure-world-card' });
    const figureWorldImage = createDOMElement('img', { id: 'figure-world-image' });
    const coveredWorldPercentage = createDOMElement('h3', { id: 'world-percentage' });
    figureWorldCard.appendChild(figureWorldImage);
    figureWorldCard.appendChild(coveredWorldPercentage);

    const figureLocationCard = createDOMElement('div', { id: 'figure-location-card' });
    const figureLocationImage = createDOMElement('img', { id: 'figure-location-image' });
    const visitedLocationCounter = createDOMElement('h3', { id: 'location-counter' });
    figureLocationCard.appendChild(figureLocationImage);
    figureLocationCard.appendChild(visitedLocationCounter);

    const figureDistanceCard = createDOMElement('div', { id: 'figure-distance-card' });
    const figureDistanceImage = createDOMElement('img', { id: 'figure-distance-image' });
    const crossedDistanceCounter = createDOMElement('h3', { id: 'crossed-distance' });
    figureDistanceCard.appendChild(figureDistanceImage);
    figureDistanceCard.appendChild(crossedDistanceCounter);

    figuresTabContent.appendChild(figureCountryCard);
    figuresTabContent.appendChild(figureWorldCard);
    figuresTabContent.appendChild(figureLocationCard);
    figuresTabContent.appendChild(figureDistanceCard);

    navOverlay.style.top = '0px';
    userInterfaceContent.appendChild(navOverlay);
    userInterfaceContent.appendChild(figuresTabContent);

    userInterfaceContainer.appendChild(userInterfaceContent);
}