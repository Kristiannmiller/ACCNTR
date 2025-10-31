/**
 * @description - Check if the browser supports the Geolocation API
 * @returns Promise<boolean>
 * @example checkGeoLocationPermission().then((isPermissionDenied) => console.log(isPermissionDenied));
 */
export const checkGeoLocationPermission = async (): Promise<boolean> => {
    if (!navigator.permissions) {
        console.error('Permissions API is not supported in this browser.');
        return false;
    }

    try {
        const permissionStatus = await navigator.permissions.query({
            name: 'geolocation'
        });

        return permissionStatus.state === 'denied';
    } catch (error) {
        console.error('Error checking geolocation permission:', error);
        return false;
    }
};

/**
 * @param error
 * @returns boolean
 * @description - Type guard for GeolocationPositionError
 * @example isGeolocationPositionError(new Error('Geolocation error')) // false
 * @example isGeolocationPositionError({ code: 1, message: 'Geolocation error' }) // true
 */
export const isGeolocationPositionError = (
    error: unknown
): error is GeolocationPositionError => {
    return (
        typeof error === 'object' &&
        error !== null &&
        'code' in error &&
        'message' in error
    );
};
