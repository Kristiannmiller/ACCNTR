import { ReactNode } from 'react';
import {
    getTextFieldValue,
    getRichTextFieldValue,
    getImageFieldValue,
    getLinkFieldValue
} from './';

import {
    Image as JSSImage,
    RichText as JSSRichText,
    Text as JSSText,
    Link as JSSLink
} from '@sitecore-jss/sitecore-jss-react';

describe('getTextFieldValue', () => {
    it('should get text field value', () => {
        const element: ReactNode = <JSSText field={{ value: 'Test Text' }} />;
        expect(getTextFieldValue(element)).toBe('Test Text');
    });

    it('should return empty string if text field value is not valid', () => {
        const element: ReactNode = <div>No field</div>;
        expect(getTextFieldValue(element)).toBe('');
    });
});

describe('getRichTextFieldValue', () => {
    it('should get rich text field value', () => {
        const element: ReactNode = (
            <JSSRichText field={{ value: '<p>Rich Text</p>' }} />
        );
        expect(getRichTextFieldValue(element)).toBe('<p>Rich Text</p>');
    });

    it('should return empty string if rich text field value is not valid', () => {
        const element: ReactNode = <div>No field</div>;
        expect(getRichTextFieldValue(element)).toBe('');
    });
});

describe('getImageFieldValue', () => {
    it('should get image field value', () => {
        const element: ReactNode = <JSSImage field={{ src: 'image.jpg' }} />;
        expect(getImageFieldValue(element)).toBe('image.jpg');
    });

    it('should return empty string if image field value is not valid', () => {
        const element: ReactNode = <div>No field</div>;
        expect(getImageFieldValue(element)).toBe('');
    });
});

describe('getLinkFieldValue', () => {
    it('should get link field value', () => {
        const element: ReactNode = (
            <JSSLink field={{ href: 'https://example.com' }} />
        );
        expect(getLinkFieldValue(element)).toBe('https://example.com');
    });

    it('should return empty string if link field value is not valid', () => {
        const element: ReactNode = <div>No field</div>;
        expect(getLinkFieldValue(element)).toBe('');
    });
});
