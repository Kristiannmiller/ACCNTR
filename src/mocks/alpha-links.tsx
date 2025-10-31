import {
    Text as JSSText,
    RichText as JSSRichText,
    Link as JSSLink
} from '@sitecore-jss/sitecore-jss-react';

// Types
import {
    AlphaLinksIndexProps,
    LinksDictionaryType
} from '@/components/organisms/AlphaLinksIndex/AlphaLinksIndex';

// Mocks
import { mockSitecoreLink } from './sitecore';

const incompleteLettersAlphabet = [
    'A',
    'B',
    'D',
    'F',
    'G',
    'H',
    'I',
    'J',
    'M',
    'N',
    'Q',
    'T',
    'X',
    'Z'
];

const createListOfLinks = ({
    letter,
    length
}: {
    letter: string;
    length: number;
}) =>
    Array.from({ length }, (_, index) => (
        <JSSLink
            field={{
                value: {
                    ...mockSitecoreLink.value,
                    text: `${letter} Learn More ${index + 1}`
                }
            }}
        />
    ));

/**
 * Seeds array of <JSSLink/>'s, 8 links per letter in array returned from generateAlphaSitecoreLinkObjects
 */
const generateAlphaSitecoreLinkNodes = () => {
    return incompleteLettersAlphabet.reduce((dictionary, letter) => {
        dictionary[letter] = createListOfLinks({
            letter,
            length: letter.charCodeAt(0) % 20
        });
        return dictionary;
    }, {} as LinksDictionaryType);
};

export const mockAlphaLinksIndexDefault: AlphaLinksIndexProps = {
    headline: (
        <JSSText
            field={{
                value: 'Alpha Links Index'
            }}
        />
    ),
    topSupportCopy: (
        <JSSRichText
            field={{
                value: '<p>Dr. David Callaway joins unique network examining leadership examples of recent presidents</p>'
            }}
        />
    ),
    bottomSupportCopy: (
        <JSSRichText
            field={{
                value: '<p>Dr. David Callaway joins unique network examining leadership examples of recent presidents</p>'
            }}
        />
    ),
    linkItemFolder: generateAlphaSitecoreLinkNodes(),
    headlineTag: 'p',
    topContentAlignment: 'center',
    backgroundTheme: 'whiteSmoke'
};

export const mockAlphaLinksIndexNoOptionals: AlphaLinksIndexProps = {
    headline: null,
    topSupportCopy: null,
    bottomSupportCopy: null,
    headlineTag: undefined,
    topContentAlignment: undefined,
    backgroundTheme: undefined,
    linkItemFolder: undefined
};

export const mockAlphaLinksRichTextBottomCopy: AlphaLinksIndexProps = {
    ...mockAlphaLinksIndexDefault,
    bottomSupportCopy: (
        <JSSRichText
            field={{
                value: '<p>Dr. David Callaway joins unique network examining leadership examples of recent presidents. <a href="https://www.aurorabaycare.com">Praesent eu lorem gravida</a></p>'
            }}
        />
    )
};

export const mockAlphaLinksIndex: Record<
    'default' | 'noOptionalFields' | 'linkInBottomCopy',
    AlphaLinksIndexProps
> = {
    default: mockAlphaLinksIndexDefault,
    noOptionalFields: mockAlphaLinksIndexNoOptionals,
    linkInBottomCopy: mockAlphaLinksRichTextBottomCopy
};
