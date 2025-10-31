import { ComponentProps, FormEvent, useMemo, useState } from 'react';
import { cx } from 'class-variance-authority';

// Components
import {
    Button,
    Container,
    LocationInput,
    SelectDropdown,
    SelectItem,
    SvgIcon
} from '@/components';

// Styles
import styles from './FindALocation.module.scss';

// Types
import { REPUTATION_API_FILTER_TYPES } from '@/types';

// Utils
import { hasValidInputChars } from '@/utils';

export type FindALocationProps = ComponentProps<typeof Container> & {
    filterType: REPUTATION_API_FILTER_TYPES;
    getPreciseLocationTriggerTitle: string;
    googleMapsAPIKey: string;
    legendLabel: string;
    locationInputPlaceholder: string;
    locationInvalidErrorMessage: string;
    locationRequiredErrorMessage: string;
    locationTypeItems: string[];
    locationTypeLabel: string;
    searchAPIErrorMessage: string;
    searchUrl: string;
    submitButtonTitle: string;
};

export const FindALocation = (props: FindALocationProps) => {
    const {
        className,
        filterType,
        getPreciseLocationTriggerTitle,
        googleMapsAPIKey = '',
        legendLabel,
        locationInputPlaceholder,
        locationInvalidErrorMessage,
        locationRequiredErrorMessage,
        locationTypeItems,
        locationTypeLabel,
        searchAPIErrorMessage,
        searchUrl,
        submitButtonTitle,
        ...rest
    } = props;

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [locationType, setLocationType] = useState<string>('');
    const [location, setLocation] = useState<string>('');
    const [locationError, setLocationError] = useState<string | null>(null);

    const hasErrors = !!locationError;

    const isSpecialtySearch = !!locationType && !!location;

    const isLocationSearch = !!location;

    const isEmpty = !locationType && !location;

    const isFormValid = !hasErrors && (isSpecialtySearch || isLocationSearch);

    const isSubmitDisabled = isEmpty || isLoading || !isFormValid;

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();

        // Reset state
        setIsLoading(() => true);
        setLocationError(() => null);
        let isValid = true;

        if (!location) {
            setLocationError(() => locationRequiredErrorMessage);
            isValid = false;
        }

        if (location && !hasValidInputChars(location)) {
            setLocationError(() => locationInvalidErrorMessage);
            isValid = false;
        }

        if (!isValid) {
            setIsLoading(() => false);
            return;
        }

        // All validations passed.
        const searchParams = new URLSearchParams();
        searchParams.append('s-autosearch', 'true');
        searchParams.append('s-filter', `${filterType}:${locationType.trim()}`);
        searchParams.append('s-address', location.trim());

        const reformattedSearchParams = searchParams
            .toString()
            .replaceAll('+', '%20')
            .replaceAll('%3A', ':');

        window.location.href = `${searchUrl}?${reformattedSearchParams}`;
        setIsLoading(() => false);
    };

    const locationTypeOptions = useMemo(() => {
        const options = [
            <SelectItem
                key='select-a-location-type'
                value='select-a-location-type'>
                {locationTypeLabel}
            </SelectItem>
        ];

        const mappedItems = locationTypeItems.map((locationType) => (
            <SelectItem
                key={locationType}
                value={locationType}>
                {locationType}
            </SelectItem>
        ));

        return options.concat(mappedItems);
    }, [locationTypeItems, locationTypeLabel]);

    return (
        <Container
            className={cx(styles['find-a-location-base'], className)}
            data-testid='find-a-location'
            onSubmit={onSubmit}
            tag='form'
            {...rest}>
            <fieldset disabled={isLoading}>
                <legend>{legendLabel}</legend>
                {/* Select A Location Type */}
                <SelectDropdown
                    ariaLabel={locationTypeLabel}
                    ariaRequired='false'
                    children={locationTypeOptions}
                    inputId={`${locationTypeLabel}-input-id`}
                    onValueChange={(value) => {
                        if (value === 'select-a-location-type') {
                            setLocationType('');
                        } else {
                            setLocationType(value);
                        }
                    }}
                    placeholder={locationTypeLabel}
                />

                {/* Location Input */}
                <LocationInput
                    ariaRequired='true'
                    errorMessage={locationError}
                    errorMessageId='find-a-location-location-error'
                    getLocationTriggerTitle={getPreciseLocationTriggerTitle}
                    googleMapsApiKey={googleMapsAPIKey}
                    hasError={!!locationError}
                    inputId='find-a-location-location'
                    isLoading={isLoading}
                    onFocus={() => setLocationError(null)}
                    onChange={() => {
                        if (locationError) {
                            setLocationError(null);
                        }
                    }}
                    onGetLocationError={() =>
                        setLocationError(searchAPIErrorMessage)
                    }
                    onSetIsLoading={setIsLoading}
                    onSetValue={setLocation}
                    placeholder={locationInputPlaceholder}
                    value={location}
                />

                {/* Submit! */}
                <Button
                    disabled={isSubmitDisabled}
                    size='responsive'
                    title={submitButtonTitle}
                    type='submit'
                    variant='solid1'>
                    <SvgIcon icon='magnifyingGlass' />
                    <span>{submitButtonTitle}</span>
                </Button>
            </fieldset>
        </Container>
    );
};
