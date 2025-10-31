import { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// Components
import {
    Anchor,
    DropdownMenu,
    DropdownMenuItem,
    DropdownMenuContent,
    DropdownMenuList,
    DropdownMenuListItem,
    DropdownMenuSeparator,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
    SvgIcon
} from '@/components';

// Utils
import { classNameRegex } from '@/utils';

export default {
    title: 'Design System/atoms/DropdownMenu',
    component: DropdownMenu,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?node-id=17831-29400'
        }
    }
} satisfies Meta<typeof DropdownMenu>;

type Story = StoryObj<typeof DropdownMenu>;

export const Default: Story = {
    render: () => {
        return (
            <DropdownMenu type={'multiple'}>
                <DropdownMenuItem value='item-1'>
                    <DropdownMenuTrigger>
                        <span>Page Navigation </span>
                        <SvgIcon icon='bars' />
                        <SvgIcon icon='close' />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuSeparator>
                            <SvgIcon icon='angleLeft' />
                            <Anchor href='https://www.advocatehealth.com'>
                                Top level
                            </Anchor>
                        </DropdownMenuSeparator>
                        <DropdownMenuList>
                            <DropdownMenuListItem>
                                <Anchor href='https://www.advocatehealth.com'>
                                    Link 1
                                </Anchor>
                            </DropdownMenuListItem>
                            <DropdownMenuListItem>
                                <Anchor href='https://www.advocatehealth.com'>
                                    Link 2
                                </Anchor>
                            </DropdownMenuListItem>
                            <DropdownMenuItem value='item-2'>
                                <DropdownMenuListItem>
                                    <div>
                                        <Anchor href='https://www.aurorahealthcare.org/'>
                                            Expandable section
                                        </Anchor>
                                        <DropdownMenuSubTrigger />
                                    </div>
                                    <DropdownMenuContent>
                                        <DropdownMenuList>
                                            <DropdownMenuListItem>
                                                <Anchor href='https://www.advocatehealth.com'>
                                                    Sub Link 1
                                                </Anchor>
                                            </DropdownMenuListItem>
                                            <DropdownMenuListItem>
                                                <Anchor href='https://www.advocatehealth.com'>
                                                    Sub Link 2
                                                </Anchor>
                                            </DropdownMenuListItem>
                                            <DropdownMenuItem value='item-3'>
                                                <DropdownMenuListItem>
                                                    <div>
                                                        <Anchor href='https://www.aurorahealthcare.org/'>
                                                            Expandable section
                                                        </Anchor>
                                                        <DropdownMenuSubTrigger />
                                                    </div>
                                                    <DropdownMenuContent>
                                                        <DropdownMenuList>
                                                            <DropdownMenuListItem>
                                                                <Anchor href='https://www.advocatehealth.com'>
                                                                    Sub Link 1
                                                                </Anchor>
                                                            </DropdownMenuListItem>
                                                            <DropdownMenuListItem>
                                                                <Anchor href='https://www.advocatehealth.com'>
                                                                    Sub Link 2
                                                                </Anchor>
                                                            </DropdownMenuListItem>
                                                        </DropdownMenuList>
                                                    </DropdownMenuContent>
                                                </DropdownMenuListItem>
                                            </DropdownMenuItem>
                                        </DropdownMenuList>
                                    </DropdownMenuContent>
                                </DropdownMenuListItem>
                            </DropdownMenuItem>
                        </DropdownMenuList>
                    </DropdownMenuContent>
                </DropdownMenuItem>
            </DropdownMenu>
        );
    },
    play: async ({ canvasElement }) => {
        const { getByTestId } = within(canvasElement);
        const content = getByTestId('dropDownMenu');
        const classNames = content.getAttribute('class')!;

        // Check class validity
        await expect(classNames).toMatch(classNameRegex(classNames));

        // Check navigation title
        await expect(content.innerText).toMatch(content.innerText);
    }
};
