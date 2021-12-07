'use strict';

import { getDOMElement } from '../DOMUtils.js';
import { createTheTab } from '../views/profileViews.js'

const ipInfoUrl = 'https://ipinfo.io/json?token=4d06bc2f56ae24';
const apiForward = 'http://api.positionstack.com/v1/forward?access_key=fa2c3cb76f128bf3971efaa75baf033b';

let userLocation = [];
let userInfoObject = {
    userName: '',
    userIP: '',
    userCountry: '',
    userCountryFlag: '',
    userLat: 0,
    userLon: 0
};

export async function getIPData() {
    const userName = getDOMElement('user-name-input').value;
    userInfoObject.userName = userName;
    try {
        if (window.localStorage.length === 0) {
            const ipData = await fetch(ipInfoUrl);
            if (ipData.ok) {
                const jsonIPData = await ipData.json();
                userLocation = jsonIPData.loc.split(',');
                userInfoObject.userIP = jsonIPData.ip;
                userInfoObject.userCountry = jsonIPData.region;
                userInfoObject.userLat = userLocation[0];
                userInfoObject.userLon = userLocation[1];
            }
            const url = `${apiForward}&query=${window.localStorage.getItem('userCountry')}&limit=1&country_module=1`;
            const flagData = await fetch(url);
            if (flagData.ok) {
                const jsonFlagData = await flagData.json();
                userInfoObject.userCountryFlag = jsonFlagData.data[0].country_module.flag;
            }
        }
        localStorage.setItem('userInfo', JSON.stringify(userInfoObject));
        createTheTab();
    }
    catch (error) {
        console.log(error.message);
    }
}