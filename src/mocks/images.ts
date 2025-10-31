// Types
import { ImageType, Sites } from '@/types';

export const mockImages: ImageType[] = [
    {
        src: '/images/hero-banners/hero-couple-sun.webp',
        alt: 'A couple walking in the sun'
    },
    {
        src: '/images/ctas/workforce-connection.webp',
        alt: 'A man with a walker and a nurse'
    },
    {
        src: '/images/ctas/home-amara-story.webp',
        alt: 'A smiling child'
    }
];

export const mockSmallImage: ImageType = {
    src: '/images/site-logos/advocate-health-care.png',
    alt: 'Advocate Health Logo',
    height: 100,
    width: 178
};

export const mockLargeImage: ImageType = {
    src: '/images/hero-banners/hero-couple-sun.webp',
    alt: 'A couple walking in the sun',
    height: 874,
    width: 1440
};

export const mockLogos: Record<Sites | 'corporateInverse', ImageType> = {
    advocateChildrens: {
        src: '/images/site-logos/advocate-childrens-hospital.png',
        alt: 'Advocate Childrens Hospital Logo',
        height: 48,
        width: 308
    },
    advocateHealthCare: {
        src: '/images/site-logos/advocate-health-care.png',
        alt: 'Advocate Health Logo',
        height: 26,
        width: 208
    },
    auroraBayCare: {
        src: '/images/site-logos/aurora-bay-care.png',
        alt: 'Aurora Bay Care Logo',
        height: 34,
        width: 292
    },
    auroraHealthCare: {
        src: '/images/site-logos/aurora-health-care.png',
        alt: 'Aurora Health Care Logo',
        height: 26,
        width: 276
    },
    corporate: {
        src: '/images/site-logos/corporate-black.webp',
        alt: 'Advocate Corporate Logo',
        height: 30,
        width: 261
    },
    corporateInverse: {
        src: '/images/site-logos/corporate-white.webp',
        alt: 'Advocate Corporate Logo',
        height: 30,
        width: 261
    },
    employerSolutions: {
        src: '/images/site-logos/employer-solutions.png',
        alt: 'Employer Solutions Logo',
        height: 22,
        width: 350
    },
    foundations: {
        src: '/images/site-logos/foundations.png',
        alt: 'Advocate Foundations Logo',
        height: 28,
        width: 360
    },
    research: {
        src: '/images/site-logos/aah-research-institute-logo.webp',
        alt: 'Advocate Research Logo',
        height: 28,
        width: 360
    }
};

export const mockFooterLogos: Record<Sites | 'corporateInverse', ImageType> = {
    advocateChildrens: {
        src: '/images/site-logos/advocate-childrens-hospital.png',
        alt: 'Advocate Childrens Hospital Logo'
    },
    advocateHealthCare: {
        src: '/images/site-logos/advocate-health-care.png',
        alt: 'Advocate Health Logo'
    },
    auroraBayCare: {
        src: '/images/site-logos/aurora-bay-care.png',
        alt: 'Aurora Bay Care Logo'
    },
    auroraHealthCare: {
        src: '/images/site-logos/aurora-health-care.png',
        alt: 'Aurora Health Care Logo'
    },
    corporate: {
        src: '/images/site-logos/corporate-black.webp',
        alt: 'Advocate Corporate Logo'
    },
    corporateInverse: {
        src: '/images/site-logos/corporate-white.webp',
        alt: 'Advocate Corporate Logo'
    },
    employerSolutions: {
        src: '/images/site-logos/employer-solutions.png',
        alt: 'Employer Solutions Logo'
    },
    foundations: {
        src: '/images/site-logos/foundations.png',
        alt: 'Advocate Foundations Logo'
    },
    research: {
        src: '/images/site-logos/aah-research-institute-logo.webp',
        alt: 'Advocate Research Logo',
        width: 800,
        height: 60
    }
};

export const mockBlogImages: Record<
    'small' | 'standard' | 'large' | 'tall',
    ImageType
> = {
    small: {
        src: '/images/blog-images/blog-small.png',
        alt: 'American family insurance institute logo.'
    },
    standard: {
        src: '/images/blog-images/blog-standard.jpg',
        alt: 'A statue of a baby resting in angel wings in a garden.'
    },
    large: {
        src: '/images/blog-images/blog-large.png',
        alt: 'A woman smiling at the camera.'
    },
    tall: {
        src: '/images/blog-images/blog-tall.jpg',
        alt: 'A woman smiling and twirling around a lamp post.'
    }
};
