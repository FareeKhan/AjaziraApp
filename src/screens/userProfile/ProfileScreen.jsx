import { I18nManager, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import ScreenView from '../../components/ScreenView'
import { fonts } from '../../constant/fonts'
import { colors } from '../../constant/colors'
import { useTranslation } from 'react-i18next'
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import CustomButton from '../../components/CustomButton'
import Modal from 'react-native-modal'
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/Auth'
import Animated, { FadeInDown } from 'react-native-reanimated'
import ImagePicker from 'react-native-image-crop-picker';

const ProfileScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    const { t } = useTranslation()
    const [modalVisible, setModalVisible] = useState(false);
    const [image, setImage] = useState("https://a.storyblok.com/f/191576/1200x800/a3640fdc4c/profile_picture_maker_before.webp");
    const RenderMenu = ({ icon, label, onPress }) => {
        return (
            <TouchableOpacity onPress={onPress} style={styles.menuContainer}>
                <View style={styles.menuIconBox}>
                    {icon}
                </View>
                <Text style={styles.menuTxt}>{label}</Text>
                <Ionicons name={I18nManager.isRTL ? 'chevron-back-sharp' : 'chevron-forward-sharp'} color={colors.black} size={20} style={{ marginLeft: "auto" }} />
            </TouchableOpacity>
        )
    }

    const onPressLogout = () => {
        setModalVisible(false)
        setTimeout(() => {
            dispatch(logout());
        }, 200);
    }


    const takeImageFromGallery = () => {
        ImagePicker.openPicker({
            width: 70,
            height: 70,
            cropping: false,
        })
            .then(image => {
                const ff = image?.path;
                setImage(ff);
                console.log('image', ff);
                console.log(image);
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <ScreenView  >
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>


                <Text style={styles.title}>{t("profileSettings")}</Text>
                <View style={styles.profileImgContainer}>
                    <View style={{ width: "65%" }}>
                        <Text style={styles.userName}>Albert Stevano Bajefski</Text>
                        <Text style={styles.userEmail}>Albertstevano@gmail.com</Text>
                    </View>

                    <View style={{}}>
                        <Image borderRadius={50} style={styles.imgStyle} source={{ uri: image }} />
                        <TouchableOpacity onPress={() => takeImageFromGallery()} style={styles.whitePlusBg}>
                            <Entypo name={'plus'} color={colors.secondary} size={20} />
                        </TouchableOpacity>
                    </View>
                </View>


                <Animated.View entering={FadeInDown.delay(300)}>

                    <Text style={styles.profileTxt}>{t("profile")}</Text>


                    <RenderMenu
                        icon={<SimpleLineIcons name={'user'} size={18} color={colors.secondary} />}
                        label={t("personalData")}
                        onPress={() => navigation.navigate("PersonalData")}

                    />

                    <RenderMenu
                        icon={<AntDesign name={'setting'} size={20} color={colors.secondary} />}
                        label={t("settings")}
                        onPress={() => navigation.navigate("SettingScreen")}


                    />

                    <RenderMenu
                        icon={<MaterialCommunityIcons name={'clipboard-text-outline'} size={20} color={colors.secondary} />}
                        label={t("orders")}
                        onPress={() => navigation.navigate("ViewOrders")}

                    />

                    <RenderMenu
                        icon={<FontAwesome name={'credit-card'} size={18} color={colors.secondary} />}
                        label={t("extraCard")}
                    />


                    <RenderMenu
                        icon={<Fontisto name={'favorite'} size={18} color={colors.secondary} />}
                        label={t("favorite")}
                        onPress={() => navigation.navigate("FavoriteScreen")}

                    />
                     <RenderMenu
                        icon={<AntDesign name={'staro'} size={18} color={colors.secondary} />}
                        label={t("rating")}
                        onPress={() => navigation.navigate("RatingScreen")}

                    />

                    <Text style={styles.profileTxt}>{t("Support")}</Text>

                    <RenderMenu
                        icon={<AntDesign name={'infocirlceo'} size={18} color={colors.secondary} />}
                        label={t("helpCenter")}

                    />

                    <RenderMenu
                        icon={<Ionicons name={'trash-outline'} size={18} color={colors.secondary} />}
                        label={t("deleteAccount")}

                    />

                    <RenderMenu
                        icon={<SimpleLineIcons name={'user-follow'} size={18} color={colors.secondary} />}
                        label={t("AddAccount")}

                    />

                    <CustomButton
                        title={t("signOut")}
                        btnStyle={{ backgroundColor: colors.white, marginTop: 40 }}
                        btnTxtStyle={{ color: colors.red, }}
                        onPress={() => setModalVisible(true)}
                        icon={<MaterialIcons name={'logout'} size={22} color={colors.red} />}
                    />


                </Animated.View>

            </ScrollView>





            {/* ********** Modal For SignOut   ************ */}


            {
                modalVisible &&
                <View style={{ width: 100000, height: 10000, backgroundColor: "#00000050", position: "absolute" }} />
            }

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>

                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "60%", alignSelf: "flex-end" }}>
                            <Text style={{ fontSize: 17, fontFamily: fonts.medium, color: colors.black }}>{t("signOut")}</Text>
                            <TouchableOpacity onPress={() => setModalVisible(false)}>
                                <AntDesign name={'close'} color={colors.black} size={20} />
                            </TouchableOpacity>
                        </View>

                        <Text style={{ fontFamily: fonts.regular, color: colors.gray1, textAlign: "center", marginTop: 25, marginBottom: 20 }}>{t("wantLogout")}</Text>



                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                            <CustomButton
                                title={t("cancel")}
                                btnStyle={{ width: "45%", backgroundColor: colors.white, borderColor: colors.gray6, borderWidth: 1 }}
                                btnTxtStyle={{ color: colors.black }}
                                onPress={() => setModalVisible(false)}
                            />

                            <CustomButton
                                title={t("logout")}
                                btnStyle={{ width: "45%" }}
                                onPress={onPressLogout}
                            />
                        </View>

                    </View>
                </View>
            </Modal>

        </ScreenView>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    title: {
        fontSize: 15,
        fontFamily: fonts.medium,
        color: colors.black,
        textAlign: "center"

    },
    profileImgContainer: {
        flexDirection: I18nManager.isRTL ? "row-reverse" : "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 20,
        paddingHorizontal: 20,
        marginBottom: 40
    },
    imgStyle: {
        width: 80,
        height: 80,
        borderWidth: 1.5,
        borderColor: colors.secondary

    },
    userName: {
        fontSize: 15,
        fontFamily: fonts.medium,
        color: colors.black
    },
    userEmail: {
        color: colors.gray1,
        marginTop: 10,


    },
    whitePlusBg: {
        width: 27,
        height: 27,
        backgroundColor: colors.white,
        borderRadius: 50,
        position: "absolute",
        bottom: -5,
        right: 0,
        alignItems: "center",
        justifyContent: "center",
    },
    profileTxt: {
        fontSize: 15,
        color: colors.gray1,
        fontFamily: fonts.regular,
        marginBottom: 20,
        textAlign: "left"
    },
    menuIconBox: {
        width: 33,
        height: 33,
        backgroundColor: colors.white,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    menuContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 15,
        marginBottom: 25

    },
    menuTxt: {
        fontSize: 15,
        fontFamily: fonts.medium,
        color: colors.black2
    },













    centeredView: {
        flex: 1,
        justifyContent: 'center',
    },
    modalView: {
        backgroundColor: '#eeeeee',
        borderRadius: 8,
        // shadowColor: '#000',
        // shadowOffset: {
        //     width: 0,
        //     height: 2,
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 4,
        // elevation: 5,
        borderWidth: 1,
        borderColor: '#cecece80',
        paddingVertical: 15,
        paddingHorizontal: 20
    },




})