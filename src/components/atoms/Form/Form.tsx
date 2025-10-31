import { ComponentProps } from 'react';

// Components
import { Container } from '@/components';

export type FormProps = ComponentProps<typeof Container>;

export const Form = (props: FormProps) => {
    const { ...rest } = props;

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
