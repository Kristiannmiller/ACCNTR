// eslint-disable-next-line no-irregular-whitespace
const allowedCharacters = /^[A-Za-z0-9\-',.!@#$%\\/:;"<>?&*()_+‘’“”  ]+$/;

export const hasValidInputChars = (input: string): boolean => {
    const regex = new RegExp(allowedCharacters);

    return regex.test(input);
};
