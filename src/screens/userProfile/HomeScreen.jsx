import { Dimensions, I18nManager, Image, ImageBackground, Platform, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import StatusBarColor from '../../components/StatusBarColor'
import Entypo from 'react-native-vector-icons/Entypo'
import { colors } from '../../constant/colors'
import { fonts } from '../../constant/fonts'
import Feather from 'react-native-vector-icons/Feather'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import { useTranslation } from 'react-i18next'
import SectionTitleSubTitle from '../../components/SectionTitleSubTitle'
import { bannerImage, categoryData, innerBannerImage, productData } from '../../constant/data'
import Carousel from '../../components/Carousel'
import CustomLinearGradient from '../../components/CustomLinearGradient'
import ProductDataCard from '../../components/ProductDataCard'
import CategoriesComp from '../../components/CategoriesComp'
import Animated, { FadeInDown } from 'react-native-reanimated'
import ModalImageRender from '../../components/ModalImageRender'
import { useDispatch, useSelector } from 'react-redux'
import { modalImage } from '../../redux/Auth'



const HomeScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    const modalVisible = useSelector((state)=>state.auth.IsShowImage)


    const { t } = useTranslation()
    const catData = categoryData(t)
    const products = productData(t)
    const [selectedItem, setSelectedItem] = useState('')
    // const [modalVisible, setModalVisible] = useState(imageState);

    // useEffect(() => {
    //     setModalVisible(imageState)
    // }, [imageState])


    const onProductPress = () => {
        navigation.navigate("ProductDetails")
    }

    onPressCross = () => {
        dispatch(modalImage(false))
    }

    return (
        <View style={{ flex: 1 }}>

            <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: 100 }} showsVerticalScrollIndicator={false}>
                <StatusBarColor />

                {/* ******* ImageSection ******* */}
                <ImageBackground style={styles.imgContainer} source={require('../../assets/meetBg.png')}>
                    <View style={{ paddingHorizontal: 15 }}>
                        <View style={styles.innerImage}>
                            <View style={styles.leftBox}>
                                <Text style={styles.location}>{t('yourLocation')}</Text>
                                <Entypo name='chevron-small-down' color={colors.white} size={22} />
                            </View>


                            <View style={[styles.leftBox, { gap: 15 }]}>
                                <TouchableOpacity onPress={() => navigation.navigate("SearchScreen")} style={styles.searchBox}>
                                    <Feather name={'search'} size={20} color={colors.white} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => navigation.navigate("PersonalData")} style={[styles.searchBox, { backgroundColor: colors.white }]}>
                                    <Image borderRadius={50} style={{ width: 30, height: 30 }} source={require('../../assets/smallLogo.png')} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.locationContainer}>
                            <SimpleLineIcons name={'location-pin'} size={22} color={colors.white} />
                            <Text style={styles.locationTxt}>{t("dubai")}</Text>
                        </View>

                        <View style={{ marginTop: 40 }}>
                            <Text style={styles.imgBottomTxt}>{t("provideBest")}</Text>
                            <Text style={styles.imgBottomTxt}>{t("meatForYou")}</Text>
                        </View>
                    </View>
                </ImageBackground>
                <Animated.View entering={FadeInDown.delay(300)}>

                    {/* ******* Find By Category Section ******* */}

                    <CustomLinearGradient style={{ height: 210 }}>
                        <View style={{ paddingTop: 25 }}>
                            <SectionTitleSubTitle
                                title={t('findBy')}
                                subTitle={t('seeAll')}
                            />

                            <CategoriesComp
                                selectedItem={selectedItem}
                                setSelectedItem={setSelectedItem}
                            />
                        </View>
                    </CustomLinearGradient>


                    {/* *******  Carousels ******* */}
                    <Carousel />


                    {/* *******  Products Card ******* */}
                    <ProductDataCard
                        data={products}
                        flatListStyle={{ backgroundColor: colors.gray5 }}
                        onProductPress={onProductPress}
                    />


                    {/* *********** Banner ********** */}
                    <ImageBackground style={styles.bgImage} source={{ uri: bannerImage }}  >
                        <View style={{ left: -20, alignSelf: I18nManager.isRTL ? "flex-end" : "flex-start" }}>
                            <Image style={styles.bannerInnerImag} source={{ uri: innerBannerImage }} />
                        </View>
                    </ImageBackground>

                    {/* *********** New Arrival ********** */}
                    <CustomLinearGradient>
                        <SectionTitleSubTitle
                            title={t('newArrival')}
                            style={{ marginTop: 15, marginBottom: 20 }}
                        />

                        <ProductDataCard
                            data={products}
                        />
                    </CustomLinearGradient>

                </Animated.View>

                <ModalImageRender
                    modalVisible={modalVisible}
                    onPress={onPressCross}
                />

            </ScrollView>


        </View>

    )
}

export default HomeScreen

const styles = StyleSheet.create({
    imgContainer: {
        width: "100%",
        height: 250,

    },
    innerImage: {
        paddingTop: Platform.OS == 'ios' ? 45 : 25,
        flexDirection: "row",
        justifyContent: "space-between",


    },
    leftBox: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5
    },
    location: {
        color: colors.white,
        fontFamily: fonts.medium,
        fontSize: 15
    },
    searchBox: {
        width: 35,
        height: 35,
        borderWidth: 1,
        borderColor: colors.white,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center"
    },
    locationContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10
    },
    locationTxt: {
        color: colors.white,
        fontSize: 15,
        fontFamily: fonts.semiBold
    },
    imgBottomTxt: {
        color: "#fff",
        backgroundColor: colors.extraSecondary,
        marginBottom: 10,
        alignSelf: "flex-start",
        paddingHorizontal: 10,
        paddingVertical: 2,
        fontSize: 18,
        fontFamily: fonts.semiBold,
    },
    catStyleContainer: {
        backgroundColor: colors.white,
        height: 110,
        justifyContent: "center",
        alignItems: "center",

        borderRadius: 10,
        paddingHorizontal: 5,

    },
    catTxt: {
        color: colors.gray3,
        fontSize: 13,
        fontFamily: fonts.regular
    },
    bgImage: {
        width: "100%",
        height: 170
    },
    bannerInnerImag: {
        width: 150,
        height: 150,
        top: 10,
        left: I18nManager.isRTL ? 15 : 30,
    }




})