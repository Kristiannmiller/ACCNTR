import { ComponentProps, ReactNode } from 'react';
import { cx } from 'class-variance-authority';

// Components
import { Anchor, Container, RichText, Text } from '@/components';

// Styles
import styles from './SimpleSignup.module.scss';

// Types
import {
    ALIGNMENT_TYPES,
    BACKGROUND_COLOR_TYPES,
    CTA_STYLE_TYPES,
    HEADLINE_TAG_TYPES
} from '@/types';

export type SimpleSignupProps = ComponentProps<typeof Container> & {
    alignment: Extract<ALIGNMENT_TYPES, 'center' | 'left'>;
    backgroundColor: Extract<BACKGROUND_COLOR_TYPES, 'white' | 'whiteSmoke'>;
    cta?: ReactNode;
    ctaStyle?: CTA_STYLE_TYPES;
    headline: ReactNode;
    headlineTag: HEADLINE_TAG_TYPES;
    supportCopy?: ReactNode;
    children: ReactNode;
};

export const SimpleSignup = (props: SimpleSignupProps) => {
    const {
        alignment = 'center',
        backgroundColor = 'white',
        className,
        children,
        cta,
        ctaStyle,
        headline,
        headlineTag = 'p',
        supportCopy,
        ...rest
    } = props;

    return (
        <Container
            backgroundColor={backgroundColor}
            className={cx(styles['simple-signup-base'], className)}
            data-testid='simple-signup'
            {...rest}>
            <div>
                <div
                    className={cx(styles['simple-signup-container'], {
                        [styles['center']]: alignment === 'center'
                    })}>
                    {/* Headline */}
                    <Text
                        tag={headlineTag}
                        data-testid='simple-signup-headline'
                        className={styles['simple-signup-headline']}>
                        {headline}
                    </Text>

                    {/* Support Copy */}
                    {supportCopy && (
                        <RichText
                            data-testid='simple-signup-support-copy'
                            className={styles['simple-signup-support-copy']}>
                            {supportCopy}
                        </RichText>
                    )}

                    {/* Form */}
                    {children}

                    {/* CTA */}
                    {cta && (
                        <Anchor
                            className={cx({
                                [styles['simple-signup-cta-link']]:
                                    ctaStyle !== 'button'
                            })}
                            size='responsive'
                            variant={
                                ctaStyle === 'button' ? 'solid1' : undefined
                            }
                            data-testid='simple-signup-cta'>
                            {cta}
                        </Anchor>
                    )}
                </div>
            </div>
        </Container>
    );
};
