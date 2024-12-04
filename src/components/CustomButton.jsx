import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../constant/colors'
import { fonts } from '../constant/fonts'

const CustomButton = ({title,btnStyle,icon,btnTxtStyle,onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.btnContainer,btnStyle]}>
       {icon && icon}
      <Text style={[styles.btnTitle,btnTxtStyle]}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
  btnContainer:{
    backgroundColor:colors.secondary,
    paddingVertical:18,
    borderRadius:50,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    gap:10

  },
  btnTitle:{
    color:colors.white,
    fontSize:15,
    fontFamily:fonts.medium
  }
})