import { Image, TouchableOpacity, ImageBackground, Platform, ScrollView, StyleSheet, Text, View, Dimensions, TextInput, I18nManager } from 'react-native'
import React, { useState } from 'react'
import CustomLinearGradient from '../../components/CustomLinearGradient'
import ScreenView from '../../components/ScreenView'
import { colors } from '../../constant/colors'
import { fonts } from '../../constant/fonts'
import { useTranslation } from 'react-i18next'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Octicons from 'react-native-vector-icons/Octicons'
import Entypo from 'react-native-vector-icons/Entypo'


import StatusBarColor from '../../components/StatusBarColor'
import { CuttingData, MeatImage, PackagingData, giftImg, goatImg, orderIncludes, productData, weightData } from '../../constant/data'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Fontisto from 'react-native-vector-icons/Fontisto'
import SectionTitleSubTitle from '../../components/SectionTitleSubTitle'
import CustomScrollView from '../../components/CustomScrollView'
import HorizontalData from '../../components/HorizontalData'
import ProductDataCard from '../../components/ProductDataCard'
import LabelInput from '../../components/LabelInput'
import { useDispatch } from 'react-redux'
import { addProductToCart } from '../../redux/ProductAddToCart'

const { height, width } = Dimensions.get('screen')

const ProductDetails = ({ navigation }) => {

    const dispatch = useDispatch()


    const { t } = useTranslation()
    const dataWeight = weightData(t)
    const packingData = PackagingData(t)
    const orderData = orderIncludes(t)
    const products = productData(t)
    const cuttingData = CuttingData(t)

    const [selectedWeight, setSelectedWeight] = useState('')
    const [selectedPackage, setSelectedPackage] = useState('')
    const [selectedIncludes, setSelectedIncludes] = useState('')
    const [counter, setCounter] = useState(1)
    const [selectedMeatCutting, setSelectedMeatCutting] = useState(1)

    const onPressWeight = (item) => {
        setSelectedWeight(item?.id)
    }

    const onPressPackage = (item) => {
        setSelectedPackage(item?.id)
    }

    const onPressOrderIncluded = (item) => {
        setSelectedIncludes(item?.id)
    }

    const onPressMeat = (item) => {
        setSelectedMeatCutting(item?.piecesNo)
    }

    const onPressDecrement = (item) => {
        if (counter !== 1) {
            setCounter(counter - 1)
        }
    }

    const onPressIncrement = (item) => {
        setCounter(counter + 1)
    }




    const addToCart = () => {
        const id = Math.floor(Math.random() * 100)
        const Price = Math.floor(Math.random() * 1000)

        dispatch(addProductToCart({
            id: id,
            productName: "Raw Gazelle",
            price: Price,
            counter: counter,
            image: MeatImage

        }))
        navigation.navigate('MyCartScreen')
        // if (id && selectedSize) {
        //     navigation.navigate('MyCart')
        // }
    }






    return (
        <View style={{ flex: 1 }}>

            <ScreenView scrollable={true} style={{ paddingHorizontal: 10, paddingTop: 10 }} bottomGradient={0.83}>


                <StatusBarColor />
                <ImageBackground borderRadius={15} style={styles.imgContainer} source={{ uri: goatImg }}>
                    <View style={{ paddingHorizontal: 15 }}>
                        <View style={styles.innerImage}>

                            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.searchBox}>
                                <Ionicons name={I18nManager.isRTL ? 'chevron-forward' : 'chevron-back'} size={15} color={colors.white} />
                            </TouchableOpacity>

                            <View style={[styles.leftBox, { gap: 15 }]}>
                                <TouchableOpacity style={styles.searchBox}>
                                    <AntDesign name={'sharealt'} size={15} color={colors.white} />
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => alert('It will start work when data is dynmaic')} style={styles.searchBox}>
                                    <AntDesign name={'hearto'} size={15} color={colors.white} />
                                </TouchableOpacity>

                            </View>
                        </View>

                    </View>
                </ImageBackground>



                {/* **** Title & Price **** */}
                <View style={{ paddingHorizontal: 10 }}>
                    <View style={styles.productNameBox}>
                        <Text style={styles.productName}>Nuaimi Sheep</Text>
                        <Image source={{ uri: giftImg }} style={{ width: 30, height: 30 }} />
                    </View>
                    <Text style={styles.price}>AED 120</Text>

                    <View style={styles.bgContainer}>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
                            <FontAwesome5 name={'dollar-sign'} size={18} color={colors.primary} />
                            <Text style={styles.dlvryTxt}>{t("freeDlvry")}</Text>
                        </View>


                        <View style={{ flexDirection: "row", alignItems: "center", gap: 7 }}>
                            <Fontisto name={'star'} size={18} color={colors.primary} />
                            <Text style={styles.dlvryTxt}>4.5</Text>
                        </View>
                    </View>


                    <View style={[styles.bgContainer]}>
                        <AntDesign name={'clockcircle'} size={18} color={colors.primary} />
                        <Text style={[styles.dlvryTxt, { width: "95%" }]}>Delivery: Abu Dhabi elivery: Abu Dhabi elivery: Abu Dhabi elivery: Abu </Text>
                    </View>





                    <SectionTitleSubTitle
                        title={t("description")}
                        style={{ paddingHorizontal: 0, marginTop: 15, marginBottom: 10 }}

                    />

                    <Text style={[styles.dlvryTxt, { width: "95%" }]}>DLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </Text>


                    <View style={{ backgroundColor: colors.secondary.concat(10), flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingVertical: 20, marginHorizontal: -20, paddingHorizontal: 20 }}>
                        <View style={{ width: "46%", borderWidth: 1, borderColor: colors.secondary, paddingTop: 20, padding: 10, borderRadius: 10 }}>
                            <Text style={{ fontSize: 13, color: colors.gray1, lineHeight: 20 }}>Pay in 4 interest-free
                                payments of <Text style={{ fontFamily: fonts.semiBold, color: colors.black }}>AED 60</Text></Text>


                            <View style={{ position: "absolute", bottom: 30, left: -10 }} >
                                <Image source={require('../../assets/tabby.png')} style={{ height: 80, width: 80 }} />
                            </View>

                        </View>




                        <View style={{ width: "46%", borderWidth: 1, borderColor: colors.secondary, paddingTop: 20, padding: 10, borderRadius: 10 }}>
                            <Text style={{ fontSize: 13, color: colors.gray1, lineHeight: 20 }}>Split in 4 payments of
                                <Text style={{ fontFamily: fonts.semiBold, color: colors.black }}> AED 60 </Text> No interests</Text>


                            <View style={{ position: "absolute", bottom: 30, left: -10 }} >
                                <Image resizeMode='center' source={require('../../assets/tamara.png')} style={{ height: 80, width: 80 }} />
                            </View>
                        </View>
                    </View>


                    {/* ***** Available Weight ****** */}
                    <SectionTitleSubTitle
                        title={t("availableWeight")}
                        style={{ paddingHorizontal: 0, marginTop: 10, marginBottom: 10 }}

                    />
                    <CustomScrollView >
                        {
                            dataWeight?.map((item, index) => {
                                return (
                                    <HorizontalData
                                        item={item}
                                        key={index}
                                        onPress={() => onPressWeight(item)}
                                        selectedValue={selectedWeight}
                                        firstValue={`${item?.weight}, ${item?.year}`}
                                        secondValue={item?.price}
                                    />
                                )
                            })
                        }
                    </CustomScrollView>

                    {
                        selectedWeight !== '' &&
                        <View style={{ marginTop: 20, marginHorizontal: 10 }}>
                            <LabelInput
                                label={t('giftDetails')}
                                placeholder={t('enterName')}
                            />

                            <LabelInput
                                placeholder={"+971 xx xxxxxx"}
                                inputBoxStyle={{ marginTop: 5 }}

                            />

                            <LabelInput
                                placeholder={t("addressDetails")}
                                inputBoxStyle={{ marginTop: 5 }}
                            />
                            <LabelInput
                                placeholder={t("dubai")}
                                inputBoxStyle={{ marginTop: 5 }}
                            />

                            <Text style={{ color: colors.black, fontFamily: fonts.regular, marginTop: 5 }}>{t("message")}</Text>
                            <TextInput
                                placeholder={t("message")}
                                placeholderTextColor={colors.gray1}
                                style={styles.msgField}
                                multiline={true}
                            />
                        </View>

                    }


                    {/* ***** Cutting ****** */}
                    <SectionTitleSubTitle
                        title={t("cutting")}
                        style={styles.sectionTitle}
                    />
                    <CustomScrollView>
                        {cuttingData?.map((item, index) => {
                            return (
                                <TouchableOpacity onPress={() => onPressMeat(item)} onpre style={[styles.cuttingContainer, { borderColor: selectedMeatCutting == item?.piecesNo ? colors.secondary : colors.gray5 }]}>
                                    <Image borderRadius={10} style={styles.meatImg} source={require('../../assets/cutting.png')} />
                                    <View style={styles.playIcon}>
                                        <Entypo name={'controller-play'} size={35} color={colors.red} />
                                    </View>
                                    <Text style={styles.meatCuttingTxt}>{item?.piecesNo} {t("pieces")}</Text>
                                </TouchableOpacity>
                            )
                        })}
                    </CustomScrollView>


                    {/* ***** Packing ****** */}


                    <SectionTitleSubTitle
                        title={t("package")}
                        style={styles.sectionTitle}
                    />

                    <CustomScrollView >
                        {
                            packingData?.map((item, index) => {
                                return (
                                    <HorizontalData
                                        item={item}
                                        key={index}
                                        onPress={() => onPressPackage(item)}
                                        selectedValue={selectedPackage}
                                        firstValue={item?.packing}
                                        secondValue={item?.price}
                                    />
                                )
                            })
                        }
                    </CustomScrollView>



                    {/* ***** Packing ****** */}


                    <SectionTitleSubTitle
                        title={t("orderIncludes")}
                        style={styles.sectionTitle}
                    />

                    <CustomScrollView >
                        {
                            orderData?.map((item, index) => {
                                return (
                                    <HorizontalData
                                        item={item}
                                        key={index}
                                        onPress={() => onPressOrderIncluded(item)}
                                        selectedValue={selectedIncludes}
                                        firstValue={item?.title}
                                        secondValue={item?.status}
                                    />
                                )
                            })
                        }
                    </CustomScrollView>





                    {/* ***** Packing ****** */}

                    <SectionTitleSubTitle
                        title={t("recomended")}
                        subTitle={t("seeAll")}
                        style={{ paddingHorizontal: 0, marginTop: 25, marginBottom: 10 }}
                    />
                    <ProductDataCard
                        data={products}
                        flatListContainerStyle={{ paddingHorizontal: 0 }}
                    />

                </View>

            </ScreenView>
            <View style={styles.bottomAddToCart}>
                <View style={styles.incDecContainer}>
                    <TouchableOpacity onPress={onPressDecrement} style={styles.counterBox}>
                        <Octicons name={'dash'} size={22} color={colors.black} />
                    </TouchableOpacity>

                    <Text style={styles.counterTxt}>{counter}</Text>

                    <TouchableOpacity onPress={onPressIncrement} style={styles.counterBox}>
                        <Octicons name={'plus'} size={22} color={colors.black} />
                    </TouchableOpacity>
                </View>


                {/* <TouchableOpacity onPress={() => navigation.navigate("MyCartScreen")} style={styles.checkBtn}> */}
                <TouchableOpacity onPress={addToCart} style={styles.checkBtn}>
                    <AntDesign name={'shoppingcart'} size={22} color={colors.white} />
                    <Text style={styles.checkOutTxt}>{t("addToCart")}</Text>
                </TouchableOpacity>
            </View>

        </View>


    )
}

export default ProductDetails

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
        width: 30,
        height: 30,
        borderWidth: 1,
        borderColor: colors.white,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center"
    },
    productNameBox: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingRight: 20,
        marginTop: 5
    },
    productName: {
        fontFamily: fonts.medium,
        fontSize: 18
    },
    price: {
        fontSize: 16,
        fontFamily: fonts.bold,
        color: colors.secondary,
        marginTop: 5
    },
    bgContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: colors.secondary.concat(20),
        padding: 10,
        borderRadius: 8,
        marginTop: 10,
        gap: 10

    },
    sectionTitle: {
        paddingHorizontal: 0,
        marginTop: 25,
        marginBottom: 10
    },
    dlvryTxt: {
        color: colors.gray1,
        textAlign: "left",
        fontFamily: fonts.regular
    },

    weightContainer: {
        backgroundColor: colors.secondary,
        paddingVertical: 20,
        paddingHorizontal: 20,
        paddingRight: 15,
        borderRadius: 50,
        marginRight: 15,
    },
    weightTxt: {
        fontSize: 12,
        fontFamily: fonts.regular,
        color: colors.white
    },
    priceTxt: {
        fontSize: 15,
        fontFamily: fonts.regular,
        color: colors.white,
        marginTop: 4,
        textAlign: "center"

    },
    incDecContainer: {
        flexDirection: "row",
        alignItems: "center",
        // gap: 20
    },
    counterBox: {
        width: 35,
        height: 35,
        borderWidth: 1,
        borderColor: colors.gray6,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center"
    },
    checkBtn: {
        backgroundColor: colors.secondary,
        width: "55%",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        gap: 10,
        height: 60,
        borderRadius: 50
    },
    counterTxt: {
        fontSize: 16,
        fontFamily: fonts.medium,
        width: 40,
        textAlign: "center"
    },
    checkOutTxt: {
        color: colors.white,
        fontFamily: fonts.medium,
        fontSize: 15,


    },
    cuttingContainer: {
        marginRight: I18nManager.isRTL ? 0 : 25,
        marginLeft: I18nManager.isRTL ? 25 : 0,
        borderWidth: 1,
    },
    meatCuttingTxt: {
        textAlign: "center",
        fontSize: 13,
        fontFamily: fonts.regular,
        color: colors.black,
        marginTop: 5
    },
    meatImg: {
        width: 80,
        height: 80
    },
    playIcon: {
        position: "absolute",
        top: 20,
        left: 25
    },
    msgField: {
        height: 100,
        backgroundColor: colors.white,
        borderRadius: 7,
        paddingHorizontal: 10,
        marginTop: 8,
        borderWidth: 1,
        borderColor: colors.gray4,
        textAlignVertical: "top",
        paddingTop: 10,
        textAlign: I18nManager.isRTL ? "right" : "left",
        fontFamily: fonts.regular

    },
    bottomAddToCart: {
        paddingHorizontal: 30,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#fff",
        width: "100%",
        position: "absolute",
        bottom: 0,
        height: Platform.OS == 'ios' ? 100 : 80,
        paddingTop: Platform.OS == 'android' ? 10 : 0,
        alignItems: "center",
        paddingBottom: 10
    }







})