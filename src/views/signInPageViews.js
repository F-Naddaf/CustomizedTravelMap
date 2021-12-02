'use strict';

import { createDOMElement, getDOMElement } from '../DOMUtils.js'

export const createSignInPage = () => {
    const userInterfaceContainer = getDOMElement('user-interface-container');

    const userInterfaceContent = createDOMElement('div', { id: 'user-interface-content' });

    const titleContainer = createDOMElement('div', { id: 'title-container' });
    const appLogo = createDOMElement('img', { id: 'app-logo' });
    const appName = createDOMElement('h2', { id: 'app-name' });
    appLogo.src = '../media/app_logo.png';
    appLogo.alt = 'app Logo';
    appName.innerHTML = 'Customized Travel Map';
    titleContainer.appendChild(appLogo);
    titleContainer.appendChild(appName);

    const appSlogan = createDOMElement('h1', { id: 'app-slogan' });
    appSlogan.innerHTML = `Trace, Share & <br>Memorize your <br>trips!`;

    const signLogBtn = createDOMElement('button', { id: 'sign-or-log' });
    const buttonIcon = createDOMElement('i', { className: 'fas fa-map-marker-alt' });
    const buttonText = createDOMElement('h2', { id: 'button-text' });
    buttonText.innerHTML = 'Sign In'
    signLogBtn.appendChild(buttonIcon);
    signLogBtn.appendChild(buttonText);

    const declarationMessage = createDOMElement('h5', { id: 'declaration-message' });
    declarationMessage.innerHTML = `For the purpose of this project,
    the app is using your <br>IP address as a <em>Signing In</em> method,
    so next time you <br>visit our <em>webapp</em> you will only get a <em>Log In</em> option`;

    userInterfaceContent.appendChild(titleContainer);
    userInterfaceContent.appendChild(appSlogan);
    userInterfaceContent.appendChild(signLogBtn);
    userInterfaceContent.appendChild(declarationMessage);

    userInterfaceContainer.appendChild(userInterfaceContent);
};
