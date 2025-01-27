import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import ScreenView from '../../components/ScreenView'
import HeaderBox from '../../components/HeaderBox'
import { useTranslation } from 'react-i18next'
import ScreenTitle from '../../components/ScreenTitle'
import { colors } from '../../constant/colors'
import { fonts } from '../../constant/fonts'
import CustomButton from '../../components/CustomButton'
import LabelInput from '../../components/LabelInput'
import Success from '../../assets/svg/succes.svg'
import CustomToast from '../../components/CustomToast'

const ResetPassword = ({ navigation }) => {
    const [newPassword, setNewPassword] = useState('')
    const [confirmNewPassword, setConfirmNewPassword] = useState('')

    const [isShowPassword, setIsShowPassword] = useState(true)
    const [isConfirmPassword, setIsConfirmPassword] = useState(true)
    const [modalVisible, setModalVisible] = useState(false);
    const { t } = useTranslation()



    const onPressModalBtn = () => {
        setModalVisible(false)
        navigation.navigate("LoginScreen")
    }

    const onPressVerifyAccount = () => {
        if (newPassword == '' || confirmNewPassword == '') {
            CustomToast(t('FillField', 'danger'))
        } else if (newPassword !== confirmNewPassword) {
            CustomToast(t('passwordNotMatch', 'warning'))

        } else {
            setModalVisible(true)
        }
    }


    return (
        <View style={{ flex: 1 }}>
            <ScreenView scrollable={true}>
                <HeaderBox
                    title={t("resetPassword")}
                    style={{ width: "66%", marginBottom: 20 }}
                />


                <ScreenTitle title={t("resetPassword")} subTitle={t("resetSub")} />


                <View style={styles.container}>
                    <LabelInput
                        label={t('newPassword')}
                        placeholder={t('newPassword')}
                        eye={true}
                        style={{}}
                        secureTextEntry={isShowPassword}
                        onPressEye={() => setIsShowPassword(!isShowPassword)}
                        isShow={isShowPassword}
                        value={newPassword}
                        onChangeText={setNewPassword}
                    />
                    <Text style={styles.safetyTxt}>{t('atLeaseTxt')}</Text>

                    <LabelInput
                        label={t('confirmPassword')}
                        placeholder={t('confirmPassword')}
                        eye={true}
                        onPressEye={() => setIsConfirmPassword(!isConfirmPassword)}
                        isShow={isConfirmPassword}
                        secureTextEntry={isConfirmPassword}
                        value={confirmNewPassword}
                        onChangeText={setConfirmNewPassword}
                    />
                    <Text style={styles.safetyTxt}>{t('samePswrd')}</Text>


                    <View style={styles.bottomBox}>
                        <CustomButton
                            title={t('verifyAccount')}
                            btnStyle={{ marginBottom: 18 }}
                            onPress={onPressVerifyAccount}
                        />
                    </View>

                </View>
            </ScreenView>




            <View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}>
                    <View style={styles.centeredView}>
                        <TouchableOpacity activeOpacity={1} onPress={() => setModalVisible(false)} style={{ flex: 1 }}>
                        </TouchableOpacity>
                        <View style={styles.modalView}>
                            <View style={{ width: 50, height: 3, backgroundColor: colors.gray1, alignSelf: "center", borderRadius: 50, marginTop: 10, marginBottom: 30 }} />
                            <Success width={'50%'} height={150} />
                            <ScreenTitle
                                title={t("passwordChanged")}
                                subTitle={t("passSuccess")}
                                style={{ alignItems: "center", width: "90%", marginVertical: 30 }}
                                subStyle={{ textAlign: "center" }}
                            />

                            <CustomButton
                                title={t("verifyAccount")}
                                btnStyle={{ width: "90%" }}
                                onPress={onPressModalBtn}
                            />



                        </View>

                    </View>
                </Modal>
            </View>
        </View>
    )
}

export default ResetPassword

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        flex: 1
    },
    forgotPassword: {
        fontFamily: fonts.regular,
        color: colors.primary,
        textAlign: "right",
        marginTop: 10,
        marginBottom: 20

    },
    bottomBox: {
        flex: 1,
        justifyContent: "flex-end",
        marginBottom: 20
    },
    safetyTxt: {
        marginBottom: 10,
        color: colors.gray1,
        fontSize: 12,
        fontFamily: fonts.regular
    },
    centeredView: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: '#00000050',

    },
    modalView: {
        backgroundColor: 'white',
        borderRadius: 20,
        paddingHorizontal: 15,
        paddingBottom: 15,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        paddingBottom: 30
    },

})