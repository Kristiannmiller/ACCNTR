// Components
import {
    FindADoctor,
    FindALocation,
    Tabs,
    TabsType,
    TabsList,
    TabsTrigger,
    TabsContent,
    DEFAULT_TAB_SIZE
} from '@/components';

// Mocks
import { mockFindALocation, mockFindADoctor } from '@/mocks';

const mocktabsDefault: TabsType = {
    size: DEFAULT_TAB_SIZE,
    defaultValue: 'account',
    children: (
        <Tabs>
            <TabsList>
                <TabsTrigger value='account'>Account</TabsTrigger>
                <TabsTrigger value='documents'>Documents</TabsTrigger>
                <TabsTrigger value='settings'>Settings</TabsTrigger>
            </TabsList>
            <TabsContent value='account'>
                <h1>Account</h1>
                <p>Account content</p>
            </TabsContent>
            <TabsContent value='documents'>
                <h1>Documents</h1>
                <p>Document content</p>
            </TabsContent>
            <TabsContent value='settings'>
                <h1>Settings</h1>
                <p>Settings content</p>
                <a href='#'>focus me</a>
            </TabsContent>
        </Tabs>
    ),
    hasShadow: false
};

export const mockTabs: Record<
    'default' | 'findADoctorAndFindALocation',
    TabsType
> = {
    default: mocktabsDefault,
    findADoctorAndFindALocation: {
        ...mocktabsDefault,
        defaultValue: 'find-a-doctor',
        children: (
            <>
                <TabsList>
                    <TabsTrigger value='find-a-doctor'>
                        Find a doctor
                    </TabsTrigger>
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
    }
};
