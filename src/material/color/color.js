import { Hct } from "@material/material-color-utilities";
import { argbFromHex, themeFromSourceColor, themeFromImage, applyTheme } from "@material/material-color-utilities";

/**
 * @module Color
 */
/**
 * @typedef {Array} SetThemeCustomColor
 * @property {Number} value
 * @property {String} name
 * @property {Boolean} blend
 */
/**
 * @memberof module:Color
 * @async
 * @param {String|HTMLImageElement} input
 * @param {SetThemeCustomColor} customColors
 */
async function setTheme(input, customColors) {
    let theme;
    if (input instanceof HTMLImageElement) {
        theme = await themeFromImage(image, customColors);
    } else {
        theme = themeFromSourceColor(argbFromHex(input), customColors);
    }

    theme.schemes.dark.props.surfaceDim = theme.palettes.neutral.tone(6);
    theme.schemes.dark.props.surfaceBright = theme.palettes.neutral.tone(24);
    theme.schemes.dark.props.surfaceContainerLowest = theme.palettes.neutral.tone(4);
    theme.schemes.dark.props.surfaceContainerLow = theme.palettes.neutral.tone(10);
    theme.schemes.dark.props.surfaceContainer = theme.palettes.neutral.tone(12);
    theme.schemes.dark.props.surfaceContainerHigh = theme.palettes.neutral.tone(17);
    theme.schemes.dark.props.surfaceContainerHighest = theme.palettes.neutral.tone(22);

    theme.schemes.light.props.surfaceDim = theme.palettes.neutral.tone(87);
    theme.schemes.light.props.surfaceBright = theme.palettes.neutral.tone(98);
    theme.schemes.light.props.surfaceContainerLowest = theme.palettes.neutral.tone(100);
    theme.schemes.light.props.surfaceContainerLow = theme.palettes.neutral.tone(96);
    theme.schemes.light.props.surfaceContainer = theme.palettes.neutral.tone(94);
    theme.schemes.light.props.surfaceContainerHigh = theme.palettes.neutral.tone(92);
    theme.schemes.light.props.surfaceContainerHighest = theme.palettes.neutral.tone(90);

    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    applyTheme(theme, { target: document.body, dark: systemDark });
}

export { setTheme };
