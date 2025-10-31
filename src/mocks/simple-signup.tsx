import {
    RichText as JSSRichText,
    Text as JSSText,
    Link as JSSLink
} from '@sitecore-jss/sitecore-jss-react';

// Types
import { SimpleSignupProps } from '@/components';
import { mockSitecoreRichTextSmall } from './sitecore';

const mockSimpleSignupDefault: SimpleSignupProps = {
    headline: <JSSText field={{ value: 'Simple Sign Up' }} />,
    supportCopy: <JSSRichText field={mockSitecoreRichTextSmall} />,
    cta: (
        <JSSLink
            field={{
                value: { href: 'https://www.google.com', text: 'Link here' }
            }}
        />
    ),
    headlineTag: 'h2',
    alignment: 'center',
    backgroundColor: 'white',
    children: <></>
};

export const mockSimpleSignup: Record<'default', SimpleSignupProps> = {
    default: mockSimpleSignupDefault
};
