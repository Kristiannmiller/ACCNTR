import {
    Link as JssLink,
    Text as JssText
} from '@sitecore-jss/sitecore-jss-react';

// Mocks
import { mockSitecoreLink } from '@/mocks/sitecore';

// Components
import { MultiButtonProps } from '@/components';

const mockLink = (
    <JssLink field={{ ...mockSitecoreLink.value, text: 'Button name' }} />
);

const defaultMock: MultiButtonProps = {
    headline: <JssText field={{ value: 'Multi Button' }} />,
    icon: 'peopleGroup',
    subHeading: (
        <JssText
            field={{
                value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
            }}
        />
    ),
    firstCTA: mockLink,
    backgroundColor: 'white'
};

export const mockMultiButtonLayouts: Record<
    | 'oneButton'
    | 'twoButton'
    | 'threeButton'
    | 'fourButton'
    | 'noOptionalProps',
    MultiButtonProps
> = {
    oneButton: {
        ...defaultMock
    },
    twoButton: {
        ...defaultMock,
        secondCTA: mockLink
    },
    threeButton: {
        ...defaultMock,
        secondCTA: mockLink,
        thirdCTA: mockLink
    },
    fourButton: {
        ...defaultMock,
        secondCTA: mockLink,
        thirdCTA: mockLink,
        fourthCTA: mockLink
    },
    noOptionalProps: {
        ...defaultMock,
        icon: undefined,
        subHeading: undefined
    }
};
