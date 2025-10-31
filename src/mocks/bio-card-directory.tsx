import {
    Image as JSSImage,
    RichText as JSSRichText,
    Text as JSSText,
    Link as JSSLink
} from '@sitecore-jss/sitecore-jss-react';

// Types
import type { BioCardDirectoryProps } from '@/components';

// Mocks
import { mockBios } from '@/mocks/bios';

const mockBioCardDirectoryDefault: BioCardDirectoryProps = {
    additionalInformationLabel: (
        <JSSText field={{ value: 'Additional Information' }} />
    ),
    bios: mockBios.map((bio) => {
        return {
            image: <JSSImage field={bio.image} />,
            name: <JSSText field={bio.name} />,
            specialty: bio.specialty && <JSSText field={bio.specialty} />,
            title: bio.title && <JSSText field={bio.title} />,
            phone: bio.phone && <JSSText field={bio.phone} />,
            fax: bio.fax && <JSSText field={bio.fax} />,
            email: bio.email && <JSSText field={bio.email} />,
            locations: bio.locations && <JSSRichText field={bio.locations} />,
            additional: bio.additional && <JSSRichText field={bio.additional} />
        };
    }),
    emailLabel: <JSSText field={{ value: 'Email' }} />,
    faxLabel: <JSSText field={{ value: 'Fax' }} />,
    locationsLabel: <JSSText field={{ value: 'Locations' }} />,
    phoneLabel: <JSSText field={{ value: 'Phone' }} />,
    specialtyLabel: <JSSText field={{ value: 'Specialty' }} />,
    titleLabel: <JSSText field={{ value: 'Title' }} />
};

const mockBioCardDirectoryWithOptionalLink: BioCardDirectoryProps = {
    ...mockBioCardDirectoryDefault,
    bios: mockBios.map((bio) => {
        return {
            image: <JSSImage field={bio.image} />,
            name: <JSSText field={bio.name} />,
            specialty: bio.specialty && <JSSText field={bio.specialty} />,
            title: bio.title && <JSSText field={bio.title} />,
            phone: bio.phone && <JSSText field={bio.phone} />,
            fax: bio.fax && <JSSText field={bio.fax} />,
            email: bio.email && <JSSText field={bio.email} />,
            locations: bio.locations && <JSSRichText field={bio.locations} />,
            additional: bio.additional && (
                <JSSRichText field={bio.additional} />
            ),
            optionalLink: bio.optionalLink && (
                <JSSLink field={bio.optionalLink} />
            )
        };
    })
};

export const mockBioCardDirectory: Record<
    'default' | 'singleBio' | 'mockBioCardDirectoryWithOptionalLink',
    BioCardDirectoryProps
> = {
    default: mockBioCardDirectoryDefault,
    singleBio: {
        ...mockBioCardDirectoryDefault,
        bios: [mockBioCardDirectoryDefault.bios[0]]
    },
    mockBioCardDirectoryWithOptionalLink: mockBioCardDirectoryWithOptionalLink
};
