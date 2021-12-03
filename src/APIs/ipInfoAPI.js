'use strict';

import { getDOMElement } from "../DOMUtils.js";

let userLat = 0;
let userLon = 0;

const ipInfoUrl = 'https://ipinfo.io/json?token=4d06bc2f56ae24';
const apiForward = 'http://api.positionstack.com/v1/forward?access_key=fa2c3cb76f128bf3971efaa75baf033b';

let userLocation = [];

export async function getIPData() {
    const userName = getDOMElement('user-name-input').value;
    try {
        if (window.localStorage.length === 0) {
            const ipData = await fetch(ipInfoUrl);
            window.localStorage.setItem('userName', userName);
            if (ipData.ok) {
                const jsonIPData = await ipData.json();
                userLocation = jsonIPData.loc.split(',');
                window.localStorage.setItem('userIP', jsonIPData.ip);
                window.localStorage.setItem('userLat', userLocation[0]);
                window.localStorage.setItem('userLon', userLocation[1]);
                window.localStorage.setItem('userCountry', jsonIPData.region);
            }
            const url = `${apiForward}&query=${window.localStorage.getItem('userCountry')}&limit=1&country_module=1`;
            const flagData = await fetch(url);
            if (flagData.ok) {
                const jsonFlagData = await flagData.json();
                window.localStorage.setItem('userCountryFlag', jsonFlagData.data[0].country_module.flag);
            }
        }
    }
    catch (error) {
        console.log(error.stack);
    }
}