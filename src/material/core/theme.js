import { argbFromHex, themeFromSourceColor, themeFromImage, applyTheme } from "@material/material-color-utilities";

async function setTheme(input, customColors) {
    let theme;

    if (input instanceof HTMLImageElement) {
        theme = await themeFromImage(input, customColors);
    } else {
        theme = themeFromSourceColor(argbFromHex(input), customColors);
    }

    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (systemDark) {
        Object.assign(theme.schemes.dark.props, {
            surfaceDim: theme.palettes.neutral.tone(6),
            surfaceBright: theme.palettes.neutral.tone(24),
            surfaceContainerLowest: theme.palettes.neutral.tone(4),
            surfaceContainerLow: theme.palettes.neutral.tone(10),
            surfaceContainer: theme.palettes.neutral.tone(12),
            surfaceContainerHigh: theme.palettes.neutral.tone(17),
            surfaceContainerHighest: theme.palettes.neutral.tone(22),
        });
    } else {
        Object.assign(theme.schemes.light.props, {
            surfaceDim: theme.palettes.neutral.tone(87),
            surfaceBright: theme.palettes.neutral.tone(98),
            surfaceContainerLowest: theme.palettes.neutral.tone(100),
            surfaceContainerLow: theme.palettes.neutral.tone(96),
            surfaceContainer: theme.palettes.neutral.tone(94),
            surfaceContainerHigh: theme.palettes.neutral.tone(92),
            surfaceContainerHighest: theme.palettes.neutral.tone(90),
        });
    }

    return applyTheme(theme, { target: document.body, dark: systemDark });
}

export { setTheme };
