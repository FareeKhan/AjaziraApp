import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

const CustomLinearGradient = ({ children, style }) => {
  return (
    <LinearGradient
      colors={['#53B17559', '#eee']}
      locations={[0, 0.4]} // Green fades into gray before the middle
      style={style}

    >
      {children}
    </LinearGradient>


  )
}

export default CustomLinearGradient

const styles = StyleSheet.create({})