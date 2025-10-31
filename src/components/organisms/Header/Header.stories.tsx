import { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// Components
import { Header } from './Header';
import { RichText as JSSRichText } from '@sitecore-jss/sitecore-jss-react';
import {
    HeroFeaturedBanner,
    HeroBanner,
    RichTextRendering
} from '@/components';

// Types
import { THEME_TYPES } from '@/types';

// Mocks
import { mockHeader } from '@/mocks/header';
import { mockHeroBanner } from '@/mocks/hero-banner';
import { mockHeroFeaturedBanner } from '@/mocks/hero-featured-banner';
import { mockSitecoreRichText } from '@/mocks/sitecore';

export default {
    title: 'Design System/organisms/N01 - Header',
    component: Header,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?node-id=17785-40156&t=wVIzZUBnFsJQZGiu-4'
        }
    },
    argTypes: {}
} satisfies Meta<typeof Header>;

type Story = StoryObj<typeof Header>;

const Body = ({ theme = 'Consumer' }: { theme?: THEME_TYPES }) => (
    <>
        {theme === 'Consumer' ? (
            <HeroBanner {...mockHeroBanner.default} />
        ) : (
            <HeroFeaturedBanner {...mockHeroFeaturedBanner.default} />
        )}
        <RichTextRendering>
            <JSSRichText field={mockSitecoreRichText} />
        </RichTextRendering>
        <RichTextRendering id='anchor-test'>
            <JSSRichText field={mockSitecoreRichText} />
        </RichTextRendering>
    </>
);

export const AdvocateChildrens: Story = {
    args: mockHeader.advocateChildrens,
    parameters: {
        excludeThemes: ['Corporate', 'Consumer']
    },
    render: (args) => (
        <>
            <Header {...args} />
            <Body />
        </>
    ),
    play: async ({ canvasElement }) => {
        const { getByTestId } = within(canvasElement);

        const content = getByTestId('header');

        const classNames = content.getAttribute('class')!;
        await expect(classNames).toMatch(classNames);

        const globalNav = getByTestId('global-navigation');
        await expect(globalNav).toBeInTheDocument();

        const utilityNav = getByTestId('utility-navigation');
        await expect(utilityNav).toBeInTheDocument();
    }
};

export const AdvocateHealthCare: Story = {
    args: mockHeader.advocateHealthCare,
    parameters: {
        excludeThemes: ['Corporate', 'Childrens']
    },
    render: (args) => (
        <>
            <Header {...args} />
            <Body />
        </>
    ),
    play: async ({ canvasElement }) => {
        const { getByTestId } = within(canvasElement);

        const content = getByTestId('header');

        const classNames = content.getAttribute('class')!;
        await expect(classNames).toMatch(classNames);

        const globalNav = getByTestId('global-navigation');
        await expect(globalNav).toBeInTheDocument();

        const utilityNav = getByTestId('utility-navigation');
        await expect(utilityNav).toBeInTheDocument();
    }
};

export const AuroraBayCare: Story = {
    args: mockHeader.auroraBayCare,
    parameters: {
        excludeThemes: ['Corporate', 'Childrens']
    },
    render: (args) => (
        <>
            <Header {...args} />
            <Body />
        </>
    ),
    play: async ({ canvasElement }) => {
        const { getByTestId } = within(canvasElement);

        const content = getByTestId('header');

        const classNames = content.getAttribute('class')!;
        await expect(classNames).toMatch(classNames);

        const globalNav = getByTestId('global-navigation');
        await expect(globalNav).toBeInTheDocument();
    }
};

export const AuroraHealthCare: Story = {
    parameters: {
        excludeThemes: ['Corporate', 'Childrens']
    },
    args: mockHeader.auroraHealthCare,
    render: (args) => (
        <>
            <Header {...args} />
            <Body />
        </>
    ),
    play: async ({ canvasElement }) => {
        const { getByTestId } = within(canvasElement);

        const content = getByTestId('header');

        const classNames = content.getAttribute('class')!;
        await expect(classNames).toMatch(classNames);

        const globalNav = getByTestId('global-navigation');
        await expect(globalNav).toBeInTheDocument();
    }
};

export const Corporate: Story = {
    args: mockHeader.corporate,
    parameters: {
        excludeThemes: ['Childrens', 'Consumer']
    },
    render: (args) => (
        <>
            <Header {...args} />
            <Body theme='Corporate' />
        </>
    ),
    play: async ({ canvasElement }) => {
        const { getByTestId } = within(canvasElement);

        const content = getByTestId('header');

        const classNames = content.getAttribute('class')!;
        await expect(classNames).toMatch(classNames);

        const globalNav = getByTestId('global-navigation');
        await expect(globalNav).toBeInTheDocument();
    }
};

export const EmployerSolutions: Story = {
    args: mockHeader.employerSolutions,
    parameters: {
        excludeThemes: ['Corporate', 'Childrens']
    },
    render: (args) => (
        <>
            <Header {...args} />
            <Body />
        </>
    ),
    play: async ({ canvasElement }) => {
        const { getByTestId } = within(canvasElement);

        const content = getByTestId('header');

        const classNames = content.getAttribute('class')!;
        await expect(classNames).toMatch(classNames);

        const globalNav = getByTestId('global-navigation');
        await expect(globalNav).toBeInTheDocument();
    }
};

export const Foundations: Story = {
    args: mockHeader.foundations,
    parameters: {
        excludeThemes: ['Corporate', 'Childrens']
    },
    render: (args) => (
        <>
            <Header {...args} />
            <Body />
        </>
    ),
    play: async ({ canvasElement }) => {
        const { getByTestId } = within(canvasElement);

        const content = getByTestId('header');

        const classNames = content.getAttribute('class')!;
        await expect(classNames).toMatch(classNames);

        const globalNav = getByTestId('global-navigation');
        await expect(globalNav).toBeInTheDocument();
    }
};

export const Research: Story = {
    args: mockHeader.research,
    parameters: {
        excludeThemes: ['Consumer', 'Childrens']
    },
    render: (args) => (
        <>
            <Header {...args} />
            <Body />
        </>
    ),
    play: async ({ canvasElement }) => {
        const { getByTestId } = within(canvasElement);

        const content = getByTestId('header');

        const classNames = content.getAttribute('class')!;
        await expect(classNames).toMatch(classNames);

        const globalNav = getByTestId('global-navigation');
        await expect(globalNav).toBeInTheDocument();
    }
};
