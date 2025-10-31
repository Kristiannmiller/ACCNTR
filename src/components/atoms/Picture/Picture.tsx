import { ComponentProps } from 'react';
import { cx } from 'class-variance-authority';

// Styles
import styles from './Picture.module.scss';

// Types
import { PictureSourceType, srcsetPathType } from '@/types';
import { desktopLgSize, desktopSize, tabletLgSize, tabletSize } from '@/static';

type CommonProps = ComponentProps<'img'> & {
    className?: string;
};

export type PictureCompProps = CommonProps &
    (ComponentProps<'picture'> & {
        mobileSrc?: string;
        tabletSrc?: string;
        tabletLgSrc?: string;
        desktopLgSrc?: string;
        image: {
            src: string;
            alt: string;
        };
    });

type SourceCompProps = CommonProps & {
    sources: PictureSourceType[];
    image: {
        src: string;
        alt: string;
    };
};

export const Picture = (props: PictureCompProps | SourceCompProps) => {
    const {
        className = '',
        sources = [],
        image = { src: '', alt: '' },
        ...rest
    } = 'sources' in props ? props : {};
    const pictureClass = cx(styles['picture-base'], className);

    if (sources?.length) {
        return (
            <picture
                className={pictureClass}
                data-testid='picture-element'>
                {sources.map((item: PictureSourceType, idx: number) => {
                    const { media, srcset } = item;
                    const srcSetArr: string[] = [];

                    srcset.map((setItem: srcsetPathType) => {
                        const { path, descriptor } = setItem;
                        srcSetArr.push(`${path} ${descriptor ?? ''}`.trim());
                    });

                    return (
                        <source
                            data-testid='picture-source'
                            key={idx}
                            srcSet={srcSetArr.join(', ')}
                            media={media}
                        />
                    );
                })}
                <img
                    src={image.src}
                    alt={image.alt}
                    data-testid='picture-image'
                    {...rest}
                />
            </picture>
        );
    } else {
        const {
            desktopLgSrc,
            tabletLgSrc,
            tabletSrc,
            image,
            mobileSrc,
            ...rest
        } = props as PictureCompProps;
        return (
            <picture className={pictureClass}>
                {desktopLgSrc && (
                    <source
                        media={`(min-width: ${desktopLgSize})`}
                        srcSet={desktopLgSrc}
                    />
                )}
                <source
                    media={`(min-width: ${desktopSize})`}
                    srcSet={image.src}
                />
                {tabletLgSrc && (
                    <source
                        media={`(min-width: ${tabletLgSize})`}
                        srcSet={tabletLgSrc}
                    />
                )}
                {tabletSrc && (
                    <source
                        media={`(min-width: ${tabletSize})`}
                        srcSet={tabletSrc}
                    />
                )}
                {mobileSrc && (
                    <source
                        media={`(max-width: ${tabletSize})`}
                        srcSet={mobileSrc}
                    />
                )}
                <img
                    src={image.src}
                    alt={image.alt}
                    data-testid='picture-image'
                    {...rest}
                />
            </picture>
        );
    }
};
