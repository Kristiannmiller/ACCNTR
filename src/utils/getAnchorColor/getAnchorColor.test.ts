import { ANCHOR_COLOR_TYPES } from '@/types';
import { GetAnchorColorOptions, getAnchorColor } from './index';

describe('util: getAnchorColor', () => {
    const testAnchorColor = ({
        options,
        expectedColor
    }: {
        options: GetAnchorColorOptions;
        expectedColor: ANCHOR_COLOR_TYPES;
    }) => {
        it(`should return ${expectedColor} when ${JSON.stringify(
            options
        )}`, () => {
            const variant = getAnchorColor(options);
            expect(variant).toEqual(expectedColor);
        });
    };

    testAnchorColor({
        options: { backgroundColor: 'achOrange' },
        expectedColor: 'alt'
    });

    testAnchorColor({
        options: { backgroundColor: 'cchaPurple' },
        expectedColor: 'inverse'
    });

    testAnchorColor({
        options: { backgroundColor: 'denimBlue' },
        expectedColor: 'inverse'
    });

    testAnchorColor({
        options: { backgroundColor: 'wellnessBlue' },
        expectedColor: 'inverse'
    });

    testAnchorColor({
        options: { backgroundColor: 'white' },
        expectedColor: 'default'
    });

    testAnchorColor({
        options: { backgroundColor: 'whiteSmoke' },
        expectedColor: 'default'
    });
});
