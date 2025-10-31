import { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { Link as JssLink } from '@sitecore-jss/sitecore-jss-react';

// Components
import {
    Anchor,
    Text,
    DEFAULT_BUTTON_SIZE,
    DEFAULT_BUTTON_VARIANT
} from '@/components';

// Styles
import {
    anchorBaseClass,
    anchorFontStyleClassMap,
    anchorFontStyleCorpClassMap,
    anchorfontStyleCorpTabletClassMap,
    anchorfontStyleTabletClassMap,
    anchorUnderlineClassMap
} from './styles';
import { buttonSizeClassMap, buttonVariantClassMap } from '../Button/styles';

// Mocks
import { anchorLinks } from '@/mocks/anchor-links';
import { mockSitecoreLink } from '@/mocks/sitecore';

// Storybook Tools
import { disabledControl } from '@/sb-tools';
import { sizeControl, variantControl } from '../Button/buttonArgTypes';
import { anchorDisableControl, anchorUnderlineControl } from './anchorArgTypes';

export default {
    title: 'Design System/atoms/Anchor',
    component: Anchor,
    parameters: {
        layout: 'centered',
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?type=design&node-id=22%3A2&mode=design&t=VwXYxdjLXmUwPG0w-1'
        }
    }
} satisfies Meta<typeof Anchor>;

type Story = StoryObj<typeof Anchor>;

export const Default: Story = {
    args: {
        children: anchorLinks[0].children,
        target: '_self',
        variant: undefined,
        disabled: false
    },
    // Both available fontStyles 'smLink' and 'smLinkMobile' are identical, so the 'fontStyle' controls are disabled to avoid confusion.
    // Change controls to `fontStyleControl` if more become available.
    argTypes: {
        fontStyle: disabledControl,
        fontStyleTablet: disabledControl,
        fontStyleCorp: disabledControl,
        fontStyleCorpTablet: disabledControl,
        underline: anchorUnderlineControl,
        disabled: anchorDisableControl,
        target: disabledControl,
        variant: disabledControl,
        size: disabledControl,
        children: disabledControl,
        buttonStyle: disabledControl,
        order: disabledControl,
        asInherited: disabledControl
    },
    render: (args) => {
        return (
            <Anchor
                {...args}
                {...anchorLinks[0]}
            />
        );
    },
    play: async ({ canvasElement, args }) => {
        const { getByTestId } = within(canvasElement);
        const content = getByTestId('anchor');

        // Should have text
        await expect(content).toHaveTextContent(
            anchorLinks[0].children as string
        );

        // Should have href
        await expect(content).toHaveAttribute('href', anchorLinks[0].href);

        // Should have target
        await expect(content).toHaveAttribute('target', '_self');

        // Should have rel
        await expect(content).toHaveAttribute('rel', 'noopener noreferrer');

        const classNames = content.getAttribute('class')!;

        // Should have base class
        await expect(classNames).toContain(anchorBaseClass);

        // Should have hover class
        if (args.underline === 'hover') {
            await expect(classNames).toContain(anchorUnderlineClassMap.hover);
        }

        if (args.disabled) {
            await expect(content).toHaveAttribute('aria-disabled', 'true');
        }

        // Should have font style classes
        if (args.fontStyle) {
            await expect(classNames).toContain(
                anchorFontStyleClassMap[args.fontStyle]
            );

            if (!args.fontStyleCorp) {
                await expect(classNames).toContain(
                    anchorFontStyleCorpClassMap[args.fontStyle]
                );
            }
        }

        if (args.fontStyleTablet) {
            await expect(classNames).toContain(
                anchorfontStyleTabletClassMap[args.fontStyleTablet]
            );

            if (!args.fontStyleCorpTablet) {
                await expect(classNames).toContain(
                    anchorfontStyleCorpTabletClassMap[args.fontStyleTablet]
                );
            }
        }

        if (args.fontStyleCorp) {
            await expect(classNames).toContain(
                anchorFontStyleCorpClassMap[args.fontStyleCorp]
            );
        }

        if (args.fontStyleCorpTablet) {
            await expect(classNames).toContain(
                anchorfontStyleCorpTabletClassMap[args.fontStyleCorpTablet]
            );
        }
    }
};

export const SitecoreExample: Story = {
    args: {
        children: anchorLinks[0].children,
        target: '_self',
        variant: undefined,
        disabled: false
    },
    // Both available fontStyles 'smLink' and 'smLinkMobile' are identical, so removing from story to avoid confusion.
    argTypes: {
        fontStyle: disabledControl,
        fontStyleTablet: disabledControl,
        fontStyleCorp: disabledControl,
        fontStyleCorpTablet: disabledControl,
        underline: anchorUnderlineControl,
        disabled: anchorDisableControl,
        target: disabledControl,
        variant: disabledControl,
        size: disabledControl,
        children: disabledControl,
        buttonStyle: disabledControl,
        order: disabledControl,
        asInherited: disabledControl
    },
    render: (args) => {
        return (
            <Anchor {...args}>
                <JssLink field={mockSitecoreLink} />
            </Anchor>
        );
    },
    play: async ({ canvasElement, args }) => {
        const { getByTestId } = within(canvasElement);
        const content = getByTestId('anchor');

        // Should have text
        await expect(content).toHaveTextContent(mockSitecoreLink.value.text);

        // Should have href
        await expect(content).toHaveAttribute(
            'href',
            mockSitecoreLink.value.href
        );

        // Should have target
        await expect(content).toHaveAttribute('target', '_self');

        // Should have rel
        await expect(content).toHaveAttribute('rel', 'noopener noreferrer');

        const classNames = content.getAttribute('class')!;

        // Should have base class
        await expect(classNames).toContain(anchorBaseClass);

        // Should have hover class
        if (args.underline === 'hover') {
            await expect(classNames).toContain(anchorUnderlineClassMap.hover);
        }

        if (args.disabled) {
            await expect(content).toHaveAttribute('aria-disabled', 'true');
        }

        // Should have font style classes
        if (args.fontStyle) {
            await expect(classNames).toContain(
                anchorFontStyleClassMap[args.fontStyle]
            );

            if (!args.fontStyleCorp) {
                await expect(classNames).toContain(
                    anchorFontStyleCorpClassMap[args.fontStyle]
                );
            }
        }

        if (args.fontStyleTablet) {
            await expect(classNames).toContain(
                anchorfontStyleTabletClassMap[args.fontStyleTablet]
            );

            if (!args.fontStyleCorpTablet) {
                await expect(classNames).toContain(
                    anchorfontStyleCorpTabletClassMap[args.fontStyleTablet]
                );
            }
        }

        if (args.fontStyleCorp) {
            await expect(classNames).toContain(
                anchorFontStyleCorpClassMap[args.fontStyleCorp]
            );
        }

        if (args.fontStyleCorpTablet) {
            await expect(classNames).toContain(
                anchorfontStyleCorpTabletClassMap[args.fontStyleCorpTablet]
            );
        }
    }
};

export const Button: Story = {
    argTypes: {
        variant: variantControl,
        size: sizeControl,
        children: disabledControl,
        underline: disabledControl,
        fontStyle: disabledControl,
        fontStyleTablet: disabledControl,
        fontStyleCorp: disabledControl,
        fontStyleCorpTablet: disabledControl,
        disabled: disabledControl,
        buttonStyle: disabledControl,
        order: disabledControl,
        asInherited: disabledControl
    },
    args: {
        variant: DEFAULT_BUTTON_VARIANT,
        size: DEFAULT_BUTTON_SIZE
    },
    render: ({ variant, size }) => (
        <Anchor
            variant={variant}
            size={size}
            role='button'
            target='_self'
            {...anchorLinks[1]}>
            Button styles TBD
        </Anchor>
    ),
    play: async ({ canvasElement, args }) => {
        const { getByTestId } = within(canvasElement);
        const anchorElement = getByTestId('anchor');

        if (args.variant && !args.buttonStyle) {
            await expect(anchorElement.classList).toContain(
                buttonVariantClassMap[args.variant]
            );
        }

        if (args.size) {
            await expect(anchorElement.classList).toContain(
                buttonSizeClassMap[args.size]
            );
        }
    }
};

export const InlineWithText: Story = {
    argTypes: {
        variant: disabledControl,
        size: disabledControl,
        children: disabledControl,
        underline: disabledControl,
        fontStyle: disabledControl,
        fontStyleTablet: disabledControl,
        fontStyleCorp: disabledControl,
        fontStyleCorpTablet: disabledControl,
        disabled: disabledControl,
        buttonStyle: disabledControl,
        order: disabledControl,
        asInherited: disabledControl
    },
    render: (args) => (
        <Text tag='p'>
            When anchors are focused from within a rich text block,{' '}
            <Anchor
                size={args.size}
                target='_self'
                {...anchorLinks[0]}
            />{' '}
            the outline should not overlap the surrounding text. Padding is
            applied to the anchor only when it is not inside a p tag. dolor sit
            amet, consectetur adipiscing elit. amet, consectetur adipiscing
            elit. lorem ipsum dolor sit amet,{' '}
            <Anchor
                size={args.size}
                target='_self'
                {...anchorLinks[1]}
            />{' '}
            consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur
            adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing
            elit.
        </Text>
    ),
    play: async ({ canvasElement }) => {
        const { findAllByTestId } = within(canvasElement);
        const content = await findAllByTestId('anchor');

        content.forEach(async (anchor, i) => {
            // Should have href
            await expect(anchor).toHaveAttribute('href', anchorLinks[i].href);

            // Should have target
            await expect(anchor).toHaveAttribute('target', '_self');

            // Should have rel
            await expect(anchor).toHaveAttribute('rel', 'noopener noreferrer');

            const classNames = anchor.getAttribute('class')!;

            // Should have base class
            await expect(classNames).toContain(anchorBaseClass);
        });
    }
};
