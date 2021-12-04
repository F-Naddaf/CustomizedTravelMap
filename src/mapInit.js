'use strict';

import { createSignInPage } from './views/signInPageViews.js'

const initializeMap = () => {
    if (localStorage.length === 0) {
        createSignInPage();
    }
    else {
        const userInfo = JSON.parse(localStorage.getItem('userInfo'));
        createSignInPage(userInfo);
    }

}

window.addEventListener('load', initializeMap);