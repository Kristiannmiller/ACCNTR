// Components
import { PromoCallout, PromoCarouselProps } from '@/components';

// Types
import { Sites } from '@/types';

// Mocks
import { mockPromoCallout } from '@/mocks/promo-callout';

const mockPromoCarouselDefault: PromoCarouselProps = {
    backgroundColor: 'wellnessBlue',
    imageSide: 'left',
    secondCTAStyle: 'solid',
    slides: [
        <PromoCallout {...mockPromoCallout.default} />,
        <PromoCallout {...mockPromoCallout.advocateHealthCare} />,
        <PromoCallout {...mockPromoCallout.auroraHealthCare} />,
        <PromoCallout {...mockPromoCallout.centerText} />,
        <PromoCallout {...mockPromoCallout.noOptionalProps} />,
        <PromoCallout {...mockPromoCallout.layoutFiftyRight} />
    ],
    slideTimingSeconds: 6,
    textAlignment: 'left'
};

export const mockPromoCarousel: Record<
    'default' | Extract<Sites, 'advocateHealthCare'> | 'noMedia',
    PromoCarouselProps
> = {
    default: mockPromoCarouselDefault,
    advocateHealthCare: {
        ...mockPromoCarouselDefault,
        slides: [
            <PromoCallout {...mockPromoCallout.slideOne} />,
            <PromoCallout {...mockPromoCallout.slideTwo} />,
            <PromoCallout {...mockPromoCallout.slideThree} />
        ]
    },
    noMedia: {
        ...mockPromoCarouselDefault,
        slides: [
            <PromoCallout
                {...mockPromoCallout.slideOne}
                image={undefined}
            />,
            <PromoCallout
                {...mockPromoCallout.slideTwo}
                image={undefined}
            />
        ]
    }
};
