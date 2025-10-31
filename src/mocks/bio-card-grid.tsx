import {
    Image as JSSImage,
    Link as JSSLink,
    Text as JSSText
} from '@sitecore-jss/sitecore-jss-react';

// Types
import type { BioCardGridProps } from '@/components';

// Mocks
import { mockBios } from '@/mocks/bios';

const mockBioCardGridDefault: BioCardGridProps = {
    headline: <JSSText field={{ value: 'Bio Card Grid' }} />,
    headlineTag: 'p',
    bios: mockBios.map((bio) => {
        return {
            image: <JSSImage field={bio.image} />,
            name: <JSSText field={bio.name} />,
            title: bio.title && <JSSText field={bio.title} />,
            optionalLink: bio.optionalLink && (
                <JSSLink field={bio.optionalLink} />
            )
        };
    }),
    columnsDesktop: '6'
};

export const mockBioCardGrid: Record<'default', BioCardGridProps> = {
    default: mockBioCardGridDefault
};
