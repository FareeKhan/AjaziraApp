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
import ForgotModal from '../../components/ForgotModal'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/Auth'
import Animated, { FadeIn, FadeInDown } from 'react-native-reanimated'

const LoginScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    const { t } = useTranslation()
    const [isShowPassword, setIsShowPassword] = useState(false)
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



    const onPressModalContinue = () => {
        setModalVisible(false)
        navigation.navigate("ForgotPassword", {
            selectedItem: selectedItem
        })
    }


    const onPressSignIn = () => {

        const tokenGenerate = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        let token = ''
        for (let i = 0; i < 20; i++) {
            token += tokenGenerate.charAt(Math.floor(Math.random() * 60))
        }
        const userId = Math.floor(Math.random() * 10)


        if (email == '' || password == '') {
            alert('Please Fill the Fields')
        } else {
            dispatch(login({ email, token, userId }))
        }
    }

    return (
        <View style={{ flex: 1 }}>
            <ScreenView scrollable={true}>
                <ScreenTitle title={t('loginTitle')} subTitle={t('loginSubTitle')} />
                <Animated.View entering={FadeInDown.delay(200)}>

                    <View style={styles.container}>
                        <LabelInput
                            label={t('emailAddress')}
                            placeholder={t('enterEmail')}
                            style={{ marginBottom: 7 }}
                            value={email}
                            onChangeText={setEmail}
                        />



                        <LabelInput
                            label={t('password')}
                            placeholder={t('enterPassword')}
                            eye={true}
                            secureTextEntry={isShowPassword}
                            onPressEye={() => setIsShowPassword(!isShowPassword)}
                            isShow={isShowPassword}
                            value={password}
                            onChangeText={setPassword}
                        />


                        <TouchableOpacity onPress={() => setModalVisible(true)}>
                            <Text style={styles.forgotPassword}>{t('forgotPassword')}</Text>
                        </TouchableOpacity>
                        <CustomButton
                            title={t('signIn')}
                            btnStyle={{ marginBottom: 18 }}
                            onPress={onPressSignIn}
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
                        <Text style={styles.notAccount}>{t('notHaveAccount')} <Text onPress={() => navigation.navigate('CreateAccount')} style={styles.registerTxt}>{t('register')}</Text> </Text>

                    </View>
                </Animated.View>

            </ScreenView>



            <ForgotModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                selectedItem={selectedItem}
                setSelectedItem={setSelectedItem}
                onPress={onPressModalContinue}
            />
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colors.white
    },
    container: {
        marginTop: 40
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
