import { ComponentProps, ReactElement, ReactNode } from 'react';

// Styles
import styles from './MultiColumnCta.module.scss';

// Components
import { ContentContainer, ColumnGrid } from '@/components';

// Types
import {
    ALIGNMENT_TYPES,
    FOUR_COLUMN_TYPES,
    HEADLINE_TAG_TYPES
} from '@/types';

export type MultiColumnCtaProps = ComponentProps<typeof ContentContainer> & {
    backgroundColor?: 'white' | 'whiteSmoke';
    headline?: ReactNode;
    headlineTag: HEADLINE_TAG_TYPES;
    supportingCopy?: ReactNode;
    columns: FOUR_COLUMN_TYPES;
    ctas: ReactElement;
    textAlignment: Extract<ALIGNMENT_TYPES, 'left' | 'center'>;
};

export const MultiColumnCta = (props: MultiColumnCtaProps) => {
    const {
        backgroundColor = 'white',
        className,
        headline,
        headlineTag = 'p',
        supportingCopy,
        textAlignment = 'left',
        columns = '2',
        ctas,
        ...rest
    } = props;

    return (
        <ContentContainer
            tag='section'
            backgroundColor={backgroundColor}
            className={className}
            data-testid='multi-column-cta'
            headline={headline}
            headlineTag={headlineTag}
            contentAlignment={textAlignment}
            supportCopy={supportingCopy}
            {...rest}>
            <ColumnGrid
                columns='1'
                columnsDesktop={columns}
                className={styles['grid']}
                data-testid='multi-column-cta-column-grid'>
                {ctas}
            </ColumnGrid>
        </ContentContainer>
    );
};
