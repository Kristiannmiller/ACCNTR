import { isValidElement, ReactNode } from 'react';

// Helper function to get text field value
export const getTextFieldValue = (element: ReactNode): string => {
    if (isValidElement(element) && element.props.field) {
        return element.props.field.value;
    }
    return '';
};

// Helper function to get rich text field value
export const getRichTextFieldValue = (element: ReactNode): string => {
    if (isValidElement(element) && element.props.field) {
        return element.props.field.value;
    }
    return '';
};

// Helper function to get image field value
export const getImageFieldValue = (element: ReactNode): string => {
    if (isValidElement(element) && element.props.field) {
        return element.props.field.src ?? element.props.field.value?.src;
    }
    return '';
};

// Helper function to get link field value
export const getLinkFieldValue = (element: ReactNode): string => {
    if (isValidElement(element) && element.props.field) {
        return element.props.field.href ?? element.props.field.value?.href;
    }
    return '';
};

// Helper function to get link field text
export const getLinkFieldText = (element: ReactNode): string => {
    if (isValidElement(element) && element.props.field) {
        return element.props.field.text ?? element.props.field.value?.text;
    }
    return '';
};
