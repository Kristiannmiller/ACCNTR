import { ComponentProps, ReactElement } from 'react';
import { VariantProps, cx } from 'class-variance-authority';

// Components
import { Table, ContentContainer } from '@/components';

// Types
import {
    Expand,
    HEADLINE_TAG_TYPES,
    ALIGNMENT_TYPES,
    TABLE_STYLES
} from '@/types';

// Styles
import styles from './TableContainer.module.scss';
import { tableContainerCVA } from './styles';
import { Slot } from '@radix-ui/react-slot';

export type TableContainerProps = ComponentProps<typeof ContentContainer> & {
    headline?: ReactElement;
    headlineTag: HEADLINE_TAG_TYPES;
    supportCopy?: ReactElement;
    contentAlignment: Extract<ALIGNMENT_TYPES, 'left' | 'center'>;
    tableStyle: Extract<TABLE_STYLES, 'standard' | 'custom'>;
    cellAlignment: Extract<ALIGNMENT_TYPES, 'left' | 'center' | 'right'>;
    shouldPinFirstColumn: boolean;
} & Expand<VariantProps<typeof tableContainerCVA>>;

export const TableContainer = (props: TableContainerProps) => {
    const {
        headline,
        supportCopy,
        headlineTag = 'p',
        contentAlignment = 'left',
        tableStyle = 'standard',
        cellAlignment = 'center',
        shouldPinFirstColumn = false,
        className,
        children,
        ...rest
    } = props;

    return (
        <ContentContainer
            className={className}
            contentAlignment={contentAlignment}
            headline={headline}
            headlineTag={headlineTag}
            spacing='72-24'
            supportCopy={
                <Slot
                    className={cx({
                        [styles['support-copy-large']]:
                            tableStyle === 'standard'
                    })}>
                    {supportCopy}
                </Slot>
            }
            {...rest}>
            <Table
                isSticky={shouldPinFirstColumn}
                isStriped={true}
                tableStyle={tableStyle}
                className={cx(
                    tableContainerCVA({ cellAlignment }),
                    styles['table']
                )}>
                {children}
            </Table>
        </ContentContainer>
    );
};
