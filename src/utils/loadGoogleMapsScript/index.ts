export function loadGoogleMapsScript(googleMapsApiKey: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        if (!googleMapsApiKey) {
            reject('Invalid Google Maps API key.');
            return;
        }

        if (
            typeof window.google === 'object' &&
            typeof window.google.maps === 'object'
        ) {
            resolve();
            return;
        }

        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&libraries=places`;
        script.async = true;
        script.defer = true;
        script.onload = () => resolve();
        script.onerror = () => {
            console.log('An error occurred loading the Google Maps script.');
            reject('An error occurred loading the Google Maps script.');
        };
        document.head.appendChild(script);
    });
}
