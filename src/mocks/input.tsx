import { action } from '@storybook/addon-actions';
import {
    RichText as JSSRichText,
    Text as JSSText
} from '@sitecore-jss/sitecore-jss-react';

// Types
import { InputProps } from '@/components';

const mockInputDefault: InputProps = {
    ariaRequired: 'true',
    errorMessage: <JSSRichText field={{ value: 'Explainer text' }} />,
    errorMessageId: 'input-error-message',
    label: <JSSText field={{ value: 'Form Label' }} />,
    placeholder: 'Directional Text',
    hasError: false,
    type: 'text',
    inputId: 'input-box-id',
    setHasError: action('setHasError')
};

export const mockInput: Record<'default', InputProps> = {
    default: mockInputDefault
};
