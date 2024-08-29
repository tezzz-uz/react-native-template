import React from "react"

import { Text } from "react-native-paper"

import SafeAreaView from "../../components/ui/safe-area-view"

import useStyles from "./styles"

function Home(): JSX.Element {
  const { styles } = useStyles()

  return (
    <SafeAreaView style={styles.main}>
      <Text variant="titleLarge" style={styles.text}>
        Hello world!
      </Text>
    </SafeAreaView>
  )
}

export default Home
