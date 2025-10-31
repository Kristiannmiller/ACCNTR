import { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// Components
import { TextAccordion } from '@/components';

// Static
import { headlineTags } from '@/static';

// Utils
import { classNameRegex } from '@/utils';

// Mocks
import { mockSitecoreRichText } from '@/mocks/sitecore';
import { mockTextAccordion } from '@/mocks/text-accordion';

// Controls
import { textControl } from '@/sb-tools';

export default {
    title: 'Design System/organisms/C02 - AccordionViewMore',
    component: TextAccordion,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?node-id=17674-28866&t=Z2Jsx023hDgDEBbL-4'
        }
    },
    argTypes: {
        bodyCopyAlignment: {
            control: 'select',
            options: ['left', 'center'],
            defaultValue: 'left'
        },
        showMoreText: {
            control: 'text',
            defaultValue: 'View more'
        },
        showLessText: {
            control: 'text',
            defaultValue: 'View less'
        },
        headlineTag: {
            default: 'p',
            control: 'select',
            options: headlineTags
        },
        headlineAlignment: {
            control: 'select',
            options: ['left', 'center'],
            defaultValue: 'left'
        },
        headline: textControl,
        hiddenText: textControl
    }
} satisfies Meta<typeof TextAccordion>;

type Story = StoryObj<typeof TextAccordion>;

export const Default: Story = {
    args: mockTextAccordion.default,
    play: async ({ canvasElement }) => {
        const { getByTestId } = within(canvasElement);
        const content = getByTestId('text-accordion');

        const classNames = content.getAttribute('class')!;

        // Should have the correct class names
        await expect(classNames).toMatch(classNameRegex(classNames));

        // Should not be expanded by default
        await expect(content).not.toHaveTextContent(mockSitecoreRichText.value);

        // Should have the title
        await expect(content).toHaveTextContent('Nulla in ullamcorper');
    }
};
