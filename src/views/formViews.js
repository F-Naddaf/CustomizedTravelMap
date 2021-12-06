'use strict';

import { createDOMElement, getDOMElement } from '../DOMUtils.js';
import { addLocationHeaderPhoto, enableSaveTripButton } from '../mapHandler.js';
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
    addLocationElement.addEventListener('keyup', enableSaveTripButton);

    const headerLocationPhoto = createDOMElement('div', { id: 'header-location-photo' });
    const addHeaderLocationPhoto = createDOMElement('input', { id: 'add-header-location-photo' });
    addHeaderLocationPhoto.setAttribute('type', 'file');
    addHeaderLocationPhoto.setAttribute('hidden', 'true');
    addHeaderLocationPhoto.setAttribute('accept', 'image/jpg image/jpeg image/png');
    const addHeaderLocationPhotoLabel = createDOMElement('label', { id: 'header-label' });
    addHeaderLocationPhotoLabel.setAttribute('for', 'add-header-location-photo');
    addHeaderLocationPhotoLabel.innerHTML = 'Choose File';
    addHeaderLocationPhoto.addEventListener('change', addLocationHeaderPhoto);
    headerLocationPhoto.appendChild(addHeaderLocationPhoto);
    headerLocationPhoto.appendChild(addHeaderLocationPhotoLabel);

    const fromDateElement = createDOMElement('input', { id: 'from-date-input' });
    fromDateElement.setAttribute('type', 'text');
    fromDateElement.placeholder = 'Start Date..';
    fromDateElement.setAttribute('onfocus', 'this.type="date"');
    fromDateElement.setAttribute('onblur', 'this.type="text"');
    fromDateElement.addEventListener('change', enableSaveTripButton);
    const toDateElement = createDOMElement('input', { id: 'to-date-input' });
    toDateElement.setAttribute('type', 'text');
    toDateElement.placeholder = 'End Date..';
    toDateElement.setAttribute('onfocus', 'this.type="date"');
    toDateElement.setAttribute('onblur', 'this.type="text"');
    toDateElement.addEventListener('change', enableSaveTripButton);

    const travelledByText = createDOMElement('h3', { id: 'travelled-by-text' });
    travelledByText.innerHTML = 'Travelled By: ';

    const travelledByPlaneRadio = createDOMElement('input', { id: 'plane' });
    travelledByPlaneRadio.setAttribute('type', 'radio');
    travelledByPlaneRadio.setAttribute('name', 'TravelledBy');
    travelledByPlaneRadio.setAttribute('value', 'Plane');
    const travelledByPlaneLabel = createDOMElement('label', { id: 'plane-label' });
    travelledByPlaneLabel.setAttribute('for', 'plane');
    travelledByPlaneLabel.innerHTML = 'Plane';

    const travelledByCarRadio = createDOMElement('input', { id: 'car' });
    travelledByCarRadio.setAttribute('type', 'radio');
    travelledByCarRadio.setAttribute('name', 'TravelledBy');
    travelledByCarRadio.setAttribute('value', 'Car');
    const travelledByCarLabel = createDOMElement('label', { id: 'car-label' });
    travelledByCarLabel.setAttribute('for', 'car');
    travelledByCarLabel.innerHTML = 'Car';

    const travelledByBoatRadio = createDOMElement('input', { id: 'boat' });
    travelledByBoatRadio.setAttribute('type', 'radio');
    travelledByBoatRadio.setAttribute('name', 'TravelledBy');
    travelledByBoatRadio.setAttribute('value', 'Boat');
    const travelledByBoatLabel = createDOMElement('label', { id: 'boat-label' });
    travelledByBoatLabel.setAttribute('for', 'boat');
    travelledByBoatLabel.innerHTML = 'Boat';

    const stayedInText = createDOMElement('h3', { id: 'stayed-in-text' });
    stayedInText.innerHTML = 'Stayed In: ';

    const stayedInHotelRadio = createDOMElement('input', { id: 'hotel' });
    stayedInHotelRadio.setAttribute('type', 'radio');
    stayedInHotelRadio.setAttribute('name', 'StayedIn');
    stayedInHotelRadio.setAttribute('value', 'Hotel');
    const stayedInHotelLabel = createDOMElement('label', { id: 'hotel-label' });
    stayedInHotelLabel.setAttribute('for', 'hotel');
    stayedInHotelLabel.innerHTML = 'Hotel';

    const stayedInAirbnbRadio = createDOMElement('input', { id: 'airbnb' });
    stayedInAirbnbRadio.setAttribute('type', 'radio');
    stayedInAirbnbRadio.setAttribute('name', 'StayedIn');
    stayedInAirbnbRadio.setAttribute('value', 'Airbnb');
    const stayedInAirbnbLabel = createDOMElement('label', { id: 'airbnb-label' });
    stayedInAirbnbLabel.setAttribute('for', 'airbnb');
    stayedInAirbnbLabel.innerHTML = 'Airbnb';

    const travelledWithText = createDOMElement('h3', { id: 'travelled-with-text' });
    travelledWithText.innerHTML = 'Travelled With: ';

    const travelledWithSoloRadio = createDOMElement('input', { id: 'solo' });
    travelledWithSoloRadio.setAttribute('type', 'radio');
    travelledWithSoloRadio.setAttribute('name', 'TravelledWith');
    travelledWithSoloRadio.setAttribute('value', 'Solo');
    const travelledWithSoloLabel = createDOMElement('label', { id: 'solo-label' });
    travelledWithSoloLabel.setAttribute('for', 'solo');
    travelledWithSoloLabel.innerHTML = 'Solo';

    const travelledWithOthersRadio = createDOMElement('input', { id: 'others' });
    travelledWithOthersRadio.setAttribute('type', 'radio');
    travelledWithOthersRadio.setAttribute('name', 'TravelledWith');
    travelledWithOthersRadio.setAttribute('value', 'Others');
    const travelledWithOthersLabel = createDOMElement('label', { id: 'others-label' });
    travelledWithOthersLabel.setAttribute('for', 'others');
    travelledWithOthersLabel.innerHTML = 'Others';

    const visitedAttractionFieldset = createDOMElement('fieldset', { id: 'visited-attraction-fieldset' });

    const visitedAttractionLegend = createDOMElement('legend', { className: 'legend' });
    visitedAttractionLegend.innerHTML = 'Visited Attraction';
    const visitedAttractionName = createDOMElement('input', { id: 'visited-attraction-name' });
    visitedAttractionName.setAttribute('type', 'text');
    visitedAttractionName.placeholder = 'Enter Attraction Name..';
    const attractionCostLabel = createDOMElement('label', { id: 'attraction-cost-label' });
    attractionCostLabel.setAttribute('for', 'attraction-cost-label');
    attractionCostLabel.innerHTML = 'Attraction Cost';
    const visitedAttractionCost = createDOMElement('input', { id: 'visited-attraction-cost' });
    visitedAttractionCost.setAttribute('type', 'number');
    visitedAttractionCost.setAttribute('min', '0');
    visitedAttractionCost.placeholder = '. . . .';
    const currencySelectElement = createDOMElement('select', { id: 'currency-select' });
    const euroOption = createDOMElement('option', { className: 'currency-option' });
    euroOption.value = 'EUR';
    euroOption.innerHTML = 'EUR';
    const poundSterlingOption = createDOMElement('option', { className: 'currency-option' });
    poundSterlingOption.value = 'GBP';
    poundSterlingOption.innerHTML = 'GBP';
    const americanDollarOption = createDOMElement('option', { className: 'currency-option' });
    americanDollarOption.value = 'USD';
    americanDollarOption.innerHTML = 'USD';
    const canadianDollarOption = createDOMElement('option', { className: 'currency-option' });
    canadianDollarOption.value = 'CAD';
    canadianDollarOption.innerHTML = 'CAD';
    const australianDollarOption = createDOMElement('option', { className: 'currency-option' });
    australianDollarOption.value = 'AUD';
    australianDollarOption.innerHTML = 'AUD';

    currencySelectElement.appendChild(euroOption);
    currencySelectElement.appendChild(poundSterlingOption);
    currencySelectElement.appendChild(americanDollarOption);
    currencySelectElement.appendChild(canadianDollarOption);
    currencySelectElement.appendChild(australianDollarOption);

    visitedAttractionFieldset.appendChild(visitedAttractionLegend);
    visitedAttractionFieldset.appendChild(visitedAttractionName);
    visitedAttractionFieldset.appendChild(attractionCostLabel);
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
    attendedEventLocation.placeholder = 'Event Location..';
    const attendedEventDate = createDOMElement('input', { id: 'attended-event-date' });
    attendedEventDate.setAttribute('type', 'text');
    attendedEventDate.placeholder = 'Event Date..';
    attendedEventDate.setAttribute('onfocus', 'this.type="date"');
    attendedEventDate.setAttribute('onblur', 'this.type="text"');
    const eventCostLabel = createDOMElement('label', { id: 'event-cost-label' });
    eventCostLabel.setAttribute('for', 'event-cost-label');
    eventCostLabel.innerHTML = 'Event Cost';
    const attendedEventCost = createDOMElement('input', { id: 'attended-event-cost' });
    attendedEventCost.setAttribute('type', 'number');
    attendedEventCost.setAttribute('min', '0');
    attendedEventCost.placeholder = '. . . .';

    const saveTripInfo = createDOMElement('button', { id: 'save-trip-info' });
    saveTripInfo.innerHTML = 'Save Trip';
    saveTripInfo.disabled = true;
    saveTripInfo.addEventListener('click', saveTrip);

    attendedEventFieldset.appendChild(attendedEventLegend);
    attendedEventFieldset.appendChild(attendedEventName);
    attendedEventFieldset.appendChild(attendedEventLocation);
    attendedEventFieldset.appendChild(attendedEventDate);
    attendedEventFieldset.appendChild(eventCostLabel);
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
    formContainer.appendChild(stayedInHotelRadio);
    formContainer.appendChild(stayedInHotelLabel);
    formContainer.appendChild(stayedInAirbnbRadio);
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