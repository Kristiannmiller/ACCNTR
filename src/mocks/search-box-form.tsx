// Types
import { SearchBoxFormProps } from '@/components';

const mockSearchBoxFormDefault: SearchBoxFormProps = {
    shouldAutoFocusOnMatch: true,
    shouldDisableSearchUntilMatch: true,
    shouldDisableSubmitOnEnter: true,
    submitButtonText: 'Find now',
    placeholderText: 'Enter list item',
    labelText: 'List label here',
    suggestions: [
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
    onSubmitCallback: () => {},
    onChangeCallback: () => {}
};

export const mockSearchBoxForm: Record<'default', SearchBoxFormProps> = {
    default: mockSearchBoxFormDefault
};
