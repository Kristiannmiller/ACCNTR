/**
 * This component is not exported from the library.
 * It is only here for Storybook purposes.
 */
import { ComponentProps, ReactElement, useEffect } from 'react';

import { createForm } from 'https://formio-prod-cdn.azureedge.net/scripts/hse.forms.min.js';

// Components
import { Container } from '@/components';

export type FormDataProps = {
    formName: ReactElement;
    thankYouPageUrl: ReactElement;
    formioDomain: string;
};

export type FormProps = ComponentProps<typeof Container> & FormDataProps;

export const StorybookOnlyForm = (props: FormProps) => {
    const { formName, thankYouPageUrl, formioDomain, ...rest } = props;

    useEffect(() => {
        const loadFormio = async () => {
            try {
                createForm(`${formName?.props?.field?.value}`, {
                    redirect: `${thankYouPageUrl?.props?.field?.href}`,
                    formProjectUrl: formioDomain
                });
            } catch (error) {
                console.error('Error loading formio module:', error);
            }
        };

        loadFormio();
    }, [
        formName?.props?.field?.value,
        formioDomain,
        thankYouPageUrl?.props?.field?.href
    ]);

    return (
        <Container
            data-testid='form-container'
            {...rest}>
            <div
                id='formio'
                data-testid='form'
            />
        </Container>
    );
};
