import { useEffect, useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';

// Components
import { SearchPagination } from '@/components';

// Mocks
import { mockSearchPagination } from '@/mocks/search-pagination';

// Tests
import { testSearchPagination } from '@/tests';

export default {
    title: 'Design System/molecules/SearchPagination',
    component: SearchPagination,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?node-id=17831-35401'
        },
        controls: { include: Object.keys(mockSearchPagination.default) },
        layout: 'centered'
    }
} satisfies Meta<typeof SearchPagination>;

type Story = StoryObj<typeof SearchPagination>;

export const Default: Story = {
    args: mockSearchPagination.default,
    play: testSearchPagination.default,
    render: (args) => {
        const [currentPage, setCurrentPage] = useState(args.currentPage);

        useEffect(() => {
            setCurrentPage(currentPage);
        }, [args.currentPage, currentPage]);

        return (
            <SearchPagination
                {...args}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
            />
        );
    }
};

export const ThreePages: Story = {
    args: mockSearchPagination.threePages,
    play: testSearchPagination.default,
    render: (args) => {
        const [currentPage, setCurrentPage] = useState(args.currentPage);

        return (
            <SearchPagination
                {...args}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
            />
        );
    }
};
