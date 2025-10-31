import { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { RichText as JSSRichText } from '@sitecore-jss/sitecore-jss-react';

// Components
import { RichTextRendering } from './RichTextRendering';

// Utils
import { classNameRegex } from '@/utils';

// Mocks
import { mockSitecoreRichTextRendering } from '@/mocks/sitecore';

export default {
    title: 'Design System/organisms/C26 - RichText',
    component: RichTextRendering,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?node-id=392-9356'
        },
        controls: {
            include: ['children']
        }
    }
} satisfies Meta<typeof RichTextRendering>;

type Story = StoryObj<typeof RichTextRendering>;

export const Default: Story = {
    render: () => {
        return (
            <RichTextRendering>
                <JSSRichText field={mockSitecoreRichTextRendering} />
            </RichTextRendering>
        );
    },

    play: async ({ canvasElement }) => {
        const { getByTestId } = within(canvasElement);
        const content = getByTestId('rich-text-rendering');

        const classNames = content.getAttribute('class')!;

        await expect(classNames).toMatch(classNameRegex(classNames));
    }
};
