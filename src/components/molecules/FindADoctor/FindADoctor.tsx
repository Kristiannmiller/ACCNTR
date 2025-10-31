import { ComponentProps, FormEvent, useMemo, useState } from 'react';
import { cx } from 'class-variance-authority';

// Components
import {
    Button,
    Container,
    Input,
    LocationInput,
    SelectDropdown,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SvgIcon
} from '@/components';

// Styles
import styles from './FindADoctor.module.scss';

// Types
import { REPUTATION_API_FILTER_TYPES } from '@/types';

// Utils
import { hasValidInputChars } from '@/utils';

export type FindADoctorProps = ComponentProps<typeof Container> & {
    doctorNameInvalidErrorMessage: string;
    doctorNameRequiredErrorMessage: string;
    doctorsNameInputPlaceholder: string;
    filterType: REPUTATION_API_FILTER_TYPES;
    getPreciseLocationTriggerTitle: string;
    googleMapsAPIKey: string;
    legendLabel: string;
    locationInputPlaceholder: string;
    locationInvalidErrorMessage: string;
    locationRequiredErrorMessage: string;
    searchAPIErrorMessage: string;
    searchUrl: string;
    specialtyItems: Record<string, string[]>;
    specialtySelectLabel: string;
    submitButtonTitle: string;
};

export const FindADoctor = (props: FindADoctorProps) => {
    const {
        className,
        doctorNameInvalidErrorMessage,
        doctorNameRequiredErrorMessage,
        doctorsNameInputPlaceholder,
        filterType,
        getPreciseLocationTriggerTitle,
        googleMapsAPIKey = '',
        legendLabel,
        locationInputPlaceholder,
        locationInvalidErrorMessage,
        locationRequiredErrorMessage,
        searchAPIErrorMessage,
        searchUrl,
        specialtyItems,
        specialtySelectLabel,
        submitButtonTitle,
        ...rest
    } = props;

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [specialty, setSpecialty] = useState<string>('');
    const [location, setLocation] = useState<string>('');
    const [locationError, setLocationError] = useState<string | null>(null);
    const [doctorName, setDoctorName] = useState<string>('');
    const [doctorNameError, setDoctorNameError] = useState<string | null>(null);

    const hasErrors = !!locationError || !!doctorNameError;

    const isSpecialtySearch = !!specialty && !!location;

    const isDoctorNameSearch = !!doctorName;

    const isLocationSearch = !!location;

    const isEmpty = !specialty && !location && !doctorName;

    const isFormValid =
        !hasErrors &&
        (isSpecialtySearch || isDoctorNameSearch || isLocationSearch);

    const isSubmitDisabled = isEmpty || isLoading || !isFormValid;

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();

        // Reset state
        setIsLoading(() => true);
        setDoctorNameError(() => null);
        setLocationError(() => null);
        let isValid = true;

        if (isEmpty) {
            setLocationError(() => locationRequiredErrorMessage);
            setDoctorNameError(() => doctorNameRequiredErrorMessage);
            isValid = false;
        }

        if (doctorName && !hasValidInputChars(doctorName)) {
            setDoctorNameError(() => doctorNameInvalidErrorMessage);
            isValid = false;
        }

        if (location && !hasValidInputChars(location)) {
            setLocationError(() => locationInvalidErrorMessage);
            isValid = false;
        }

        if (specialty && !location) {
            setLocationError(() => locationRequiredErrorMessage);
            isValid = false;
        }

        if (!isValid) {
            setIsLoading(() => false);
            return;
        }

        // All validations passed.
        const searchParams = new URLSearchParams();
        searchParams.append('s-autosearch', 'true');
        searchParams.append('s-address', location.trim());
        searchParams.append('s-filter', `${filterType}:${specialty.trim()}`);
        searchParams.append(
            's-defaultsearchtype',
            doctorName ? 'name' : 'address'
        );
        searchParams.append('s-name', doctorName.trim());

        const reformattedSearchParams = searchParams
            .toString()
            .replaceAll('+', '%20')
            .replaceAll('%3A', ':');

        window.location.href = `${searchUrl}?${reformattedSearchParams}`;
        setIsLoading(() => false);
    };

    const specialtyOptions = useMemo(() => {
        const options = [];

        // Add default option
        options.push(
            <SelectGroup key='select-a-specialty'>
                <SelectItem value='select-a-specialty'>
                    {specialtySelectLabel}
                </SelectItem>
            </SelectGroup>
        );

        // Add the API response options
        Object.entries(specialtyItems).forEach(([key, value]) => {
            const groupItems = value.map((item) => {
                const itemValue = `${key}_${item}`;
                return (
                    <SelectItem
                        key={itemValue}
                        value={itemValue}>
                        {item}
                    </SelectItem>
                );
            });

            options.push(
                <SelectGroup key={key}>
                    <SelectLabel>{key}</SelectLabel>
                    {groupItems}
                </SelectGroup>
            );
        });

        return options;
    }, [specialtyItems, specialtySelectLabel]);

    const onSelectValueChange = (value: string) => {
        if (value === 'select-a-specialty') {
            setSpecialty('');
            return;
        }
        const specialty = value.split('_');
        setSpecialty(specialty[1]);
    };

    return (
        <Container
            className={cx(styles['find-a-doctor-base'], className)}
            data-testid='find-a-doctor'
            onSubmit={onSubmit}
            tag='form'
            {...rest}>
            <fieldset disabled={isLoading}>
                <legend>{legendLabel}</legend>
                {/* Select A Specialty */}
                <SelectDropdown
                    ariaLabel={specialtySelectLabel}
                    ariaRequired='false'
                    children={specialtyOptions}
                    inputId={`${specialtySelectLabel}-input-id`}
                    onValueChange={onSelectValueChange}
                    placeholder={specialtySelectLabel}
                />

                {/* Location Input */}
                <LocationInput
                    ariaRequired={specialty ? 'true' : 'false'}
                    errorMessage={locationError}
                    errorMessageId='find-a-doctor-location-error'
                    getLocationTriggerTitle={getPreciseLocationTriggerTitle}
                    googleMapsApiKey={googleMapsAPIKey}
                    hasError={!!locationError}
                    inputId='find-a-doctor-location'
                    isLoading={isLoading}
                    onChange={() => {
                        if (locationError) {
                            setLocationError(null);
                        }
                    }}
                    onFocus={() => setLocationError(null)}
                    onGetLocationError={() => {
                        setLocationError(searchAPIErrorMessage);
                    }}
                    onSetIsLoading={setIsLoading}
                    onSetValue={setLocation}
                    placeholder={locationInputPlaceholder}
                    value={location}
                />

                {/* Doctor's Name */}
                <Input
                    ariaRequired='true'
                    errorMessage={doctorNameError}
                    errorMessageId={`${doctorsNameInputPlaceholder}-error`}
                    hasError={doctorNameError !== null}
                    inputId={`${doctorsNameInputPlaceholder}-input-id`}
                    onChange={(e) => {
                        setDoctorName(e.target.value);
                        if (doctorNameError) {
                            setDoctorNameError(null);
                        }
                    }}
                    placeholder={doctorsNameInputPlaceholder}
                    onFocus={() => {
                        setDoctorNameError(null);
                    }}
                    value={doctorName}
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
