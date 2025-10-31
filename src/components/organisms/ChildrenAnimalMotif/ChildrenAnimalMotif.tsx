import { ComponentProps, ReactNode } from 'react';

// Components
import { Container, ThoughtBubbleSVG } from '@/components';

// Styles
import styles from './ChildrenAnimalMotif.module.scss';

// Types
export type AnimalMotif = {
    image: ReactNode;
    quote: ReactNode;
};

export type ChildrenAnimalMotifProps = ComponentProps<typeof Container> & {
    animals: AnimalMotif[];
    staticMobileImage: ReactNode;
    randomAnimalIndex?: number;
};

export const ChildrenAnimalMotif = (props: ChildrenAnimalMotifProps) => {
    const {
        className,
        animals,
        randomAnimalIndex = 0,
        staticMobileImage,
        ...rest
    } = props;

    return (
        <Container
            className={className}
            {...rest}>
            <div
                className={styles['children-animal-motif-base']}
                data-testid='children-animal-motif'>
                {/* Mobile only image */}
                {staticMobileImage}

                {/* Tablet up animals */}
                {animals.map((animal, idx) => {
                    const { quote, image } = animal;
                    return (
                        <div
                            className={styles['animal']}
                            data-testid='childrens-animal-motif-animal'
                            key={idx}>
                            {/* Animal pal */}
                            {image}

                            {/* Optional: Animal quote bubble */}
                            {randomAnimalIndex === idx && (
                                <div
                                    className={styles['bubble']}
                                    data-testid='childrens-animal-motif-bubbles'>
                                    <ThoughtBubbleSVG />
                                    {quote}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </Container>
    );
};
