import { argbFromHex, themeFromSourceColor, applyTheme, themeFromImage } from "@material/material-color-utilities";
import { isValidHexColor, toCamelCase } from "../functions/functions.js";
/**
 * Sets the theme of the application based on a color or image.
 * @param {string} colorOrImage - Hexadecimal color or URL of an image.
 * @param {object} customColors - Custom color configurations.
 */
async function setTheme(colorOrImage, customColors) {
    let theme;
    customColors = [
        { name: "error", value: argbFromHex("#EA4335"), blend: true },
        { name: "success", value: argbFromHex("#34A853"), blend: true },
        { name: "info", value: argbFromHex("#4285F4"), blend: true },
        { name: "warning", value: argbFromHex("#FBBC05"), blend: true },
    ]
        .concat(customColors)
        .filter(Boolean);
    if (isValidHexColor(colorOrImage)) {
        theme = themeFromSourceColor(argbFromHex(colorOrImage), customColors);
    } else {
        theme = await themeFromImage(colorOrImage, customColors);
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

    theme.customColors.forEach((customColor) => {
        theme.schemes.dark.props[toCamelCase(customColor.color.name)] = customColor.dark.color;
        theme.schemes.dark.props[toCamelCase(`on-${customColor.color.name}`)] = customColor.dark.onColor;
        theme.schemes.dark.props[toCamelCase(customColor.color.name + "-container")] = customColor.dark.colorContainer;
        theme.schemes.dark.props[toCamelCase(`on-${customColor.color.name}-container`)] = customColor.dark.onColorContainer;
        theme.schemes.light.props[toCamelCase(customColor.color.name)] = customColor.light.color;
        theme.schemes.light.props[toCamelCase(`on-${customColor.color.name}`)] = customColor.light.onColor;
        theme.schemes.light.props[toCamelCase(customColor.color.name + "-container")] = customColor.light.colorContainer;
        theme.schemes.light.props[toCamelCase(`on-${customColor.color.name}-container`)] = customColor.light.onColorContainer;
    });
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    applyTheme(theme, { target: document.body, dark: systemDark });
}

export { setTheme };
