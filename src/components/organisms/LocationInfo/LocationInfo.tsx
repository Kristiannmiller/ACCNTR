import {
    cloneElement,
    ComponentProps,
    ReactElement,
    ReactNode,
    useEffect,
    useState,
    useRef
} from 'react';

// Components
import {
    Map,
    Container,
    Text,
    Anchor,
    LocationAddress,
    RichText
} from '@/components';

// Types
import { LocationInfoType } from '@/types';

// Styles
import styles from './LocationInfo.module.scss';

// Utils
import { buildMapAddress, createGoogleMapsUrl } from '@/utils';

export type LocationInfoProps = ComponentProps<typeof Container> & {
    detailPageLink?: ReactNode;
    isMapShowing: boolean;
    location: LocationInfoType;
    showHoursOfOperation: boolean;
    showServicesAvailable: boolean;
    googleMapsApiKey: string;
    directionsLabel?: string;
    hoursLabel?: string;
    servicesAvailableLabel?: string;
};

export const LocationInfo = (props: LocationInfoProps) => {
    const {
        className,
        detailPageLink,
        isMapShowing = true,
        location,
        showHoursOfOperation = true,
        showServicesAvailable = true,
        googleMapsApiKey,
        directionsLabel = 'Get Directions',
        hoursLabel = 'Hours: ',
        servicesAvailableLabel = 'Services Available: ',
        ...rest
    } = props;

    const [isInMultiColumnContainer, setIsInMultiColumnContainer] =
        useState<boolean>(true);
    const locationRef = useRef<HTMLDivElement>(null);

    const { defaultPhone, hoursOfOperation, locationName, servicesAvailable } =
        location;

    const mapAddress = buildMapAddress(location);
    const googleMapsUrl = createGoogleMapsUrl(location);

    const shouldShowServicesAvailable =
        showServicesAvailable && !!servicesAvailable;

    const shouldShowHoursOfOperation =
        showHoursOfOperation && !!hoursOfOperation;

    // This hides the map if the Location info component is in a Multi column container
    useEffect(() => {
        if (locationRef.current) {
            setIsInMultiColumnContainer(
                locationRef.current.closest(
                    '[data-testid="multi-column-container-grid"]'
                ) !== null
            );
        }
    }, []);

    return (
        <Container
            className={className}
            data-testid='location-info-container'
            {...rest}>
            <div
                ref={locationRef}
                className={styles['location-info']}>
                {isMapShowing &&
                    mapAddress &&
                    googleMapsApiKey &&
                    !isInMultiColumnContainer && (
                        <div
                            data-testid='location-info-map-wrapper'
                            className={styles['location-info-map-wrapper']}>
                            <Map
                                title={locationName}
                                address={mapAddress}
                                googleMapsApiKey={googleMapsApiKey}
                            />
                        </div>
                    )}

                <div
                    data-testid='location-info-wrapper'
                    className={styles['location-info-wrapper']}>
                    {detailPageLink ? (
                        <Anchor data-testid='location-info-name-link'>
                            {cloneElement(detailPageLink as ReactElement, {
                                children: locationName
                            })}
                        </Anchor>
                    ) : (
                        <Text
                            tag='p'
                            data-testid='location-info-name'
                            className={styles['location-info-name']}>
                            {locationName}
                        </Text>
                    )}

                    <LocationAddress
                        data-testid='location-info-address'
                        location={location}
                        href={googleMapsUrl}
                        target='_blank'
                    />

                    {isMapShowing && mapAddress && (
                        <Anchor
                            data-testid='location-info-directions'
                            href={googleMapsUrl}
                            target='_blank'>
                            {directionsLabel}
                        </Anchor>
                    )}

                    {(shouldShowHoursOfOperation ||
                        shouldShowServicesAvailable) && (
                        <dl>
                            {shouldShowHoursOfOperation && (
                                <>
                                    <Text
                                        tag='dt'
                                        fontStyleCorp='smParagraph'
                                        data-testid='location-info-hours-term'>
                                        {hoursLabel}
                                    </Text>
                                    <RichText
                                        as='dd'
                                        data-testid='location-info-hours-definition'>
                                        {hoursOfOperation}
                                    </RichText>
                                </>
                            )}

                            {shouldShowServicesAvailable && (
                                <>
                                    <Text
                                        tag='dt'
                                        fontStyleCorp='smParagraph'
                                        data-testid='location-info-services-term'>
                                        {servicesAvailableLabel}
                                    </Text>
                                    <Text
                                        tag='dd'
                                        fontStyleCorp='smParagraph'
                                        data-testid='location-info-services-definition'>
                                        {servicesAvailable}
                                    </Text>
                                </>
                            )}
                        </dl>
                    )}

                    {defaultPhone && (
                        <Anchor
                            data-testid='location-info-phone'
                            href={`tel:${defaultPhone}`}>
                            {defaultPhone}
                        </Anchor>
                    )}
                </div>
            </div>
        </Container>
    );
};
