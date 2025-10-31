// Types
import type { AnchorType } from '@/types'; // Make sure 'children' in 'AnchorType' is of type 'string'

export const anchorLinks: AnchorType[] = [
    { href: 'https://www.advocatehealth.org/', children: 'Link 1' },
    { href: 'https://www.advocatehealth.org/', children: <a>Link 2</a> }
];
