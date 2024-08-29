import React from "react"

import { QueryClientProvider } from "@tanstack/react-query"
import { StatusBar, StyleSheet } from "react-native"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { PaperProvider } from "react-native-paper"
import { IconProps } from "react-native-paper/lib/typescript/components/MaterialCommunityIcon"
import { SafeAreaProvider } from "react-native-safe-area-context"

import MaterialSymbols, { IconName } from "./components/ui/material-symbols"
import queryClient from "./lib/query-client"
import Navigation from "./navigation"
import theme from "./styles/theme"

const PaperIcon = ({ name, ...props }: IconProps) => (
  <MaterialSymbols name={name as IconName} {...props} />
)

const App = () => {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={styles.main}>
        <QueryClientProvider client={queryClient}>
          <PaperProvider
            theme={theme}
            settings={{
              icon: PaperIcon,
            }}>
            <StatusBar
              barStyle={theme.dark ? "light-content" : "dark-content"}
              backgroundColor={theme.colors.background}
            />

            <Navigation />
          </PaperProvider>
        </QueryClientProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({ main: { flex: 1 } })

export default App
