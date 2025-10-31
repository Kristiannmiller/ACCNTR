type ResponseZipCode = {
    zipCode: string;
};

export function getZipcodeFromGoogleMaps(
    coords: GeolocationCoordinates
): Promise<ResponseZipCode> {
    const { latitude, longitude } = coords;

    return new Promise((resolve, reject) => {
        if (
            !window.google ||
            !window.google.maps ||
            !window.google.maps.Geocoder
        ) {
            reject('Google Maps API not loaded.');
            return;
        }

        const geocoder = new window.google.maps.Geocoder();
        const latLng = new window.google.maps.LatLng(latitude, longitude);

        geocoder.geocode({ location: latLng }, (results, status) => {
            if (status === 'OK' && results.length > 0) {
                const addressComponents = results[0].address_components;
                const zipcodeComponent = addressComponents.find(
                    (component: google.maps.GeocoderAddressComponent) =>
                        component.types.includes('postal_code')
                );

                const zipCode = zipcodeComponent
                    ? zipcodeComponent.long_name
                    : '';

                resolve({ zipCode });
            } else {
                reject('An error occurred fetching the zip code.');
            }
        });
    });
}
