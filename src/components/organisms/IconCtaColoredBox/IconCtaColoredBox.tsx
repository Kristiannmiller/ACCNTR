import { ComponentProps, ReactElement } from 'react';

// Components
import { ColumnGrid, ContentContainer } from '@/components';

// Types
import {
    ALIGNMENT_TYPES,
    HEADLINE_TAG_TYPES,
    FOUR_COLUMN_TYPES
} from '@/types';

// Styles
import styles from './IconCtaColoredBox.module.scss';

export type IconCtaColoredBoxProps = ComponentProps<typeof ContentContainer> & {
    headline?: ReactElement;
    headlineAlignment?: Extract<ALIGNMENT_TYPES, 'left' | 'center'>;
    headlineTag?: HEADLINE_TAG_TYPES;
    supportCopy?: ReactElement;
    supportCopyAlignment?: Extract<ALIGNMENT_TYPES, 'left' | 'center'>;
    bottomSupportCopy?: ReactElement;
    columns: FOUR_COLUMN_TYPES;
};

export const IconCtaColoredBox = (props: IconCtaColoredBoxProps) => {
    const {
        headline,
        headlineTag = 'p',
        headlineAlignment = 'center',
        supportCopy,
        supportCopyAlignment = 'center',
        bottomSupportCopy,
        children,
        columns = '2',
        className,
        ...rest
    } = props;
    return (
        <ContentContainer
            className={className}
            data-testid='icon-cta-colored-box'
            headline={headline}
            headlineAlignment={headlineAlignment}
            headlineTag={headlineTag}
            supportCopy={supportCopy}
            supportCopyAlignment={supportCopyAlignment}
            supportCopyBottom={bottomSupportCopy}
            supportCopyBottomAlignment={supportCopyAlignment}
            {...rest}>
            <ColumnGrid
                className={styles['card-container']}
                columnsTablet={columns}
                columns='1'
                rowGap='even'
                data-testid='card'>
                {children}
            </ColumnGrid>
        </ContentContainer>
    );
};
