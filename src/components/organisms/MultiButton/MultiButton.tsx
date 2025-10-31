import { ComponentProps, ReactNode } from 'react';
import { cx } from 'class-variance-authority';

// Components
import {
    Text,
    Anchor,
    SvgIcon,
    SvgIconType,
    ContentContainer
} from '@/components';

// Types
import { BACKGROUND_COLOR_TYPES } from '@/types';

// Styles
import styles from './MultiButton.module.scss';

export type MultiButtonProps = ComponentProps<typeof ContentContainer> & {
    backgroundColor: Extract<
        BACKGROUND_COLOR_TYPES,
        'white' | 'whiteSmoke' | 'wellnessBlue'
    >;
    firstCTA: ReactNode;
    fourthCTA?: ReactNode;
    headline: ReactNode;
    icon?: SvgIconType;
    secondCTA?: ReactNode;
    subHeading?: ReactNode;
    thirdCTA?: ReactNode;
};

export const MultiButton = (props: MultiButtonProps) => {
    const {
        backgroundColor = 'white',
        className,
        firstCTA,
        fourthCTA,
        headline,
        icon,
        secondCTA,
        subHeading,
        thirdCTA,
        ...rest
    } = props;

    const ctas = [firstCTA, secondCTA, thirdCTA, fourthCTA].filter(Boolean);

    return (
        <ContentContainer
            backgroundColor={backgroundColor}
            className={className}
            variant='containedSmall'
            data-testid='multi-button'
            {...rest}>
            <Text
                tag='h2'
                fontStyle='lgHeading'
                className={styles['heading']}
                data-testid='multi-button-heading'>
                {icon && <SvgIcon icon={icon} />}
                {headline}
            </Text>

            {subHeading && (
                <Text
                    tag='p'
                    fontStyle='smParagraph'
                    className={styles['sub-heading']}
                    data-testid='multi-button-subHeading'>
                    {subHeading}
                </Text>
            )}

            <div
                className={cx(
                    styles['cta-wrapper'],
                    ctas.length === 1
                        ? styles['cta-wrapper-single']
                        : styles['cta-wrapper-multi']
                )}>
                {ctas.map((cta, index) => (
                    <Anchor
                        key={index}
                        className={styles['cta-button']}
                        buttonStyle='solid'
                        size='responsive'
                        data-testid={`multi-button-${index + 1}`}>
                        {cta}
                    </Anchor>
                ))}
            </div>
        </ContentContainer>
    );
};
