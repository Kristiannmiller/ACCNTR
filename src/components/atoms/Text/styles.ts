import { cva } from 'class-variance-authority';

// Styles
import styles from './Text.module.scss';

// Types
import { BOOLEAN_TYPE, FONT_STYLE_TYPES, TEXT_TYPES } from '@/types';

// Utils
import { createCvaOptions } from '@/utils';

export const textBaseClass = styles['base'];

export const tagClassMap = createCvaOptions<TEXT_TYPES>({
    h1: styles['h1'],
    h2: styles['h2'],
    h3: styles['h3'],
    h4: styles['h4'],
    h5: styles['h4'],
    h6: styles['h4'],
    p: styles['p'],
    span: styles['p'],
    dd: '',
    dt: '',
    label: '',
    sup: ''
});

export const fontStyleClassMap = createCvaOptions<FONT_STYLE_TYPES>({
    xlHeading: styles['xl-heading'],
    xlHeadingMobile: styles['xl-heading-mobile'],
    lgHeading: styles['large-heading'],
    lgHeadingMobile: styles['large-heading-mobile'],
    mdHeading: styles['medium-heading'],
    mdHeadingMobile: styles['medium-heading-mobile'],
    smHeading: styles['small-heading'],
    smHeadingMobile: styles['small-heading-mobile'],
    smParagraph: styles['small-paragraph'],
    smParagraphBold: styles['small-paragraph-bold'],
    smLink: styles['small-link'],
    smLinkMobile: styles['small-link-mobile']
});

export const fontStyleTabletClassMap = createCvaOptions<FONT_STYLE_TYPES>({
    xlHeading: styles['tablet-xl-heading'],
    xlHeadingMobile: styles['tablet-xl-heading-mobile'],
    lgHeading: styles['tablet-large-heading'],
    lgHeadingMobile: styles['tablet-large-heading-mobile'],
    mdHeading: styles['tablet-medium-heading'],
    mdHeadingMobile: styles['tablet-medium-heading-mobile'],
    smHeading: styles['tablet-small-heading'],
    smHeadingMobile: styles['tablet-small-heading-mobile'],
    smParagraph: styles['tablet-small-paragraph'],
    smParagraphBold: styles['tablet-small-paragraph-bold'],
    smLink: styles['tablet-small-link'],
    smLinkMobile: styles['tablet-small-link-mobile']
});

export const fontStyleCorpClassMap = createCvaOptions<FONT_STYLE_TYPES>({
    xlHeading: styles['corp-xl-heading'],
    xlHeadingMobile: styles['corp-xl-heading-mobile'],
    lgHeading: styles['corp-large-heading'],
    lgHeadingMobile: styles['corp-large-heading-mobile'],
    mdHeading: styles['corp-medium-heading'],
    mdHeadingMobile: styles['corp-medium-heading-mobile'],
    smHeading: styles['corp-small-heading'],
    smHeadingMobile: styles['corp-small-heading-mobile'],
    smParagraph: styles['corp-small-paragraph'],
    smParagraphBold: styles['corp-small-paragraph-bold'],
    smLink: styles['corp-small-link'],
    smLinkMobile: styles['corp-small-link-mobile']
});

export const fontStyleCorpTabletClassMap = createCvaOptions<FONT_STYLE_TYPES>({
    xlHeading: styles['tablet-corp-xl-heading'],
    xlHeadingMobile: styles['tablet-corp-xl-heading-mobile'],
    lgHeading: styles['tablet-corp-large-heading'],
    lgHeadingMobile: styles['tablet-corp-large-heading-mobile'],
    mdHeading: styles['tablet-corp-medium-heading'],
    mdHeadingMobile: styles['tablet-corp-medium-heading-mobile'],
    smHeading: styles['tablet-corp-small-heading'],
    smHeadingMobile: styles['tablet-corp-small-heading-mobile'],
    smParagraph: styles['tablet-corp-small-paragraph'],
    smParagraphBold: styles['tablet-corp-small-paragraph-bold'],
    smLink: styles['tablet-corp-small-link'],
    smLinkMobile: styles['tablet-corp-small-link-mobile']
});

export const textCVA = cva([styles['base']], {
    variants: {
        tag: tagClassMap,
        fontStyle: fontStyleClassMap,
        fontStyleTablet: fontStyleTabletClassMap,
        fontStyleCorp: fontStyleCorpClassMap,
        fontStyleCorpTablet: fontStyleCorpTabletClassMap,
        isInverse: createCvaOptions<BOOLEAN_TYPE>({
            true: styles['inverse'],
            false: ''
        })
    }
});
