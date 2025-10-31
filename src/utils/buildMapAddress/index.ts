import { AddressType } from '@/types';

export const buildMapAddress = (location: AddressType): string => {
    const { addressLine1, addressLine2, city, state, zip } = location;

    return `${addressLine1}, ${addressLine2 ?? ''}, ${city}, ${state} ${zip}`;
};
