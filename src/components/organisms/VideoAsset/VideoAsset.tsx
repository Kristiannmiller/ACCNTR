import { ComponentProps, ReactNode } from 'react';
import { cx } from 'class-variance-authority';

// Components
import { Container, RichText, YouTubeEmbed } from '@/components';

// Styles
import styles from './VideoAsset.module.scss';

export type VideoAssetProps = ComponentProps<typeof Container> & {
    videoId: string;
    caption?: ReactNode;
};

export const VideoAsset = (props: VideoAssetProps) => {
    const { className, videoId, caption, ...rest } = props;
    return (
        <Container
            className={cx(styles['video-asset-base'], className)}
            data-testid='video-asset'
            {...rest}>
            {/* Video asset Id */}
            <figure>
                <YouTubeEmbed videoId={videoId} />

                {/* Caption */}
                {caption && (
                    <RichText
                        as='figcaption'
                        data-testid='video-asset-caption'
                        className={styles['video-asset-caption']}>
                        {caption}
                    </RichText>
                )}
            </figure>
        </Container>
    );
};
