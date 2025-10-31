import {
    Image as JSSImage,
    Text as JSSText
} from '@sitecore-jss/sitecore-jss-react';

import { ChildrenAnimalMotifProps } from '@/components';

const mockChildrensAnimalMotifDefault: ChildrenAnimalMotifProps = {
    randomAnimalIndex: 0,
    animals: [
        {
            image: (
                <JSSImage
                    field={{
                        value: {
                            src: '/images/childrens-footer/piggie.png',
                            alt: 'piggie'
                        }
                    }}
                />
            ),
            quote: <JSSText field={{ value: 'Oink if you like our website' }} />
        },
        {
            image: (
                <JSSImage
                    field={{
                        value: {
                            src: '/images/childrens-footer/beaver.png',
                            alt: 'beaver'
                        }
                    }}
                />
            ),
            quote: <JSSText field={{ value: 'Care focused on kids' }} />
        },
        {
            image: (
                <JSSImage
                    field={{
                        value: {
                            src: '/images/childrens-footer/lion.png',
                            alt: 'lion'
                        }
                    }}
                />
            ),
            quote: <JSSText field={{ value: 'Making kids our mane focus' }} />
        },
        {
            image: (
                <JSSImage
                    field={{
                        value: {
                            src: '/images/childrens-footer/froggy.png',
                            alt: 'froggy'
                        }
                    }}
                />
            ),
            quote: (
                <JSSText
                    field={{ value: 'Pint-sized care, parent-sized relief' }}
                />
            )
        },
        {
            image: (
                <JSSImage
                    field={{
                        value: {
                            src: '/images/childrens-footer/zebra.png',
                            alt: 'zebra'
                        }
                    }}
                />
            ),
            quote: <JSSText field={{ value: 'KID-focused, parent-friendly' }} />
        }
    ],
    staticMobileImage: (
        <JSSImage
            field={{
                value: {
                    src: '/images/childrens-footer/pals-mobile.png',
                    alt: 'pals mobile'
                }
            }}
        />
    )
};

export const mockChildrensAnimalMotif: Record<
    'default' | 'secondBubble' | 'thirdBubble' | 'fourthBubble' | 'fifthBubble',
    ChildrenAnimalMotifProps
> = {
    default: mockChildrensAnimalMotifDefault,
    secondBubble: { ...mockChildrensAnimalMotifDefault, randomAnimalIndex: 1 },
    thirdBubble: { ...mockChildrensAnimalMotifDefault, randomAnimalIndex: 2 },
    fourthBubble: { ...mockChildrensAnimalMotifDefault, randomAnimalIndex: 3 },
    fifthBubble: { ...mockChildrensAnimalMotifDefault, randomAnimalIndex: 4 }
};
