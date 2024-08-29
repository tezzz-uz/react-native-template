import { useMemo } from "react"

import { StyleSheet } from "react-native"
import { useTheme } from "react-native-paper"

const useStyles = () => {
  const theme = useTheme()

  const styles = useMemo(
    () =>
      StyleSheet.create({
        main: {
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        },
        text: {
          color: theme.colors.primary,
          fontWeight: "600",
        },
      }),
    [theme.colors],
  )

  return { styles, theme }
}

export default useStyles
