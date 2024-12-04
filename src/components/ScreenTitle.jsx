import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../constant/colors'
import { fonts } from '../constant/fonts'

const ScreenTitle = ({title,subTitle,style,subStyle}) => {
  return (
    <View style={style}>
      <Text style={styles.titleStyle}>{title}</Text>
      <Text style={[styles.subTitle,subStyle]}>{subTitle}</Text>
    </View>
  )
}

export default ScreenTitle

const styles = StyleSheet.create({
    titleStyle:{
        fontSize:22,
        color:colors.black,
        fontFamily:fonts.medium,
        textAlign:"left"

     
    },
    subTitle:{
        color:colors.gray1,
        marginTop:15,
        fontFamily:fonts.regular,
        textAlign:"left"

    }
})