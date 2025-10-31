import React, {
    ComponentProps,
    ReactNode,
    cloneElement,
    PropsWithChildren,
    ReactElement
} from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cx } from 'class-variance-authority';

// Utils
import { createGoogleMapsUrl } from '@/utils';

// Components
import {
    Anchor,
    SvgIcon,
    Text,
    Card,
    BackgroundColor,
    LocationAddress
} from '@/components';

// Types
import { LocationData, BUTTON_STYLE_TYPES } from '@/types';

// Styles
import styles from './LocationCard.module.scss';

export type LocationCardProps = ComponentProps<typeof Card> & {
    location: LocationData;
    firstCta?: ReactNode;
    secondCta?: ReactNode;
    shouldDisplayImageOverlay?: boolean;
    animalIcon?: ReactNode;
    firstCtaStyle?: Extract<BUTTON_STYLE_TYPES, 'solid' | 'link'>;
    secondCtaStyle?: Extract<BUTTON_STYLE_TYPES, 'solid' | 'link'>;
    threeSixtyImage?: ReactNode;
    emergencyPhoneLabel?: string;
};

export const LocationCard = (props: LocationCardProps) => {
    const {
        location,
        firstCta,
        secondCta,
        shouldDisplayImageOverlay,
        animalIcon,
        firstCtaStyle = 'solid',
        secondCtaStyle = 'link',
        threeSixtyImage,
        emergencyPhoneLabel,
        className,
        ...rest
    } = props;

    const googleMapsUrl = createGoogleMapsUrl(location);

    const OptionalImageLink = ({ children }: PropsWithChildren) =>
        location.locationTour ? (
            <Anchor
                className={styles['image-link']}
                data-testid='location-card-image-link'>
                {cloneElement(location.locationTour as ReactElement, {
                    children
                })}
            </Anchor>
        ) : (
            children
        );

    return (
        <div
            data-testid='location-card-container'
            className={cx(styles['location-card-container'], className)}>
            {animalIcon && (
                <div
                    data-testid='location-card-children-image'
                    className={styles['children-image']}>
                    {animalIcon}
                </div>
            )}
            <BackgroundColor backgroundColor='white'>
                <Card
                    elevation={'elevation1'}
                    className={styles['location-card']}
                    data-testid='location-card-card'
                    {...rest}>
                    {location.image && (
                        <OptionalImageLink>
                            <div
                                data-testid='location-card-image-wrapper'
                                className={
                                    styles['location-card-image-wrapper']
                                }>
                                <Slot className={styles['location-image']}>
                                    {location.image}
                                </Slot>
                                {shouldDisplayImageOverlay &&
                                    location?.locationTour && (
                                        <div
                                            data-testid='location-card-overlay-container'
                                            className={
                                                styles['overlay-container']
                                            }>
                                            {threeSixtyImage}
                                        </div>
                                    )}
                            </div>
                        </OptionalImageLink>
                    )}

                    <div className={styles['location-card-content']}>
                        <Text
                            data-testid='location-card-name'
                            className={styles['location-name']}>
                            {location.locationName}
                        </Text>
                        <div className={styles['location-card-address-info']}>
                            <SvgIcon
                                className={styles['location-card-icon']}
                                icon='locationDot'
                            />
                            <LocationAddress
                                href={googleMapsUrl}
                                target='_blank'
                                data-testid='location-card-address-link'
                                location={location}
                            />
                        </div>

                        {(location.defaultPhone || location.emergencyPhone) && (
                            <div
                                data-testid='location-card-phone-links'
                                className={
                                    styles['location-card-address-info']
                                }>
                                <SvgIcon
                                    className={styles['location-card-icon']}
                                    icon='phone'
                                />
                                <div>
                                    {location.defaultPhone && (
                                        <Anchor
                                            data-testid='location-card-default-phone'
                                            href={`tel:${location.defaultPhone}`}
                                            className={
                                                styles['location-phone-link']
                                            }>
                                            {location.defaultPhone}
                                        </Anchor>
                                    )}

                                    {location.emergencyPhone && (
                                        <div
                                            data-testid='location-card-emergency-phone'
                                            className={
                                                styles[
                                                    'location-emergency-phone'
                                                ]
                                            }>
                                            <Anchor
                                                href={`tel:${location.emergencyPhone}`}
                                                className={
                                                    styles[
                                                        'location-phone-link'
                                                    ]
                                                }>
                                                {location.emergencyPhone}
                                            </Anchor>
                                            {emergencyPhoneLabel && (
                                                <Text
                                                    className={
                                                        styles[
                                                            'emergency-phone-label'
                                                        ]
                                                    }>
                                                    {emergencyPhoneLabel}
                                                </Text>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                        {location.email && (
                            <div
                                data-testid='location-card-email'
                                className={
                                    styles['location-card-address-info']
                                }>
                                <SvgIcon
                                    className={styles['location-card-icon']}
                                    icon='envelope'
                                />
                                <Anchor
                                    className={styles['location-card-email']}
                                    href={`mailto:${location.email}`}>
                                    {location.email}
                                </Anchor>
                            </div>
                        )}

                        {(firstCta || secondCta) && (
                            <div
                                data-testid='location-card-ctas'
                                className={styles['location-card-cta']}>
                                {firstCta && (
                                    <Anchor
                                        data-testid='location-card-first-cta'
                                        className={styles['cta-button']}
                                        size='responsive'
                                        buttonStyle={firstCtaStyle}>
                                        {firstCta}
                                    </Anchor>
                                )}

                                {secondCta && (
                                    <Anchor
                                        data-testid='location-card-second-cta'
                                        className={styles['cta-button']}
                                        size='responsive'
                                        buttonStyle={secondCtaStyle}>
                                        {secondCta}
                                    </Anchor>
                                )}
                            </div>
                        )}
                    </div>
                </Card>
            </BackgroundColor>
        </div>
    );
};
