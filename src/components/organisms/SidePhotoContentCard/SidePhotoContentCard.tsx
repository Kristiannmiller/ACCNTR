import { ComponentProps, ReactNode } from 'react';
import { cx } from 'class-variance-authority';

// Styles
import styles from './SidePhotoContentCard.module.scss';

// Components
import { Anchor, Container, Image, RichText, Text } from '@/components';

// Types
import {
    ALIGNMENT_TYPES,
    LAYOUT_RATIO_TYPES,
    HEADLINE_TAG_TYPES
} from '@/types';
import { BUTTON_VARIANTS } from '@/components';

// Types
export type SidePhotoContentCardDataProps = {
    hasCarouselControls?: boolean;
    headline: ReactNode;
    headlineTag: HEADLINE_TAG_TYPES;
    image: ReactNode;
    imageSide: Extract<ALIGNMENT_TYPES, 'left' | 'right'>;
    layout: Extract<LAYOUT_RATIO_TYPES, 'fifty' | 'forty'>;
    primaryCtaButton: ReactNode;
    primaryLink?: ReactNode;
    secondaryCtaButton?: ReactNode;
    secondaryCtaStyle: Extract<BUTTON_VARIANTS, 'outlined' | 'solid1'>;
    secondaryLink?: ReactNode;
    supportCopy?: ReactNode;
};

export type SidePhotoContentCardProps = ComponentProps<typeof Container> &
    SidePhotoContentCardDataProps;

export const SidePhotoContentCard = (props: SidePhotoContentCardProps) => {
    const {
        className,
        hasCarouselControls,
        headline,
        headlineTag = 'p',
        image,
        imageSide = 'left',
        layout = 'fifty',
        primaryCtaButton,
        primaryLink,
        secondaryCtaButton,
        secondaryCtaStyle = 'solid1',
        secondaryLink,
        supportCopy,
        ...rest
    } = props;

    return (
        <Container
            className={className}
            data-testid='side-photo-content-card'
            {...rest}>
            <div>
                <div
                    data-testid='side-photo-content-card-item'
                    className={cx(styles['card'], {
                        [styles['image-right']]: imageSide === 'right',
                        [styles['layout-forty']]: layout === 'forty'
                    })}>
                    <div className={styles['image']}>
                        <Image
                            ratio={layout === 'forty' ? 864 / 520 : 720 / 480}>
                            {image}
                        </Image>
                    </div>
                    <div
                        className={cx(styles['content'], {
                            [styles['with-controls']]: hasCarouselControls
                        })}>
                        {headline && (
                            <Text
                                className={styles['headline']}
                                tag={headlineTag}>
                                {headline}
                            </Text>
                        )}
                        {supportCopy && (
                            <RichText className={styles['support-copy']}>
                                {supportCopy}
                            </RichText>
                        )}
                        {primaryCtaButton && (
                            <div className={styles['cta-wrapper']}>
                                <Anchor
                                    className={styles['cta']}
                                    size='responsive'
                                    variant='solid1'>
                                    {primaryCtaButton}
                                </Anchor>
                                {secondaryCtaButton && (
                                    <Anchor
                                        className={styles['cta']}
                                        size='responsive'
                                        variant={secondaryCtaStyle}>
                                        {secondaryCtaButton}
                                    </Anchor>
                                )}
                            </div>
                        )}
                        {primaryLink && (
                            <div className={styles['cta-wrapper']}>
                                <Anchor>{primaryLink}</Anchor>
                                {secondaryLink && (
                                    <Anchor>{secondaryLink}</Anchor>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Container>
    );
};
