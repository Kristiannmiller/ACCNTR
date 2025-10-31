import { ComponentProps, useCallback, useEffect, useState } from 'react';

// Components
import { Input, SvgIcon } from '@/components';

// Styles
import styles from './LocationInput.module.scss';

// Utils
import {
    getGeolocationPosition,
    getZipcodeFromGoogleMaps,
    loadGoogleMapsScript,
    checkGeoLocationPermission,
    isGeolocationPositionError
} from '@/utils';

// Types
type LocationInputProps = ComponentProps<typeof Input> & {
    getLocationTriggerTitle: string;
    googleMapsApiKey: string;
    isLoading: boolean;
    onSetIsLoading: (isLoading: boolean) => void;
    onSetValue: (value: string) => void;
    onGetLocationError: () => void;
    value: string;
};

export const LocationInput = (props: LocationInputProps) => {
    const {
        getLocationTriggerTitle,
        googleMapsApiKey,
        isLoading,
        onSetIsLoading,
        onSetValue,
        onGetLocationError,
        onChange,
        ...rest
    } = props;

    const [hasGivenLocationPermission, setHasGivenLocationPermission] =
        useState<boolean>(false);

    // Load the Google Maps script and check permission when the component mounts.
    useEffect(() => {
        const initialize = async () => {
            onSetIsLoading(true);
            await loadGoogleMapsScript(googleMapsApiKey);

            onSetIsLoading(false);
        };

        if (googleMapsApiKey) {
            initialize();
        }
    }, [googleMapsApiKey, onSetIsLoading]);

    // Check for geolocation permission when the location button is shown.
    useEffect(() => {
        const onCheckLocationPermission = async () => {
            const isPermissionDenied = await checkGeoLocationPermission();
            setHasGivenLocationPermission(!isPermissionDenied);
        };

        onCheckLocationPermission();
    }, []);

    // Re-check geolocation permission and rerender if it changes
    useEffect(() => {
        const handlePermissionChange = async () => {
            const permissionStatus = await navigator.permissions.query({
                name: 'geolocation'
            });

            permissionStatus.onchange = () => {
                setHasGivenLocationPermission(
                    permissionStatus.state !== 'denied'
                );
            };
        };

        handlePermissionChange();
    }, []);

    // Get the user's location and set the ZIP code value.
    const handleGetLocationClick = useCallback(async () => {
        try {
            onSetIsLoading(true);

            const { coords } = await getGeolocationPosition();
            const { zipCode } = await getZipcodeFromGoogleMaps(coords);
            onSetValue(zipCode);
        } catch (error) {
            if (isGeolocationPositionError(error)) {
                if (error.code !== error.PERMISSION_DENIED) {
                    onGetLocationError();
                }
            } else {
                console.error('Unexpected error:', error);
            }
        } finally {
            onSetIsLoading(false);
        }
    }, [onSetIsLoading, onSetValue, onGetLocationError]);

    return (
        <Input
            disabled={isLoading}
            onChange={(e) => {
                onSetValue(e.target.value);
                onChange?.(e);
            }}
            className={styles['location-input']}
            inlineButton={
                hasGivenLocationPermission &&
                googleMapsApiKey && (
                    <button
                        title={getLocationTriggerTitle}
                        type='button'
                        className={styles['get-location-trigger']}
                        data-testid='get-precise-location-trigger'
                        onClick={handleGetLocationClick}>
                        <SvgIcon icon='locationCrosshairs' />
                    </button>
                )
            }
            {...rest}
        />
    );
};
