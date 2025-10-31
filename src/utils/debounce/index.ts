type DebounceFunction = (...args: never[]) => void;

export function debounce<T extends DebounceFunction>(
    func: T,
    wait: number
): (...args: Parameters<T>) => void {
    let timeoutId: NodeJS.Timeout | null;

    return function (...args: Parameters<T>): void {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }

        timeoutId = setTimeout(() => {
            func(...args);
        }, wait);
    };
}
