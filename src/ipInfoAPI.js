'use strict';

import { getDOMElement } from './DOMUtils.js'

let userLat = 0;
let userLon = 0;

const ipInfoUrl = 'https://ipinfo.io/json?token=4d06bc2f56ae24';

let userIP = '';
let userLocation = [];

export async function getIPData() {
    try {
        const ipData = await fetch(ipInfoUrl);
        if (ipData.ok) {
            const jsonIPData = await ipData.json();
            userIP = jsonIPData.ip;
            userLocation = jsonIPData.loc.split(',');
            getDOMElement('ip-result').value = `User IP: ${userIP},

User Region: ${jsonIPData.region},

User Location: ${userLocation}
`;
            userLat = parseFloat(userLocation[0]);
            userLon = parseFloat(userLocation[1]);
            return [userLat, userLon]
        }
    }
    catch (error) {
        console.log(error.stack);
    }
}