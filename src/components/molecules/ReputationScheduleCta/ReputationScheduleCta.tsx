import { ComponentProps, FormEvent, ReactNode, useRef, useState } from 'react';

//Components
import { Button, Input, IconCtaBorderedCard } from '@/components';

// Styles
import styles from './ReputationScheduleCta.module.scss';

// Types
import { REPUTATION_API_FILTER_TYPES } from '@/types';

export type ReputationScheduleCtaProps = ComponentProps<
    typeof IconCtaBorderedCard
> &
    ComponentProps<typeof ReputationScheduleForm>;

export const ReputationScheduleCta = (props: ReputationScheduleCtaProps) => {
    const {
        buttonText = 'Schedule online',
        errorMessage = 'Enter city, state and/or ZIP is required',
        filterType = 'specialties',
        filterText,
        headline,
        headlineTag = 'p',
        icon,
        placeholderText,
        searchLabel,
        searchType = 'Doctor',
        searchUrl,
        supportCopy,
        topColorBar,
        ...rest
    } = props;

    return (
        <IconCtaBorderedCard
            headline={headline}
            headlineTag={headlineTag}
            icon={icon}
            supportCopy={supportCopy}
            topColorBar={topColorBar}
            reputationScheduleForm={
                <ReputationScheduleForm
                    buttonText={buttonText}
                    errorMessage={errorMessage}
                    filterType={filterType}
                    filterText={filterText}
                    placeholderText={placeholderText}
                    searchLabel={searchLabel}
                    searchType={searchType}
                    searchUrl={searchUrl}
                />
            }
            {...rest}
        />
    );
};

// Types
export type ReputationScheduleFormProps = {
    buttonText: ReactNode;
    errorMessage: ReactNode;
    /** filterType values must be in the format of the expected query string. */
    filterType: REPUTATION_API_FILTER_TYPES;
    filterText: string;
    placeholderText: string;
    searchLabel?: ReactNode;
    searchType: 'Location' | 'Doctor';
    searchUrl: string;
};

export const ReputationScheduleForm = (props: ReputationScheduleFormProps) => {
    const {
        buttonText,
        errorMessage,
        filterType,
        filterText,
        placeholderText,
        searchLabel,
        searchType,
        searchUrl
    } = props;

    const searchInputRef = useRef<HTMLInputElement>(null);
    const [hasError, setHasError] = useState<boolean>(false);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        // Trim whitespace from input
        const searchTerm = searchInputRef.current?.value?.trim();

        if (!searchTerm) {
            setHasError(true);
            return;
        }

        // Hide error if any
        setHasError(false);

        const searchParams = new URLSearchParams();

        searchParams.append('s-autosearch', 'true');
        searchParams.append('s-address', searchTerm);
        searchParams.append('s-filter', `${filterType}:${filterText}`);

        if (searchType === 'Doctor') {
            searchParams.append('s-defaultsearchtype', 'address');
        }

        // Search params must be formatted specifically for the parsing logic of the target search page to work correctly.
        // The formatting is different from the default encoding that URLSearchParams provides.
        const reformattedSearchParams = searchParams
            .toString()
            .replaceAll('+', '%20')
            .replaceAll('%3A', ':');

        window.location.href = `${searchUrl}?${reformattedSearchParams}`;
    };

    return (
        <form
            data-testid='reputation-schedule-cta-search-form'
            className={styles['reputation-schedule-cta-search-form']}
            onSubmit={handleSubmit}>
            {/* Search Input */}
            <Input
                ariaRequired='true'
                data-testid='reputation-schedule-cta-search-input'
                className={styles['reputation-schedule-cta-search-input']}
                ref={searchInputRef}
                type='text'
                placeholder={placeholderText}
                errorMessage={errorMessage}
                errorMessageId='reputation-schedule-cta-error-message'
                label={searchLabel}
                inputId='reputation-schedule-cta-search-input'
                name='reputation-schedule-cta-search-input'
                hasError={hasError}
                setHasError={setHasError}
            />

            {/* Search Button */}
            <Button
                variant='solid1'
                size='responsive'
                type='submit'
                data-testid='reputation-schedule-cta-search-button'
                className={styles['reputation-schedule-cta-search-button']}>
                {buttonText}
            </Button>
        </form>
    );
};
