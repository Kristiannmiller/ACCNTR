import {
    RichText as JSSRichText,
    Link as JSSLink,
    Text as JSSText,
    Image as JSSImage
} from '@sitecore-jss/sitecore-jss-react';

// Mocks
import { mockSitecoreLink, mockSitecoreRichTextSmall } from '@/mocks/sitecore';

// Components
import { PromoCalloutProps } from '@/components';

// Types
import { Sites } from '@/types';

const mockPromoCalloutDefault: PromoCalloutProps = {
    backgroundColor: 'wellnessBlue',
    layout: 'thirty',
    textAlignment: 'left',
    headline: <JSSText field={{ value: 'Promo Callout' }} />,
    headlineTag: 'p',
    secondCTAStyle: 'solid',
    image: (
        <JSSImage
            field={{
                src: 'https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80',
                alt: 'A random image from Unsplash'
            }}
        />
    ),
    imageSide: 'left',
    supportingCopy: <JSSRichText field={mockSitecoreRichTextSmall} />,
    firstCTALink: (
        <JSSLink
            field={{
                value: {
                    ...mockSitecoreLink.value,
                    text: 'Learn More'
                }
            }}
        />
    ),
    secondCTALink: (
        <JSSLink
            field={{
                value: {
                    ...mockSitecoreLink.value,
                    text: 'Learn Less'
                }
            }}
        />
    ),
    hasCarouselControls: false
};

export const mockPromoCallout: Record<
    | 'default'
    | 'noImage'
    | 'noButtons'
    | Extract<Sites, 'auroraHealthCare' | 'advocateHealthCare'>
    | 'layoutFiftyRight'
    | 'noOptionalProps'
    | 'centerText'
    | 'slideOne'
    | 'slideTwo'
    | 'slideThree',
    PromoCalloutProps
> = {
    default: mockPromoCalloutDefault,
    noImage: {
        ...mockPromoCalloutDefault,
        backgroundColor: 'whiteSmoke',
        image: undefined
    },
    noButtons: {
        ...mockPromoCalloutDefault,
        backgroundColor: 'cchaPurple',
        firstCTALink: undefined,
        secondCTALink: undefined
    },
    layoutFiftyRight: {
        ...mockPromoCalloutDefault,
        backgroundColor: 'achOrange',
        layout: 'fifty',
        imageSide: 'right'
    },
    centerText: {
        ...mockPromoCalloutDefault,
        backgroundColor: 'denimBlue',
        image: undefined,
        textAlignment: 'center'
    },
    noOptionalProps: {
        headline: mockPromoCalloutDefault.headline,
        headlineTag: mockPromoCalloutDefault.headlineTag
    },
    slideOne: {
        ...mockPromoCalloutDefault,
        headline: <JSSText field={{ value: 'Promo Carousel' }} />,
        headlineTag: 'h3',
        firstCTALink: (
            <JSSLink
                field={{
                    value: {
                        ...mockSitecoreLink.value,
                        text: 'Get care now'
                    }
                }}
            />
        ),
        image: (
            <JSSImage
                field={{
                    alt: 'A sick woman in bed reading her laptop.',
                    src: 'https://www.advocatehealth.com/aah-enterprise-assets/brand-library/images-library/banner-images/may-symptom-checker-banner.webp'
                }}
            />
        ),
        supportingCopy: (
            <JSSRichText
                field={{
                    value: '<p>Symptom Checker can help you find the quickest, most convenient visit based on your symptoms.</p>'
                }}
            />
        )
    },
    slideTwo: {
        ...mockPromoCalloutDefault,
        backgroundColor: 'achOrange',
        headline: <JSSText field={{ value: 'Promo Carousel' }} />,
        headlineTag: 'h3',
        image: (
            <JSSImage
                field={{
                    alt: 'A smiling woman on a couch reading her phone.',
                    src: 'https://www.advocatehealth.com/aah-enterprise-assets/brand-library/images-library/promotional-images/2023/promo-banners/livewell-spanish-translation-plan_secondary_promo_banner_image.webp'
                }}
            />
        ),
        imageSide: 'right',
        supportingCopy: (
            <JSSRichText
                field={{
                    value: '<p>LiveWell makes managing your health and wellness easy. And now, accessing LiveWell in Spanish is, too.</p>'
                }}
            />
        )
    },
    slideThree: {
        ...mockPromoCalloutDefault,
        firstCTALink: (
            <JSSLink
                field={{
                    value: {
                        ...mockSitecoreLink.value,
                        text: 'Find a heart specialist'
                    }
                }}
            />
        ),
        headline: <JSSText field={{ value: 'Promo Carousel' }} />,
        headlineTag: 'h3',
        image: (
            <JSSImage
                field={{
                    alt: 'A laughing man surrounded by two friends sitting on a bench and playing the guitar.',
                    src: 'https://advocatehealth.com/aah-enterprise-assets/brand-library/images-library/promotional-images/2023/promo-banners/advocate-heart-homepage-promo-banner.webp'
                }}
            />
        ),
        supportingCopy: (
            <JSSRichText
                field={{
                    value: '<p>With nationally recognized treatments and the most care locations in the region, our heart specialists are here for your heart so you can live fully.</p>'
                }}
            />
        )
    },
    auroraHealthCare: {
        ...mockPromoCalloutDefault,
        headline: (
            <JSSText
                field={{
                    value: 'Promo Callout'
                }}
            />
        ),
        image: (
            <JSSImage
                field={{
                    src: '/images/ctas/join-the-team.jpg',
                    alt: "Chicagoland Children's Health Alliance"
                }}
            />
        ),
        supportingCopy: (
            <JSSRichText
                field={{
                    value: "<p>Our world-class doctors, nurses and team members make up a dedicated team that's passionate about helping people live well. Join us as we change lives in our communities for the better.</p>"
                }}
            />
        ),
        firstCTALink: (
            <JSSLink
                field={{
                    value: {
                        ...mockSitecoreLink.value,
                        text: 'Join our team'
                    }
                }}
            />
        )
    },
    advocateHealthCare: {
        ...mockPromoCalloutDefault,
        backgroundColor: 'cchaPurple',
        textAlignment: 'center',
        headline: <JSSText field={{ value: 'Promo Callout' }} />,
        headlineTag: 'h3',
        secondCTAStyle: 'outlined',
        supportingCopy: (
            <JSSRichText
                field={{
                    value: '<p>Most strokes are preventable and many of the risk factors are controllable. Our stroke risk quiz helps you estimate your chance of experiencing a stroke, find ways to minimize your risk and get an idea of what to do next based on your results.</p>'
                }}
            />
        ),
        firstCTALink: (
            <JSSLink
                field={{
                    value: {
                        ...mockSitecoreLink.value,
                        text: 'Take stroke risk quiz'
                    }
                }}
            />
        )
    }
};
