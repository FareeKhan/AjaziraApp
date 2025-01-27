import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors } from '../../constant/colors'
import ScreenView from '../../components/ScreenView'
import ScreenTitle from '../../components/ScreenTitle'
import LabelInput from '../../components/LabelInput'
import { fonts } from '../../constant/fonts'
import CustomButton from '../../components/CustomButton'
import CheckBoxText from '../../components/CheckBoxText'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/Auth'
import Animated, { FadeInDown } from 'react-native-reanimated'
import { useToast } from "react-native-toast-notifications";
import CustomToast from '../../components/CustomToast'


const PhoneNoScreen = ({ navigation }) => {
  const dispatch = useDispatch()
  const toast = useToast();
  const { t } = useTranslation()
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState('')

  const onPressBtn = () => {
    if (phoneNumber == '') {
        // toast.show(t('enterPhoneNo'), {
        //   type: "danger",
        //   duration: 4000,
        //   offset: 30,
        //   animationType: "zoom-in",
        // })
        CustomToast(t('enterPhoneNo'),'danger')
        return;
    }

    if(phoneNumber?.length < 10){
        toast.show(t('phoneNotCorrect'), {
          type: "danger",
          duration: 4000,
          offset: 30,
          animationType: "zoom-in",
        })
        return;
    }
    dispatch(login({ phoneNumber }))

    navigation.navigate("VerificationScreen", {
      phoneNumber: phoneNumber
    })
  }

  return (
    <ScreenView >
      <ScreenTitle title={t('loginTitle')} subTitle={t('loginSubTitle')} />

      <Animated.View entering={FadeInDown.delay(200)}>
        <View style={styles.container}>
          <LabelInput
            label={t('phoneNo')}
            placeholder={'+971 xxxxxxxxxx'}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />

          <Text style={styles.notAccount}>{t('notHaveAccount')} <Text onPress={() => navigation.navigate("CreateAccount")} style={styles.registerTxt}>{t('register')}</Text> </Text>

          <CustomButton
            title={t('sendOtp')}
            btnStyle={{ marginBottom: 18 }}
            onPress={onPressBtn}
          />

          <CheckBoxText
            setToggleCheckBox={setToggleCheckBox}
            toggleCheckBox={toggleCheckBox}
          />
        </View>
      </Animated.View>

    </ScreenView>
  )
}

export default PhoneNoScreen

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white
  },
  container: {
    marginTop: 40
  },
  notAccount: {
    fontFamily: fonts.regular,
    marginVertical: 15,
    textAlign: "center",
    color: colors.black

  },
  registerTxt: {
    fontFamily: fonts.semiBold,
    color: colors.primary
  }
})