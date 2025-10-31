import { ComponentProps } from 'react';

// Components
import { ContentContainer, RichText } from '@/components';

export type RichTextRenderingProps = ComponentProps<typeof ContentContainer>;

export const RichTextRendering = (props: RichTextRenderingProps) => {
    const { className, children, ...rest } = props;
    return (
        <ContentContainer
            className={className}
            spacing='40-24'
            data-testid='rich-text-rendering'
            {...rest}>
            <RichText>{children}</RichText>
        </ContentContainer>
    );
};
