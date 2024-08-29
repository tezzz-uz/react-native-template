import React, { memo } from "react"

import { ColorValue, ViewStyle } from "react-native"
import { createIconSet } from "react-native-vector-icons"

import compareProps from "../../../utils/compare-props"

import gylphmap from "./glyphmap"

export type IconName = keyof typeof gylphmap

export interface IconProps {
  name: IconName
  color?: ColorValue
  shift?: number
  size?: number
  style?: ViewStyle
}

const MaterialIcons = createIconSet(
  gylphmap,
  "Material Symbols Outlined",
  "MaterialSymbolsOutlined.ttf",
)

const IconComponent = ({
  size = 24,
  name,
  color,
  style,
  shift = 0,
}: IconProps) => {
  return (
    <MaterialIcons
      size={size}
      name={name}
      color={color}
      style={[
        {
          marginTop: shift,
        },
        style,
      ]}
    />
  )
}

export default memo(
  IconComponent,
  compareProps<IconProps>(["name", "color", "size", "shift"]),
)
