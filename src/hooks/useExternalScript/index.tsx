import { useEffect } from 'react';
export const useExternalScript = (src: string) => {
    useEffect(() => {
        if (!document) {
            return;
        } else {
            const script = document.createElement('script');
            script.src = src;
            script.async = true;
            document.body.appendChild(script);
            return () => {
                document.body.removeChild(script);
            };
        }
    }, [src]);
};
