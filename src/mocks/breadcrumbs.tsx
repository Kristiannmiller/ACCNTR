import { BreadcrumbsProps } from '@/components';

// Types
import { Sites } from '@/types';

const mockBreadcrumbsDefault: BreadcrumbsProps = {
    links: [<a href='/'>Home</a>, <a href='/components'>Components</a>],
    currentPage: 'Breadcrumb',
    showOnMobile: false
};

type BreadcrumbsSites = Extract<
    Sites,
    'auroraHealthCare' | 'advocateHealthCare'
>;

export const mockBreadcrumbs: Record<
    'default' | 'showOnMobile' | BreadcrumbsSites,
    BreadcrumbsProps
> = {
    default: mockBreadcrumbsDefault,
    showOnMobile: {
        ...mockBreadcrumbsDefault,
        showOnMobile: true
    },
    advocateHealthCare: {
        links: [<a href='/'>Home</a>, <a href='#'>Services</a>],
        currentPage: 'Orthopedic center'
    },
    auroraHealthCare: {
        links: [
            <a href='/'>Home</a>,
            <a href='#'>Services & specialties</a>,
            <a href='#'>Primary care</a>,
            <a href='#'>Urgent care clinics</a>,
            <a href='#'>Aurora Clinic at Walgreens</a>
        ],
        currentPage: 'Aurora Clinic at Walgreens services & treatments'
    }
};
