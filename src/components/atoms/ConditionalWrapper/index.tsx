import { PropsWithChildren, ReactNode } from 'react';

type Props = PropsWithChildren<{
    condition: boolean;
    wrapper(children: ReactNode | undefined): React.ReactElement;
}>;

export const ConditionalWrapper = ({ condition, wrapper, children }: Props) =>
    condition ? wrapper(children) : children;
