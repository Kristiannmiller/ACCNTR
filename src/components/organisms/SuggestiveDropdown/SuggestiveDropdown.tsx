import { cx } from 'class-variance-authority';
import { ComponentProps, FormEvent, ReactNode, useMemo, useState } from 'react';

// Components
import { Container, ContentContainer, SearchBoxForm } from '@/components';

// Types
import {
    ALIGNMENT_TYPES,
    BACKGROUND_COLOR_TYPES,
    HEADLINE_TAG_TYPES
} from '@/types';
import { SearchSuggestionType } from '@/components';

// Styles
import styles from './SuggestiveDropdown.module.scss';

export type SuggestiveDropdownProps = ComponentProps<typeof Container> & {
    backgroundColor: Extract<BACKGROUND_COLOR_TYPES, 'white' | 'whiteSmoke'>;
    contentAlignment: Extract<ALIGNMENT_TYPES, 'center' | 'left'>;
    cta?: ReactNode;
    headline: ReactNode;
    headlineTag: HEADLINE_TAG_TYPES;
    labelText: string;
    links: Array<SearchSuggestionType>;
    placeholderText: string;
    submitButtonText: string;
    supportCopy: ReactNode;
};

export const SuggestiveDropdown = (props: SuggestiveDropdownProps) => {
    const {
        headline,
        headlineTag = 'p',
        backgroundColor = 'whiteSmoke',
        contentAlignment = 'left',
        supportCopy,
        cta,
        links,
        placeholderText,
        submitButtonText,
        labelText,
        className,
        ...rest
    } = props;

    const [inputValue, setInputValue] = useState<string>('');

    const suggestions = useMemo(() => {
        if (inputValue.trim().length <= 0) {
            return links;
        }

        return links.filter(({ text }) =>
            text.toLowerCase().includes(inputValue.toLowerCase().trim())
        );
    }, [inputValue]);

    const onChangeCallback = (value: string) => {
        setInputValue(value);
    };

    const onSubmitCallback = (e: FormEvent) => {
        e.preventDefault();
        const selectedSuggestion = links.find((s) => s.text === inputValue);

        if (selectedSuggestion?.href) {
            window.open(
                selectedSuggestion.href,
                selectedSuggestion.target || '_self'
            );
        }
    };

    return (
        <ContentContainer
            backgroundColor={backgroundColor}
            className={cx(styles['container'], className)}
            contentAlignment={contentAlignment}
            cta={cta}
            ctaAlignment='left'
            ctaStyle='link'
            data-testid='suggestive-dropdown'
            headline={headline}
            headlineTag={headlineTag}
            spacing='72-32'
            supportCopy={supportCopy}
            {...rest}>
            <SearchBoxForm
                shouldAutoFocusOnMatch
                shouldDisableSearchUntilMatch
                shouldDisableSubmitOnEnter
                labelText={labelText}
                onChangeCallback={onChangeCallback}
                onSubmitCallback={onSubmitCallback}
                placeholderText={placeholderText}
                submitButtonText={submitButtonText}
                suggestions={suggestions}
            />
        </ContentContainer>
    );
};
