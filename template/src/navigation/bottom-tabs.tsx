import React, { useMemo } from "react"

import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs"
import { RouteProp } from "@react-navigation/native"
import { Platform } from "react-native"
import DeviceInfo from "react-native-device-info"
import { ifIphoneX } from "react-native-iphone-x-helper"
import { useTheme } from "react-native-paper"

import Home from "../screens/home"

import MaterialSymbols, { IconName } from "../components/ui/material-symbols"

export type BottomTabParamList = {
  home: undefined
  friends: undefined
  profile: undefined
}

export const BOTTOM_TAB_HEIGHT = Platform.select({
  ios: DeviceInfo.hasDynamicIsland() ? 88 : ifIphoneX(88, 72),
  android: 56,
})

export type BottomTabScreenParams<RouteName extends keyof BottomTabParamList> =
  BottomTabNavigationProp<BottomTabParamList, RouteName>

export type BottomTabRouteProps<RouteName extends keyof BottomTabParamList> =
  RouteProp<BottomTabParamList, RouteName>

const Tab = createBottomTabNavigator<BottomTabParamList>()

const TabIcon =
  (name: IconName) =>
  ({ color, size }: { color: any; size: any }) => {
    return <MaterialSymbols name={name} size={size} color={color} />
  }

const BottomTabNavigation = () => {
  const theme = useTheme()

  const screenOptions = useMemo(() => {
    return {
      headerShown: false,
      tabBarShowLabel: false,
      tabBarInactiveTintColor: theme.colors.onSurfaceVariant,
      tabBarStyle: {
        borderTopColor: theme.colors.surface,
        borderTopWidth: 2,
        height: BOTTOM_TAB_HEIGHT,
        paddingTop: 0,
        backgroundColor: theme.colors.background,
      },
    }
  }, [theme])

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: TabIcon("home"),
        }}
      />
      <Tab.Screen
        name="friends"
        component={Home}
        options={{
          tabBarIcon: TabIcon("10k"),
        }}
      />
      <Tab.Screen
        name="profile"
        component={Home}
        options={{
          tabBarIcon: TabIcon("settings"),
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomTabNavigation
