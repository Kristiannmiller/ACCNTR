import { ComponentProps } from 'react';
import { VariantProps, cx } from 'class-variance-authority';

// Types
import { Expand } from '@/types';

// Styles
import { cardCVA } from './styles';

export type CardProps = ComponentProps<'div'> &
    Expand<VariantProps<typeof cardCVA>>;

export const Card = (props: CardProps) => {
    const {
        elevation = 'elevation2',
        topColorBar,
        className,
        children,
        ...rest
    } = props;

    return (
        <div
            className={cx(cardCVA({ elevation, topColorBar }), className)}
            data-testid='card'
            {...rest}>
            {children}
        </div>
    );
};
