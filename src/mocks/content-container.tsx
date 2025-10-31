import {
    BackgroundColor,
    Card,
    ColumnGrid,
    ContentContainerProps
} from '@/components';
import {
    Text as JSSText,
    RichText as JSSRichText,
    Link as JSSLink
} from '@sitecore-jss/sitecore-jss-react';

// Mocks
import {
    mockSitecoreLink,
    mockSitecoreRichTextBottomCopy
} from '@/mocks/sitecore';
import { mockCards } from '@/mocks/card';

const mockContentContainerDefault: ContentContainerProps = {
    backgroundColor: 'white',
    contentAlignment: 'center',
    cta: <JSSLink field={mockSitecoreLink} />,
    ctaAlignment: 'center',
    ctaStyle: 'solid',
    headline: <JSSText field={{ value: 'Content Container' }} />,
    headlineAlignment: undefined,
    headlineIcon: undefined,
    headlineIconPlacement: undefined,
    headlineTag: 'p',
    spacing: '72-48',
    supportCopy: <JSSRichText field={mockSitecoreRichTextBottomCopy} />,
    supportCopyAlignment: undefined,
    supportCopyBottom: <JSSRichText field={mockSitecoreRichTextBottomCopy} />,
    supportCopyBottomAlignment: undefined,
    variant: undefined
};

export const mockContentContainer: Record<
    'default' | 'withoutSupportCopyBottom' | 'withContent' | 'withIcon',
    ContentContainerProps
> = {
    default: mockContentContainerDefault,
    withoutSupportCopyBottom: {
        ...mockContentContainerDefault,
        supportCopyBottom: undefined
    },
    withContent: {
        ...mockContentContainerDefault,
        children: (
            <ColumnGrid
                columns='1'
                columnsDesktop='3'>
                <BackgroundColor>
                    <Card
                        style={{
                            padding: '2rem',
                            display: 'grid',
                            gap: '1rem',
                            placeItems: 'center',
                            borderRadius: '0.25rem'
                        }}
                        {...mockCards.default}
                    />
                </BackgroundColor>
                <BackgroundColor>
                    <Card
                        style={{
                            padding: '2rem',
                            display: 'grid',
                            gap: '1rem',
                            placeItems: 'center',
                            borderRadius: '0.25rem'
                        }}
                        {...mockCards.default}
                    />
                </BackgroundColor>
                <BackgroundColor>
                    <Card
                        style={{
                            padding: '2rem',
                            display: 'grid',
                            gap: '1rem',
                            placeItems: 'center',
                            borderRadius: '0.25rem'
                        }}
                        {...mockCards.default}
                    />
                </BackgroundColor>
            </ColumnGrid>
        )
    },
    withIcon: {
        ...mockContentContainerDefault,
        headlineIcon: 'arrowRight'
    }
};
