import { allFontAwesomeIcons } from '@/components';

export const iconControl = {
    control: 'select',
    options: allFontAwesomeIcons,
    defaultValue: 'facebook'
};

export const ctaStyleControl = {
    default: 'button',
    description: 'Changes type of CTA (button or link). link | button',
    control: 'select',
    options: ['link', 'button']
};
