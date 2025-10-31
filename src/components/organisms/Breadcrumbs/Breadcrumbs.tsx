import {
    ComponentProps,
    ComponentPropsWithoutRef,
    ComponentPropsWithRef,
    forwardRef,
    ReactNode
} from 'react';
import { cx } from 'class-variance-authority';

// Components
import {
    Anchor,
    AnchorTextType,
    Text,
    TextProps,
    SvgIcon,
    Container
} from '@/components';

// Styles
import styles from './Breadcrumbs.module.scss';

/**
 * Breadcrumb Root
 */
const Breadcrumb = forwardRef<HTMLElement, ComponentPropsWithoutRef<'nav'>>(
    (props, ref) => {
        const { ...rest } = props;
        return (
            <nav
                data-testid='breadcrumbs'
                ref={ref}
                aria-label='breadcrumb'
                {...rest}
            />
        );
    }
);
Breadcrumb.displayName = 'Breadcrumb';

/**
 * Breadcrumb List
 */
const BreadcrumbList = forwardRef<
    HTMLOListElement,
    ComponentPropsWithoutRef<'ol'>
>((props, ref) => {
    const { className, ...rest } = props;
    return (
        <ol
            ref={ref}
            data-testid='breadcrumb-list'
            className={cx(styles['breadcrumb-list'], className)}
            {...rest}
        />
    );
});
BreadcrumbList.displayName = 'BreadcrumbList';

/**
 * Breadcrumb Item
 */
const BreadcrumbItem = forwardRef<
    HTMLLIElement,
    ComponentPropsWithoutRef<'li'>
>((props, ref) => {
    const { className, ...rest } = props;
    return (
        <li
            ref={ref}
            data-testid='breadcrumb-item'
            className={cx(styles['breadcrumb-item'], className)}
            {...rest}
        />
    );
});
BreadcrumbItem.displayName = 'BreadcrumbItem';

/**
 * Breadcrumb Link
 */
const BreadcrumbLink = forwardRef<
    HTMLAnchorElement,
    ComponentPropsWithRef<'a'> & AnchorTextType
>((props, ref) => {
    const { className, ...rest } = props;

    return (
        <Anchor
            fontStyle={null}
            ref={ref}
            underline='hover'
            className={cx(styles['breadcrumb-link'], className)}
            data-testid='breadcrumb-link'
            {...rest}
        />
    );
});
BreadcrumbLink.displayName = 'BreadcrumbLink';

/**
 * Breadcrumb Page
 */
const BreadcrumbPage = forwardRef<HTMLSpanElement, TextProps<'span'>>(
    (props, ref) => {
        const { className, ...rest } = props;
        return (
            <Text
                customRef={ref}
                role='link'
                data-testid='breadcrumb-page'
                aria-disabled='true'
                aria-current='page'
                className={cx(styles['breadcrumb-page'], className)}
                {...rest}
            />
        );
    }
);
BreadcrumbPage.displayName = 'BreadcrumbPage';

/**
 * Breadcrumb Separator
 */
const BreadcrumbSeparator = (props: ComponentProps<'li'>) => {
    const { children, className, ...rest } = props;
    return (
        <span
            role='presentation'
            data-testid='breadcrumb-separator'
            aria-hidden='true'
            className={cx(styles['breadcrumb-separator'], className)}
            {...rest}>
            {children ?? <SvgIcon icon='chevronRight' />}
        </span>
    );
};
BreadcrumbSeparator.displayName = 'BreadcrumbSeparator';

/**
 * Breadcrumbs Organism
 */

export type BreadcrumbsProps = ComponentPropsWithoutRef<'nav'> & {
    links: ReactNode[];
    currentPage: string;
    showOnMobile?: boolean;
};

const Breadcrumbs = (props: BreadcrumbsProps) => {
    const {
        className,
        showOnMobile = false,
        links,
        currentPage,
        ...rest
    } = props;
    return (
        <Container
            verticalSpacing
            className={cx(
                styles['breadcrumbs'],
                showOnMobile && styles['show-on-mobile'],
                className
            )}
            data-testid='breadcrumbs-container'
            {...rest}>
            <Breadcrumb data-testid='breadcrumbs'>
                <BreadcrumbList>
                    {links.map((link, idx) => {
                        return (
                            <BreadcrumbItem key={idx}>
                                <BreadcrumbLink>{link}</BreadcrumbLink>
                                <BreadcrumbSeparator />
                            </BreadcrumbItem>
                        );
                    })}
                    <BreadcrumbItem>
                        <BreadcrumbPage>{currentPage}</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
        </Container>
    );
};

Breadcrumbs.displayName = 'Breadcrumbs';

export {
    Breadcrumb,
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbPage,
    BreadcrumbSeparator,
    Breadcrumbs
};
