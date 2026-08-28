import axios from "axios";

const form = document.querySelector('form')!;
const addressInput = document.getElementById('address')! as HTMLInputElement;

const GOOGLE_API_KEY = 'AIzaSyA3GQZNCCq_FctY2ExxZv8kbY8X9Pkt0RI';
// declare var google: any;

type GoogleGeocodingResponse = {
    results: { geometry: { location: { lat: number; lng: number } } }[];
    status: 'OK' | 'ZERO_RESULTS'; // https://developers.google.com/maps/documentation/geocoding/guides-v3/requests-geocoding#StatusCodes
}

function searchAddressHandler(event: Event) {
    event.preventDefault();
    const enteredAddress = addressInput.value;

    axios.get<GoogleGeocodingResponse>(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(enteredAddress)}&key=${GOOGLE_API_KEY}`).then(response => {
        const coordinates = response.data.results[0].geometry.location;
        init(coordinates);
        document.getElementById("label")?.remove();
    }).catch(err => {
        alert(err.message);
        console.log(err);
    });
}
form?.addEventListener('submit', searchAddressHandler);

async function init(center: any): Promise<void> {
    // Request the needed libraries.
    const [{ AdvancedMarkerElement }] = await Promise.all([
        google.maps.importLibrary('marker'),
        google.maps.importLibrary('maps'),
    ]);
    // Get the gmp-map element.
    const mapElement = document.querySelector('gmp-map')! as any;
    mapElement.center = center;
    // Get the inner map.
    const innerMap = mapElement.innerMap;

    // Set map options.
    innerMap.setOptions({
        mapTypeControl: false,
    });

    // Add a marker positioned at the map center (Uluru).
    new AdvancedMarkerElement({
        map: innerMap,
        position: center,
        title: 'Uluru/Ayers Rock',
    });
}


// https://developers.google.com/maps/documentation/javascript/overview