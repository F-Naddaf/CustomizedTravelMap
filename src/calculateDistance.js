'use strict';

// JavaScript program to calculate Distance Between Two Points on Earth

export function distance(userLat,
    destinationLat, userLon, destinationLon) {

    /* The math module contains a function named toRadians which converts from
    degrees to radians.*/

    userLat = userLat * Math.PI / 180;
    destinationLat = destinationLat * Math.PI / 180;
    userLon = userLon * Math.PI / 180;
    destinationLon = destinationLon * Math.PI / 180;

    // Haversine formula
    let dLat = destinationLat - userLat;
    let dLon = destinationLon - userLon;

    let a = Math.pow(Math.sin(dLat / 2), 2)
        + Math.cos(userLat) * Math.cos(destinationLat)
        * Math.pow(Math.sin(dLon / 2), 2);

    let c = 2 * Math.asin(Math.sqrt(a));

    // Radius of earth in kilometers. Use 3956 for miles
    let r = 6371;

    // calculate the result
    return (c * r);
}
