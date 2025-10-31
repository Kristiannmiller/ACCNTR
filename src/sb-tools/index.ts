/** Disable controls for specific properties.
 * Useful for hiding controls that are not meant to be changed by the user, or for properties that are not meant to be changed in the context of the story.
 * @link https://storybook.js.org/docs/essentials/controls#disable-controls-for-specific-properties
 */
export const disabledControl = { table: { disable: true } };

export const booleanControl = {
    control: {
        type: 'boolean'
    }
};

export const textControl = {
    control: {
        type: 'text'
    }
};
