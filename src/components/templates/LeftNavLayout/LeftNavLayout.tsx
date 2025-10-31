import { ComponentProps, ReactElement } from 'react';
import {
    Column,
    ColumnGrid,
    Container,
    LeftSideNavigationBackToTopAnchor
} from '@/components';

import styles from './LeftNavLayout.module.scss';

export type LeftNavLayoutProps = ComponentProps<'div'> & {
    breadcrumbsSection?: ReactElement;
    aboveLeftNavSection: ReactElement;
    leftNavLinks: ReactElement;
    leftNavContent: ReactElement;
    belowLeftNavSection: ReactElement;
};

export const LeftNavLayout = (props: LeftNavLayoutProps) => {
    const {
        className,
        breadcrumbsSection,
        aboveLeftNavSection,
        leftNavLinks,
        leftNavContent,
        belowLeftNavSection,
        ...rest
    } = props;

    return (
        <>
            {aboveLeftNavSection}
            {breadcrumbsSection && <>{breadcrumbsSection}</>}
            <Container
                verticalSpacing
                className={className}
                {...rest}>
                <ColumnGrid>
                    <Column
                        span='4'
                        spanDesktop='4'>
                        {leftNavLinks}
                    </Column>
                    <Column
                        span='4'
                        spanDesktop='8'
                        className={styles['left-nav-content-column']}>
                        {leftNavContent}
                    </Column>
                </ColumnGrid>
                <LeftSideNavigationBackToTopAnchor />
            </Container>
            {belowLeftNavSection}
        </>
    );
};
