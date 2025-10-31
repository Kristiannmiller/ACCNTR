import { ComponentProps } from 'react';

export type MapProps = ComponentProps<'iframe'> & {
    address: string;
    googleMapsApiKey: string;
    title: string;
};

export const Map = (props: MapProps) => {
    const { className, address, googleMapsApiKey, title, ...rest } = props;

    if (!googleMapsApiKey && !address) {
        return null;
    }

    const srcUrl = `https://www.google.com/maps/embed/v1/place?key=${googleMapsApiKey}&q=${address}`;

    return (
        <iframe
            title={title}
            className={className}
            data-testid='map'
            loading='lazy'
            src={srcUrl}
            {...rest}
        />
    );
};
