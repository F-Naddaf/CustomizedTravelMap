'use strict';

import { createDOMElement, getDOMElement } from '../DOMUtils.js';
import { addLocationHeaderPhoto } from '../mapHandler.js';
import { saveTrip } from '../mapListener.js';

export const createFormElement = () => {
    const userInterfaceContainer = getDOMElement('user-interface-container');
    const userInterfaceContent = getDOMElement('user-interface-content');

    const dashedWindow = getDOMElement('dashed-window');
    dashedWindow.style.setProperty('top', 'calc(100vh - 87px - 10px)');

    const formContainer = createDOMElement('form', { id: 'form-container' });
    const addLocationElement = createDOMElement('input', { id: 'location-input' });
    addLocationElement.setAttribute('type', 'text');
    addLocationElement.placeholder = 'Enter Location..';

    const headerLocationPhoto = createDOMElement('div', { id: 'header-location-photo' });
    const addHeaderLocationPhoto = createDOMElement('input', { id: 'add-header-location-photo' });
    addHeaderLocationPhoto.setAttribute('type', 'file');
    addHeaderLocationPhoto.setAttribute('hidden', 'true');
    addHeaderLocationPhoto.setAttribute('accept', 'image/jpg');
    const addHeaderLocationPhotoLabel = createDOMElement('label', { id: 'header-label' });
    addHeaderLocationPhotoLabel.setAttribute('for', 'add-header-location-photo');
    addHeaderLocationPhotoLabel.innerHTML = 'Choose File';
    addHeaderLocationPhoto.addEventListener('change', addLocationHeaderPhoto);
    headerLocationPhoto.appendChild(addHeaderLocationPhoto);
    headerLocationPhoto.appendChild(addHeaderLocationPhotoLabel);

    const fromDateElement = createDOMElement('input', { id: 'from-date-input' });
    fromDateElement.setAttribute('type', 'date');
    const toDateElement = createDOMElement('input', { id: 'to-date-input' });
    toDateElement.setAttribute('type', 'date');

    const travelledByText = createDOMElement('h3', { id: 'travelled-by-text' });
    travelledByText.innerHTML = 'Travelled By: ';

    const travelledByPlaneRadio = createDOMElement('input', { id: 'plane' });
    travelledByPlaneRadio.setAttribute('type', 'radio');
    const travelledByPlaneLabel = createDOMElement('label', { id: 'plane-label' });
    travelledByPlaneLabel.setAttribute('for', 'plane');
    travelledByPlaneLabel.innerHTML = 'Plane';

    const travelledByCarRadio = createDOMElement('input', { id: 'car' });
    travelledByCarRadio.setAttribute('type', 'radio');
    const travelledByCarLabel = createDOMElement('label', { id: 'car-label' });
    travelledByCarLabel.setAttribute('for', 'car');
    travelledByCarLabel.innerHTML = 'Car';

    const travelledByBoatRadio = createDOMElement('input', { id: 'boat' });
    travelledByBoatRadio.setAttribute('type', 'radio');
    const travelledByBoatLabel = createDOMElement('label', { id: 'boat-label' });
    travelledByBoatLabel.setAttribute('for', 'boat');
    travelledByBoatLabel.innerHTML = 'Boat';

    const stayedInText = createDOMElement('h3', { id: 'stayed-in-text' });
    stayedInText.innerHTML = 'Stayed In: ';

    const stayedInHotelCheckbox = createDOMElement('input', { id: 'hotel' });
    stayedInHotelCheckbox.setAttribute('type', 'checkbox');
    stayedInHotelCheckbox.setAttribute('name', 'hotel');
    const stayedInHotelLabel = createDOMElement('label', { id: 'hotel-label' });
    stayedInHotelLabel.setAttribute('for', 'hotel');
    stayedInHotelLabel.innerHTML = 'Hotel';

    const stayedInAirbnbCheckbox = createDOMElement('input', { id: 'airbnb' });
    stayedInAirbnbCheckbox.setAttribute('type', 'checkbox');
    stayedInAirbnbCheckbox.setAttribute('name', 'airbnb');
    const stayedInAirbnbLabel = createDOMElement('label', { id: 'airbnb-label' });
    stayedInAirbnbLabel.setAttribute('for', 'airbnb');
    stayedInAirbnbLabel.innerHTML = 'Airbnb';

    const travelledWithText = createDOMElement('h3', { id: 'travelled-with-text' });
    travelledWithText.innerHTML = 'Travelled With: ';

    const travelledWithSoloRadio = createDOMElement('input', { id: 'solo' });
    travelledWithSoloRadio.setAttribute('type', 'radio');
    const travelledWithSoloLabel = createDOMElement('label', { id: 'solo-label' });
    travelledWithSoloLabel.setAttribute('for', 'solo');
    travelledWithSoloLabel.innerHTML = 'Solo';

    const travelledWithOthersRadio = createDOMElement('input', { id: 'others' });
    travelledWithOthersRadio.setAttribute('type', 'radio');
    const travelledWithOthersLabel = createDOMElement('label', { id: 'others-label' });
    travelledWithOthersLabel.setAttribute('for', 'others');
    travelledWithOthersLabel.innerHTML = 'Others';

    const visitedAttractionFieldset = createDOMElement('fieldset', { id: 'visited-attraction-fieldset' });

    const visitedAttractionLegend = createDOMElement('legend', { className: 'legend' });
    visitedAttractionLegend.innerHTML = 'Visited Attraction';
    const visitedAttractionName = createDOMElement('input', { id: 'visited-attraction-name' });
    visitedAttractionName.setAttribute('type', 'text');
    visitedAttractionName.placeholder = 'Enter Attraction Name..';
    const visitedAttractionCost = createDOMElement('input', { id: 'visited-attraction-cost' });
    visitedAttractionCost.setAttribute('type', 'number');
    visitedAttractionCost.setAttribute('min', '0');
    visitedAttractionCost.placeholder = 'Enter Cost..';
    const currencySelectElement = createDOMElement('select', { id: 'currency-select' });
    const euroOption = createDOMElement('option');
    euroOption.value = 'EUR';
    euroOption.innerHTML = 'EUR';
    const poundSterlingOption = createDOMElement('option');
    poundSterlingOption.value = 'GBP';
    poundSterlingOption.innerHTML = 'GBP';
    const americanDollarOption = createDOMElement('option');
    americanDollarOption.value = 'USD';
    americanDollarOption.innerHTML = 'USD';
    const canadianDollarOption = createDOMElement('option');
    canadianDollarOption.value = 'CAD';
    canadianDollarOption.innerHTML = 'CAD';
    const australianDollarOption = createDOMElement('option');
    australianDollarOption.value = 'AUD';
    australianDollarOption.innerHTML = 'AUD';

    currencySelectElement.appendChild(euroOption);
    currencySelectElement.appendChild(poundSterlingOption);
    currencySelectElement.appendChild(americanDollarOption);
    currencySelectElement.appendChild(canadianDollarOption);
    currencySelectElement.appendChild(australianDollarOption);

    visitedAttractionFieldset.appendChild(visitedAttractionLegend);
    visitedAttractionFieldset.appendChild(visitedAttractionName);
    visitedAttractionFieldset.appendChild(visitedAttractionCost);
    visitedAttractionFieldset.appendChild(currencySelectElement);

    const attendedEventFieldset = createDOMElement('fieldset', { id: 'attended-event-fieldset' });

    const attendedEventLegend = createDOMElement('legend', { className: 'legend' });
    attendedEventLegend.innerHTML = 'Attended Event';
    const attendedEventName = createDOMElement('input', { id: 'attended-event-name' });
    attendedEventName.setAttribute('type', 'text');
    attendedEventName.placeholder = 'Enter Event Name..';
    const attendedEventLocation = createDOMElement('input', { id: 'attended-event-location' });
    attendedEventLocation.setAttribute('type', 'text');
    attendedEventLocation.placeholder = 'Enter Event Location..';
    const attendedEventDate = createDOMElement('input', { id: 'attended-event-date' });
    attendedEventDate.setAttribute('type', 'date');
    const attendedEventCost = createDOMElement('input', { id: 'attended-event-cost' });
    attendedEventCost.setAttribute('type', 'number');
    attendedEventCost.setAttribute('min', '0');
    attendedEventCost.placeholder = 'Enter Cost..';

    const saveTripInfo = createDOMElement('button', { id: 'save-trip-info' });
    saveTripInfo.innerHTML = 'Save Trip';
    saveTripInfo.addEventListener('click', saveTrip);

    attendedEventFieldset.appendChild(attendedEventLegend);
    attendedEventFieldset.appendChild(attendedEventName);
    attendedEventFieldset.appendChild(attendedEventLocation);
    attendedEventFieldset.appendChild(attendedEventDate);
    attendedEventFieldset.appendChild(attendedEventCost);

    formContainer.appendChild(addLocationElement);
    formContainer.appendChild(headerLocationPhoto);
    formContainer.appendChild(fromDateElement);
    formContainer.appendChild(toDateElement);
    formContainer.appendChild(travelledByText);
    formContainer.appendChild(travelledByPlaneRadio);
    formContainer.appendChild(travelledByPlaneLabel);
    formContainer.appendChild(travelledByCarRadio);
    formContainer.appendChild(travelledByCarLabel);
    formContainer.appendChild(travelledByBoatRadio);
    formContainer.appendChild(travelledByBoatLabel);
    formContainer.appendChild(stayedInText);
    formContainer.appendChild(stayedInHotelCheckbox);
    formContainer.appendChild(stayedInHotelLabel);
    formContainer.appendChild(stayedInAirbnbCheckbox);
    formContainer.appendChild(stayedInAirbnbLabel);
    formContainer.appendChild(travelledWithText);
    formContainer.appendChild(travelledWithSoloRadio);
    formContainer.appendChild(travelledWithSoloLabel);
    formContainer.appendChild(travelledWithOthersRadio);
    formContainer.appendChild(travelledWithOthersLabel);
    formContainer.appendChild(visitedAttractionFieldset);
    formContainer.appendChild(attendedEventFieldset);

    userInterfaceContent.appendChild(formContainer);
    userInterfaceContent.appendChild(saveTripInfo);

    userInterfaceContainer.appendChild(userInterfaceContent);
}