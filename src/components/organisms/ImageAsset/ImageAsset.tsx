import { ComponentProps, ReactNode, cloneElement, ReactElement } from 'react';
import { cx } from 'class-variance-authority';

// Component
import { Container, RichText, Anchor } from '@/components';

// Types
import { ALIGNMENT_TYPES } from '@/types';

// Styles
import styles from './ImageAsset.module.scss';

export type ImageAssetProps = ComponentProps<typeof Container> & {
    caption?: ReactNode;
    image: ReactNode;
    imageAlignment: Extract<ALIGNMENT_TYPES, 'left' | 'center' | 'right'>;
    imageCTA?: ReactNode;
    isImageBorderOn?: boolean;
    mobileImage?: ReactNode;
};

const Images = (props: Pick<ImageAssetProps, 'mobileImage' | 'image'>) => {
    const { mobileImage, image } = props;

    return (
        <>
            {cloneElement(image as ReactElement, {
                className: cx(styles['image'], {
                    [styles['desktop']]: mobileImage
                })
            })}

            {/* Optional mobile image */}
            {mobileImage &&
                cloneElement(mobileImage as ReactElement, {
                    className: cx(styles['image'], {
                        [styles['mobile']]: mobileImage
                    })
                })}
        </>
    );
};

export const ImageAsset = (props: ImageAssetProps) => {
    const {
        image,
        caption,
        imageCTA,
        imageAlignment = 'right',
        isImageBorderOn = false,
        className,
        mobileImage,
        ...rest
    } = props;

    return (
        <Container
            data-testid='image-asset-container'
            className={className}
            {...rest}>
            <div
                data-testid='image-asset'
                className={cx(styles['image-asset'], {
                    [styles['image-asset-left']]: imageAlignment === 'left',
                    [styles['image-asset-right']]: imageAlignment === 'right',
                    [styles['image-border']]: isImageBorderOn
                })}>
                <figure className={styles['image-figure']}>
                    {imageCTA ? (
                        <Anchor
                            className={styles['image-wrapper']}
                            data-testid='image-asset-image-wrapper'>
                            {cloneElement(imageCTA as ReactElement, {
                                children: (
                                    <Images
                                        image={image}
                                        mobileImage={mobileImage}
                                    />
                                )
                            })}
                        </Anchor>
                    ) : (
                        <div
                            className={styles['image-wrapper']}
                            data-testid='image-asset-image-wrapper'>
                            <Images
                                image={image}
                                mobileImage={mobileImage}
                            />
                        </div>
                    )}
                    {caption && (
                        <RichText
                            as='figcaption'
                            className={styles['image-caption']}
                            data-testid='image-asset-caption'>
                            {caption}
                        </RichText>
                    )}
                </figure>
            </div>
        </Container>
    );
};
