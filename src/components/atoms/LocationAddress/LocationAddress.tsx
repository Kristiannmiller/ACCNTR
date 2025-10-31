import { cloneElement, ComponentProps, ReactElement, ReactNode } from 'react';
import { cx } from 'class-variance-authority';

// Styles
import styles from './LocationAddress.module.scss';

// Components
import { Anchor, Text } from '@/components';

// Types
import { LocationData } from '@/types';

type LocationAddressDetailPageProps = ComponentProps<typeof Anchor> & {
    detailPage: ReactNode;
    location: LocationData;
};

type LocationAddressLinkProps = ComponentProps<typeof Anchor> & {
    location: LocationData;
    href: string;
};

type LocationAddressTextProps = ComponentProps<'p'> & {
    location: LocationData;
    href?: never;
};

export type LocationAddressProps =
    | LocationAddressDetailPageProps
    | LocationAddressLinkProps
    | LocationAddressTextProps;

const LocationAddressSpans = (props: LocationData) => {
    const { addressLine1, addressLine2, city, state, zip } = props;
    return (
        <>
            {addressLine1 && <span>{addressLine1}</span>}
            {addressLine2 && <span>{addressLine2}</span>}
            {(city || state || zip) && (
                <span>{`${city}${city && state && `, `}${state}${
                    zip && ` ${zip}`
                }`}</span>
            )}
        </>
    );
};

const LocationAddressLink = (props: LocationAddressLinkProps) => {
    const { location, className, ...rest } = props;
    return (
        <Anchor
            data-testid='location-address-link'
            className={cx(styles['location-address'], className)}
            {...rest}>
            <LocationAddressSpans {...location} />
        </Anchor>
    );
};

const LocationAddressDetailPage = (props: LocationAddressDetailPageProps) => {
    const { detailPage, location, className, ...rest } = props;
    return (
        <Anchor
            data-testid='location-address-detail-page'
            className={cx(styles['location-address'], className)}
            {...rest}>
            {cloneElement(
                (detailPage as ReactElement) ||
                    (location.locationDetailPage as ReactElement),
                {
                    children: <LocationAddressSpans {...location} />
                }
            )}
        </Anchor>
    );
};

const LocationAddressText = (props: LocationAddressTextProps) => {
    const { location, className, ...rest } = props;
    return (
        <Text
            tag='p'
            data-testid='location-address-text'
            className={cx(styles['location-address'], className)}
            {...rest}>
            <LocationAddressSpans {...location} />
        </Text>
    );
};

export const LocationAddress = (props: LocationAddressProps) => {
    if (props.href) {
        return <LocationAddressLink {...(props as LocationAddressLinkProps)} />;
    }

    if (props.location.locationDetailPage) {
        return (
            <LocationAddressDetailPage
                {...(props as LocationAddressDetailPageProps)}
            />
        );
    }

    return <LocationAddressText {...(props as LocationAddressTextProps)} />;
};
