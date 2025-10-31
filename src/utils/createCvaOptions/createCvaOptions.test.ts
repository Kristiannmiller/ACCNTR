import { createCvaOptions } from '.';

describe('util: createCvaOptions', () => {
    it('should return an object where every key from the provided type T is defined and the values are string arrays', () => {
        type TEST_TYPES = 'primary' | 'secondary';

        const variantOptions = createCvaOptions<TEST_TYPES>({
            primary: ['test-class', 'test-class--modifier'],
            secondary: ['test-class-2']
        });

        expect(variantOptions).toEqual({
            primary: ['test-class', 'test-class--modifier'],
            secondary: ['test-class-2']
        });
    });

    it('should return an object where every key from the provided type T is defined and the values are strings', () => {
        type TEST_TYPES = 'primary' | 'secondary';

        const variantOptions = createCvaOptions<TEST_TYPES>({
            primary: 'test-class',
            secondary: 'test-class-2'
        });

        expect(variantOptions).toEqual({
            primary: 'test-class',
            secondary: 'test-class-2'
        });
    });
});
