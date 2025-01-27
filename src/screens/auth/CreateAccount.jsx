import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../../constant/colors'
import ScreenView from '../../components/ScreenView'
import ScreenTitle from '../../components/ScreenTitle'
import LabelInput from '../../components/LabelInput'
import { fonts } from '../../constant/fonts'
import CustomButton from '../../components/CustomButton'
import Foundation from 'react-native-vector-icons/Foundation'
import Google from '../../assets/svg/google.svg'
import { useTranslation } from 'react-i18next'
import CheckBoxText from '../../components/CheckBoxText'
import CustomToast from '../../components/CustomToast'

const CreateAccount = ({ navigation }) => {
    const { t } = useTranslation()
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [email, setEmail] = useState('')
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)


    const onPressRegister = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email == '') {
            CustomToast(t("pleaseEnterMail"), "danger")
        }else if (!emailRegex.test(email)) {
            CustomToast(t("emailIsInvalid"), "danger")
        } 
        else if (userName == '') {
            CustomToast(t("pleaseEnterUserName"), "danger")

        } else if (password == '') {
            CustomToast(t("pleaseEnterPassword"), "danger")

        } else {
            CustomToast(t("accountCreatedSuccessfully"), "success")
            navigation.navigate("LoginScreen")

        }

    }

    return (
        <ScreenView scrollable={true}>
            <ScreenTitle title={t('createNew')} subTitle={t('createNewSub')} />

            <View style={styles.container}>
                <LabelInput
                    // label={'Email Address'}
                    label={t('emailAddress')}
                    placeholder={t('enterEmail')}
                    value={email}
                    onChangeText={setEmail}
                />

                <LabelInput
                    label={t('userName')}
                    placeholder={t('enterUserName')}
                    value={userName}
                    onChangeText={setUserName}

                />

                <LabelInput
                    label={t('password')}
                    placeholder={t('enterPassword')}
                    eye={true}
                    value={password}
                    isShow={!showPassword}
                    onChangeText={setPassword}
                    secureTextEntry={!showPassword}
                    onPressEye={()=>setShowPassword(!showPassword)}
                />

                <CheckBoxText
                    setToggleCheckBox={setToggleCheckBox}
                    toggleCheckBox={toggleCheckBox}
                    style={{ marginTop: 5, marginBottom: 15 }}
                />

                <CustomButton
                    title={t('register')}
                    btnStyle={{ marginBottom: 18 }}
                    // onPress={() => navigation.navigate("LoginScreen")}
                    onPress={onPressRegister}
                />



                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <View style={styles.border} />
                    <Text style={styles.signInTxt}>{t('orSignInWith')}</Text>
                    <View style={[styles.border, { width: "32%" }]} />
                </View>


                <View style={styles.bottomIconBox}>
                    <TouchableOpacity style={styles.socialIconsBox}>
                        <Google width={35} height={35} />
                    </TouchableOpacity>


                    <TouchableOpacity style={styles.socialIconsBox}>
                        <Foundation name={'social-apple'} size={26} color={colors.black} />
                    </TouchableOpacity>
                </View>

                <Text style={styles.notAccount}>{t('alreadyAccount')} <Text onPress={() => navigation.navigate('LoginScreen')} style={styles.registerTxt}>{t('signIn')}</Text> </Text>

            </View>
        </ScreenView>
    )
}

export default CreateAccount

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colors.white
    },
    container: {
        marginTop: 15
    },

    forgotPassword: {
        fontFamily: fonts.regular,
        color: colors.primary,
        textAlign: "right",
        marginTop: 10,
        marginBottom: 20

    },
    border: {
        width: "30%",
        height: 1,
        backgroundColor: colors.gray1.concat(40)
    },
    signInTxt: {
        width: "29%",
        color: colors.gray1,
        fontFamily: fonts.regular,
    },
    socialIconsBox: {
        height: 40,
        width: 40,
        borderWidth: 1,
        borderRadius: 50,
        borderColor: colors.gray1.concat(40),
        alignItems: "center",
        justifyContent: "center"
    },
    bottomIconBox: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 25,
        marginTop: 30,
        marginBottom: 45
    },
    registerTxt: {
        fontFamily: fonts.regular,
        color: colors.primary,
        textAlign: "right",
        marginTop: 10,
        marginBottom: 20

    },
    notAccount: {
        fontFamily: fonts.regular,
        textAlign: "center",
        color: colors.black

    },
})
