// Types
import { BACKGROUND_COLOR_TYPES } from '@/types';
import { BackgroundColorProps } from '@/components';
import { RichText as JSSRichText } from '@sitecore-jss/sitecore-jss-react';

// Components
import { Anchor, Button, RichText, Text } from '@/components';

// Mocks
import { mockSitecoreRichText } from './sitecore';

const mockBackgroundColorDefault: BackgroundColorProps = {
    backgroundColor: 'white',
    children: (
        <div data-testid='mock-bg-color'>
            <RichText>
                <JSSRichText field={mockSitecoreRichText} />
            </RichText>
            <Text
                tag='h2'
                style={{ paddingTop: '3rem' }}>
                Anchors
            </Text>
            <div
                style={{
                    paddingBlock: '3rem',
                    display: 'flex',
                    gap: '1rem',
                    alignItems: 'center'
                }}>
                <Anchor
                    size='responsive'
                    buttonStyle='solid'>
                    Solid
                </Anchor>
                <Anchor
                    size='responsive'
                    buttonStyle='solid'
                    order='second'>
                    Solid Secondary
                </Anchor>
                <Anchor
                    size='responsive'
                    buttonStyle='outlined'>
                    Outlined
                </Anchor>
                <Anchor
                    href='#'
                    buttonStyle='link'>
                    Link
                </Anchor>
            </div>
            <Text tag='h2'>Buttons</Text>
            <div
                style={{
                    paddingBlock: '3rem',
                    display: 'flex',
                    gap: '1rem',
                    alignItems: 'center'
                }}>
                <Button
                    size='responsive'
                    buttonStyle='solid'>
                    Solid
                </Button>
                <Button
                    size='responsive'
                    buttonStyle='solid'
                    order='second'>
                    Solid Secondary
                </Button>
                <Button
                    size='responsive'
                    buttonStyle='outlined'>
                    Outlined
                </Button>
            </div>
        </div>
    )
};

export const mockBackgroundColor: Record<
    Exclude<BACKGROUND_COLOR_TYPES, 'transparent'>,
    BackgroundColorProps
> = {
    white: mockBackgroundColorDefault,
    whiteSmoke: {
        ...mockBackgroundColorDefault,
        backgroundColor: 'whiteSmoke'
    },
    denimBlue: {
        ...mockBackgroundColorDefault,
        backgroundColor: 'denimBlue'
    },
    wellnessBlue: {
        ...mockBackgroundColorDefault,
        backgroundColor: 'wellnessBlue'
    },
    achOrange: {
        ...mockBackgroundColorDefault,
        backgroundColor: 'achOrange'
    },
    cchaPurple: {
        ...mockBackgroundColorDefault,
        backgroundColor: 'cchaPurple'
    },
    utilityInfo: {
        ...mockBackgroundColorDefault,
        backgroundColor: 'utilityInfo'
    },
    utilityWarning: {
        ...mockBackgroundColorDefault,
        backgroundColor: 'utilityWarning'
    },
    utilityNegative: {
        ...mockBackgroundColorDefault,
        backgroundColor: 'utilityNegative'
    },
    utilityPositive: {
        ...mockBackgroundColorDefault,
        backgroundColor: 'utilityPositive'
    },
    utilityUtility: {
        ...mockBackgroundColorDefault,
        backgroundColor: 'utilityUtility'
    }
};
