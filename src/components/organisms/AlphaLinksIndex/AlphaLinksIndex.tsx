import {
    ComponentProps,
    ReactNode,
    useState,
    useRef,
    useEffect,
    useMemo,
    CSSProperties
} from 'react';
import { cx } from 'class-variance-authority';

// Types
import { ALIGNMENT_TYPES, COLOR_TYPES, HEADLINE_TAG_TYPES } from '@/types';

// Static
import { alphabetList } from '@/static';

// Styles
import styles from './AlphaLinksIndex.module.scss';

// Components
import { Anchor, ContentContainer } from '@/components';

export type LinksDictionaryType = Record<string, Array<ReactNode>>;

export type AlphaLinksIndexProps = ComponentProps<typeof ContentContainer> & {
    headline?: ReactNode;
    topSupportCopy?: ReactNode;
    bottomSupportCopy?: ReactNode;
    linkItemFolder?: LinksDictionaryType;
    headlineTag?: HEADLINE_TAG_TYPES;
    topContentAlignment?: Extract<ALIGNMENT_TYPES, 'center' | 'left'>;
    backgroundTheme?: Extract<COLOR_TYPES, 'white' | 'whiteSmoke'>;
};

export const AlphaLinksIndex = (props: AlphaLinksIndexProps) => {
    const {
        headline,
        topSupportCopy,
        bottomSupportCopy,
        linkItemFolder = {},
        headlineTag = 'p',
        topContentAlignment = 'center',
        backgroundTheme = 'whiteSmoke',
        className,
        ...rest
    } = props;

    /** A dictionary of links grouped by letter.
     * The `linkItemFolder` isn't guaranteed to have all the letters of the alphabet,
     * so this dictionary fills in the gaps with empty arrays.
     */
    const linksDictionary: LinksDictionaryType = useMemo(
        () =>
            alphabetList.reduce((dictionary, letter) => {
                dictionary[letter] = linkItemFolder[letter] ?? [];
                return dictionary;
            }, {} as LinksDictionaryType),
        [linkItemFolder]
    );

    // Set the initial state to the first letter with links.
    const [selectedLetter, setSelectedLetter] = useState<string | undefined>(
        Object.keys(linksDictionary)?.find(
            (key) => linksDictionary[key]?.length
        )
    );

    const letterListRef = useRef<HTMLUListElement>(null);

    const selectedLetterRef = useRef<HTMLButtonElement>(null);

    const selectedLetterFirstLinkRef = useRef<HTMLAnchorElement>(null);

    // Scroll to the active letter when it changes.
    useEffect(() => {
        if (
            !selectedLetter ||
            !selectedLetterRef.current ||
            !letterListRef.current
        ) {
            return;
        }

        const newScrollPos =
            // offsetLeft brings the selected letter to the left edge of the scroll container
            selectedLetterRef.current.offsetLeft -
            // so this brings the left edge of the selected letter back to the center of the list
            letterListRef.current.clientWidth / 2 +
            // and this accounts for the width of the selected letter so it's perfectly centered
            selectedLetterRef.current.clientWidth / 2;

        letterListRef.current.scrollTo({
            left: newScrollPos,
            behavior: 'smooth'
        });
    }, [selectedLetter, selectedLetterRef, letterListRef]);

    return (
        <ContentContainer
            className={cx(styles['alpha-links-index'], className)}
            backgroundColor={backgroundTheme}
            data-testid='alpha-links-index'
            headline={headline}
            headlineTag={headlineTag}
            headlineAlignment={topContentAlignment}
            supportCopy={topSupportCopy}
            supportCopyAlignment={topContentAlignment}
            supportCopyBottom={bottomSupportCopy}
            supportCopyBottomAlignment='left'
            spacing='64-40'
            {...rest}>
            {Object.keys(linksDictionary).length && (
                <ul
                    ref={letterListRef}
                    data-testid='alpha-links-index-dict-container'
                    className={styles['dict-index-container']}>
                    {Object.entries(linksDictionary).map(
                        ([letter, links], index) => (
                            <li
                                key={index}
                                className={
                                    styles['dictionary-buttons-list-item']
                                }>
                                <button
                                    ref={
                                        letter === selectedLetter
                                            ? selectedLetterRef
                                            : undefined
                                    }
                                    className={cx(
                                        styles['dictionary-buttons'],
                                        {
                                            [styles[
                                                'dictionary-buttons-selected'
                                            ]]: selectedLetter === letter
                                        }
                                    )}
                                    disabled={!links.length}
                                    aria-disabled={!links.length}
                                    onKeyDown={(e) => {
                                        if (
                                            links.length &&
                                            (e.key === 'Enter' || e.key === ' ')
                                        ) {
                                            setSelectedLetter(letter);
                                            selectedLetterFirstLinkRef.current?.focus();
                                        }
                                    }}
                                    onClick={() =>
                                        links.length > 0 &&
                                        setSelectedLetter(letter)
                                    }>
                                    {letter}
                                </button>
                            </li>
                        )
                    )}
                </ul>
            )}
            {selectedLetter && linksDictionary[selectedLetter]?.length && (
                <ul
                    className={styles['grouped-links-container']}
                    style={
                        {
                            '--rows-desktop': Math.ceil(
                                linksDictionary[selectedLetter].length / 3
                            ),
                            '--rows-tablet': Math.ceil(
                                linksDictionary[selectedLetter].length / 2
                            )
                        } as CSSProperties
                    }>
                    {linksDictionary[selectedLetter].map((link, i) => (
                        <li
                            key={i}
                            className={styles['link-container']}>
                            <Anchor
                                ref={
                                    i === 0
                                        ? selectedLetterFirstLinkRef
                                        : undefined
                                }
                                onKeyDown={(e) => {
                                    if (
                                        i === 0 &&
                                        e.shiftKey &&
                                        e.key === 'Tab'
                                    ) {
                                        e.preventDefault();
                                        selectedLetterRef.current?.focus();
                                    }
                                }}>
                                {link}
                            </Anchor>
                        </li>
                    ))}
                </ul>
            )}
        </ContentContainer>
    );
};
