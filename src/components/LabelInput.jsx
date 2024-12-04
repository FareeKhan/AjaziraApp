import { I18nManager, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../constant/colors'
import { fonts } from '../constant/fonts'
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'
import Fontisto from 'react-native-vector-icons/Fontisto'

const LabelInput = ({ label, placeholder, filter,search,value, onChangeText, style, eye, secureTextEntry,inputBoxStyle, onPressEye, isShow, inputFieldStyle,down,...props }) => {
  return (
    <View style={[styles.container, style]}>

      {
        label &&
        <Text style={styles.label}>{label}</Text>
      }


      <View style={[styles.inputContainer,inputBoxStyle]}>
        {
          search && 
          <Feather name={'search'}  size={20} color={colors.gray1} />
        }
        <TextInput
          placeholder={placeholder}
          style={[styles.inputStyle,inputFieldStyle]}
          placeholderTextColor={colors.gray1}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          {...props}
        />

        {
          eye &&
          <TouchableOpacity onPress={onPressEye}>
            <Entypo name={isShow ? 'eye-with-line' : 'eye'} size={20} color={colors.black} />
          </TouchableOpacity>
        }


{
          down &&
          <TouchableOpacity onPress={onPressEye} style={{right:4}}>
            <Entypo name={isShow ? 'chevron-small-down' : 'chevron-small-down'} size={15} color={colors.gray8} />
          </TouchableOpacity>
        }



      </View>
    </View>
  )
}

export default LabelInput

const styles = StyleSheet.create({
  container: {
    marginBottom: 7
  },
  label: {
    color: colors.black,
    fontFamily: fonts.regular,
    textAlign:"left"
  },
  inputContainer: {
    height: 50,
    backgroundColor: colors.white,
    borderRadius: 7,
    paddingHorizontal: 10,
    marginTop: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth:1,
    borderColor:colors.gray4

  },
  inputStyle: {
    width: "90%",
    color:colors.black,
    fontFamily:fonts.regular,
    textAlign:I18nManager.isRTL? "right": "left"
   
  }
})