import {
    Image as JSSImage,
    Link as JSSLink
} from '@sitecore-jss/sitecore-jss-react';

// Types
import { LocationData } from '@/types';

// Mocks
import { mockSitecoreLink, mockSitecoreLocationImage } from '@/mocks/sitecore';

export const mockLocationData: Record<
    | 'oakLawnCampus'
    | 'advocateMemoryCenter'
    | 'advocateMemoryCenterNoDetailPage',
    LocationData
> = {
    oakLawnCampus: {
        locationName: 'Location Info',
        image: <JSSImage field={mockSitecoreLocationImage} />,
        locationDetailPage: (
            <JSSLink
                field={{
                    ...mockSitecoreLink.value,
                    text: 'Learn about this location'
                }}
            />
        ),
        addressLine1: '1675 Dempster St.',
        city: 'Park Ridge',
        state: 'IL',
        zip: '60068',
        defaultPhone: '708-555-5555',
        emergencyPhone: '708-684-5300',
        email: 'email@email.com',
        locationType: 'hospital',
        hoursOfOperation: 'address1',
        servicesAvailable: 'address1',
        locationTour: (
            <JSSLink
                field={{
                    ...mockSitecoreLink.value,
                    text: 'Learn about this location'
                }}
            />
        )
    },
    advocateMemoryCenter: {
        locationName: 'Location Info',
        locationDetailPage: (
            <JSSLink field={{ value: { href: 'https://www.google.com/' } }} />
        ),
        addressLine1: '1875 Dempster St',
        addressLine2: 'Parkside Center - Suite 520',
        city: 'Park Ridge',
        state: 'IL',
        zip: '60068',
        defaultPhone: '847-720-6464',
        hoursOfOperation:
            '<p>8 a.m. to 7 p.m. MON<br> 6 a.m. to 7 p.m. TU &amp; TH<br> 7 a.m. to 1 p.m. WED<br> 6:30 a.m. to 5 p.m. FRI</p> <div> </div> <p> </p>',
        servicesAvailable:
            'Behavioral Neurologist, Neuropsychologist, Advanced Practice Nurse, Clinical Social Worker, Support Groups, Clinical Research'
    },
    advocateMemoryCenterNoDetailPage: {
        locationName: 'Location Info',
        addressLine1: '1875 Dempster St',
        addressLine2: 'Parkside Center - Suite 520',
        city: 'Park Ridge',
        state: 'IL',
        zip: '60068',
        defaultPhone: '847-720-6464',
        hoursOfOperation: 'Monday - Friday, 9 a.m. - 5 p.m.',
        servicesAvailable:
            'Behavioral Neurologist, Neuropsychologist, Advanced Practice Nurse, Clinical Social Worker, Support Groups, Clinical Research'
    }
};
