// Components
import { Text, RichText, Anchor } from '@/components';

// Types
import { CardProps } from '@/components';
import { ELEVATION_TYPES, COLOR_BAR_TYPES } from '@/types';

const mockCardDefault: CardProps = {
    elevation: 'elevation2',
    children: (
        <>
            <Text fontStyle='mdHeading'>Card title</Text>
            <RichText>
                <p>
                    lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </RichText>
            <Anchor
                variant='solid1'
                size='medium'
                href='#'>
                Link
            </Anchor>
        </>
    )
};

const mockCardColorBars: Record<'none' | COLOR_BAR_TYPES, CardProps> = {
    none: {
        ...mockCardDefault,
        topColorBar: 'none'
    },
    denimBlue: {
        ...mockCardDefault,
        topColorBar: 'denimBlue'
    },
    wellnessBlue: {
        ...mockCardDefault,
        topColorBar: 'wellnessBlue'
    },
    childrensAlliance: {
        ...mockCardDefault,
        topColorBar: 'childrensAlliance'
    },
    childrensBlue: {
        ...mockCardDefault,
        topColorBar: 'childrensBlue'
    },
    childrensGreen: {
        ...mockCardDefault,
        topColorBar: 'childrensGreen'
    },
    childrensOrange: {
        ...mockCardDefault,
        topColorBar: 'childrensOrange'
    },
    childrensPurple: {
        ...mockCardDefault,
        topColorBar: 'childrensPurple'
    },
    childrensYellow: {
        ...mockCardDefault,
        topColorBar: 'childrensYellow'
    }
};

const mockCardElevations: Record<ELEVATION_TYPES | 'none', CardProps> = {
    none: {
        ...mockCardDefault,
        elevation: 'none'
    },
    elevation1: {
        ...mockCardDefault,
        elevation: 'elevation1'
    },
    elevation2: {
        ...mockCardDefault,
        elevation: 'elevation2'
    },
    elevation3: {
        ...mockCardDefault,
        elevation: 'elevation3'
    }
};

export const mockCards = {
    default: mockCardDefault,
    elevations: mockCardElevations,
    colorBars: mockCardColorBars
};
