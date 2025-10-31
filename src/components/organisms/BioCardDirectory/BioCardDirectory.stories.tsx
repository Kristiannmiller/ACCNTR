import { Meta, StoryObj } from '@storybook/react';

// Components
import { BioCardDirectory } from '@/components';

//Mocks
import { mockBioCardDirectory } from '@/mocks/bio-card-directory';

// Tests
import { testBioCardDirectory } from '@/tests';

// Controls
import { textControl } from '@/sb-tools';

export default {
    title: 'Design System/organisms/C55 - BioCardDirectory',
    component: BioCardDirectory,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?node-id=17785-23570&t=wVIzZUBnFsJQZGiu-4'
        },
        controls: {
            include: Object.keys(mockBioCardDirectory.default)
        }
    },
    argTypes: {
        additionalInformationLabel: textControl,
        emailLabel: textControl,
        faxLabel: textControl,
        locationsLabel: textControl,
        phoneLabel: textControl,
        specialtyLabel: textControl,
        titleLabel: textControl
    }
} satisfies Meta<typeof BioCardDirectory>;

type Story = StoryObj<typeof BioCardDirectory>;

export const Default: Story = {
    args: mockBioCardDirectory.default,
    play: testBioCardDirectory.default
};

export const SingleBio: Story = {
    args: mockBioCardDirectory.singleBio,
    play: testBioCardDirectory.default
};

export const mockBioCardDirectoryWithOptionalLink: Story = {
    args: mockBioCardDirectory.mockBioCardDirectoryWithOptionalLink,
    play: testBioCardDirectory.default
};
