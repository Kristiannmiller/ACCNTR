import { Meta, StoryObj } from '@storybook/react';

// Components
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from './Sheet';

export default {
    title: 'Design System/atoms/Sheet',
    component: Sheet,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?node-id=17785-40155'
        }
    }
} satisfies Meta<typeof Sheet>;

type Story = StoryObj<typeof Sheet>;

export const Top: Story = {
    render: () => {
        return (
            <Sheet>
                <SheetTrigger>Open</SheetTrigger>
                <SheetContent direction='top'>
                    <SheetHeader>
                        <SheetTitle>Hello!</SheetTitle>
                        <SheetDescription>
                            This is an example of a sheet sliding in from the
                            top.
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        );
    }
};

export const Right: Story = {
    render: () => {
        return (
            <Sheet>
                <SheetTrigger>Open</SheetTrigger>
                <SheetContent direction='right'>
                    <SheetHeader>
                        <SheetTitle>Hello!</SheetTitle>
                        <SheetDescription>
                            This is an example of a sheet sliding in from the
                            right.
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        );
    }
};

export const Bottom: Story = {
    render: () => {
        return (
            <Sheet>
                <SheetTrigger>Open</SheetTrigger>
                <SheetContent direction='bottom'>
                    <SheetHeader>
                        <SheetTitle>Hello!</SheetTitle>
                        <SheetDescription>
                            This is an example of a sheet sliding in from the
                            bottom.
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        );
    }
};

export const Left: Story = {
    render: () => {
        return (
            <Sheet>
                <SheetTrigger>Open</SheetTrigger>
                <SheetContent direction='left'>
                    <SheetHeader>
                        <SheetTitle>Hello!</SheetTitle>
                        <SheetDescription>
                            This is an example of a sheet sliding in from the
                            left.
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        );
    }
};
