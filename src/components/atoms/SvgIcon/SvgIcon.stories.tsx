import { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// Components
import { allFontAwesomeIcons, SvgIcon } from './SvgIcon';

// Utils
import { classNameRegex } from '@/utils';
import { ColumnGrid, SvgIconType } from '@/components';

export default {
    title: 'Design System/atoms/SvgIcon',
    component: SvgIcon,
    tags: [],
    parameters: {
        layout: 'centered',
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?node-id=9595-24210&t=qlQEbxiBB16vNQgv-4'
        }
    },
    argTypes: {
        icon: {
            control: 'select',
            options: allFontAwesomeIcons,
            defaultValue: 'facebook'
        }
    }
} satisfies Meta<typeof SvgIcon>;

type Story = StoryObj<typeof SvgIcon>;

export const Default: Story = {
    args: {
        icon: 'facebook' as SvgIconType
    },
    play: async ({ canvasElement }) => {
        const { getByTestId } = within(canvasElement);
        const content = getByTestId('svg-icon');

        const classNames = content.getAttribute('class')!;

        await expect(classNames).toMatch(classNameRegex(classNames));
    }
};

export const ColoredSVG: Story = {
    args: {
        icon: 'youtube'
    },
    render: (args) => (
        <SvgIcon
            style={{ color: 'rgb(255, 0, 0)' }}
            {...args}
        />
    ),
    play: async ({ canvasElement }) => {
        const { getByTestId } = within(canvasElement);
        const content = getByTestId('svg-icon');

        const classNames = content.getAttribute('class')!;

        await expect(classNames).toMatch(classNameRegex(classNames));

        // Check the color of the SVG
        await expect(content).toHaveStyle('color: rgb(255, 0, 0)');
    }
};

export const ContactSheet: Story = {
    render: () => (
        <ColumnGrid
            columns={'2'}
            columnsTablet={'4'}
            columnsDesktop={'6'}>
            {allFontAwesomeIcons.map((faIcon) => (
                <div
                    style={{
                        justifyContent: 'space-between',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        paddingBottom: '25px',
                        textAlign: 'center'
                    }}>
                    <SvgIcon
                        icon={faIcon as SvgIconType}
                        style={{
                            width: '40%',
                            maxHeight: '100px',
                            height: 'auto',
                            paddingBottom: '15px'
                        }}
                    />
                    <p style={{ textTransform: 'capitalize' }}>
                        {faIcon.replace(/([A-Z]|[0-9])/g, ' $1')}
                    </p>
                </div>
            ))}
        </ColumnGrid>
    ),
    play: async ({ canvasElement }) => {
        const { getByTestId } = within(canvasElement);
        const content = getByTestId('svg-icon');

        const classNames = content.getAttribute('class')!;

        await expect(classNames).toMatch(classNameRegex(classNames));

        // Check the color of the SVG
        await expect(content).toHaveStyle('color: rgb(255, 0, 0)');
    }
};
