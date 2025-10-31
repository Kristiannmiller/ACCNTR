import { ReactElement, ReactNode } from 'react';
import {
    alignments,
    backgroundColors,
    colors,
    elevations,
    ctaStyle,
    fontStyles,
    layoutRatios,
    opacities,
    placements,
    ratios,
    sizes,
    tags,
    variants,
    themes,
    tableStyle,
    tableCellAlignments,
    colorBarColors,
    anchorColors,
    twoColumns,
    threeColumns,
    fourColumns,
    sixColumns,
    twelveColumns,
    reputationApiSearchTypes,
    containerTags,
    containerVariants,
    textTags,
    headlineTags
} from '@/static';

/**
 * Recursively expands all properties of a given type.
 * @template T - The type to be expanded.
 * @example
 * // Suppose we have a type representing a nested object:
 * type InputType = { a: number; b: { c: string; d: { e: boolean; }; }; };
 * // Applying the Expand type to InputType:
 * type ExpandedType = Expand<InputType>;
 * // The ExpandedType will include all properties of InputType and their nested properties as separate properties.
 */
export type Expand<T> = T extends unknown
    ? { [K in keyof T]: Expand<T[K]> }
    : never;

/** Utility type to check if all elements in TSubset are present in TMain. */
type IsValidSubset<TMain, TSubset> = TSubset extends TMain ? true : false;

/** Ensure that TSubset is a subset of TMain.
 * @example Subset<'a' | 'b', 'a' | 'b' | 'c'> returns 'a' | 'b';
 * @example Subset<'a' | 'b', 'a' | 'c'> returns 'TSubset is not a subset of TMain';
 */
export type Subset<TMain, TSubset> = IsValidSubset<TMain, TSubset> extends true
    ? TSubset
    : 'TSubset is not a subset of TMain';

export type VARIANT_TYPES = (typeof variants)[number];
export type SIZE_TYPES = (typeof sizes)[number];
export type TAG_TYPES = (typeof tags)[number];
export type TEXT_TYPES = Subset<TAG_TYPES, (typeof textTags)[number]>;
export type FONT_STYLE_TYPES = (typeof fontStyles)[number];
export type RATIO_TYPES = (typeof ratios)[number];
export type OPACITY_TYPES = (typeof opacities)[number];
export type ALIGNMENT_TYPES = (typeof alignments)[number];
export type PLACEMENT_TYPES = (typeof placements)[number];
export type THEME_TYPES = (typeof themes)[number];
export type COLOR_TYPES = (typeof colors)[number];
export type CTA_STYLE_TYPES = (typeof ctaStyle)[number];
export type BACKGROUND_COLOR_TYPES = Subset<
    COLOR_TYPES,
    (typeof backgroundColors)[number]
>;
export type COLOR_BAR_TYPES = Subset<
    COLOR_TYPES,
    (typeof colorBarColors)[number]
>;
export type CONTAINER_VARIANT_TYPES = (typeof containerVariants)[number];
export type CONTAINER_TAG_TYPES = Subset<
    TAG_TYPES,
    (typeof containerTags)[number]
>;
export type LAYOUT_RATIO_TYPES = (typeof layoutRatios)[number];
export type ELEVATION_TYPES = (typeof elevations)[number];
export type TABLE_STYLES = (typeof tableStyle)[number];
export type BUTTON_STYLE_TYPES = 'solid' | 'outlined' | 'link';
export type ANCHOR_COLOR_TYPES = (typeof anchorColors)[number];
export type ORDER_TYPES = 'first' | 'second';

export type BOOLEAN_TYPE = 'true' | 'false';
export type HEADLINE_TAG_TYPES = (typeof headlineTags)[number];
export type TABLE_CELL_ALIGNMENTS = (typeof tableCellAlignments)[number];

export type REPUTATION_API_FILTER_TYPES =
    (typeof reputationApiSearchTypes)[number];

export type ImageType =
    | Pick<HTMLImageElement, 'src' | 'alt'>
    | Pick<HTMLImageElement, 'src' | 'alt' | 'height' | 'width'>;

export type AnchorType = Pick<HTMLAnchorElement, 'href'> & {
    children: ReactElement<HTMLAnchorElement> | string;
};

export type Sites =
    | 'advocateChildrens'
    | 'advocateHealthCare'
    | 'auroraBayCare'
    | 'auroraHealthCare'
    | 'corporate'
    | 'employerSolutions'
    | 'research'
    | 'foundations';

export type srcsetPathType = {
    path: string | ReactNode;
    descriptor?: string | ReactNode;
};

export type PictureSourceType = {
    srcset: srcsetPathType[];
    media?: string;
    sizes?: string[];
};

export type PictureType = {
    image: ImageType;
    sources: PictureSourceType[];
};

export type LocationData = {
    locationName: string;
    image?: ReactElement;
    locationDetailPage?: ReactNode;
    email?: string;
    locationTour?: ReactNode;
    addressLine1: string;
    addressLine2?: string;
    city?: string;
    state?: string;
    zip?: string;
    latitude?: string;
    longitude?: string;
    defaultPhone?: string;
    emergencyPhone?: string;
    locationType?: 'hospital' | 'clinic';
    hoursOfOperation?: string;
    servicesAvailable?: string;
};

export type TWO_COLUMN_TYPES = (typeof twoColumns)[number];
export type THREE_COLUMN_TYPES = (typeof threeColumns)[number];
export type FOUR_COLUMN_TYPES = (typeof fourColumns)[number];
export type SIX_COLUMN_TYPES = (typeof sixColumns)[number];
export type TWELVE_COLUMN_TYPES = (typeof twelveColumns)[number];

export type LocationInfoType = Pick<
    LocationData,
    | 'addressLine1'
    | 'addressLine2'
    | 'city'
    | 'defaultPhone'
    | 'hoursOfOperation'
    | 'locationDetailPage'
    | 'locationName'
    | 'servicesAvailable'
    | 'state'
    | 'zip'
>;

export type AddressType = Pick<
    LocationData,
    'addressLine1' | 'addressLine2' | 'city' | 'state' | 'zip'
>;

export type CONTENT_CONTAINER_SPACING_TYPES =
    | '72-48'
    | '72-32'
    | '72-24'
    | '64-40'
    | '40-24';
