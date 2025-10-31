import { cloneElement, ComponentProps, ReactElement, ReactNode } from 'react';
import { cx } from 'class-variance-authority';

// Components
import {
    Anchor,
    RichText,
    YouTubeEmbed,
    YouTubeEmbedProps
} from '@/components';

// Styles
import styles from './MediaWithCaption.module.scss';

// Types
import { ALIGNMENT_TYPES, LAYOUT_RATIO_TYPES } from '@/types';

export type MediaWithCaptionProps = ComponentProps<'figure'> &
    Omit<YouTubeEmbedProps, 'videoId'> & {
        image?: ReactNode;
        imageCaption?: ReactNode;
        imageCtaLink?: ReactNode;
        imageSide?: Extract<ALIGNMENT_TYPES, 'left' | 'right'>;
        isImageBorderOn?: boolean;
        imageContainerSize?: Extract<
            LAYOUT_RATIO_TYPES,
            'twenty' | 'thirty' | 'forty' | 'fifty'
        >;
        videoId?: string;
    };

export const MediaWithCaption = (props: MediaWithCaptionProps) => {
    const {
        className,
        image,
        imageCaption,
        imageContainerSize,
        imageCtaLink,
        imageSide,
        isActive,
        isImageBorderOn = false,
        onReady,
        videoId,
        ...rest
    } = props;
    return (
        <figure
            data-testid='media-with-caption'
            className={cx(
                styles['media-with-caption-base'],
                {
                    [styles['media-left']]: imageSide === 'left',
                    [styles['media-right']]: imageSide === 'right',
                    [styles['image-border']]: isImageBorderOn,
                    [styles['media-size-20']]: imageContainerSize === 'twenty',
                    [styles['media-size-30']]: imageContainerSize === 'thirty',
                    [styles['media-size-40']]: imageContainerSize === 'forty',
                    [styles['media-size-50']]: imageContainerSize === 'fifty'
                },
                className
            )}
            {...rest}>
            {image ? (
                imageCtaLink ? (
                    <Anchor
                        className={styles['image-link']}
                        data-testid='media-with-caption-image-link'>
                        {cloneElement(imageCtaLink as ReactElement, {
                            children: image
                        })}
                    </Anchor>
                ) : (
                    image
                )
            ) : (
                videoId && (
                    <YouTubeEmbed
                        data-testid='media-with-caption-video'
                        videoId={videoId}
                        onReady={onReady}
                        isActive={isActive}
                    />
                )
            )}
            {imageCaption && (
                <RichText
                    as='figcaption'
                    data-testid='media-with-caption-caption'>
                    {imageCaption}
                </RichText>
            )}
        </figure>
    );
};
