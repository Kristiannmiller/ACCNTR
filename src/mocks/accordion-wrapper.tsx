import { RichText as JSSRichText } from '@sitecore-jss/sitecore-jss-react';

// Components
import {
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
    AccordionWrapperProps
} from '@/components';

// Mocks
import {
    mockSitecoreRichText,
    mockSitecoreRichTextSmall,
    mockJumpLinkRichText,
    mockDemo,
    mockDemo2,
    mockDemo3
} from '@/mocks/sitecore';
import { loremLabel, loremParagraph, loremSentence } from '@/mocks/lorem-ipsum';

const accordionsElements = (
    <>
        <AccordionItem value='item-1'>
            <AccordionTrigger>{loremLabel.medium}</AccordionTrigger>
            <AccordionContent>
                <JSSRichText field={mockDemo} />
            </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-2'>
            <AccordionTrigger>{loremSentence.medium}</AccordionTrigger>
            <AccordionContent>{loremLabel.extraLong}</AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-3'>
            <AccordionTrigger>{loremLabel.extraLong}</AccordionTrigger>
            <AccordionContent>{loremParagraph.medium}</AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-4'>
            <AccordionTrigger>{loremLabel.long}</AccordionTrigger>
            <AccordionContent>{loremParagraph.medium}</AccordionContent>
        </AccordionItem>
    </>
);

const accordionsElementsForJumpLink = (
    <>
        <AccordionItem value='item-1'>
            <AccordionTrigger>{loremLabel.medium}</AccordionTrigger>
            <AccordionContent>
                <JSSRichText field={mockDemo} />
            </AccordionContent>
        </AccordionItem>
        <AccordionItem
            value='item-2'
            id='MyAnchorid2'>
            <AccordionTrigger>{loremSentence.medium}</AccordionTrigger>
            <AccordionContent>{loremLabel.extraLong}</AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-3'>
            <AccordionTrigger>{loremLabel.extraLong}</AccordionTrigger>
            <AccordionContent>
                <JSSRichText field={mockDemo2} />
            </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-4'>
            <AccordionTrigger>{loremLabel.long}</AccordionTrigger>
            <AccordionContent>
                <JSSRichText field={mockDemo3} />
            </AccordionContent>
        </AccordionItem>
    </>
);

const mockAccordionWrapperDefault: AccordionWrapperProps = {
    title: {
        value: 'Accordion Wrapper',
        tag: 'h2',
        alignment: 'left'
    },
    icon: {
        value: 'download',
        placement: 'left'
    },
    topDescription: <JSSRichText field={mockSitecoreRichText} />,
    shouldOpenFirstItem: true,
    accordionItems: accordionsElements,
    bottomDescription: <JSSRichText field={mockSitecoreRichTextSmall} />
};

const mockAccordionWrapperJumpLink: AccordionWrapperProps = {
    ...mockAccordionWrapperDefault,
    accordionItems: accordionsElementsForJumpLink,
    topDescription: <JSSRichText field={mockJumpLinkRichText} />
};

export const mockAccordionWrapper: Record<
    | 'default'
    | 'iconPlacementTop'
    | 'titlePlacementCenter'
    | 'defaultFirstItemOpen'
    | 'accordionWithMultipleJumpLink',
    AccordionWrapperProps
> = {
    default: mockAccordionWrapperDefault,
    iconPlacementTop: {
        ...mockAccordionWrapperDefault,
        icon: {
            value: 'certificate',
            placement: 'top'
        }
    },
    titlePlacementCenter: {
        ...mockAccordionWrapperDefault,
        title: {
            value: 'Accordion Wrapper',
            tag: 'h2',
            alignment: 'center'
        }
    },
    defaultFirstItemOpen: {
        ...mockAccordionWrapperDefault,
        shouldOpenFirstItem: true,
        defaultOpenItem: 'item-1'
    },
    accordionWithMultipleJumpLink: mockAccordionWrapperJumpLink
};
