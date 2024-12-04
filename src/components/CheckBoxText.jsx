import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CheckBox from '@react-native-community/checkbox';
import { fonts } from '../constant/fonts';
import { colors } from '../constant/colors';
import { useTranslation } from 'react-i18next';

const CheckBoxText = ({ toggleCheckBox, setToggleCheckBox ,style}) => {
    const {t} = useTranslation()
    
    return (
        <View style={[styles.container,style]}>
            <CheckBox
                boxType={'square'}
                disabled={false}
                value={toggleCheckBox}
                onValueChange={(newValue) => setToggleCheckBox(newValue)}
                onFillColor={toggleCheckBox ? colors.primary:'red'}
                // tintColor={colors.primary}
                onCheckColor={colors.white}

                tintColors={{
                    true: colors.primary, 
                    false: colors.primary,
                }}
                
            />

   

            <Text style={styles.txtStyle}>{t("iAgree")} <Text style={styles.registerTxt}>{t("termsService")}</Text> {t("and")} <Text style={styles.registerTxt}>{t("privacyPolicy")}  </Text> </Text>
        </View>
    )
}

export default CheckBoxText

const styles = StyleSheet.create({
    txtStyle: {
        fontFamily: fonts.regular,
        color:colors.black
    },
    container: {
        flexDirection: "row",
        // alignItems: "center",
        paddingLeft:5,
        gap: 10
    },
    registerTxt: {
        fontFamily: fonts.semiBold,
        color: colors.primary
      }
})