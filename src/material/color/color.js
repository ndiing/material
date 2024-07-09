import { argbFromHex, themeFromSourceColor, applyTheme, themeFromImage } from "@material/material-color-utilities";
import { isValidHexColor } from "../functions/functions";

/**
 * Sets the theme of the application based on a color or image.
 * @param {string} colorOrImage - Hexadecimal color or URL of an image.
 * @param {object} customColors - Custom color configurations.
 * 
 * @example
 * // Set theme from color
 * setTheme("#FFFFFF")
 * 
 * @example
 * // Set theme from image
 * const image = new Image()
 * image.src="./image.png"
 * setTheme(image)
 */
async function setTheme(colorOrImage, customColors) {
    let theme;

    if (isValidHexColor(colorOrImage)) {
        theme = themeFromSourceColor(argbFromHex(colorOrImage), customColors);
    } else {
        theme = await themeFromImage(colorOrImage, customColors);
    }

    // Custom adjustments for dark and light schemes
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

    // Check system preference for dark mode
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    // Apply the theme to the document body
    applyTheme(theme, { target: document.body, dark: systemDark });
}

export { setTheme };
