import { cloneElement, ComponentProps, ReactNode, ReactElement } from 'react';

//Components
import {
    Anchor,
    ColumnGrid,
    ColumnGridProps,
    Container,
    Image,
    Text
} from '@/components';

// Styles
import styles from './BioCardGrid.module.scss';

// Types
import { HEADLINE_TAG_TYPES } from '@/types';
import { FOUR_COLUMN_TYPES } from '@/types';

export type BioCardGridProps = ComponentProps<typeof Container> & {
    headline?: ReactNode;
    headlineTag?: HEADLINE_TAG_TYPES;
    bios: {
        image: ReactNode;
        name: ReactNode;
        optionalLink?: ReactNode;
        title?: ReactNode;
    }[];
} & Pick<ColumnGridProps, 'columnsTablet' | 'columnsDesktop'>;

export const BioCardGrid = (props: BioCardGridProps) => {
    const {
        bios,
        className,
        headline,
        headlineTag = 'p',
        columnsDesktop = '4',
        columnsTablet,
        ...rest
    } = props;

    // Determine the number of columns to display on tablet.
    // Force 3 columns on tablet if author chooses 4, 5, or 6 columns on desktop.
    const colsTablet = (
        columnsTablet ??
        (columnsDesktop !== '4' &&
            columnsDesktop !== '5' &&
            columnsDesktop !== '6')
            ? columnsDesktop
            : '3'
    ) as FOUR_COLUMN_TYPES;

    return (
        <Container
            className={className}
            {...rest}>
            {headline && (
                <Text
                    data-testid='headline'
                    className={styles['headline']}
                    tag={headlineTag}>
                    {headline}
                </Text>
            )}

            <ColumnGrid
                className={styles['bio-card-grid']}
                data-testid='bio-card-grid'
                columns='2'
                columnsTablet={colsTablet}
                columnsDesktop={columnsDesktop}>
                {bios.map(({ image, name, title, optionalLink }, index) => {
                    return (
                        <div
                            key={index}
                            className={styles['bio-card-grid-item']}
                            data-testid='bio-card-grid-item'>
                            {image && (
                                <div
                                    className={styles['bio-card-grid-image']}
                                    data-testid='bio-card-grid-image'>
                                    <Image ratio='6:7'>{image}</Image>
                                </div>
                            )}

                            {name &&
                                (optionalLink ? (
                                    <Anchor
                                        fontStyle='smLink'
                                        fontStyleCorp='smLink'
                                        data-testid='bio-name'
                                        className={styles['bio-name']}>
                                        {cloneElement(
                                            optionalLink as ReactElement,
                                            {
                                                children: (
                                                    <Text
                                                        asChild
                                                        fontStyle='mdHeading'>
                                                        {name}
                                                    </Text>
                                                )
                                            }
                                        )}
                                    </Anchor>
                                ) : (
                                    <Text
                                        data-testid='bio-name'
                                        fontStyle='smParagraphBold'
                                        fontStyleCorp='smParagraphBold'
                                        tag='h3'>
                                        {name}
                                    </Text>
                                ))}

                            {title && (
                                <Text
                                    fontStyle='smParagraph'
                                    data-testid='bio-title'
                                    className={styles['bio-title']}
                                    tag='p'>
                                    {title}
                                </Text>
                            )}
                        </div>
                    );
                })}
            </ColumnGrid>
        </Container>
    );
};
