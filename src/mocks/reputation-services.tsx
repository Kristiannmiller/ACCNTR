import { PropsWithChildren } from 'react';

// Components
import {
    FindADoctor,
    FindALocation,
    TabsContent,
    TabsList,
    TabsTrigger
} from '@/components';
import { mockFindADoctor } from '@/mocks/find-a-doctor';
import { mockFindALocation } from '@/mocks/find-a-location';

// Types
type ReputationServiceTabs = PropsWithChildren<NonNullable<unknown>>;

const mockReputationServiceTabsDefault: ReputationServiceTabs = {
    children: (
        <>
            <TabsList>
                <TabsTrigger value='find-a-doctor'>Find a doctor</TabsTrigger>
                <TabsTrigger value='find-a-location'>
                    Find a location
                </TabsTrigger>
            </TabsList>
            <TabsContent value='find-a-doctor'>
                <FindADoctor {...mockFindADoctor.aurora} />
            </TabsContent>
            <TabsContent value='find-a-location'>
                <FindALocation {...mockFindALocation.aurora} />
            </TabsContent>
        </>
    )
};

export const mockReputationServiceTabs: Record<
    'default',
    ReputationServiceTabs
> = {
    default: mockReputationServiceTabsDefault
};
