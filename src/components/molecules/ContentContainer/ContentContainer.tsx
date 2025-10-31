import { ComponentProps, ReactNode, Children } from 'react';
import { cx } from 'class-variance-authority';
import { Slot } from '@radix-ui/react-slot';

// Styles
import styles from './ContentContainer.module.scss';

// Components
import {
    Container,
    Text,
    RichText,
    Anchor,
    SvgIcon,
    SvgIconType
} from '@/components';

// Types
import {
    ALIGNMENT_TYPES,
    BUTTON_STYLE_TYPES,
    CONTENT_CONTAINER_SPACING_TYPES,
    HEADLINE_TAG_TYPES
} from '@/types';

export type ContentContainerProps = ComponentProps<typeof Container> & {
    contentAlignment?: Extract<ALIGNMENT_TYPES, 'center' | 'left'>;
    cta?: ReactNode;
    ctaAlignment?: Extract<ALIGNMENT_TYPES, 'center' | 'left'>;
    ctaStyle?: BUTTON_STYLE_TYPES;
    headline?: ReactNode;
    headlineAlignment?: Extract<ALIGNMENT_TYPES, 'center' | 'left'>;
    headlineIcon?: SvgIconType;
    headlineIconPlacement?: 'top' | 'left';
    headlineTag?: HEADLINE_TAG_TYPES;
    spacing?: CONTENT_CONTAINER_SPACING_TYPES;
    supportCopy?: ReactNode;
    supportCopyAlignment?: Extract<ALIGNMENT_TYPES, 'center' | 'left'>;
    supportCopyBottom?: ReactNode;
    supportCopyBottomAlignment?: Extract<ALIGNMENT_TYPES, 'center' | 'left'>;
};

export const ContentContainer = (props: ContentContainerProps) => {
    const {
        children,
        className,
        contentAlignment = 'center',
        cta,
        ctaAlignment,
        ctaStyle = 'solid',
        headline,
        headlineAlignment,
        headlineIcon,
        headlineIconPlacement = 'left',
        headlineTag = 'p',
        spacing = '72-48',
        supportCopy,
        supportCopyAlignment,
        supportCopyBottom,
        supportCopyBottomAlignment,
        ...rest
    } = props;

    const headlineAlignmentOverride = headlineAlignment || contentAlignment;

    const supportCopyAlignmentOverride =
        supportCopyAlignment || contentAlignment;

    const supportCopyBottomAlignmentOverride =
        supportCopyBottomAlignment || contentAlignment;

    const ctaAlignmentOverride = ctaAlignment || contentAlignment;

    return (
        <Container
            className={cx(
                styles['content-container'],
                {
                    [styles['spacing-72-48']]: spacing === '72-48',
                    [styles['spacing-64-40']]: spacing === '64-40',
                    [styles['spacing-40-24']]: spacing === '40-24',
                    [styles['spacing-72-32']]: spacing === '72-32',
                    [styles['spacing-72-24']]: spacing === '72-24'
                },
                className
            )}
            data-testid='content-container'
            {...rest}>
            <div>
                {headline && (
                    <Text
                        data-testid='content-container-headline'
                        tag={headlineTag}
                        className={cx(styles['headline'], {
                            [styles['headline-with-icon']]: headlineIcon,
                            [styles['headline-icon-top']]:
                                headlineIconPlacement === 'top',
                            [styles['text-center']]:
                                headlineAlignmentOverride === 'center'
                        })}>
                        {headlineIcon && <SvgIcon icon={headlineIcon} />}
                        {headline}
                    </Text>
                )}

                {supportCopy && (
                    <RichText
                        data-testid='content-container-support-copy'
                        className={cx(styles['support-copy'], {
                            [styles['text-center']]:
                                supportCopyAlignmentOverride === 'center'
                        })}>
                        {supportCopy}
                    </RichText>
                )}

                <Slot className={styles['content']}>
                    {Children.count(children) > 1 ? (
                        <div>{children}</div>
                    ) : (
                        children
                    )}
                </Slot>

                {supportCopyBottom && (
                    <RichText
                        data-testid='content-container-support-copy-bottom'
                        className={cx(styles['support-copy-bottom'], {
                            [styles['text-center']]:
                                supportCopyBottomAlignmentOverride === 'center'
                        })}>
                        {supportCopyBottom}
                    </RichText>
                )}

                {cta && (
                    <Anchor
                        data-testid='content-container-cta'
                        className={cx(styles['cta'], {
                            [styles['cta-center']]:
                                ctaAlignmentOverride === 'center',
                            [styles['cta-link']]: ctaStyle === 'link'
                        })}
                        size='responsive'
                        buttonStyle={ctaStyle}>
                        {cta}
                    </Anchor>
                )}
            </div>
        </Container>
    );
};
