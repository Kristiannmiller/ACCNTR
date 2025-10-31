import { TextAccordionProps } from '@/components';
import {
    RichText as JSSRichText,
    Text as JSSText
} from '@sitecore-jss/sitecore-jss-react';

// Mocks
import {
    mockSitecoreLegalRichText,
    mockSitecoreRichText
} from '@/mocks/sitecore';

const mockTextAccordionDefault: TextAccordionProps = {
    headline: <JSSText field={{ value: 'Text Accordion' }} />,
    bodyCopyAlignment: 'left',
    showLessText: 'View less',
    showMoreText: 'View more',
    alwaysVisibleText: <JSSRichText field={mockSitecoreLegalRichText} />,
    hiddenText: <JSSRichText field={mockSitecoreRichText} />
};

export const mockTextAccordion: Record<'default', TextAccordionProps> = {
    default: mockTextAccordionDefault
};
