import { useLayoutEffect, useState, RefObject } from 'react';

interface TruncatedElementProps {
    ref: RefObject<HTMLElement>;
    shouldStartOpen: boolean;
}

export const useTruncatedElement = ({
    ref,
    shouldStartOpen
}: TruncatedElementProps) => {
    const [isTruncated, setIsTruncated] = useState<boolean>(false);
    const [isShowingMore, setIsShowingMore] =
        useState<boolean>(shouldStartOpen);

    useLayoutEffect(() => {
        const { offsetHeight, scrollHeight } = ref.current || {};

        // Make the element truncated if it's taller than its parent.
        setIsTruncated(
            !!(offsetHeight && scrollHeight && offsetHeight < scrollHeight)
        );
    }, [ref]);

    const toggleIsShowingMore = () => setIsShowingMore((prev) => !prev);

    return {
        isTruncated,
        isShowingMore,
        toggleIsShowingMore
    };
};
