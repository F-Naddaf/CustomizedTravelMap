'use strict';

import { createDOMElement, getDOMElement, clearDOMElement } from '../DOMUtils.js';
import { showTripTab } from '../mapHandler.js';
import { createFiguresTab, createMapTab } from '../mapListener.js';

export const createMapTabElements = () => {
    const userInterfaceContainer = getDOMElement('user-interface-container');
    const userInterfaceContent = getDOMElement('user-interface-content');
    clearDOMElement(userInterfaceContent);

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

    navOverlay.style.top = '0px';
    navOverlay.appendChild(appNav);
    userInterfaceContent.appendChild(navOverlay);

    userInterfaceContainer.appendChild(userInterfaceContent);
}