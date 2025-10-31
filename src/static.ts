export const variants = [
    'solid1',
    'solid2',
    'outlined',
    'outlined-alt',
    'light1',
    'light2',
    'solid-1-inverse',
    'outlined-inverse',
    'light-inverse'
] as const;

export const tabletBreakpoint = 'tablet';
export const tabletLgBreakpoint = 'tabletLg';
export const desktopBreakpoint = 'desktop';
export const ctaStyle = ['link', 'button'] as const;
export const sizes = ['small', 'medium', 'large'] as const;
export const tags = [
    'article',
    'dd',
    'div',
    'dt',
    'footer',
    'form',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'label',
    'p',
    'section',
    'span',
    'sup'
] as const;
export const headlineTags = ['h2', 'h3', 'h4', 'p'] as const;

export const textTags = [
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'p',
    'span',
    'dt',
    'dd',
    'sup',
    'label'
] as const;

// #region Container
export const containerTags = [
    'div',
    'section',
    'article',
    'footer',
    'form'
] as const;

export const containerVariants = [
    'containedSmall', // 1196px
    'contained', // 1440px
    'containedSmall', // 1196px
    'contained', // 1440px
    'containedLarge', // 1920px
    'full'
] as const;
// #endregion

// #region Colors
export const colors = [
    'white',
    'whiteSmoke',
    'wellnessBlue',
    'denimBlue',
    'achOrange',
    'cchaPurple',
    'childrensBlue',
    'childrensGreen',
    'childrensOrange',
    'childrensPurple',
    'childrensYellow',
    'childrensAlliance',
    'transparent',
    'utilityInfo',
    'utilityWarning',
    'utilityNegative',
    'utilityPositive',
    'utilityUtility'
] as const;

/** These need to stay in sync with `colors` */
export const backgroundColors = [
    'white',
    'wellnessBlue',
    'denimBlue',
    'whiteSmoke',
    'achOrange',
    'cchaPurple',
    'transparent',
    'utilityInfo',
    'utilityWarning',
    'utilityNegative',
    'utilityPositive',
    'utilityUtility'
] as const;

/** These need to stay in sync with `colors` */
export const colorBarColors = [
    'wellnessBlue',
    'denimBlue',
    'childrensBlue',
    'childrensGreen',
    'childrensOrange',
    'childrensPurple',
    'childrensYellow',
    'childrensAlliance'
] as const;
// #endregion

export const themes = ['Consumer', 'Corporate', 'Childrens'] as const;

export const fontStyles = [
    'xlHeading',
    'xlHeadingMobile',
    'lgHeading',
    'lgHeadingMobile',
    'mdHeading',
    'mdHeadingMobile',
    'smHeading',
    'smHeadingMobile',
    'smParagraph',
    'smParagraphBold',
    'smLink',
    'smLinkMobile'
] as const;

export const anchorColors = ['default', 'alt', 'inverse'] as const;

export const tabletSize = '24.625rem';
export const tabletMaxSize = '37.4375rem';
export const tabletLgSize = '37.5rem';
export const tabletLgMaxSize = '52.125rem';
export const desktopSize = '52.1875rem';
export const desktopMaxSize = '95.9375rem';
export const desktopLgSize = '96rem';

export const reputationApiSearchTypes = [
    'specialties',
    'marketing_specialties',
    'services'
] as const;

export const opacities = ['0', '20', '40', '60', '80'] as const;
export const alignments = ['left', 'center', 'right'] as const;
export const tableCellAlignments = [
    'default',
    'left',
    'center',
    'right'
] as const;

export const placements = [...alignments, 'bottom', 'top'] as const;
export const ratios = [
    '1:1',
    '5:4',
    '5:2',
    '4:5',
    '8:5',
    '4:3',
    '8:3',
    '3:4',
    '3:2',
    '3:1',
    '2:3',
    '16:10',
    '16:5',
    '10:16',
    'golden-ratio-landscape',
    'golden-ratio-half-landscape',
    'golden-ratio-portrait',
    'golden-ratio-half-portrait',
    '16:9',
    '32:9',
    '9:16',
    '9:8',
    '2:1',
    '4:1',
    '1:2',
    '21:9',
    '14:3',
    '9:21',
    '6:7',
    'A4-landscape',
    'A4-half-landscape',
    'A4-portrait',
    'A4-half-portrait',
    'letter-landscape',
    'letter-half-landscape',
    'letter-portrait',
    'letter-half-portrait'
] as const;

export const layoutRatios = [
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'hundred'
] as const;

export const tableStyle = ['standard', 'custom'] as const;

export const elevations = ['elevation1', 'elevation2', 'elevation3'] as const;

export const alphabetList = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
];

// #region Grid
export const twoColumns = ['1', '2'] as const;
export const threeColumns = ['1', '2', '3'] as const;
export const fourColumns = ['1', '2', '3', '4'] as const;
export const sixColumns = ['1', '2', '3', '4', '5', '6'] as const;
export const twelveColumns = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12'
] as const;
// #endregion
