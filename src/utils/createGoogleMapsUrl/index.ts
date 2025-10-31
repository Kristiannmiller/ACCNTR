type LocationData = {
    addressLine1: string;
    addressLine2?: string;
    city?: string;
    state?: string;
    zip?: string;
};

export const createGoogleMapsUrl = (locationData: LocationData): string => {
    const { addressLine1, addressLine2, city, state, zip } = locationData;
    const encodedAddress = encodeURIComponent(
        `${addressLine1}, ${addressLine2 ?? ''}, ${city}, ${state} ${zip}`
    );

    return `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
};
