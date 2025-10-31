import { ComponentProps, ReactElement, ReactNode } from 'react';

// Components
import { ContentContainer, ColumnGrid } from '@/components';

// Styles
import styles from './IconCtaSimplified.module.scss';

// Types
import { FOUR_COLUMN_TYPES, HEADLINE_TAG_TYPES } from '@/types';

export type IconCtaSimplifiedProps = ComponentProps<typeof ContentContainer> & {
    headlineTag: HEADLINE_TAG_TYPES;
    supportCopy?: ReactNode;
    bottomSupportCopy?: ReactNode;
    numberOfColumns: FOUR_COLUMN_TYPES;
    iconCtas: ReactElement;
    mobileBehavior: 'stacked' | '2-up Grid';
};

export const IconCtaSimplified = (props: IconCtaSimplifiedProps) => {
    const {
        className,
        headline,
        headlineTag = 'p',
        supportCopy,
        bottomSupportCopy,
        numberOfColumns = '2',
        iconCtas,
        mobileBehavior = 'stacked',
        ...rest
    } = props;

    return (
        <ContentContainer
            tag='section'
            className={className}
            data-testid='icon-cta-simplified'
            headline={headline}
            headlineTag={headlineTag}
            supportCopy={supportCopy}
            supportCopyBottom={bottomSupportCopy}
            {...rest}>
            <ColumnGrid
                columns={mobileBehavior === 'stacked' ? '1' : '2'}
                columnsTablet={numberOfColumns === '1' ? '1' : '2'}
                columnsDesktop={numberOfColumns}
                className={styles['icon-cta-simplified-grid']}
                data-testid='icon-cta-simplified-grid'>
                {iconCtas}
            </ColumnGrid>
        </ContentContainer>
    );
};
