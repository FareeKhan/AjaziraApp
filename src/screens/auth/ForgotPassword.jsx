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

const ForgotPassword = ({ navigation, route }) => {
  const { t } = useTranslation();
  const [verify, setVerify] = useState()
  const { selectedItem } = route?.params

  return (
    <ScreenView>


<HeaderBox 
title={t('forgotPass')}
style={{width:"70%",marginBottom:20}}
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
          onPress={() => navigation.navigate('ForgotVerification', {
            isEmail: selectedItem == 'sms' ? false : true,
            showValue:verify
        })}
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
