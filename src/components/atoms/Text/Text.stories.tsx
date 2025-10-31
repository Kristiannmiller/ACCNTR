import { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// Components
import { DEFAULT_TAG, Text } from './Text';

// Static
import { textTags } from '@/static';

import {
    textBaseClass,
    fontStyleClassMap,
    fontStyleTabletClassMap,
    fontStyleCorpClassMap,
    fontStyleCorpTabletClassMap
} from './styles';

// Storybook Tools
import { disabledControl } from '@/sb-tools';
import { fontStyleControl } from '../Text/textArgTypes';

const TextChildren = 'Advocate Health';

export default {
    title: 'Design System/atoms/Text',
    component: Text,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?node-id=9595-24076&t=VasmSU7vhLb9HCMn-4'
        },
        layout: 'centered'
    },
    argTypes: {
        tag: {
            control: 'select',
            options: textTags,
            defaultValue: DEFAULT_TAG,
            table: {
                defaultValue: { summary: DEFAULT_TAG }
            }
        },
        fontStyle: fontStyleControl,
        fontStyleTablet: fontStyleControl,
        fontStyleCorp: fontStyleControl,
        fontStyleCorpTablet: fontStyleControl,
        asChild: disabledControl,
        customRef: disabledControl
    }
} satisfies Meta<typeof Text>;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
    args: {
        children: TextChildren,
        tag: DEFAULT_TAG
    },
    play: async ({ canvasElement, args }) => {
        const { getByText } = within(canvasElement);

        const content = getByText(TextChildren);

        if (args.tag && typeof args.tag === 'string') {
            await expect(content.tagName).toBe(args.tag.toUpperCase());
        } else if (!args.tag) {
            await expect(content.tagName).toBe(
                (DEFAULT_TAG as string).toUpperCase()
            );
        }

        const classNames = content.getAttribute('class')!;

        await expect(classNames).toContain(textBaseClass);

        if (args.fontStyle) {
            await expect(classNames).toContain(
                fontStyleClassMap[args.fontStyle]
            );

            if (!args.fontStyleCorp) {
                await expect(classNames).toContain(
                    fontStyleCorpClassMap[args.fontStyle]
                );
            }
        }

        if (args.fontStyleTablet) {
            await expect(classNames).toContain(
                fontStyleTabletClassMap[args.fontStyleTablet]
            );

            if (!args.fontStyleCorpTablet) {
                await expect(classNames).toContain(
                    fontStyleCorpTabletClassMap[args.fontStyleTablet]
                );
            }
        }

        if (args.fontStyleCorp) {
            await expect(classNames).toContain(
                fontStyleCorpClassMap[args.fontStyleCorp]
            );
        }

        if (args.fontStyleCorpTablet) {
            await expect(classNames).toContain(
                fontStyleCorpTabletClassMap[args.fontStyleCorpTablet]
            );
        }
    }
};
