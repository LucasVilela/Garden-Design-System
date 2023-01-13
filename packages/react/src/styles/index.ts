import {
  colors,
  fonts,
  fontSizes,
  lineHeights,
  borderRadius,
  space
} from "@garden-ui/tokens";
import { createStitches, defaultThemeMap } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: "space",
    width: "space"
  },

  theme: {
    colors,
    fontSizes,
    fonts,
    lineHeights,
    radii: borderRadius,
    space
  }
});
