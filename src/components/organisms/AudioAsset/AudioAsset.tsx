import { ComponentProps, ReactNode } from 'react';
import { cx } from 'class-variance-authority';

// Styles
import styles from './AudioAsset.module.scss';

// Components
import { Container, RichText } from '@/components';

// Types
import { ALIGNMENT_TYPES, PLACEMENT_TYPES } from '@/types';

export type AudioAssetProps = ComponentProps<typeof Container> & {
    audioSrc: string;
    caption?: ReactNode;
    captionPlacement?: Extract<PLACEMENT_TYPES, 'top' | 'bottom'>;
    playerAlignment?: Extract<ALIGNMENT_TYPES, 'left' | 'center'>;
};

export const AudioAsset = (props: AudioAssetProps) => {
    const {
        audioSrc,
        caption,
        captionPlacement = 'top',
        className,
        playerAlignment = 'left',
        ...rest
    } = props;
    return (
        <Container
            className={cx(styles['audio-asset'], className)}
            data-testid='audio-asset'
            {...rest}>
            <figure>
                {caption && captionPlacement === 'top' && (
                    <figcaption>
                        <RichText>{caption}</RichText>
                    </figcaption>
                )}
                <audio
                    className={cx({
                        [styles['audio-center']]: playerAlignment === 'center'
                    })}
                    controls
                    src={audioSrc}
                />
                {caption && captionPlacement === 'bottom' && (
                    <figcaption>
                        <RichText>{caption}</RichText>
                    </figcaption>
                )}
            </figure>
        </Container>
    );
};
