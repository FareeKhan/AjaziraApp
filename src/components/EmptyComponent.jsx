import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { fonts } from '../constant/fonts'
import { colors } from '../constant/colors'
const {height}= Dimensions.get('screen')

const EmptyComponent = () => {
    const {t} = useTranslation()
  return (
    <View style={{flex:1,alignItems:"center",justifyContent:"center",height:height/1.5}}>
      <Text style={styles.txt}>{t("noData")}</Text>
    </View>
  )
}

export default EmptyComponent

const styles = StyleSheet.create({
    txt:{
        fontSize:15,
        fontFamily:fonts.medium,
        color:colors.gray1
    }
})