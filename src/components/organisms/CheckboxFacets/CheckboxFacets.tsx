import { ComponentProps, useState } from 'react';
import { cx } from 'class-variance-authority';
import { BackgroundColor, SvgIcon } from '@/components';

// Components
import {
    Button,
    CheckboxFacetItem,
    CheckboxFacetItemProps,
    Text
} from '@/components';

// Styles
import styles from './CheckboxFacets.module.scss';

// Types
export type CheckboxFacetsProps = ComponentProps<'div'> & {
    checkboxFacetItems: CheckboxFacetItemProps[];
    heading?: string;
    onFilterChange: (label: string, selected: boolean) => void;
    isOpen?: boolean;
    onToggleOpen?: () => void;
};

export const CheckboxFacets = (props: CheckboxFacetsProps) => {
    const {
        className,
        checkboxFacetItems,
        heading = 'Filter by type',
        onFilterChange,
        isOpen: controlledIsOpen,
        onToggleOpen,
        ...rest
    } = props;
    const [localIsOpen, setLocalIsOpen] = useState<boolean>(false);

    // Determine if we are controlled or uncontrolled
    const isOpen = controlledIsOpen ?? localIsOpen;
    const handleToggleOpen =
        onToggleOpen ?? (() => setLocalIsOpen(!localIsOpen));

    const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());

    const handleItemChange = (label: string, checked: boolean) => {
        const updatedSelectedItems = new Set(selectedItems);

        checked
            ? updatedSelectedItems.add(label)
            : updatedSelectedItems.delete(label);

        setSelectedItems(updatedSelectedItems);
        onFilterChange(label, checked);
    };

    return (
        <div
            className={cx(styles['checkbox-facets-base'], className)}
            data-testid='checkbox-facets'
            {...rest}>
            {/* Toggle Button */}
            <Button
                className={styles['toggle-button']}
                onClick={handleToggleOpen}
                variant='outlined'
                size='responsive'
                aria-expanded={isOpen}>
                {heading}
                <SvgIcon icon={isOpen ? 'chevronUp' : 'chevronDown'} />
            </Button>

            <BackgroundColor backgroundColor='whiteSmoke'>
                <div
                    className={cx(styles['checkbox-facets-wrapper'], {
                        [styles['checkbox-facets-wrapper--open']]: isOpen
                    })}
                    data-testid='checkbox-facets-wrapper'>
                    {/* Heading */}
                    {heading && (
                        <Text
                            as='h4'
                            className={styles['heading']}
                            fontStyle='smHeadingMobile'
                            fontStyleCorp='smHeadingMobile'>
                            {heading}
                        </Text>
                    )}
                    {/* List of facets */}
                    <div className={styles['facets-list']}>
                        {checkboxFacetItems?.map((item, idx) => {
                            return (
                                <CheckboxFacetItem
                                    key={idx}
                                    {...item}
                                    onCheckedChange={(checked) =>
                                        handleItemChange(item.label, checked)
                                    }
                                />
                            );
                        })}
                    </div>
                </div>
            </BackgroundColor>
        </div>
    );
};
