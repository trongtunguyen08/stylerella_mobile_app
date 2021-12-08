import React from 'react'
import { useFonts } from 'expo-font'

import RootNavigator from './assets/navigation/RootNavigator'

export default function App() {
  const [loaded] = useFonts({
    MeridiesAntiqua: require('./assets/fonts/MeridiesAntiquaRegular.otf'),
    PingFangTC: require('./assets/fonts/PingFangTCRegular.ttf')
  })

  if (!loaded) {
    return null
  }

  return (
    <RootNavigator />
  )
}