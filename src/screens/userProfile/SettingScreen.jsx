import { I18nManager, Image, Modal, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native'
import React, { useMemo, useRef, useState } from 'react'
import ScreenView from '../../components/ScreenView'
import HeaderBox from '../../components/HeaderBox'
import { useTranslation } from 'react-i18next'
import { colors } from '../../constant/colors'
import { fonts } from '../../constant/fonts'
import RNRestart from 'react-native-restart';
import Ionicons from 'react-native-vector-icons/Ionicons'

import CustomButton from '../../components/CustomButton'
import { useDispatch, useSelector } from 'react-redux'
import { language } from '../../redux/Auth'

const SettingScreen = () => {
    const { isLanguage } = useSelector((state) => state.auth)

    const dispatch = useDispatch()
    const { t } = useTranslation()
    const [isNotification, setIsNotification] = useState(false);
    const [isLocation, setIsLocation] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState(isLanguage);

    const toggleNotification = () => setIsNotification(previousState => !previousState);
    const toggleLocation = () => setIsLocation(previousState => !previousState);

    const RenderMenu = ({ icon, label, rightValue, onPress }) => {
        return (
            <TouchableOpacity onPress={onPress} style={styles.switchContainer}>
                <Text style={styles.menuTxt}>{label}</Text>
                <View style={{ alignItems: "center", flexDirection: "row", marginLeft: "auto", gap: 20 }}>
                    {
                        rightValue && <Text style={{ fontFamily: fonts.regular, color: colors.black }}>{rightValue}</Text>
                    }
                    <Ionicons name={I18nManager.isRTL ? 'chevron-back-sharp' : 'chevron-forward-sharp'} color={colors.black} size={20} />
                </View>
            </TouchableOpacity>
        )

    }


    const onPressLanguage = (value) => {
        setSelectedLanguage(value)
    }



    const onPressSelect = () => {
        dispatch(language({ selectedLanguage }))
        console.log('dasdasd', selectedLanguage)

        if (selectedLanguage !== 'en') {
            I18nManager.forceRTL(true);
        } else {
            I18nManager.forceRTL(false);
        }

        setTimeout(() => {
            RNRestart.Restart();
        }, 300);

    };


    return (

        <View style={{ flex: 1 }}>


            <ScreenView>
                <HeaderBox
                    title={t("setting")}
                    style={{ width: "57%" }}
                />
                <Text style={[styles.profileTxt, { marginTop: 30 }]}>{t("profile")}</Text>



                <View style={styles.switchContainer}>
                    <Text style={styles.menuTxt}>{t("pushNot")}</Text>
                    <Switch
                        trackColor={{ false: '#767577', true: colors.primary }}
                        thumbColor={isNotification ? colors.secondary : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleNotification}
                        value={isNotification}
                    />
                </View>


                <View style={styles.switchContainer}>
                    <Text style={styles.menuTxt}>{t("location")}</Text>
                    <Switch
                        trackColor={{ false: '#767577', true: colors.primary }}
                        thumbColor={isLocation ?colors.secondary : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleLocation}
                        value={isLocation}
                    />
                </View>



                <RenderMenu
                    label={t("language")}
                    rightValue={selectedLanguage == "ar" ? t("arabic") : t("english")}
                    onPress={() => setModalVisible(true)}

                />

                <Text style={[styles.profileTxt, { marginTop: -15 }]}>{t("other")}</Text>

                <RenderMenu
                    label={t("about")}
                />

                <RenderMenu
                    label={t("privacy")}
                />

                <RenderMenu
                    label={t("termsCondition")}
                />



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
                            <View style={{ width: 50, height: 3, backgroundColor: colors.gray1, alignSelf: "center", borderRadius: 50, marginTop: 10, marginBottom: 20 }} />

                            <Text style={styles.modalTitle}>{t("selectLanguage")}</Text>

                            <TouchableOpacity onPress={() => onPressLanguage("ar")} style={[styles.langContainer, { borderColor: selectedLanguage == 'ar' ? colors.primary : colors.white }]}>
                                <Image source={require('../../assets/uae.png')} style={{ width: 20, height: 10 }} />
                                <Text style={styles.langTxt}>{t("arabic")}</Text>


                                {
                                    selectedLanguage == 'ar' &&
                                    <Ionicons style={{ marginLeft: "auto" }} name={'checkmark-circle-sharp'} color={colors.secondary} size={20} />
                                }
                            </TouchableOpacity>



                            <TouchableOpacity onPress={() => onPressLanguage("en")} style={[styles.langContainer, { borderColor: selectedLanguage == 'en' ? colors.primary : colors.white }]}>
                                <Image source={require('../../assets/england.png')} style={{ width: 20, height: 10 }} />
                                <Text style={styles.langTxt}>{t("english")}</Text>



                                {
                                    selectedLanguage == 'en' &&
                                    <Ionicons style={{ marginLeft: "auto" }} name={'checkmark-circle-sharp'} color={colors.secondary} size={20} />
                                }
                            </TouchableOpacity>

                            <CustomButton
                                title={t("select")}
                                btnStyle={{ width: "90%", marginTop: 20, alignSelf: "center" }}
                                onPress={onPressSelect}
                            />



                        </View>

                    </View>
                </Modal>
            </View>

        </View>
    )
}

export default SettingScreen

const styles = StyleSheet.create({
    profileTxt: {
        color: colors.gray1,
        fontFamily: fonts.regular,
        marginBottom: 20,
        textTransform: "uppercase",
        fontSize: 12,
        textAlign: "left"
    },
    switchContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 25
    },
    menuTxt: {
        fontFamily: fonts.regular,
        color: colors.black2
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    openButton: {
        marginTop: 20,
        padding: 10,
        backgroundColor: colors.blue,
        borderRadius: 5,
        alignItems: 'center',
    },
    openButtonText: {
        color: colors.white,
        fontFamily: fonts.regular,
    },



    centeredView: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: '#00000050',

    },
    modalView: {
        backgroundColor: colors.gray9,
        borderRadius: 20,
        paddingHorizontal: 15,
        paddingBottom: 15,
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
    langContainer: {
        height: 50,
        backgroundColor: colors.white,
        borderRadius: 10,
        paddingHorizontal: 10,
        marginTop: 12,
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: colors.white,
        gap: 15

    },
    langTxt: {
        color: colors.black,
        fontFamily: fonts.medium,

    },
    modalTitle: {
        fontFamily: fonts.medium,
        color: colors.black,
        fontSize: 15,
        marginBottom: 10,
        textAlign: "left"
    }
})