import { classNameRegex } from '@/utils';

describe('classNameRegex', () => {
    it('should return a regex match for the className', () => {
        const classNames = 'button-primary button-large';
        expect(classNameRegex(classNames)).toEqual(
            /(button-primary|button-large)/g
        );
    });
});
