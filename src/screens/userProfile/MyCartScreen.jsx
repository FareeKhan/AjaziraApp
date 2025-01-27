import { FlatList, I18nManager, Image, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ScreenView from '../../components/ScreenView'
import HeaderBox from '../../components/HeaderBox'
import { useTranslation } from 'react-i18next'
import { colors } from '../../constant/colors'
import { fonts } from '../../constant/fonts'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Octicons from 'react-native-vector-icons/Octicons'
import { CartData, MeatImage, productData } from '../../constant/data'
import SectionTitleSubTitle from '../../components/SectionTitleSubTitle'
import ProductDataCard from '../../components/ProductDataCard'
import CustomButton from '../../components/CustomButton'
import { useDispatch, useSelector } from 'react-redux'
import { decrementCounter, deleteProduct, incrementCounter } from '../../redux/ProductAddToCart'
import EmptyCardScreen from '../../components/EmptyCardScreen'

const MyCartScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    const { t } = useTranslation()
    const AddedProductInCart = useSelector((state) => state.cart.cartProducts)
    const cartProducts = AddedProductInCart
    const products = productData(t)
    const [productTotalPrice, setProductTotalPrice] = useState('')



    const onPressDecrement = (id) => {
        dispatch(decrementCounter(id))
    }


    const onPressIncrement = (id) => {
        dispatch(incrementCounter(id))
    }

    const productDelete = (id) => {
        dispatch(deleteProduct(id))
    }

    useEffect(() => {
        const totalPrice = cartProducts?.reduce((acc, item) => acc + item?.price * item?.counter, 0)
        setProductTotalPrice(totalPrice)
    }, [cartProducts])



    const KeyValue = ({ leftValue, rightValue, rightStyle }) => {
        return (
            <View style={styles.keyValueContainer}>
                <Text style={styles.keyStyle}>{leftValue}</Text>
                <Text style={[styles.valueStyle, rightStyle]}>{rightValue}</Text>
            </View>
        )
    }



    const renderItem = ({ item, index }) => {
        return (
            <View>


                <View style={styles.cartProductsContainer}>
                    {/* <Text style={{color:"red"}}>{item?.catName}</Text> */}
                    <TouchableOpacity style={{ justifyContent: "center" }}>
                        {/* <Feather name={'square'} color={colors.primary} size={22} /> */}
                        <Ionicons name={'checkbox'} color={colors.secondary} size={22} />
                    </TouchableOpacity>

                    <Image source={{ uri: MeatImage }} style={{ width: "30%", height: 90, marginLeft: 7 }} borderRadius={15} />

                    <View style={{ width: "60%" }}>
                        <Text style={styles.productTitle}>Raw Gazelle</Text>
                        <Text style={styles.price}>AED {item?.price}</Text>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 8 }}>
                            <View style={styles.incDecContainer}>
                                <TouchableOpacity onPress={() => onPressDecrement(item?.id)} style={styles.counterBox}>
                                    <Octicons name={'dash'} size={15} color={colors.black} />
                                </TouchableOpacity>

                                <Text style={styles.counterTxt}>{item?.counter}</Text>

                                <TouchableOpacity onPress={() => onPressIncrement(item?.id)} style={styles.counterBox}>
                                    <Octicons name={'plus'} size={15} color={colors.black} />
                                </TouchableOpacity>
                            </View>

                            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 12 }}>
                                <TouchableOpacity  >
                                    <Text style={styles.editTxt}>{t("edit")}</Text>
                                </TouchableOpacity>


                                <View style={styles.borderLine} />

                                <TouchableOpacity onPress={() => productDelete(item?.id)} >
                                    <Text style={styles.deleteTxt}>{t("delete")}</Text>

                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>




                </View>
            </View>

        )
    }



    // 



    const groupedProducts = Object.entries(
        cartProducts.reduce((acc, product) => {
            const category = product.catName || t('other');
            if (!acc[category]) {
                acc[category] = [];
            }
            acc[category].push(product);
            return acc;
        }, {})
    );



    if (cartProducts?.length == 0) {
        return (
            <EmptyCardScreen />
        )
    }

    console.log('groupedProducts', groupedProducts)


    return (


        <View style={{ flex: 1 }} >

            <ScreenView scrollable={true} bottomGradient={0.83}>
                <HeaderBox
                    title={t("myCart")}

                    ThreeDots={true}
                />



                {/* ***** Change Location **** */}
                <View style={styles.changeLocationContainer}>
                    <View>
                        <Text style={styles.delvryTxt}>{t("deliveryLocation")}</Text>
                        <Text style={styles.addressTxt}>Home</Text>
                    </View>

                    <TouchableOpacity onPress={() => navigation.navigate("OrderInformation")} style={styles.changeLocBox}>
                        <Text style={styles.changeTxt}>{t("changeLocation")}</Text>
                    </TouchableOpacity>
                </View>




                {/* ***** Promo Code **** */}
                <View style={styles.promoContainer}>
                    <MaterialCommunityIcons name={'brightness-percent'} color={colors.secondary} size={20} />
                    <TextInput
                        placeholder={t("promoCode") + "..."}
                        style={styles.inputTxt}
                        placeholderTextColor={colors.gray1}

                    />


                    <TouchableOpacity style={styles.applyBtn}>
                        <Text style={styles.applyBtnTxt}>{t("apply")}</Text>
                    </TouchableOpacity>
                </View>




                {/* ***** Product in Cart **** */}

                <View>




                    <FlatList
                        // data={cartProducts}
                        data={groupedProducts}
                        keyExtractor={(item, index) => index?.toString()}
                        // renderItem={renderItem}
                        renderItem={({ item, index }) => {
                            const [category, products] = item;
                            return (
                                <View>
                                    {
                                        category &&
                                        <View>
                                            <View style={{
                                                backgroundColor: colors.primary, alignSelf: "baseline",
                                                borderTopRightRadius: 10,
                                                borderBottomRightRadius: 10,
                                                marginBottom: 10
                                            }}>
                                                <Text style={{ color: colors.white, fontSize: 16, fontFamily: fonts.semiBold, paddingHorizontal: 15, paddingVertical: 5 }}>{category}</Text>
                                            </View>

                                            {/* <View style={{borderBottomWidth:1}} /> */}
                                        </View>
                                    }

                                    <FlatList
                                        data={products}
                                        key={(item, index) => index?.toString()}
                                        renderItem={renderItem}
                                    />
                                </View>
                            )
                        }}


                    />

                </View>

                {/* ****** Adds On ****** */}
                <SectionTitleSubTitle
                    title={t('addson')}
                    subTitle={t('seeAll')}
                    style={{ marginTop: 15, marginBottom: 20 }}
                />

                <View style={{ flex: 1 }}>
                    <ProductDataCard
                        data={products.slice(0, 2)}
                        flatListContainerStyle={{ paddingHorizontal: 0 }}

                    />
                </View>



                {/* ****** Payment Summary ****** */}
                <SectionTitleSubTitle
                    title={t("paymentSummary")}
                    style={{ marginBottom: 15 }}
                />

                <KeyValue
                    leftValue={`${t("totalItem")} (${cartProducts?.length || 0})`}
                    // leftValue={t("totalItem")+ (cartProducts?.length)}
                    rightValue={`AED ${productTotalPrice}`}

                />

                <KeyValue
                    leftValue={t("deliveryFee")}
                    rightValue={'Free '}

                />

                <KeyValue
                    leftValue={t("discount")}
                    rightValue={'AED 0.00'}
                    rightStyle={{ color: colors.secondary }}

                />
                <KeyValue
                    leftValue={t("total")}
                    rightValue={`AED ${productTotalPrice}`}

                />

                {/* <View style={{ paddingTop: 10, paddingHorizontal: 20, borderTopLeftRadius: 50, height: Platform.OS == 'ios' ? 95 : 75, borderTopLeftRadius: 20, borderTopRightRadius: 20, position: "absolute", bottom: 0, width: "100%", backgroundColor: colors.white }}> */}
                <CustomButton
                    title={t("goToCheckout")}
                    onPress={() => navigation.navigate("PaymentScreen")}

                />
                {/* </View> */}


            </ScreenView>




        </View>

    )
}

export default MyCartScreen

const styles = StyleSheet.create({
    changeLocationContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 35
    },
    delvryTxt: {
        color: colors.gray1,
        fontFamily: fonts.regular,
        marginBottom: 5
    },
    changeTxt: {
        color: colors.primary,
        fontFamily: fonts.regular,
        fontSize: 13
    },
    addressTxt: {
        color: colors.black,
        fontFamily: fonts.semiBold
    },
    changeLocBox: {
        backgroundColor: colors.white,
        borderWidth: 1,
        borderColor: colors.primary,
        borderRadius: 50,
        // paddingTop: 8,
        paddingVertical: 8,
        paddingHorizontal: 15
    },
    promoContainer: {
        flexDirection: "row",
        alignItems: "center",
        height: 60,
        backgroundColor: colors.white,
        borderRadius: 50,
        paddingHorizontal: 10,
        gap: 10,
        paddingLeft: 15,
        marginTop: 15,
        marginBottom: 20


    },
    applyBtn: {
        marginLeft: "auto",
        backgroundColor: colors.primary,
        // paddingTop: 8,
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 50,
        marginTop: -5

    },
    applyBtnTxt: {
        color: colors.white,
        fontFamily: fonts.medium
    },
    inputTxt: {
        fontSize: 15,
        color: colors.black,
        width: "55%",
        fontFamily: fonts.regular,
        textAlign: I18nManager.isRTL ? "right" : "left"
    },
    productTitle: {
        color: colors.black,
        fontFamily: fonts.medium,
        fontSize: 16,
        // paddingTop: 13,
        paddingBottom: 2,
        marginLeft: 10,
        textAlign: "left"
    },
    price: {
        color: colors.secondary,
        fontFamily: fonts.bold,
        paddingTop: 10,
        paddingBottom: 2,
        textAlign: "left",
        marginLeft: 20,
    },
    incDecContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 5
        // gap: 20
    },

    counterTxt: {
        fontSize: 16,
        fontFamily: fonts.medium,
        width: 40,
        textAlign: "center",
        color: colors.black
    },
    counterBox: {
        width: 23,
        height: 23,
        borderWidth: 1,
        borderColor: colors.gray6,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center"
    },
    cartProductsContainer: {
        flexDirection: "row",
        backgroundColor: colors.white,
        paddingHorizontal: 12,
        paddingTop: 15,
        paddingBottom: 10,
        borderRadius: 10,
        marginBottom: 20,
    },
    keyValueContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 22
    },
    keyStyle: {
        color: colors.gray1,
        fontFamily: fonts.regular,
    },
    valueStyle: {
        color: colors.black,
        fontFamily: fonts.semiBold

    },
    editTxt: {
        fontSize: 10,
        fontFamily: fonts.regular,
        color: colors.gray1
    },
    borderLine: {
        height: 20,
        width: 1,
        backgroundColor: colors.gray,
        marginLeft: 10,
        marginRight: 5,
        bottom: 3
    },
    deleteTxt: { fontSize: 10, fontFamily: fonts.regular, color: colors.red }


})