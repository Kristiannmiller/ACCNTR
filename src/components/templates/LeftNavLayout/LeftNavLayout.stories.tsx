import { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// Components
import {
    Breadcrumbs,
    LeftNavigation,
    RichText,
    LeftNavLayout,
    LeftSideNavigationAnchorLinks
} from '@/components';

// Storybook Tools
import { disabledControl } from '@/sb-tools';

// Mocks
import { loremParagraph } from '@/mocks/lorem-ipsum';
import { mockBreadcrumbs } from '@/mocks/breadcrumbs';
import {
    mockLeftSideNavigationAnchorLinks,
    mockLeftNavigation
} from '@/mocks/sitecore';

export default {
    title: 'Design System/templates/Left Nav Layout',
    component: LeftNavLayout,
    parameters: {
        layout: 'fullscreen',
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?type=design&node-id=919%3A8605&mode=design&t=7mEYAyWR9ng08KoE-1'
        }
    },
    argTypes: {
        breadcrumbsSection: disabledControl,
        aboveLeftNavSection: disabledControl,
        leftNavLinks: disabledControl,
        leftNavContent: disabledControl,
        belowLeftNavSection: disabledControl
    },
    args: {
        className: 'sb-grid-example',
        breadcrumbsSection: <Breadcrumbs {...mockBreadcrumbs.default} />,
        aboveLeftNavSection: (
            <RichText>
                <h5>AboveLeftNav placeholder</h5>
                <p>{loremParagraph.short}</p>
            </RichText>
        ),
        leftNavLinks: <LeftNavigation navigations={mockLeftNavigation} />,
        leftNavContent: (
            <RichText>
                <h5>LeftNavContent placeholder</h5>
                <p>{loremParagraph.long}</p>
                <p>{loremParagraph.long}</p>
                <p>{loremParagraph.long}</p>
                <p>{loremParagraph.long}</p>
            </RichText>
        ),
        belowLeftNavSection: (
            <RichText>
                <h5>BelowLeftNavSection placeholder</h5>
                {loremParagraph.medium}
            </RichText>
        )
    }
} satisfies Meta<typeof LeftNavLayout>;

type Story = StoryObj<typeof LeftNavLayout>;

export const LeftNavigationWithBreadcrumbs: Story = {
    play: async ({ canvasElement }) => {
        const { getByTestId } = within(canvasElement);
        const columnGrid = getByTestId('column-grid');
        await expect(columnGrid.children).toHaveLength(2);
    }
};

export const LeftNavigationWithoutBreadcrumbs: Story = {
    args: { breadcrumbsSection: undefined },
    play: async ({ canvasElement }) => {
        const { getByTestId } = within(canvasElement);
        const columnGrid = getByTestId('column-grid');
        await expect(columnGrid.children).toHaveLength(2);
    }
};

export const LeftJumpNavigationWithBreadcrumbs: Story = {
    args: {
        className: 'none',
        leftNavLinks: (
            <LeftSideNavigationAnchorLinks
                navigations={mockLeftSideNavigationAnchorLinks}
            />
        ),
        leftNavContent: (
            <RichText>
                <section id='first'>
                    <h1>First section</h1>
                    <p>{loremParagraph.long}</p>
                    <p>{loremParagraph.long}</p>
                    <p>{loremParagraph.medium}</p>
                    <p>{loremParagraph.long}</p>
                </section>
                <div id='second'>
                    <h2>Second section</h2>
                    <p>{loremParagraph.medium}</p>
                    <p>{loremParagraph.long}</p>
                    <p>{loremParagraph.long}</p>
                    <p>{loremParagraph.long}</p>
                    <p>{loremParagraph.long}</p>
                    <p>{loremParagraph.long}</p>
                    <p>{loremParagraph.long}</p>
                    <p>{loremParagraph.medium}</p>
                    <p>{loremParagraph.short}</p>
                    <p>{loremParagraph.long}</p>
                </div>
                <div id='third'>
                    <h3>Third section</h3>
                    <p>{loremParagraph.short}</p>
                    <p>{loremParagraph.long}</p>
                    <p>{loremParagraph.long}</p>
                    <p>{loremParagraph.medium}</p>
                    <p>{loremParagraph.long}</p>
                    <p>{loremParagraph.long}</p>
                    <p>{loremParagraph.long}</p>
                </div>
                <div id='fourth'>
                    <h4>Fourth section</h4>
                    <p>{loremParagraph.medium}</p>
                    <p>{loremParagraph.long}</p>
                    <p>{loremParagraph.long}</p>
                    <p>{loremParagraph.medium}</p>
                    <p>{loremParagraph.long}</p>
                    <p>{loremParagraph.long}</p>
                    <p>{loremParagraph.long}</p>
                </div>
                <div id='fifth'>
                    <h4>Fifth section</h4>
                    <p>{loremParagraph.medium}</p>
                    <p>{loremParagraph.long}</p>
                    <p>{loremParagraph.long}</p>
                    <p>{loremParagraph.medium}</p>
                    <p>{loremParagraph.long}</p>
                    <p>{loremParagraph.long}</p>
                    <p>{loremParagraph.long}</p>
                </div>
                <div id='sixth'>
                    <h4>Sixth section</h4>
                    <p>{loremParagraph.medium}</p>
                    <p>{loremParagraph.long}</p>
                    <p>{loremParagraph.long}</p>
                    <p>{loremParagraph.medium}</p>
                    <p>{loremParagraph.long}</p>
                    <p>{loremParagraph.long}</p>
                    <p>{loremParagraph.long}</p>
                </div>
                <div id='seventh'>
                    <h4>Seventh section</h4>
                    <p>{loremParagraph.medium}</p>
                    <p>{loremParagraph.long}</p>
                    <p>{loremParagraph.long}</p>
                    <p>{loremParagraph.medium}</p>
                    <p>{loremParagraph.long}</p>
                    <p>{loremParagraph.long}</p>
                    <p>{loremParagraph.long}</p>
                </div>
            </RichText>
        )
    },
    play: async ({ canvasElement }) => {
        const { getByTestId } = within(canvasElement);
        const columnGrid = getByTestId('column-grid');
        await expect(columnGrid.children).toHaveLength(2);
    }
};

export const LeftJumpNavigationWithoutBreadcrumbs: Story = {
    args: {
        ...LeftJumpNavigationWithBreadcrumbs.args,
        breadcrumbsSection: undefined
    },
    play: async ({ canvasElement }) => {
        const { getByTestId } = within(canvasElement);
        const columnGrid = getByTestId('column-grid');
        await expect(columnGrid.children).toHaveLength(2);
    }
};
