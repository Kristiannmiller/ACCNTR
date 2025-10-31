import {
    ComponentProps,
    ReactElement,
    ReactNode,
    useCallback,
    useEffect,
    useState
} from 'react';

// Components
import { Accordion, AccordionType, ContentContainer } from '@/components';

// Types
import { ALIGNMENT_TYPES, PLACEMENT_TYPES, HEADLINE_TAG_TYPES } from '@/types';
import { SvgIconType } from '@/components';

// Default Accordion type
export const DEFAULT_ACCORDION_TYPE: AccordionType = 'multiple';

export type AccordionWrapperProps = Omit<
    ComponentProps<typeof ContentContainer>,
    'title'
> & {
    title?: {
        alignment?: Extract<ALIGNMENT_TYPES, 'left' | 'center'>;
        tag: HEADLINE_TAG_TYPES;
        value: string | ReactElement;
    };
    accordionItems: ReactElement;
    bottomDescription?: ReactNode;
    icon?: {
        placement?: Extract<PLACEMENT_TYPES, 'left' | 'top'>;
        value: SvgIconType;
    };
    shouldOpenFirstItem: boolean;
    topDescription?: ReactNode;
    type?: AccordionType;
    defaultOpenItem?: string;
};

export const AccordionWrapper = (props: AccordionWrapperProps) => {
    const {
        accordionItems,
        bottomDescription,
        className,
        icon,
        shouldOpenFirstItem,
        title,
        topDescription,
        type = DEFAULT_ACCORDION_TYPE,
        defaultOpenItem = '',
        ...rest
    } = props;

    const [foundAnchorAccordionValue, setFoundAnchorAccordionValue] = useState<
        string | string[]
    >(
        type === 'single'
            ? shouldOpenFirstItem
                ? defaultOpenItem
                : ''
            : shouldOpenFirstItem
            ? [defaultOpenItem]
            : []
    );

    const handleAccordionChange = (value: string | string[]) => {
        setFoundAnchorAccordionValue(value);
    };

    const handleHashOrAnchorClick = useCallback(
        (targetId: string) => {
            const accordionItem =
                document.querySelector(
                    `div[data-testid="accordion-item"] [name="${targetId}"]`
                ) ?? document.getElementById(targetId);
            if (accordionItem) {
                const accordionItemNode = accordionItem.closest('[data-value]');

                accordionItemNode?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });

                const value =
                    accordionItemNode?.getAttribute('data-value') || '';

                setFoundAnchorAccordionValue((prevValue) => {
                    if (type === 'single') {
                        return prevValue === value ? '' : value;
                    } else {
                        const newValue = Array.isArray(prevValue)
                            ? [...prevValue]
                            : [];
                        newValue.push(value);
                        return newValue;
                    }
                });
            }
        },
        [type]
    );

    const handleAnchorClick = useCallback(
        (event: Event) => {
            event.preventDefault();
            const anchor = event.target as HTMLAnchorElement;
            const targetId = anchor?.getAttribute('href')?.substring(1);
            const currentUrl = window.location;
            currentUrl.hash = targetId ?? '';
            window.history.pushState(null, '', currentUrl.href);

            if (!targetId) {
                return;
            } else {
                handleHashOrAnchorClick(targetId);
            }
        },
        [handleHashOrAnchorClick]
    );

    useEffect(() => {
        const anchors = document.querySelectorAll('a[href^="#"]');
        anchors.forEach((anchor) => {
            anchor.addEventListener('click', handleAnchorClick);
        });

        return () => {
            anchors.forEach((anchor) => {
                anchor.removeEventListener('click', handleAnchorClick);
            });
        };
    }, [handleAnchorClick]);

    useEffect(() => {
        if (window) {
            const handleHashChange = () => {
                const hash = window.location.hash.substring(1);
                if (hash) {
                    setTimeout(() => {
                        handleHashOrAnchorClick(hash);
                    }, 500);
                }
            };
            window.addEventListener('hashchange', handleHashChange);
            handleHashChange();

            return () => {
                window.removeEventListener('hashchange', handleHashChange);
            };
        }
    }, [handleHashOrAnchorClick]);

    return (
        <ContentContainer
            className={className}
            data-testid='accordion-wrapper'
            headline={title?.value}
            headlineTag={title?.tag}
            headlineIcon={icon?.value}
            headlineIconPlacement={icon?.placement}
            headlineAlignment={title?.alignment}
            supportCopy={topDescription}
            supportCopyAlignment='left'
            supportCopyBottom={bottomDescription}
            supportCopyBottomAlignment='left'
            {...rest}>
            {/* Accordion */}
            {type === 'single' ? (
                <Accordion
                    type='single'
                    collapsible
                    value={foundAnchorAccordionValue as string}
                    onValueChange={handleAccordionChange}
                    defaultValue={
                        shouldOpenFirstItem
                            ? (defaultOpenItem as never)
                            : undefined
                    }>
                    {accordionItems}
                </Accordion>
            ) : (
                <Accordion
                    type='multiple'
                    value={foundAnchorAccordionValue as string[]}
                    onValueChange={handleAccordionChange}
                    defaultValue={
                        shouldOpenFirstItem
                            ? ([defaultOpenItem] as never)
                            : undefined
                    }>
                    {accordionItems}
                </Accordion>
            )}
        </ContentContainer>
    );
};
