import { hasValidInputChars } from './';

describe('hasValidInputChars', () => {
    it('should allow basic alphabetic characters', () => {
        expect(hasValidInputChars('ABCdef')).toBe(true);
    });

    it('should allow basic numeric characters', () => {
        expect(hasValidInputChars('1234567890')).toBe(true);
    });

    it('should allow basic special characters', () => {
        expect(hasValidInputChars("-.!',")).toBe(true);
    });

    it('should allow combination of allowed characters', () => {
        expect(hasValidInputChars('St. John!@# $%')).toBe(true);
    });

    it('should disallow single disallowed character', () => {
        expect(hasValidInputChars('^')).toBe(false);
    });

    it('should disallow combination of allowed and disallowed characters', () => {
        expect(hasValidInputChars('Allowed^NotAllowed')).toBe(false);
    });

    it('should allow string with only non-leading/trailing spaces', () => {
        expect(hasValidInputChars('St. John')).toBe(true);
    });

    it('should disallow string with multiple disallowed characters', () => {
        expect(hasValidInputChars('Invalid{String}With[Characters]')).toBe(
            false
        );
    });

    it('should allow string with edge case allowed characters', () => {
        expect(hasValidInputChars('“St. John’s”')).toBe(true);
    });
});
