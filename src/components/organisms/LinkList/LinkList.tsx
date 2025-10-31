import { ComponentProps, ReactNode } from 'react';
import { cx } from 'class-variance-authority';

// Components
import { ContentContainer, ColumnGrid } from '@/components';

// Types
import {
    ALIGNMENT_TYPES,
    HEADLINE_TAG_TYPES,
    FOUR_COLUMN_TYPES,
    BACKGROUND_COLOR_TYPES,
    CTA_STYLE_TYPES,
    BUTTON_STYLE_TYPES
} from '@/types';

// Styles
import styles from './LinkList.module.scss';

export type LinkListProps = Omit<
    ComponentProps<typeof ContentContainer>,
    'ctaStyle'
> & {
    headline: ReactNode;
    supportingCopy?: ReactNode;
    bottomCta?: ReactNode;
    links: ReactNode;
    headlineAlignment: Extract<ALIGNMENT_TYPES, 'left' | 'center'>;
    supportCopyAlignment?: Extract<ALIGNMENT_TYPES, 'left' | 'center'>;
    ctaAlignment?: Extract<ALIGNMENT_TYPES, 'left' | 'center'>;
    headlineTag?: HEADLINE_TAG_TYPES;
    columnAlignment?: Extract<ALIGNMENT_TYPES, 'left' | 'center'>;
    backgroundColor?: Extract<BACKGROUND_COLOR_TYPES, 'white' | 'whiteSmoke'>;
    numColumns?: FOUR_COLUMN_TYPES;
    ctaStyle?: CTA_STYLE_TYPES;
};

export const LinkList = (props: LinkListProps) => {
    const {
        className,
        headline,
        supportingCopy,
        headlineAlignment = 'left',
        supportCopyAlignment = 'left',
        ctaAlignment = 'left',
        headlineTag,
        backgroundColor = 'white',
        numColumns = '2',
        columnAlignment = 'left',
        links,
        ctaStyle = 'button',
        bottomCta,
        ...rest
    } = props;

    const ctaStyleMap: Record<CTA_STYLE_TYPES, BUTTON_STYLE_TYPES> = {
        button: 'solid',
        link: 'link'
    };

    return (
        <ContentContainer
            backgroundColor={backgroundColor}
            className={className}
            cta={bottomCta}
            ctaAlignment={ctaAlignment}
            ctaStyle={ctaStyleMap[ctaStyle]}
            data-testid='link-list'
            headline={headline}
            headlineTag={headlineTag}
            headlineAlignment={headlineAlignment}
            supportCopy={supportingCopy}
            supportCopyAlignment={supportCopyAlignment}
            variant='containedSmall'
            {...rest}
            spacing='64-40'>
            <ColumnGrid
                columns='1'
                rowGap='even'
                className={cx(styles['column-grid'], {
                    [styles['column-grid-left']]: columnAlignment === 'left',
                    [styles['column-grid-center']]: columnAlignment === 'center'
                })}
                columnsTablet={numColumns === '1' ? '1' : '2'}
                columnsDesktop={numColumns}
                data-testid='link-list-column-grid'>
                {links}
            </ColumnGrid>
        </ContentContainer>
    );
};
