// Components
import { MapProps } from '@/components';

const mockMapDefault: MapProps = {
    address: '1875 Dempster St, Park Ridge, IL 60068',
    googleMapsApiKey: '',
    title: 'Advocate Lutheran General Hospital'
};

export const mockMap: Record<'default', MapProps> = {
    default: mockMapDefault
};
