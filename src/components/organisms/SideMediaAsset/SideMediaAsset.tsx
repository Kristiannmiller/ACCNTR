import { ComponentProps, ReactNode } from 'react';
import { cx } from 'class-variance-authority';

// Components
import { Container, MediaWithCaption, RichText, Text } from '@/components';

// Types
import {
    ALIGNMENT_TYPES,
    HEADLINE_TAG_TYPES,
    LAYOUT_RATIO_TYPES
} from '@/types';

// Styles
import styles from './SideMediaAsset.module.scss';

export type SideMediaAssetProps = ComponentProps<typeof Container> & {
    headline?: ReactNode;
    headlineTag: HEADLINE_TAG_TYPES;
    image?: ReactNode;
    imageCaption?: ReactNode;
    imageContainerSize: Extract<
        LAYOUT_RATIO_TYPES,
        'twenty' | 'thirty' | 'forty' | 'fifty'
    >;
    imageCtaLink?: ReactNode;
    imageSide: Extract<ALIGNMENT_TYPES, 'left' | 'right'>;
    isImageBorderOn: boolean;
    supportCopy: ReactNode;
    videoId?: string;
};

export const SideMediaAsset = (props: SideMediaAssetProps) => {
    const {
        className,
        headline,
        headlineTag = 'p',
        supportCopy,
        image,
        videoId,
        imageCaption,
        imageCtaLink,
        imageSide = 'right',
        isImageBorderOn,
        imageContainerSize = 'fifty',
        ...rest
    } = props;

    return (
        <Container
            className={cx(styles['side-media-asset-container'], className)}
            data-testid='side-media-asset'
            {...rest}>
            <div>
                {headline && (
                    <Text
                        data-testid='side-media-asset-headline'
                        className={styles['headline']}
                        tag={headlineTag}>
                        {headline}
                    </Text>
                )}
                <MediaWithCaption
                    image={image}
                    videoId={videoId}
                    imageCaption={imageCaption}
                    imageCtaLink={imageCtaLink}
                    imageSide={imageSide}
                    isImageBorderOn={isImageBorderOn}
                    imageContainerSize={imageContainerSize}
                />
                <RichText
                    data-testid='side-media-asset-support-copy'
                    className={styles['support-copy']}>
                    {supportCopy}
                </RichText>
            </div>
        </Container>
    );
};
