import { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { RichText as JSSRichText } from '@sitecore-jss/sitecore-jss-react';

// Components
import { RichText } from './RichText';

// Utils
import { classNameRegex } from '@/utils';

// Mocks
import { mockSitecoreRichText } from '@/mocks/sitecore';

const mockRichText = mockSitecoreRichText.value;

export default {
    title: 'Design System/atoms/RichText',
    component: RichText,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?m=auto&node-id=9470-28573&t=huc3qPDjO7E0oXSV-1'
        }
    }
} satisfies Meta<typeof RichText>;

type Story = StoryObj<typeof RichText>;

export const Default: Story = {
    args: {
        children: mockRichText
    },
    play: async ({ canvasElement }) => {
        const { getByTestId } = within(canvasElement);
        const content = getByTestId('rich-text');
        const classNames = content.getAttribute('class')!;

        await expect(content.innerHTML).toEqual(
            mockRichText
                .replaceAll('&mdash;', '—')
                .replaceAll('&ndash;', '–')
                .replaceAll('&copy;', '©')
                .replaceAll('&reg;', '®')
                .replaceAll('&trade;', '™')
                .replaceAll('&euro;', '€')
                .replaceAll('&pound;', '£')
        );
        await expect(classNames).toMatch(classNameRegex(classNames));
    }
};

export const SitecoreExample: Story = {
    args: {
        children: mockRichText
    },
    render: () => {
        return (
            <RichText>
                <JSSRichText field={mockSitecoreRichText} />
            </RichText>
        );
    },
    play: async ({ canvasElement }) => {
        const { getByTestId } = within(canvasElement);
        const content = getByTestId('rich-text');
        const classNames = content.getAttribute('class')!;

        // JSSRichText adds a div tag surrounding field value, div is the default tag to surround rich text.
        await expect(content.innerHTML).toEqual(
            '<div>' +
                mockRichText
                    .replaceAll('&mdash;', '—')
                    .replaceAll('&ndash;', '–')
                    .replaceAll('&copy;', '©')
                    .replaceAll('&reg;', '®')
                    .replaceAll('&trade;', '™')
                    .replaceAll('&euro;', '€')
                    .replaceAll('&pound;', '£') +
                '</div>'
        );
        await expect(classNames).toMatch(classNameRegex(classNames));
    }
};
