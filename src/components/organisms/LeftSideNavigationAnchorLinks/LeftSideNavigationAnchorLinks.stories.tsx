import { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// Components
import {
    LeftSideNavigationAnchorLinks,
    LeftSideNavigationBackToTopAnchor,
    LeftSideNavigationAnchorLinksProps
} from './LeftSideNavigationAnchorLinks';

// Utils
import { classNameRegex } from '@/utils';

// Mocks
import { mockBreadcrumbs } from '@/mocks/breadcrumbs';
import { mockLeftSideNavigationAnchorLinks } from '@/mocks/sitecore';
import { mockHeader } from '@/mocks/header';
import { loremParagraph } from '@/mocks/lorem-ipsum';

import { Header } from '@/components/organisms';
import {
    Breadcrumbs,
    Column,
    ColumnGrid,
    Container,
    RichText
} from '@/components';

export default {
    title: 'Design System/organisms/N04 - LeftSideNavigationAnchorLinks',
    component: LeftSideNavigationAnchorLinks,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?node-id=17831-29401&t=fCSyDdHz5b3lMXAP-4'
        }
    }
} satisfies Meta<typeof LeftSideNavigationAnchorLinks>;

type Story = StoryObj<typeof LeftSideNavigationAnchorLinks>;

export const Default: Story = {
    args: {
        navigations: mockLeftSideNavigationAnchorLinks
    } as LeftSideNavigationAnchorLinksProps,
    play: async ({ canvasElement }) => {
        const { getByTestId } = within(canvasElement);
        const content = getByTestId('left-side-navigation-anchor-links');
        const classNames = content.getAttribute('class')!;
        const list = getByTestId('left-side-navigation-anchor-links-list');

        // Check class validity
        await expect(classNames).toMatch(classNameRegex(classNames));
        await expect(list.children.length).toBeGreaterThan(2);
        await expect(list.lastChild?.textContent).toMatch('Seventh anchor');
    }
};

export const HeaderAndLeftNavigation: Story = {
    render: () => (
        <>
            <Header {...mockHeader.advocateHealthCare} />
            <Breadcrumbs {...mockBreadcrumbs.default} />
            <Container verticalSpacing>
                <ColumnGrid>
                    <Column
                        span='4'
                        spanDesktop='4'>
                        <LeftSideNavigationAnchorLinks
                            navigations={mockLeftSideNavigationAnchorLinks}
                        />
                    </Column>
                    <Column
                        span='4'
                        spanDesktop='8'>
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
                    </Column>
                </ColumnGrid>
                <LeftSideNavigationBackToTopAnchor />
            </Container>
            <div>Footer goes here.</div>
        </>
    ),
    play: async ({ canvasElement }) => {
        const { getByTestId } = within(canvasElement);
        const content = getByTestId('left-side-navigation-anchor-links');
        const classNames = content.getAttribute('class')!;
        const list = getByTestId('left-side-navigation-anchor-links-list');

        // Check class validity
        await expect(classNames).toMatch(classNameRegex(classNames));
        await expect(list.children.length).toBeGreaterThan(2);
        await expect(list.lastChild?.textContent).toMatch('Seventh anchor');
    }
};
