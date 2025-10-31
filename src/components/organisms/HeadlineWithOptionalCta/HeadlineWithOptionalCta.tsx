import { ComponentProps, ReactNode } from 'react';

// Components
import { Container, Text } from '@/components';

// Styles
import styles from './HeadlineWithOptionalCta.module.scss';

export type HeadlineWithOptionalCtaProps = ComponentProps<typeof Container> & {
    cta?: ReactNode;
    headline: ReactNode;
};

export const HeadlineWithOptionalCta = (
    props: HeadlineWithOptionalCtaProps
) => {
    const { className, headline, cta, ...rest } = props;
    return (
        <Container
            className={className}
            {...rest}>
            <div
                className={styles['headline-with-optional-cta-base']}
                data-testid='headline-with-optional-cta'>
                {/* Heading */}
                <Text
                    fontStyle='lgHeading'
                    fontStyleTablet='xlHeading'
                    tag='h1'>
                    {headline}
                </Text>

                {/* Button Link */}
                {cta}
            </div>
        </Container>
    );
};
