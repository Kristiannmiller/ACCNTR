import { ComponentProps } from 'react';
import { cx } from 'class-variance-authority';

// Components
import { Checkbox, Text } from '@/components';

// Styles
import styles from './CheckboxFacetItem.module.scss';

export type CheckboxFacetItemProps = ComponentProps<'label'> & {
    label: string;
    count: number;
    onCheckedChange?: (checked: boolean) => void;
    checked?: boolean;
};

export const CheckboxFacetItem = (props: CheckboxFacetItemProps) => {
    const { className, label, count, checked, onCheckedChange, ...rest } =
        props;

    return (
        <label
            data-testid='checkbox-facet-item'
            className={cx(styles['checkbox-facet-item-base'], className)}
            {...rest}>
            {/* Checkbox */}
            <Checkbox
                defaultChecked={checked}
                onCheckedChange={onCheckedChange}
            />

            {/* Label */}
            <Text
                fontStyle='smParagraph'
                fontStyleCorp='smParagraph'>
                {label}
            </Text>
            {/* Count */}
            <Text
                as='span'
                fontStyle='smParagraphBold'
                fontStyleCorp='smParagraphBold'>
                ({count})
            </Text>
        </label>
    );
};
