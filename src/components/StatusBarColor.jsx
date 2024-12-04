import { Platform, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../constant/colors'

const StatusBarColor = () => {
  return (
    <StatusBar backgroundColor={Platform.OS == 'ios' ? "#fff" : colors.black} barStyle="light-content" />

  )
}

export default StatusBarColor

const styles = StyleSheet.create({})