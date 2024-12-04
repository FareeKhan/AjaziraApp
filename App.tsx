import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { StackNavigation } from './src/navigation/BottomTab'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Provider } from 'react-redux'
import { store } from './src/redux/store'
import AppNavigation from './src/navigation/AppNavigation'
import SplashScreen from 'react-native-splash-screen'



const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, [])
  
  return (
    <GestureHandlerRootView>
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    </GestureHandlerRootView>

  )
}

export default App

const styles = StyleSheet.create({})