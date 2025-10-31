export function getGeolocationPosition(): Promise<GeolocationPosition> {
    return new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
            reject('Geolocation is not supported.');
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                resolve(position);
            },
            () => {
                reject('Unable to retrieve location.');
            }
        );
    });
}
