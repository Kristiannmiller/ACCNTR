/// <reference types="vite/client" />

declare module '*.module.css' {
    const classes: { [key: string]: string };
    export default classes;
}

declare module '*.module.scss' {
    const classes: { [key: string]: string };
    export default classes;
}

declare module 'react-scrollspy-nav';

declare module 'https://formio-prod-cdn.azureedge.net/scripts/hse.forms.min.js';

declare interface Window {
    google: typeof google;
    createForm?: function;
}

declare namespace google {
    namespace maps {
        class Geocoder {
            geocode(
                request: { location: LatLng },
                callback: (
                    results: GeocoderResult[],
                    status: GeocoderStatus
                ) => void
            ): void;
        }
        class LatLng {
            constructor(lat: number, lng: number);
        }
        interface GeocoderResult {
            address_components: GeocoderAddressComponent[];
        }
        interface GeocoderAddressComponent {
            long_name: string;
            short_name: string;
            types: string[];
        }
        type GeocoderStatus =
            | 'OK'
            | 'ZERO_RESULTS'
            | 'OVER_QUERY_LIMIT'
            | 'REQUEST_DENIED'
            | 'INVALID_REQUEST'
            | 'UNKNOWN_ERROR';
    }
}

declare namespace YT {
    class Player {
        constructor(elementId: string | HTMLElement, options: PlayerOptions);
        stopVideo(): void;
        destroy(): void;
        getPlayerState(): number;
    }

    interface PlayerOptions {
        height?: string;
        width?: string;
        videoId?: string;
        playerVars?: PlayerVars;
        events?: Events;
        host?: string;
    }

    interface PlayerVars {
        autoplay?: number;
        controls?: number;
        rel?: number;
        showinfo?: number;
        modestbranding?: number;
    }

    interface Events {
        onReady?(event: PlayerEvent): void;
        onStateChange?(event: PlayerEvent): void;
    }

    interface PlayerEvent {
        target: Player;
        data: number;
    }

    // Player states
    enum PlayerState {
        UNSTARTED = -1,
        ENDED = 0,
        PLAYING = 1,
        PAUSED = 2,
        BUFFERING = 3,
        CUED = 5
    }
}

declare function createForm(
    formName: string,
    options: { redirect: string; formProjectUrl: string }
): void;
