import color from "color"
import { MD3LightTheme, MD3Theme, configureFonts } from "react-native-paper"

import {
  BACKGROUND,
  ERROR,
  ON_PRIMARY,
  ON_SURFACE,
  PRIMARY,
  SURFACE,
} from "./colors"
import fontConfig from "./typography"

const theme: MD3Theme = {
  ...MD3LightTheme,

  roundness: 0,

  colors: {
    ...MD3LightTheme.colors,

    primary: PRIMARY,
    primaryContainer: color.rgb(PRIMARY).alpha(0.1).string(),
    onPrimary: ON_PRIMARY,

    surface: SURFACE,
    onSurface: ON_SURFACE,

    background: BACKGROUND,
    error: ERROR,

    backdrop: color.rgb(BACKGROUND).alpha(0.69).string(),

    elevation: {
      level0: "transparent",
      level1: "transparent",
      level2: "transparent",
      level3: "transparent",
      level4: "transparent",
      level5: "transparent",
    },
  },

  // @ts-expect-error
  fonts: configureFonts({ config: fontConfig }),
}

export default theme
