import { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { RichText as JSSRichText } from '@sitecore-jss/sitecore-jss-react';

// Components
import { Column, ColumnGrid } from './ColumnGrid';
import { Container, RichText, Image } from '@/components';

// Mocks
import { loremParagraph } from '@/mocks/lorem-ipsum';
import { mockImages } from '@/mocks/images';
import {
    mockSitecoreImageWideAlt,
    mockSitecoreRichText
} from '@/mocks/sitecore';

// Controls
import { booleanControl, disabledControl } from '@/sb-tools';
import {
    columnsControl,
    columnsDesktopControl,
    reverseControl,
    rowGapControl
} from './columnGridArgTypes';

export default {
    title: 'Design System/atoms/ColumnGrid',
    component: ColumnGrid,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?node-id=9470-28573'
        }
    },
    argTypes: {
        columns: {
            description:
                '(Optional) Number of columns to display on all breakpoints.',
            ...columnsControl
        },
        columnsTablet: {
            description:
                '(Optional) Number of columns to display on tablet and desktop breakpoints.',
            ...columnsControl
        },
        columnsTabletLg: {
            description:
                '(Optional) Number of columns to display on tablet-lg and desktop breakpoints.',
            ...columnsControl
        },
        columnsDesktop: {
            description:
                '(Optional) Number of columns to display on desktop breakpoints.',
            ...columnsDesktopControl
        },
        rowGap: {
            description:
                'Controls the gap between rows. Standard is 1rem (16px).',
            ...rowGapControl
        },
        centerOrphans: {
            description:
                "Controls whether to center items that don't take up the full width of the grid.",
            ...booleanControl
        },
        reverse: {
            description:
                'Controls the order of the columns on tablet and desktop breakpoints.',
            ...reverseControl
        }
    }
} satisfies Meta<typeof ColumnGrid>;

type Story = StoryObj<typeof ColumnGrid>;

export const DefaultGrid: Story = {
    args: {
        centerOrphans: false,
        rowGap: 'standard',
        reverse: undefined
    },
    parameters: {
        description: 'Default grid with 12 columns.'
    },
    render: (args) => {
        return (
            <Container className='sb-grid-example'>
                <ColumnGrid {...args}>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                    <p>5</p>
                    <p>6</p>
                    <p>7</p>
                    <p>8</p>
                    <p>9</p>
                    <p>10</p>
                    <p>11</p>
                    <p>12</p>
                </ColumnGrid>
            </Container>
        );
    }
};

export const ResponsiveGrid: Story = {
    args: {
        columns: '1',
        columnsTablet: '2',
        columnsTabletLg: '3',
        columnsDesktop: '4'
    },
    render: (args) => {
        return (
            <Container className='sb-grid-example'>
                <ColumnGrid
                    columns={args.columns ?? '1'}
                    columnsTablet={args.columnsTablet}
                    columnsTabletLg={args.columnsTabletLg}
                    columnsDesktop={args.columnsDesktop}
                    centerOrphans={args.centerOrphans}
                    rowGap={args.rowGap}
                    reverse={args.reverse}>
                    <h2>1</h2>
                    <h2>2</h2>
                    <h2>3</h2>
                    <h2>4</h2>
                    <h2>5</h2>
                    <h2>6</h2>
                </ColumnGrid>
            </Container>
        );
    },
    play: async ({ canvasElement }) => {
        const { getByTestId } = within(canvasElement);

        const content = getByTestId('column-grid');

        const classNames = content.getAttribute('class')!;

        await expect(classNames).toMatch(classNames);
    }
};

export const LeftRightRail: Story = {
    argTypes: {
        centerOrphans: disabledControl,
        rowGap: disabledControl,
        columns: disabledControl,
        columnsTablet: disabledControl,
        columnsTabletLg: disabledControl,
        columnsDesktop: disabledControl
    },
    render: (args) => (
        <Container className='sb-grid-example'>
            <ColumnGrid
                centerOrphans={args.centerOrphans}
                reverse={args.reverse}>
                <Column
                    span='4'
                    spanDesktop='4'>
                    <div>
                        <h2>Rail</h2>
                    </div>
                </Column>
                <Column
                    span='4'
                    spanDesktop='8'>
                    <RichText>
                        <JSSRichText field={mockSitecoreRichText} />
                    </RichText>
                </Column>
            </ColumnGrid>
        </Container>
    ),
    play: async ({ canvasElement }) => {
        const { getByTestId } = within(canvasElement);

        const content = getByTestId('column-grid');

        const classNames = content.getAttribute('class')!;

        await expect(classNames).toMatch(classNames);
    }
};

export const CenteredBody: Story = {
    argTypes: {
        rowGap: disabledControl,
        reverse: disabledControl,
        centerOrphans: disabledControl,
        columns: disabledControl,
        columnsTablet: disabledControl,
        columnsTabletLg: disabledControl,
        columnsDesktop: disabledControl
    },
    args: {
        centerOrphans: true
    },
    render: (args) => (
        <Container className='sb-grid-example'>
            <ColumnGrid centerOrphans={args.centerOrphans}>
                <Column
                    span='4'
                    spanDesktop='9'>
                    <RichText>
                        <JSSRichText field={mockSitecoreRichText} />
                    </RichText>
                </Column>
            </ColumnGrid>
        </Container>
    ),
    play: async ({ canvasElement }) => {
        const { getByTestId } = within(canvasElement);
        const content = getByTestId('column-grid');

        const classNames = content.getAttribute('class')!;

        await expect(classNames).toMatch(classNames);
    }
};

export const TextImage: Story = {
    argTypes: {
        centerOrphans: disabledControl,
        rowGap: disabledControl,
        columns: disabledControl,
        columnsTablet: disabledControl,
        columnsTabletLg: disabledControl,
        columnsDesktop: disabledControl
    },
    args: {
        reverse: 'tablet'
    },
    render: (args) => (
        <Container>
            <ColumnGrid
                centerOrphans={args.centerOrphans}
                reverse={args.reverse}>
                <Column
                    span='4'
                    spanDesktop='4'>
                    <Image
                        ratio='4:5'
                        src={mockImages[0].src}
                        alt={mockImages[0].alt}
                    />
                </Column>
                <Column
                    span='4'
                    spanDesktop='8'>
                    <RichText>
                        <h2>Text/Image on Desktop</h2>
                        <h3>Image/Text on Mobile</h3>
                        <p>{loremParagraph.medium}</p>
                        <p>{loremParagraph.medium}</p>
                    </RichText>
                </Column>
            </ColumnGrid>
        </Container>
    ),
    play: async ({ canvasElement }) => {
        const { getByTestId } = within(canvasElement);
        const content = getByTestId('column-grid');

        const classNames = content.getAttribute('class')!;

        await expect(classNames).toMatch(classNames);
    }
};

export const Offset: Story = {
    argTypes: {
        centerOrphans: disabledControl,
        rowGap: disabledControl,
        columns: disabledControl,
        columnsTablet: disabledControl,
        columnsTabletLg: disabledControl,
        columnsDesktop: disabledControl
    },
    render: (args) => (
        <Container
            variant='containedLarge'
            style={{ display: 'block', height: '31rem', position: 'relative' }}>
            <Image
                ratio='golden-ratio-landscape'
                style={{ height: '31rem' }}>
                <img
                    src={mockSitecoreImageWideAlt.value.src}
                    style={{ objectPosition: 'right top' }}
                    alt={mockSitecoreImageWideAlt.value.alt}
                />
            </Image>
            <div
                style={{
                    position: 'absolute',
                    height: '31rem',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'center'
                }}>
                <Container
                    isPadded={false}
                    style={{
                        background: 'transparent',
                        paddingBlock: '3rem',
                        flex: '1'
                    }}>
                    <ColumnGrid
                        centerOrphans={args.centerOrphans}
                        reverse={args.reverse}
                        style={{ background: 'skyblue' }}>
                        <Column
                            span='4'
                            offsetTablet='1'
                            spanTablet='10'
                            spanDesktop='5'
                            style={{ background: 'white' }}>
                            <RichText>
                                <h2>Offset</h2>
                                <p>{loremParagraph.medium}</p>
                            </RichText>
                        </Column>
                    </ColumnGrid>
                </Container>
            </div>
        </Container>
    ),
    play: async ({ canvasElement }) => {
        const { getByTestId } = within(canvasElement);
        const content = getByTestId('column-grid');

        const classNames = content.getAttribute('class')!;

        await expect(classNames).toMatch(classNames);
    }
};
