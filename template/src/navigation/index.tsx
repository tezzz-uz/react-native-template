import React from "react"

import { NavigationContainer, RouteProp, Theme } from "@react-navigation/native"
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from "@react-navigation/native-stack"
import { useTheme } from "react-native-paper"

import Home from "../screens/home"

// import BottomTabNavigation from "./bottom-tabs"

export type RootStackParamList = {
  home: undefined
}

export type RouteNames = keyof RootStackParamList

export type StackScreenParams<RouteName extends keyof RootStackParamList> =
  NativeStackNavigationProp<RootStackParamList, RouteName>

export type RootRouteProps<RouteName extends keyof RootStackParamList> =
  RouteProp<RootStackParamList, RouteName>

const Stack = createNativeStackNavigator<RootStackParamList>()

function Navigation() {
  const theme = useTheme()

  return (
    <NavigationContainer theme={theme as unknown as Theme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: "slide_from_right",
          gestureEnabled: false,
        }}>
        <Stack.Screen name="home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
