import { Meta, StoryObj } from '@storybook/react';

// Components
import { ReverseRows, ReverseRow } from '@/components';

// Static
import { headlineTags } from '@/static';

// Mocks
import { mockReverseRow } from '@/mocks/reverse-row';
import { mockReverseRows } from '@/mocks/reverse-rows';
import { mockYoutubeEmbed } from '@/mocks/youtube-embed';

// Tests
import { testReverseRow } from '@/tests';

// Controls
import { textControl } from '@/sb-tools';

export default {
    title: 'Design System/molecules/ReverseRow',
    component: ReverseRow,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?node-id=850-7063&t=FQxELFbk8LXiYskq-4'
        },
        controls: {
            include: Object.keys(mockReverseRow.default)
        }
    },
    argTypes: {
        mediaSide: {
            default: 'left',
            description:
                'Controls whether image is displayed to right or left of supporting copy',
            control: 'select',
            options: ['left', 'right']
        },
        headlineTag: {
            default: 'p',
            description: 'controls title type',
            control: 'select',
            options: headlineTags
        },
        contentAlignment: {
            default: 'top',
            description: 'controls alignment of content',
            control: 'select',
            options: ['top', 'center']
        },
        ctaStyle: {
            default: 'button',
            description: 'controls display of call-to-actions',
            control: 'select',
            options: ['button', 'link']
        },
        image: {
            default: mockReverseRow.default.image,
            description: 'Image source'
        },
        videoId: {
            default: mockYoutubeEmbed.videoId,
            description: 'VideoId of YouTube video to render w/in iFrame'
        },
        headline: textControl,
        supportingCopy: textControl
    }
} satisfies Meta<typeof ReverseRow>;

type Story = StoryObj<typeof ReverseRow>;

export const Default: Story = {
    args: mockReverseRow.default,
    play: testReverseRow.default
};

export const NoVideo: Story = {
    args: mockReverseRow.noVideo,
    play: testReverseRow.default
};
export const WithContainer: Story = {
    args: mockReverseRow.default,
    render: (args) => {
        return (
            <ReverseRows
                {...mockReverseRows.default}
                rows={
                    <>
                        <ReverseRow {...args} />
                        <ReverseRow {...args} />
                        <ReverseRow {...args} />
                        <ReverseRow {...args} />
                        <ReverseRow {...args} />
                        <ReverseRow {...args} />
                        <ReverseRow {...args} />
                        <ReverseRow {...args} />
                    </>
                }
            />
        );
    }
};
