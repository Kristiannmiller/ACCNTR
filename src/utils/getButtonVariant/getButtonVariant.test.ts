import { BUTTON_VARIANTS } from '@/components';
import { GetButtonVariantOptions, getButtonVariant } from '.';

describe('util: getButtonVariant', () => {
    const testButtonVariant = ({
        options,
        expectedVariant
    }: {
        options: GetButtonVariantOptions;
        expectedVariant: BUTTON_VARIANTS | undefined;
    }) => {
        it(`should return ${expectedVariant} when ${JSON.stringify(
            options
        )}`, () => {
            const variant = getButtonVariant(options);
            expect(variant).toEqual(expectedVariant);
        });
    };

    // Tests are organized in sets of 6 (one for each background color)
    // seperated by comment regions describing which other variable has changed (theme, buttonStyle, order)

    //#region Corporate Theme - undefined Button - undefined Order

    testButtonVariant({
        options: {
            theme: 'Corporate',
            backgroundColor: 'achOrange',
            buttonStyle: undefined,
            order: undefined
        },
        expectedVariant: undefined
    });

    testButtonVariant({
        options: {
            theme: 'Corporate',
            backgroundColor: 'cchaPurple',
            buttonStyle: undefined,
            order: undefined
        },
        expectedVariant: undefined
    });

    testButtonVariant({
        options: {
            theme: 'Corporate',
            backgroundColor: 'denimBlue',
            buttonStyle: undefined,
            order: undefined
        },
        expectedVariant: undefined
    });

    testButtonVariant({
        options: {
            theme: 'Corporate',
            backgroundColor: 'wellnessBlue',
            buttonStyle: undefined,
            order: undefined
        },
        expectedVariant: undefined
    });

    testButtonVariant({
        options: {
            theme: 'Corporate',
            backgroundColor: 'white',
            buttonStyle: undefined,
            order: undefined
        },
        expectedVariant: undefined
    });

    testButtonVariant({
        options: {
            theme: 'Corporate',
            backgroundColor: 'whiteSmoke',
            buttonStyle: undefined,
            order: undefined
        },
        expectedVariant: undefined
    });

    //#endregion

    //#region Corporate Theme - Solid Button - undefined Order

    testButtonVariant({
        options: {
            theme: 'Corporate',
            backgroundColor: 'achOrange',
            buttonStyle: 'solid',
            order: undefined
        },
        expectedVariant: 'solid-1-inverse'
    });

    testButtonVariant({
        options: {
            theme: 'Corporate',
            backgroundColor: 'cchaPurple',
            buttonStyle: 'solid',
            order: undefined
        },
        expectedVariant: 'solid-1-inverse'
    });

    testButtonVariant({
        options: {
            theme: 'Corporate',
            backgroundColor: 'denimBlue',
            buttonStyle: 'solid',
            order: undefined
        },
        expectedVariant: 'solid1'
    });

    testButtonVariant({
        options: {
            theme: 'Corporate',
            backgroundColor: 'wellnessBlue',
            buttonStyle: 'solid',
            order: undefined
        },
        expectedVariant: 'solid-1-inverse'
    });

    testButtonVariant({
        options: {
            theme: 'Corporate',
            backgroundColor: 'white',
            buttonStyle: 'solid',
            order: undefined
        },
        expectedVariant: 'solid1'
    });

    testButtonVariant({
        options: {
            theme: 'Corporate',
            backgroundColor: 'whiteSmoke',
            buttonStyle: 'solid',
            order: undefined
        },
        expectedVariant: 'solid1'
    });

    //#endregion

    //#region Corporate Theme - Solid Button - First Order

    testButtonVariant({
        options: {
            theme: 'Corporate',
            backgroundColor: 'achOrange',
            buttonStyle: 'solid',
            order: 'first'
        },
        expectedVariant: 'solid-1-inverse'
    });

    testButtonVariant({
        options: {
            theme: 'Corporate',
            backgroundColor: 'cchaPurple',
            buttonStyle: 'solid',
            order: 'first'
        },
        expectedVariant: 'solid-1-inverse'
    });

    testButtonVariant({
        options: {
            theme: 'Corporate',
            backgroundColor: 'denimBlue',
            buttonStyle: 'solid',
            order: 'first'
        },
        expectedVariant: 'solid1'
    });

    testButtonVariant({
        options: {
            theme: 'Corporate',
            backgroundColor: 'wellnessBlue',
            buttonStyle: 'solid',
            order: 'first'
        },
        expectedVariant: 'solid-1-inverse'
    });

    testButtonVariant({
        options: {
            theme: 'Corporate',
            backgroundColor: 'white',
            buttonStyle: 'solid',
            order: 'first'
        },
        expectedVariant: 'solid1'
    });

    testButtonVariant({
        options: {
            theme: 'Corporate',
            backgroundColor: 'whiteSmoke',
            buttonStyle: 'solid',
            order: 'first'
        },
        expectedVariant: 'solid1'
    });

    //#endregion

    //#region Corporate Theme - Solid Button - Second Order

    testButtonVariant({
        options: {
            theme: 'Corporate',
            backgroundColor: 'achOrange',
            buttonStyle: 'solid',
            order: 'second'
        },
        expectedVariant: 'solid-1-inverse'
    });

    testButtonVariant({
        options: {
            theme: 'Corporate',
            backgroundColor: 'cchaPurple',
            buttonStyle: 'solid',
            order: 'second'
        },
        expectedVariant: 'solid-1-inverse'
    });

    testButtonVariant({
        options: {
            theme: 'Corporate',
            backgroundColor: 'denimBlue',
            buttonStyle: 'solid',
            order: 'second'
        },
        expectedVariant: 'solid1'
    });

    testButtonVariant({
        options: {
            theme: 'Corporate',
            backgroundColor: 'wellnessBlue',
            buttonStyle: 'solid',
            order: 'second'
        },
        expectedVariant: 'solid-1-inverse'
    });

    testButtonVariant({
        options: {
            theme: 'Corporate',
            backgroundColor: 'white',
            buttonStyle: 'solid',
            order: 'second'
        },
        expectedVariant: 'solid1'
    });

    testButtonVariant({
        options: {
            theme: 'Corporate',
            backgroundColor: 'whiteSmoke',
            buttonStyle: 'solid',
            order: 'second'
        },
        expectedVariant: 'solid1'
    });

    //#endregion

    //#region Corporate Theme - Outlined Button - undefined Order

    testButtonVariant({
        options: {
            theme: 'Corporate',
            backgroundColor: 'achOrange',
            buttonStyle: 'outlined',
            order: undefined
        },
        expectedVariant: 'solid-1-inverse'
    });

    testButtonVariant({
        options: {
            theme: 'Corporate',
            backgroundColor: 'cchaPurple',
            buttonStyle: 'outlined',
            order: undefined
        },
        expectedVariant: 'solid-1-inverse'
    });

    testButtonVariant({
        options: {
            theme: 'Corporate',
            backgroundColor: 'denimBlue',
            buttonStyle: 'outlined',
            order: undefined
        },
        expectedVariant: 'solid1'
    });

    testButtonVariant({
        options: {
            theme: 'Corporate',
            backgroundColor: 'wellnessBlue',
            buttonStyle: 'outlined',
            order: undefined
        },
        expectedVariant: 'solid-1-inverse'
    });

    testButtonVariant({
        options: {
            theme: 'Corporate',
            backgroundColor: 'white',
            buttonStyle: 'outlined',
            order: undefined
        },
        expectedVariant: 'solid1'
    });

    testButtonVariant({
        options: {
            theme: 'Corporate',
            backgroundColor: 'whiteSmoke',
            buttonStyle: 'outlined',
            order: undefined
        },
        expectedVariant: 'solid1'
    });

    //#endregion

    //#region Corporate Theme - Outlined Button - First Order

    testButtonVariant({
        options: {
            theme: 'Corporate',
            backgroundColor: 'achOrange',
            buttonStyle: 'outlined',
            order: 'first'
        },
        expectedVariant: 'solid-1-inverse'
    });

    testButtonVariant({
        options: {
            theme: 'Corporate',
            backgroundColor: 'cchaPurple',
            buttonStyle: 'outlined',
            order: 'first'
        },
        expectedVariant: 'solid-1-inverse'
    });

    testButtonVariant({
        options: {
            theme: 'Corporate',
            backgroundColor: 'denimBlue',
            buttonStyle: 'outlined',
            order: 'first'
        },
        expectedVariant: 'solid1'
    });

    testButtonVariant({
        options: {
            theme: 'Corporate',
            backgroundColor: 'wellnessBlue',
            buttonStyle: 'outlined',
            order: 'first'
        },
        expectedVariant: 'solid-1-inverse'
    });

    testButtonVariant({
        options: {
            theme: 'Corporate',
            backgroundColor: 'white',
            buttonStyle: 'outlined',
            order: 'first'
        },
        expectedVariant: 'solid1'
    });

    testButtonVariant({
        options: {
            theme: 'Corporate',
            backgroundColor: 'whiteSmoke',
            buttonStyle: 'outlined',
            order: 'first'
        },
        expectedVariant: 'solid1'
    });

    //#endregion

    //#region Corporate Theme - Outlined Button - Second Order

    testButtonVariant({
        options: {
            theme: 'Corporate',
            backgroundColor: 'achOrange',
            buttonStyle: 'outlined',
            order: 'second'
        },
        expectedVariant: 'solid-1-inverse'
    });

    testButtonVariant({
        options: {
            theme: 'Corporate',
            backgroundColor: 'cchaPurple',
            buttonStyle: 'outlined',
            order: 'second'
        },
        expectedVariant: 'solid-1-inverse'
    });

    testButtonVariant({
        options: {
            theme: 'Corporate',
            backgroundColor: 'denimBlue',
            buttonStyle: 'outlined',
            order: 'second'
        },
        expectedVariant: 'solid1'
    });

    testButtonVariant({
        options: {
            theme: 'Corporate',
            backgroundColor: 'wellnessBlue',
            buttonStyle: 'outlined',
            order: 'second'
        },
        expectedVariant: 'solid-1-inverse'
    });

    testButtonVariant({
        options: {
            theme: 'Corporate',
            backgroundColor: 'white',
            buttonStyle: 'outlined',
            order: 'second'
        },
        expectedVariant: 'solid1'
    });

    testButtonVariant({
        options: {
            theme: 'Corporate',
            backgroundColor: 'whiteSmoke',
            buttonStyle: 'outlined',
            order: 'second'
        },
        expectedVariant: 'solid1'
    });

    //#endregion

    //#region Corporate Theme - Link - undefined Order

    testButtonVariant({
        options: {
            theme: 'Corporate',
            backgroundColor: 'achOrange',
            buttonStyle: 'link',
            order: undefined
        },
        expectedVariant: undefined
    });

    testButtonVariant({
        options: {
            theme: 'Corporate',
            backgroundColor: 'cchaPurple',
            buttonStyle: 'link',
            order: undefined
        },
        expectedVariant: undefined
    });

    testButtonVariant({
        options: {
            theme: 'Corporate',
            backgroundColor: 'denimBlue',
            buttonStyle: 'link',
            order: undefined
        },
        expectedVariant: undefined
    });

    testButtonVariant({
        options: {
            theme: 'Corporate',
            backgroundColor: 'wellnessBlue',
            buttonStyle: 'link',
            order: undefined
        },
        expectedVariant: undefined
    });

    testButtonVariant({
        options: {
            theme: 'Corporate',
            backgroundColor: 'white',
            buttonStyle: 'link',
            order: undefined
        },
        expectedVariant: undefined
    });

    testButtonVariant({
        options: {
            theme: 'Corporate',
            backgroundColor: 'whiteSmoke',
            buttonStyle: 'link',
            order: undefined
        },
        expectedVariant: undefined
    });

    //#endregion

    //#region Corporate Theme - Link - First Order

    testButtonVariant({
        options: {
            theme: 'Corporate',
            backgroundColor: 'achOrange',
            buttonStyle: 'link',
            order: 'first'
        },
        expectedVariant: undefined
    });

    testButtonVariant({
        options: {
            theme: 'Corporate',
            backgroundColor: 'cchaPurple',
            buttonStyle: 'link',
            order: 'first'
        },
        expectedVariant: undefined
    });

    testButtonVariant({
        options: {
            theme: 'Corporate',
            backgroundColor: 'denimBlue',
            buttonStyle: 'link',
            order: 'first'
        },
        expectedVariant: undefined
    });

    testButtonVariant({
        options: {
            theme: 'Corporate',
            backgroundColor: 'wellnessBlue',
            buttonStyle: 'link',
            order: 'first'
        },
        expectedVariant: undefined
    });

    testButtonVariant({
        options: {
            theme: 'Corporate',
            backgroundColor: 'white',
            buttonStyle: 'link',
            order: 'first'
        },
        expectedVariant: undefined
    });

    testButtonVariant({
        options: {
            theme: 'Corporate',
            backgroundColor: 'whiteSmoke',
            buttonStyle: 'link',
            order: 'first'
        },
        expectedVariant: undefined
    });

    //#endregion

    //#region Corporate Theme - Link - Second Order

    testButtonVariant({
        options: {
            theme: 'Corporate',
            backgroundColor: 'achOrange',
            buttonStyle: 'link',
            order: 'second'
        },
        expectedVariant: undefined
    });

    testButtonVariant({
        options: {
            theme: 'Corporate',
            backgroundColor: 'cchaPurple',
            buttonStyle: 'link',
            order: 'second'
        },
        expectedVariant: undefined
    });

    testButtonVariant({
        options: {
            theme: 'Corporate',
            backgroundColor: 'denimBlue',
            buttonStyle: 'link',
            order: 'second'
        },
        expectedVariant: undefined
    });

    testButtonVariant({
        options: {
            theme: 'Corporate',
            backgroundColor: 'wellnessBlue',
            buttonStyle: 'link',
            order: 'second'
        },
        expectedVariant: undefined
    });

    testButtonVariant({
        options: {
            theme: 'Corporate',
            backgroundColor: 'white',
            buttonStyle: 'link',
            order: 'second'
        },
        expectedVariant: undefined
    });

    testButtonVariant({
        options: {
            theme: 'Corporate',
            backgroundColor: 'whiteSmoke',
            buttonStyle: 'link',
            order: 'second'
        },
        expectedVariant: undefined
    });

    //#endregion

    //#region Consumer Theme - undefined Button - undefined Order

    testButtonVariant({
        options: {
            theme: 'Consumer',
            backgroundColor: 'achOrange',
            buttonStyle: undefined,
            order: undefined
        },
        expectedVariant: undefined
    });

    testButtonVariant({
        options: {
            theme: 'Consumer',
            backgroundColor: 'cchaPurple',
            buttonStyle: undefined,
            order: undefined
        },
        expectedVariant: undefined
    });

    testButtonVariant({
        options: {
            theme: 'Consumer',
            backgroundColor: 'denimBlue',
            buttonStyle: undefined,
            order: undefined
        },
        expectedVariant: undefined
    });

    testButtonVariant({
        options: {
            theme: 'Consumer',
            backgroundColor: 'wellnessBlue',
            buttonStyle: undefined,
            order: undefined
        },
        expectedVariant: undefined
    });

    testButtonVariant({
        options: {
            theme: 'Consumer',
            backgroundColor: 'white',
            buttonStyle: undefined,
            order: undefined
        },
        expectedVariant: undefined
    });

    testButtonVariant({
        options: {
            theme: 'Consumer',
            backgroundColor: 'whiteSmoke',
            buttonStyle: undefined,
            order: undefined
        },
        expectedVariant: undefined
    });

    //#endregion

    //#region Consumer Theme - Solid Button - undefined Order

    testButtonVariant({
        options: {
            theme: 'Consumer',
            backgroundColor: 'achOrange',
            buttonStyle: 'solid',
            order: undefined
        },
        expectedVariant: 'solid-1-inverse'
    });

    testButtonVariant({
        options: {
            theme: 'Consumer',
            backgroundColor: 'cchaPurple',
            buttonStyle: 'solid',
            order: undefined
        },
        expectedVariant: 'solid-1-inverse'
    });

    testButtonVariant({
        options: {
            theme: 'Consumer',
            backgroundColor: 'denimBlue',
            buttonStyle: 'solid',
            order: undefined
        },
        expectedVariant: 'light1'
    });

    testButtonVariant({
        options: {
            theme: 'Consumer',
            backgroundColor: 'wellnessBlue',
            buttonStyle: 'solid',
            order: undefined
        },
        expectedVariant: 'light-inverse'
    });

    testButtonVariant({
        options: {
            theme: 'Consumer',
            backgroundColor: 'white',
            buttonStyle: 'solid',
            order: undefined
        },
        expectedVariant: 'solid1'
    });

    testButtonVariant({
        options: {
            theme: 'Consumer',
            backgroundColor: 'whiteSmoke',
            buttonStyle: 'solid',
            order: undefined
        },
        expectedVariant: 'solid1'
    });

    //#endregion

    //#region Consumer Theme - Solid Button - First Order

    testButtonVariant({
        options: {
            theme: 'Consumer',
            backgroundColor: 'achOrange',
            buttonStyle: 'solid',
            order: 'first'
        },
        expectedVariant: 'solid-1-inverse'
    });

    testButtonVariant({
        options: {
            theme: 'Consumer',
            backgroundColor: 'cchaPurple',
            buttonStyle: 'solid',
            order: 'first'
        },
        expectedVariant: 'solid-1-inverse'
    });

    testButtonVariant({
        options: {
            theme: 'Consumer',
            backgroundColor: 'denimBlue',
            buttonStyle: 'solid',
            order: 'first'
        },
        expectedVariant: 'light1'
    });

    testButtonVariant({
        options: {
            theme: 'Consumer',
            backgroundColor: 'wellnessBlue',
            buttonStyle: 'solid',
            order: 'first'
        },
        expectedVariant: 'light-inverse'
    });

    testButtonVariant({
        options: {
            theme: 'Consumer',
            backgroundColor: 'white',
            buttonStyle: 'solid',
            order: 'first'
        },
        expectedVariant: 'solid1'
    });

    testButtonVariant({
        options: {
            theme: 'Consumer',
            backgroundColor: 'whiteSmoke',
            buttonStyle: 'solid',
            order: 'first'
        },
        expectedVariant: 'solid1'
    });

    //#endregion

    //#region Consumer Theme - Solid Button - Second Order

    testButtonVariant({
        options: {
            theme: 'Consumer',
            backgroundColor: 'achOrange',
            buttonStyle: 'solid',
            order: 'second'
        },
        expectedVariant: 'solid-1-inverse'
    });

    testButtonVariant({
        options: {
            theme: 'Consumer',
            backgroundColor: 'cchaPurple',
            buttonStyle: 'solid',
            order: 'second'
        },
        expectedVariant: 'solid-1-inverse'
    });

    testButtonVariant({
        options: {
            theme: 'Consumer',
            backgroundColor: 'denimBlue',
            buttonStyle: 'solid',
            order: 'second'
        },
        expectedVariant: 'light1'
    });

    testButtonVariant({
        options: {
            theme: 'Consumer',
            backgroundColor: 'wellnessBlue',
            buttonStyle: 'solid',
            order: 'second'
        },
        expectedVariant: 'light-inverse'
    });

    testButtonVariant({
        options: {
            theme: 'Consumer',
            backgroundColor: 'white',
            buttonStyle: 'solid',
            order: 'second'
        },
        expectedVariant: 'solid2'
    });

    testButtonVariant({
        options: {
            theme: 'Consumer',
            backgroundColor: 'whiteSmoke',
            buttonStyle: 'solid',
            order: 'second'
        },
        expectedVariant: 'solid2'
    });

    //#endregion

    //#region Consumer Theme - Outlined Button - undefined Order

    testButtonVariant({
        options: {
            theme: 'Consumer',
            backgroundColor: 'achOrange',
            buttonStyle: 'outlined',
            order: undefined
        },
        expectedVariant: 'outlined-alt'
    });

    testButtonVariant({
        options: {
            theme: 'Consumer',
            backgroundColor: 'cchaPurple',
            buttonStyle: 'outlined',
            order: undefined
        },
        expectedVariant: 'outlined-inverse'
    });

    testButtonVariant({
        options: {
            theme: 'Consumer',
            backgroundColor: 'denimBlue',
            buttonStyle: 'outlined',
            order: undefined
        },
        expectedVariant: 'outlined-inverse'
    });

    testButtonVariant({
        options: {
            theme: 'Consumer',
            backgroundColor: 'wellnessBlue',
            buttonStyle: 'outlined',
            order: undefined
        },
        expectedVariant: 'outlined-inverse'
    });

    testButtonVariant({
        options: {
            theme: 'Consumer',
            backgroundColor: 'white',
            buttonStyle: 'outlined',
            order: undefined
        },
        expectedVariant: 'outlined'
    });

    testButtonVariant({
        options: {
            theme: 'Consumer',
            backgroundColor: 'whiteSmoke',
            buttonStyle: 'outlined',
            order: undefined
        },
        expectedVariant: 'outlined'
    });

    //#endregion

    //#region Consumer Theme - Outlined Button - First Order

    testButtonVariant({
        options: {
            theme: 'Consumer',
            backgroundColor: 'achOrange',
            buttonStyle: 'outlined',
            order: 'first'
        },
        expectedVariant: 'outlined-alt'
    });

    testButtonVariant({
        options: {
            theme: 'Consumer',
            backgroundColor: 'cchaPurple',
            buttonStyle: 'outlined',
            order: 'first'
        },
        expectedVariant: 'outlined-inverse'
    });

    testButtonVariant({
        options: {
            theme: 'Consumer',
            backgroundColor: 'denimBlue',
            buttonStyle: 'outlined',
            order: 'first'
        },
        expectedVariant: 'outlined-inverse'
    });

    testButtonVariant({
        options: {
            theme: 'Consumer',
            backgroundColor: 'wellnessBlue',
            buttonStyle: 'outlined',
            order: 'first'
        },
        expectedVariant: 'outlined-inverse'
    });

    testButtonVariant({
        options: {
            theme: 'Consumer',
            backgroundColor: 'white',
            buttonStyle: 'outlined',
            order: 'first'
        },
        expectedVariant: 'outlined'
    });

    testButtonVariant({
        options: {
            theme: 'Consumer',
            backgroundColor: 'whiteSmoke',
            buttonStyle: 'outlined',
            order: 'first'
        },
        expectedVariant: 'outlined'
    });

    //#endregion

    //#region Consumer Theme - Outlined Button - Second Order

    testButtonVariant({
        options: {
            theme: 'Consumer',
            backgroundColor: 'achOrange',
            buttonStyle: 'outlined',
            order: 'second'
        },
        expectedVariant: 'outlined-alt'
    });

    testButtonVariant({
        options: {
            theme: 'Consumer',
            backgroundColor: 'cchaPurple',
            buttonStyle: 'outlined',
            order: 'second'
        },
        expectedVariant: 'outlined-inverse'
    });

    testButtonVariant({
        options: {
            theme: 'Consumer',
            backgroundColor: 'denimBlue',
            buttonStyle: 'outlined',
            order: 'second'
        },
        expectedVariant: 'outlined-inverse'
    });

    testButtonVariant({
        options: {
            theme: 'Consumer',
            backgroundColor: 'wellnessBlue',
            buttonStyle: 'outlined',
            order: 'second'
        },
        expectedVariant: 'outlined-inverse'
    });

    testButtonVariant({
        options: {
            theme: 'Consumer',
            backgroundColor: 'white',
            buttonStyle: 'outlined',
            order: 'second'
        },
        expectedVariant: 'outlined'
    });

    testButtonVariant({
        options: {
            theme: 'Consumer',
            backgroundColor: 'whiteSmoke',
            buttonStyle: 'outlined',
            order: 'second'
        },
        expectedVariant: 'outlined'
    });

    //#endregion

    //#region Consumer Theme - Link - undefined Order

    testButtonVariant({
        options: {
            theme: 'Consumer',
            backgroundColor: 'achOrange',
            buttonStyle: 'link',
            order: undefined
        },
        expectedVariant: undefined
    });

    testButtonVariant({
        options: {
            theme: 'Consumer',
            backgroundColor: 'cchaPurple',
            buttonStyle: 'link',
            order: undefined
        },
        expectedVariant: undefined
    });

    testButtonVariant({
        options: {
            theme: 'Consumer',
            backgroundColor: 'denimBlue',
            buttonStyle: 'link',
            order: undefined
        },
        expectedVariant: undefined
    });

    testButtonVariant({
        options: {
            theme: 'Consumer',
            backgroundColor: 'wellnessBlue',
            buttonStyle: 'link',
            order: undefined
        },
        expectedVariant: undefined
    });

    testButtonVariant({
        options: {
            theme: 'Consumer',
            backgroundColor: 'white',
            buttonStyle: 'link',
            order: undefined
        },
        expectedVariant: undefined
    });

    testButtonVariant({
        options: {
            theme: 'Consumer',
            backgroundColor: 'whiteSmoke',
            buttonStyle: 'link',
            order: undefined
        },
        expectedVariant: undefined
    });

    //#endregion

    //#region Consumer Theme - Link - First Order

    testButtonVariant({
        options: {
            theme: 'Consumer',
            backgroundColor: 'achOrange',
            buttonStyle: 'link',
            order: 'first'
        },
        expectedVariant: undefined
    });

    testButtonVariant({
        options: {
            theme: 'Consumer',
            backgroundColor: 'cchaPurple',
            buttonStyle: 'link',
            order: 'first'
        },
        expectedVariant: undefined
    });

    testButtonVariant({
        options: {
            theme: 'Consumer',
            backgroundColor: 'denimBlue',
            buttonStyle: 'link',
            order: 'first'
        },
        expectedVariant: undefined
    });

    testButtonVariant({
        options: {
            theme: 'Consumer',
            backgroundColor: 'wellnessBlue',
            buttonStyle: 'link',
            order: 'first'
        },
        expectedVariant: undefined
    });

    testButtonVariant({
        options: {
            theme: 'Consumer',
            backgroundColor: 'white',
            buttonStyle: 'link',
            order: 'first'
        },
        expectedVariant: undefined
    });

    testButtonVariant({
        options: {
            theme: 'Consumer',
            backgroundColor: 'whiteSmoke',
            buttonStyle: 'link',
            order: 'first'
        },
        expectedVariant: undefined
    });

    //#endregion

    //#region Consumer Theme - Link - Second Order

    testButtonVariant({
        options: {
            theme: 'Consumer',
            backgroundColor: 'achOrange',
            buttonStyle: 'link',
            order: 'second'
        },
        expectedVariant: undefined
    });

    testButtonVariant({
        options: {
            theme: 'Consumer',
            backgroundColor: 'cchaPurple',
            buttonStyle: 'link',
            order: 'second'
        },
        expectedVariant: undefined
    });

    testButtonVariant({
        options: {
            theme: 'Consumer',
            backgroundColor: 'denimBlue',
            buttonStyle: 'link',
            order: 'second'
        },
        expectedVariant: undefined
    });

    testButtonVariant({
        options: {
            theme: 'Consumer',
            backgroundColor: 'wellnessBlue',
            buttonStyle: 'link',
            order: 'second'
        },
        expectedVariant: undefined
    });

    testButtonVariant({
        options: {
            theme: 'Consumer',
            backgroundColor: 'white',
            buttonStyle: 'link',
            order: 'second'
        },
        expectedVariant: undefined
    });

    testButtonVariant({
        options: {
            theme: 'Consumer',
            backgroundColor: 'whiteSmoke',
            buttonStyle: 'link',
            order: 'second'
        },
        expectedVariant: undefined
    });

    //#endregion

    //#region Childrens Theme - undefined Button - undefined Order

    testButtonVariant({
        options: {
            theme: 'Childrens',
            backgroundColor: 'achOrange',
            buttonStyle: undefined,
            order: undefined
        },
        expectedVariant: undefined
    });

    testButtonVariant({
        options: {
            theme: 'Childrens',
            backgroundColor: 'cchaPurple',
            buttonStyle: undefined,
            order: undefined
        },
        expectedVariant: undefined
    });

    testButtonVariant({
        options: {
            theme: 'Childrens',
            backgroundColor: 'denimBlue',
            buttonStyle: undefined,
            order: undefined
        },
        expectedVariant: undefined
    });

    testButtonVariant({
        options: {
            theme: 'Childrens',
            backgroundColor: 'wellnessBlue',
            buttonStyle: undefined,
            order: undefined
        },
        expectedVariant: undefined
    });

    testButtonVariant({
        options: {
            theme: 'Childrens',
            backgroundColor: 'white',
            buttonStyle: undefined,
            order: undefined
        },
        expectedVariant: undefined
    });

    testButtonVariant({
        options: {
            theme: 'Childrens',
            backgroundColor: 'whiteSmoke',
            buttonStyle: undefined,
            order: undefined
        },
        expectedVariant: undefined
    });

    //#endregion

    //#region Childrens Theme - Solid Button - undefined Order

    testButtonVariant({
        options: {
            theme: 'Childrens',
            backgroundColor: 'achOrange',
            buttonStyle: 'solid',
            order: undefined
        },
        expectedVariant: 'solid-1-inverse'
    });

    testButtonVariant({
        options: {
            theme: 'Childrens',
            backgroundColor: 'cchaPurple',
            buttonStyle: 'solid',
            order: undefined
        },
        expectedVariant: 'solid-1-inverse'
    });

    testButtonVariant({
        options: {
            theme: 'Childrens',
            backgroundColor: 'denimBlue',
            buttonStyle: 'solid',
            order: undefined
        },
        expectedVariant: 'light1'
    });

    testButtonVariant({
        options: {
            theme: 'Childrens',
            backgroundColor: 'wellnessBlue',
            buttonStyle: 'solid',
            order: undefined
        },
        expectedVariant: 'light-inverse'
    });

    testButtonVariant({
        options: {
            theme: 'Childrens',
            backgroundColor: 'white',
            buttonStyle: 'solid',
            order: undefined
        },
        expectedVariant: 'solid1'
    });

    testButtonVariant({
        options: {
            theme: 'Childrens',
            backgroundColor: 'whiteSmoke',
            buttonStyle: 'solid',
            order: undefined
        },
        expectedVariant: 'solid1'
    });

    //#endregion

    //#region Childrens Theme - Solid Button - First Order

    testButtonVariant({
        options: {
            theme: 'Childrens',
            backgroundColor: 'achOrange',
            buttonStyle: 'solid',
            order: 'first'
        },
        expectedVariant: 'solid-1-inverse'
    });

    testButtonVariant({
        options: {
            theme: 'Childrens',
            backgroundColor: 'cchaPurple',
            buttonStyle: 'solid',
            order: 'first'
        },
        expectedVariant: 'solid-1-inverse'
    });

    testButtonVariant({
        options: {
            theme: 'Childrens',
            backgroundColor: 'denimBlue',
            buttonStyle: 'solid',
            order: 'first'
        },
        expectedVariant: 'light1'
    });

    testButtonVariant({
        options: {
            theme: 'Childrens',
            backgroundColor: 'wellnessBlue',
            buttonStyle: 'solid',
            order: 'first'
        },
        expectedVariant: 'light-inverse'
    });

    testButtonVariant({
        options: {
            theme: 'Childrens',
            backgroundColor: 'white',
            buttonStyle: 'solid',
            order: 'first'
        },
        expectedVariant: 'solid1'
    });

    testButtonVariant({
        options: {
            theme: 'Childrens',
            backgroundColor: 'whiteSmoke',
            buttonStyle: 'solid',
            order: 'first'
        },
        expectedVariant: 'solid1'
    });

    //#endregion

    //#region Childrens Theme - Solid Button - Second Order

    testButtonVariant({
        options: {
            theme: 'Childrens',
            backgroundColor: 'achOrange',
            buttonStyle: 'solid',
            order: 'second'
        },
        expectedVariant: 'solid-1-inverse'
    });

    testButtonVariant({
        options: {
            theme: 'Childrens',
            backgroundColor: 'cchaPurple',
            buttonStyle: 'solid',
            order: 'second'
        },
        expectedVariant: 'solid-1-inverse'
    });

    testButtonVariant({
        options: {
            theme: 'Childrens',
            backgroundColor: 'denimBlue',
            buttonStyle: 'solid',
            order: 'second'
        },
        expectedVariant: 'light1'
    });

    testButtonVariant({
        options: {
            theme: 'Childrens',
            backgroundColor: 'wellnessBlue',
            buttonStyle: 'solid',
            order: 'second'
        },
        expectedVariant: 'light-inverse'
    });

    testButtonVariant({
        options: {
            theme: 'Childrens',
            backgroundColor: 'white',
            buttonStyle: 'solid',
            order: 'second'
        },
        expectedVariant: 'solid2'
    });

    testButtonVariant({
        options: {
            theme: 'Childrens',
            backgroundColor: 'whiteSmoke',
            buttonStyle: 'solid',
            order: 'second'
        },
        expectedVariant: 'solid2'
    });

    //#endregion

    //#region Childrens Theme - Outlined Button - undefined Order

    testButtonVariant({
        options: {
            theme: 'Childrens',
            backgroundColor: 'achOrange',
            buttonStyle: 'outlined',
            order: undefined
        },
        expectedVariant: 'outlined-alt'
    });

    testButtonVariant({
        options: {
            theme: 'Childrens',
            backgroundColor: 'cchaPurple',
            buttonStyle: 'outlined',
            order: undefined
        },
        expectedVariant: 'outlined-inverse'
    });

    testButtonVariant({
        options: {
            theme: 'Childrens',
            backgroundColor: 'denimBlue',
            buttonStyle: 'outlined',
            order: undefined
        },
        expectedVariant: 'outlined-inverse'
    });

    testButtonVariant({
        options: {
            theme: 'Childrens',
            backgroundColor: 'wellnessBlue',
            buttonStyle: 'outlined',
            order: undefined
        },
        expectedVariant: 'outlined-inverse'
    });

    testButtonVariant({
        options: {
            theme: 'Childrens',
            backgroundColor: 'white',
            buttonStyle: 'outlined',
            order: undefined
        },
        expectedVariant: 'outlined'
    });

    testButtonVariant({
        options: {
            theme: 'Childrens',
            backgroundColor: 'whiteSmoke',
            buttonStyle: 'outlined',
            order: undefined
        },
        expectedVariant: 'outlined'
    });

    //#endregion

    //#region Childrens Theme - Outlined Button - First Order

    testButtonVariant({
        options: {
            theme: 'Childrens',
            backgroundColor: 'achOrange',
            buttonStyle: 'outlined',
            order: 'first'
        },
        expectedVariant: 'outlined-alt'
    });

    testButtonVariant({
        options: {
            theme: 'Childrens',
            backgroundColor: 'cchaPurple',
            buttonStyle: 'outlined',
            order: 'first'
        },
        expectedVariant: 'outlined-inverse'
    });

    testButtonVariant({
        options: {
            theme: 'Childrens',
            backgroundColor: 'denimBlue',
            buttonStyle: 'outlined',
            order: 'first'
        },
        expectedVariant: 'outlined-inverse'
    });

    testButtonVariant({
        options: {
            theme: 'Childrens',
            backgroundColor: 'wellnessBlue',
            buttonStyle: 'outlined',
            order: 'first'
        },
        expectedVariant: 'outlined-inverse'
    });

    testButtonVariant({
        options: {
            theme: 'Childrens',
            backgroundColor: 'white',
            buttonStyle: 'outlined',
            order: 'first'
        },
        expectedVariant: 'outlined'
    });

    testButtonVariant({
        options: {
            theme: 'Childrens',
            backgroundColor: 'whiteSmoke',
            buttonStyle: 'outlined',
            order: 'first'
        },
        expectedVariant: 'outlined'
    });

    //#endregion

    //#region Childrens Theme - Outlined Button - Second Order

    testButtonVariant({
        options: {
            theme: 'Childrens',
            backgroundColor: 'achOrange',
            buttonStyle: 'outlined',
            order: 'second'
        },
        expectedVariant: 'outlined-alt'
    });

    testButtonVariant({
        options: {
            theme: 'Childrens',
            backgroundColor: 'cchaPurple',
            buttonStyle: 'outlined',
            order: 'second'
        },
        expectedVariant: 'outlined-inverse'
    });

    testButtonVariant({
        options: {
            theme: 'Childrens',
            backgroundColor: 'denimBlue',
            buttonStyle: 'outlined',
            order: 'second'
        },
        expectedVariant: 'outlined-inverse'
    });

    testButtonVariant({
        options: {
            theme: 'Childrens',
            backgroundColor: 'wellnessBlue',
            buttonStyle: 'outlined',
            order: 'second'
        },
        expectedVariant: 'outlined-inverse'
    });

    testButtonVariant({
        options: {
            theme: 'Childrens',
            backgroundColor: 'white',
            buttonStyle: 'outlined',
            order: 'second'
        },
        expectedVariant: 'outlined'
    });

    testButtonVariant({
        options: {
            theme: 'Childrens',
            backgroundColor: 'whiteSmoke',
            buttonStyle: 'outlined',
            order: 'second'
        },
        expectedVariant: 'outlined'
    });

    //#endregion

    //#region Childrens Theme - Link - undefined Order

    testButtonVariant({
        options: {
            theme: 'Childrens',
            backgroundColor: 'achOrange',
            buttonStyle: 'link',
            order: undefined
        },
        expectedVariant: undefined
    });

    testButtonVariant({
        options: {
            theme: 'Childrens',
            backgroundColor: 'cchaPurple',
            buttonStyle: 'link',
            order: undefined
        },
        expectedVariant: undefined
    });

    testButtonVariant({
        options: {
            theme: 'Childrens',
            backgroundColor: 'denimBlue',
            buttonStyle: 'link',
            order: undefined
        },
        expectedVariant: undefined
    });

    testButtonVariant({
        options: {
            theme: 'Childrens',
            backgroundColor: 'wellnessBlue',
            buttonStyle: 'link',
            order: undefined
        },
        expectedVariant: undefined
    });

    testButtonVariant({
        options: {
            theme: 'Childrens',
            backgroundColor: 'white',
            buttonStyle: 'link',
            order: undefined
        },
        expectedVariant: undefined
    });

    testButtonVariant({
        options: {
            theme: 'Childrens',
            backgroundColor: 'whiteSmoke',
            buttonStyle: 'link',
            order: undefined
        },
        expectedVariant: undefined
    });

    //#endregion

    //#region Childrens Theme - Link - First Order

    testButtonVariant({
        options: {
            theme: 'Childrens',
            backgroundColor: 'achOrange',
            buttonStyle: 'link',
            order: 'first'
        },
        expectedVariant: undefined
    });

    testButtonVariant({
        options: {
            theme: 'Childrens',
            backgroundColor: 'cchaPurple',
            buttonStyle: 'link',
            order: 'first'
        },
        expectedVariant: undefined
    });

    testButtonVariant({
        options: {
            theme: 'Childrens',
            backgroundColor: 'denimBlue',
            buttonStyle: 'link',
            order: 'first'
        },
        expectedVariant: undefined
    });

    testButtonVariant({
        options: {
            theme: 'Childrens',
            backgroundColor: 'wellnessBlue',
            buttonStyle: 'link',
            order: 'first'
        },
        expectedVariant: undefined
    });

    testButtonVariant({
        options: {
            theme: 'Childrens',
            backgroundColor: 'white',
            buttonStyle: 'link',
            order: 'first'
        },
        expectedVariant: undefined
    });

    testButtonVariant({
        options: {
            theme: 'Childrens',
            backgroundColor: 'whiteSmoke',
            buttonStyle: 'link',
            order: 'first'
        },
        expectedVariant: undefined
    });

    //#endregion

    //#region Childrens Theme - Link - Second Order

    testButtonVariant({
        options: {
            theme: 'Childrens',
            backgroundColor: 'achOrange',
            buttonStyle: 'link',
            order: 'second'
        },
        expectedVariant: undefined
    });

    testButtonVariant({
        options: {
            theme: 'Childrens',
            backgroundColor: 'cchaPurple',
            buttonStyle: 'link',
            order: 'second'
        },
        expectedVariant: undefined
    });

    testButtonVariant({
        options: {
            theme: 'Childrens',
            backgroundColor: 'denimBlue',
            buttonStyle: 'link',
            order: 'second'
        },
        expectedVariant: undefined
    });

    testButtonVariant({
        options: {
            theme: 'Childrens',
            backgroundColor: 'wellnessBlue',
            buttonStyle: 'link',
            order: 'second'
        },
        expectedVariant: undefined
    });

    testButtonVariant({
        options: {
            theme: 'Childrens',
            backgroundColor: 'white',
            buttonStyle: 'link',
            order: 'second'
        },
        expectedVariant: undefined
    });

    testButtonVariant({
        options: {
            theme: 'Childrens',
            backgroundColor: 'whiteSmoke',
            buttonStyle: 'link',
            order: 'second'
        },
        expectedVariant: undefined
    });

    //#endregion
});
