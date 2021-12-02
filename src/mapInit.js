'use strict';

import { createSignInPage } from './views/signInPageViews.js'

const initializeMap = () => {
    createSignInPage();
}

window.addEventListener('load', initializeMap);