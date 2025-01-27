import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ScreenView from '../../components/ScreenView';
import ScreenTitle from '../../components/ScreenTitle';
import LabelInput from '../../components/LabelInput';
import CustomButton from '../../components/CustomButton';
import ForgotModal from '../../components/ForgotModal';
import { useTranslation } from 'react-i18next';
import { fonts } from '../../constant/fonts';
import { colors } from '../../constant/colors';
import HeaderBox from '../../components/HeaderBox';
import CustomToast from '../../components/CustomToast';

const ForgotPassword = ({ navigation, route }) => {
  const { t } = useTranslation();
  const [verify, setVerify] = useState('')
  const { selectedItem } = route?.params


  const onPressContinue = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (verify == '') {
      CustomToast(t('FillField'), 'danger')
    } else if (selectedItem == 'sms' && verify?.length < 10) {
      CustomToast(t('phoneNotCorrect'), 'danger')
    } else if (selectedItem == 'mail' && !emailRegex?.test(verify)) {
      CustomToast(t('emailIsInvalid'), 'danger')
    }

    else {
      navigation.navigate('VerificationScreen', {
        isEmail: selectedItem == 'sms' ? false : true,
        phoneNumber: verify,
        type:"forgot"
      })
    }

  }

  return (
    <ScreenView>

      <HeaderBox
        title={t('forgotPass')}
        style={{ width: "70%", marginBottom: 20 }}
      />

      <ScreenTitle title={t('forgotPassword')} subTitle={selectedItem == 'sms' ? t('forgotNo') : t('forgotSub')} />

      <View style={styles.container}>
        <LabelInput
          label={selectedItem == 'sms' ? t('phoneNo') : t('emailAddress')}
          placeholder={selectedItem == 'sms' ? t('phoneNo') : t('emailAddress')}
          value={verify}
          onChangeText={setVerify}
          style={{ marginBottom: 7 }}
        />

        <CustomButton
          title={t('continue')}
          btnStyle={{ marginTop: 120 }}
          onPress={onPressContinue}
        />

      </View>


    </ScreenView>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  other: {
    fontFamily: fonts.regular,
    color: colors.primary,
    textAlign: 'center',
    marginTop: 15,
  },
});
