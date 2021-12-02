'use strict';

import { getDOMElement } from './DOMUtils.js'
import { userInfo } from './userData.js'

let userLat = 0;
let userLon = 0;

const ipInfoUrl = 'https://ipinfo.io/json?token=4d06bc2f56ae24';

let userLocation = [];

export async function getIPData() {
    try {
        const ipData = await fetch(ipInfoUrl);
        if (ipData.ok) {
            const jsonIPData = await ipData.json();
            userLocation = jsonIPData.loc.split(',');
            userLat = parseFloat(userLocation[0]);
            userLon = parseFloat(userLocation[1]);
            userInfo.userIP = jsonIPData.ip;
            userInfo.userLat = userLat;
            userInfo.userLon = userLon;
            userInfo.userCountry = jsonIPData.country;
            //             getDOMElement('ip-result').value = `User IP: ${userIP},

            // User Region: ${jsonIPData.region},

            // User Location: ${userLocation}
            // `;
            console.log(userInfo);
            return [userLat, userLon]
        }
    }
    catch (error) {
        console.log(error.stack);
    }
}