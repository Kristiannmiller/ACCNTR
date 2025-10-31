import {
    RichText as JSSRichText,
    Text as JSSText,
    Link as JSSLink
} from '@sitecore-jss/sitecore-jss-react';

// Mocks
import { mockSitecoreLink } from './sitecore';

// Types
import { SuggestiveDropdownProps } from '@/components';

const mockSuggestiveDropdownDefault: SuggestiveDropdownProps = {
    headline: <JSSText field={{ value: 'What can we help you find?' }} />,
    supportCopy: (
        <JSSRichText
            field={{
                value: '<p>Find what you are looking for using the dropdown list below</p>'
            }}
        />
    ),
    cta: (
        <JSSLink
            field={{
                value: {
                    ...mockSitecoreLink.value,
                    text: 'Link here'
                }
            }}
        />
    ),
    links: [
        {
            text: 'Bladder cancer',
            href: 'https://www.aurorahealthcare.org/services/cancer/bladder-cancer',
            target: '_blank'
        },
        {
            text: 'Bone/soft tissue cancer',
            href: 'https://www.aurorahealthcare.org/services/cancer/bone-soft-tissue-cancer',
            target: '_self'
        },
        {
            text: 'Breast cancer',
            href: 'https://www.aurorahealthcare.org/services/cancer/breast-cancer/',
            target: '_self'
        },
        {
            text: 'Cervical cancer 3d',
            href: 'http://example.com/cervical-cancer-3d',
            target: '_self'
        },
        {
            text: 'Gynecological cancers',
            href: 'http://example.com/gynelogical-cancers',
            target: '_self'
        },
        {
            text: 'Head and neck cancer',
            href: 'http://example.com/head-and-neck-cancer',
            target: '_self'
        },
        {
            text: 'Kidney cancer',
            href: 'http://example.com/kidney-cancer',
            target: '_self'
        },
        {
            text: 'Leukemia',
            href: 'http://example.com/leukemia',
            target: '_self'
        }
    ],
    headlineTag: 'p',
    contentAlignment: 'left',
    backgroundColor: 'white',
    submitButtonText: 'Find now',
    placeholderText: 'Enter list item',
    labelText: 'List label here'
};

export const mockSuggestiveDropdown: Record<
    'default',
    SuggestiveDropdownProps
> = {
    default: mockSuggestiveDropdownDefault
};
