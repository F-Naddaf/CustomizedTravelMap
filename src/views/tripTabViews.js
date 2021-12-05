'use strict';

import { createDOMElement, getDOMElement, clearDOMElement } from '../DOMUtils.js';
import { showTripTab } from '../mapHandler.js';
import { displayForm, createFiguresTab, createMapTab } from '../mapListener.js';
import { createTheTab } from './profileViews.js';

export const createTripTabElements = () => {
    const userInterfaceContainer = getDOMElement('user-interface-container');
    const userInterfaceContent = getDOMElement('user-interface-content');

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
    addTripButton.addEventListener('click', displayForm);
    addTripText.innerHTML = 'Add Trip';

    dashedWindow.appendChild(addTripButton);
    dashedWindow.appendChild(addTripText);

    tripTabContent.appendChild(dashedWindow);

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
                createTheTab();
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
    toolStripList.appendChild(optionIndicator);
    optionToolStrip.appendChild(toolStripList);
    appFooter.appendChild(optionToolStrip);

    navOverlay.style.top = '0px';
    clearDOMElement(userInterfaceContent);
    userInterfaceContent.appendChild(navOverlay);
    userInterfaceContent.appendChild(tripTabContent);
    userInterfaceContent.appendChild(appFooter);

    userInterfaceContainer.appendChild(userInterfaceContent);
}