import {
    ComponentProps,
    KeyboardEvent,
    useEffect,
    useRef,
    useState,
    MouseEvent,
    FormEvent,
    ChangeEvent
} from 'react';
import { cx } from 'class-variance-authority';

// Styles
import styles from './SearchBoxForm.module.scss';

// Components
import { Button, Input } from '@/components';

// This is intentionally left in the SearchBoxFormComponent so that it's publicly available.
// Do not move to types.ts.
export type SearchSuggestionType = {
    text: string;
    href?: string;
    target?: string;
};

export type SearchBoxFormProps = ComponentProps<'form'> & {
    initialInputValue?: string;
    labelText: string;
    onChangeCallback: (e: string) => void;
    onSubmitCallback: (e: FormEvent) => void;
    placeholderText: string;
    /** Automatically focus the submit button when the user types a query that matches a result. */
    shouldAutoFocusOnMatch?: boolean;
    /** Disable the submit button until the input value matches a suggestion. */
    shouldDisableSearchUntilMatch?: boolean;
    /** Disable the submit button when the user presses enter. */
    shouldDisableSubmitOnEnter?: boolean;
    submitButtonText: string;
    suggestions: SearchSuggestionType[];
};

// Allows normal characters alphanumeric as well as these:
const ALLOWED_INPUT_REGEX = /^[\w~=.'\s/-]*$/;
const MAX_CHAR_LIMIT = 100;

export const SearchBoxForm = (props: SearchBoxFormProps) => {
    const {
        className,
        initialInputValue,
        labelText,
        onChangeCallback,
        onSubmitCallback,
        placeholderText,
        shouldAutoFocusOnMatch = false,
        shouldDisableSearchUntilMatch = false,
        shouldDisableSubmitOnEnter = false,
        submitButtonText,
        suggestions
    } = props;

    const [inputValue, setInputValue] = useState<string>(
        initialInputValue || ''
    );
    const [activeSuggestionIndex, setActiveSuggestionIndex] =
        useState<number>(-1);
    const [selectedSuggestion, setSelectedSuggestion] = useState<
        SearchSuggestionType | undefined
    >(undefined);
    const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement | null>(null);
    const dropdownRef = useRef<HTMLUListElement | null>(null);
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    // Update the parent component with the input value
    useEffect(() => {
        onChangeCallback(inputValue);
    }, [inputValue]);

    // Update the input value when the user types
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;

        // Allow only valid characters and limit to 100 characters
        if (ALLOWED_INPUT_REGEX.test(value) && value.length <= MAX_CHAR_LIMIT) {
            setInputValue(value);
        }
    };

    // Validation check for the input
    const isInputValid = () => {
        return (
            inputValue.trim() !== '' &&
            inputValue.length <= MAX_CHAR_LIMIT &&
            ALLOWED_INPUT_REGEX.test(inputValue)
        );
    };

    // Show suggestions when the input is focused
    const onFocus = () => {
        setShowSuggestions(true);
    };

    // Select a suggestion when clicked
    const onClick = (
        e: MouseEvent<HTMLLIElement>,
        suggestion: SearchSuggestionType
    ) => {
        e.preventDefault();
        setInputValue(suggestion.text);
        setSelectedSuggestion(suggestion);
    };

    // Enable the button when the input value matches a suggestion
    // or, if `shouldDisableSearchUntilMatch` is false, just when the user has typed a query
    const isButtonDisabled =
        !isInputValid() ||
        (shouldDisableSearchUntilMatch ? !selectedSuggestion?.href : false);

    // Focus the button when a suggestion is selected and the submit button is enabled
    useEffect(() => {
        if (!isButtonDisabled) {
            setShowSuggestions(false);
            buttonRef.current?.focus();
        }
    }, [selectedSuggestion]);

    // Set the selected suggestion when the input value matches a suggestion
    useEffect(() => {
        if (!shouldAutoFocusOnMatch) {
            return;
        }
        const matchedSuggestion = suggestions.find(
            (suggestion) => suggestion.text === inputValue
        );
        if (matchedSuggestion?.text !== selectedSuggestion?.text) {
            setSelectedSuggestion(matchedSuggestion);
        }
    }, [inputValue]);

    // Close dropdown on clicking outside
    useEffect(() => {
        const handleClickOutside: EventListener = (event) => {
            if (
                event.target instanceof Node &&
                !inputRef.current?.contains(event.target) &&
                !dropdownRef.current?.contains(event.target)
            ) {
                setShowSuggestions(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('touchstart', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
        };
    }, []);

    // Scroll the active suggestion into view
    useEffect(() => {
        const activeSuggestion = dropdownRef.current?.querySelector(
            '[aria-selected="true"]'
        );

        activeSuggestion?.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest'
        });
    }, [activeSuggestionIndex]);

    // Handle keyboard navigation
    const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Tab') {
            setShowSuggestions(false);
        }

        if (e.key === 'Escape') {
            setShowSuggestions(false);
            inputRef.current?.blur();
        }

        if (e.key === 'ArrowUp') {
            e.preventDefault();
            setActiveSuggestionIndex((i) => (i <= -1 ? -1 : i - 1));
        }

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            setActiveSuggestionIndex((i) =>
                i < suggestions.length - 1 ? i + 1 : i
            );
        }

        if (e.key === 'Enter') {
            if (shouldDisableSubmitOnEnter) {
                e.preventDefault();
            }

            // If the user presses enter without selecting a suggestion, submit the form
            // and hide the suggestions / focus the button
            if (!shouldDisableSubmitOnEnter && activeSuggestionIndex === -1) {
                setShowSuggestions(false);
                buttonRef.current?.focus();
            }

            const suggestion = suggestions[activeSuggestionIndex];
            if (suggestion) {
                e.preventDefault();
                setInputValue(suggestion.text);
                setSelectedSuggestion(suggestion);
                setShowSuggestions(false);
                setActiveSuggestionIndex(-1);
            }
        }
    };

    // Reset the active index when the user types
    useEffect(() => {
        if (activeSuggestionIndex > -1) {
            setActiveSuggestionIndex(-1);
        }
    }, [inputValue]);

    return (
        <form
            onSubmit={(e) => onSubmitCallback(e)}
            className={cx(styles['suggestive-form'], className)}>
            <div className={styles['input-wrapper']}>
                <Input
                    aria-activedescendant={
                        activeSuggestionIndex >= 0
                            ? `suggestion-${activeSuggestionIndex}`
                            : undefined
                    }
                    ariaLabel={labelText}
                    ariaRequired='true'
                    autoComplete='off'
                    className={styles['input']}
                    data-testid='suggestive-dropdown-input'
                    inputId={labelText}
                    label={labelText}
                    onChange={onChange}
                    onFocus={onFocus}
                    onKeyDown={onKeyDown}
                    placeholder={placeholderText}
                    ref={inputRef}
                    value={inputValue}
                />

                {/* Suggestions */}
                {showSuggestions && !!suggestions.length && (
                    <ul
                        role='listbox'
                        ref={dropdownRef}
                        className={styles['dropdown-select-list']}>
                        {suggestions.map((suggestion, idx) => {
                            const isActive = idx === activeSuggestionIndex;
                            return (
                                <li
                                    aria-selected={isActive}
                                    className={cx({
                                        [styles['suggestion-active']]: isActive
                                    })}
                                    id={`suggestion-${idx}`}
                                    key={idx}
                                    onClick={(e) => onClick(e, suggestion)}
                                    role='option'>
                                    {suggestion.text}
                                </li>
                            );
                        })}
                    </ul>
                )}
            </div>

            <Button
                ref={buttonRef}
                size='responsive'
                type='submit'
                disabled={isButtonDisabled}
                className={styles['search-button']}>
                {submitButtonText}
            </Button>
        </form>
    );
};
