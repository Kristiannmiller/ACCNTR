import { cva } from 'class-variance-authority';

// Utils
import { createCvaOptions } from '@/utils';

// Types
import { ANCHOR_COLOR_TYPES } from '@/types';
import { ANCHOR_FONT_STYLE_TYPES, ANCHOR_UNDERLINE_TYPES } from './Anchor';

// Styles
import styles from './Anchor.module.scss';
import {
    fontStyleClassMap,
    fontStyleCorpClassMap,
    fontStyleCorpTabletClassMap,
    fontStyleTabletClassMap
} from '../Text/styles';

export const anchorBaseClass = styles['anchor-base'];

export const anchorUnderlineClassMap = createCvaOptions<ANCHOR_UNDERLINE_TYPES>(
    {
        always: '',
        hover: styles['underline-hover'],
        none: styles['underline-none']
    }
);

export const anchorInheritedClassMap = createCvaOptions<'true'>({
    true: styles['inherit']
});

export const anchorColorClassMap = createCvaOptions<ANCHOR_COLOR_TYPES>({
    default: '',
    alt: styles['alt'],
    inverse: styles['inverse']
});

export const anchorFontStyleClassMap =
    createCvaOptions<ANCHOR_FONT_STYLE_TYPES>({
        smLink: fontStyleClassMap.smLink,
        smLinkMobile: fontStyleClassMap.smLinkMobile
    });

export const anchorfontStyleTabletClassMap =
    createCvaOptions<ANCHOR_FONT_STYLE_TYPES>({
        smLink: fontStyleTabletClassMap.smLink,
        smLinkMobile: fontStyleTabletClassMap.smLinkMobile
    });

export const anchorFontStyleCorpClassMap =
    createCvaOptions<ANCHOR_FONT_STYLE_TYPES>({
        smLink: fontStyleCorpClassMap.smLink,
        smLinkMobile: fontStyleCorpClassMap.smLinkMobile
    });

export const anchorfontStyleCorpTabletClassMap =
    createCvaOptions<ANCHOR_FONT_STYLE_TYPES>({
        smLink: fontStyleCorpTabletClassMap.smLink,
        smLinkMobile: fontStyleCorpTabletClassMap.smLinkMobile
    });

export const anchorCVA = cva(anchorBaseClass, {
    variants: {
        underline: anchorUnderlineClassMap,
        fontStyle: anchorFontStyleClassMap,
        fontStyleTablet: anchorfontStyleTabletClassMap,
        fontStyleCorp: anchorFontStyleCorpClassMap,
        asInherited: anchorInheritedClassMap,
        fontStyleCorpTablet: anchorfontStyleCorpTabletClassMap,
        color: anchorColorClassMap
    }
});
