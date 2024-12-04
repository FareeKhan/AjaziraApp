import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenView from '../../components/ScreenView'
import HeaderBox from '../../components/HeaderBox'
import { useTranslation } from 'react-i18next'
import { fonts } from '../../constant/fonts'
import { colors } from '../../constant/colors'
import AntDesign from 'react-native-vector-icons/AntDesign'
import SectionTitleSubTitle from '../../components/SectionTitleSubTitle'
import { MeatImage } from '../../constant/data'
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const OrderDetail = () => {
    const { t } = useTranslation()

const status = 1


    return (
      <View style={{flex:1}}>
            <ScreenView  >

            <HeaderBox
                title={t("orderId")}
                isShare={true}
            />


            {/* ***** Horizontal Order Status ***** */}
            <View style={styles.dlvryContainer}>
                <View style={styles.innerDlvryContainer}>
                    <Text style={styles.orderStatus}>{t("outDelivery")}</Text>
                    <Text style={styles.estimatedTxt}>{t("estimated")} 08:30 - 09:15 PM     </Text>

                    <View style={styles.orderInfoContainer}>

                        <>
                            <View style={styles.infoBox}>
                                <Feather name={'clipboard'} color={colors.secondary} size={24} />
                                <Text style={styles.orderStatusTxt}>{t("confirmed")}</Text>
                            </View>

                            <View style={{ position: "absolute", top: 10, left: "11%" }}>
                                <Text style={{ fontSize: 20 ,color:status ==1 ?colors.secondary:colors.orange}}>------</Text>
                            </View>

                        </>


                        <>
                            <View style={styles.infoBox}>
                                <MaterialCommunityIcons name={'food-turkey'} color={colors.secondary} size={24} />
                                <Text style={styles.orderStatusTxt}>{t("preparing")}</Text>
                            </View>

                            <View style={{ position: "absolute", top: 12, left: "40%" }}>
                                <Text style={{ fontSize: 17,color:status ==1 ?colors.secondary:colors.orange }}>--------</Text>
                            </View>
                        </>



                        <>
                            <View style={styles.infoBox}>
                                <MaterialIcons name={'directions-bike'} color={colors.orange} size={24} />
                                <Text style={styles.orderStatusTxt}>{t("outDelivery")}</Text>



                            </View>

                            <View style={{ position: "absolute", top: 10, left: "70%" }}>
                                <Text style={{ fontSize: 20,color:status ==1 ?colors.orange:colors.secondary }}>-------</Text>
                            </View>

                        </>


                        <View style={styles.infoBox}>
                            <MaterialIcons name={'check-circle-outline'} color={colors.gray1} size={24} />
                            <Text style={styles.orderStatusTxt}>{t("delivered")}</Text>
                        </View>
                    </View>
                </View>
            </View>



            {/* ***** Address Section  ***** */}

            <View style={{}}>
                <Text style={styles.delvrdTxt}>{t("deliverAddress")} <Text style={{ color: colors.gray1 }}>(Home) </Text>  </Text>
                <Text style={styles.nameStyle}>Shah Sawar</Text>
                <Text style={styles.address}>Building 18, Dubai, United Arab Emirates</Text>
            </View>

            <View style={{ marginTop: 35, paddingLeft: 20 }}>
                <Text style={[styles.delvrdTxt]}>{t("paymentMethod")} </Text>
                <View style={{ flexDirection: "row", gap: 10 }}>
                    <View style={styles.applePayCard}>
                        <AntDesign name={'apple1'} color={colors.black} size={13} />
                        <Text style={{ fontSize: 10, fontFamily: fonts.medium }}>Pay</Text>
                    </View>
                    <Text>Apple Pay</Text>
                </View>




                <Text style={[styles.delvrdTxt, { marginTop: 40 }]}>{t("itemSummary")} </Text>
           {
                    [1,]?.map((item, index) => {
                        return (
                            <View key={index} style={styles.box}>
                                <Image borderRadius={10} source={{ uri: MeatImage }} style={styles.imageStyle} />
                                <View>
                                    <Text style={styles.title}>Raw Gazelle</Text>
                                    <Text style={styles.price}>AED 120</Text>
                                </View>
                            </View>
                        )
                    })
                }

            </View>

        </ScreenView>
      </View>
    )
}

export default OrderDetail

const styles = StyleSheet.create({
    delvrdTxt: {
        fontSize: 17,
        fontFamily: fonts.medium,
        color: colors.black,
        marginBottom: 15,
        textAlign: "left"
    },
    nameStyle: {
        fontFamily: fonts.regular,
        color: colors.gray1,
    },
    address: {
        fontFamily: fonts.semiBold,
        color: colors.gray1,

    },
    applePayCard: {
        flexDirection: "row",
        alignItems: "center",
        gap: 1,
        borderWidth: 1,
        borderRadius: 3,
        paddingVertical: 4,
        paddingHorizontal: 2,
        alignSelf: "center"
    },
    box: {
        flexDirection: "row",
        alignItems: "center",
        gap: 15,
        marginBottom: 20
    },
    imageStyle: {
        width: "22%",
        height: 65
    },
    title: {
        marginBottom: 10,
        fontSize: 15,
        fontFamily: fonts.semiBold
    },
    price: {
        fontSize: 15,
        fontFamily: fonts.semiBold,
        color: colors.secondary
    },
    dlvryContainer: {
        backgroundColor: colors.secondary.concat(30),
        marginHorizontal: -20,
        padding: 10,
        marginVertical: 30
    },
    innerDlvryContainer: {
        backgroundColor: colors.white,
        padding: 10
    },
    orderStatus: {
        color: colors.orange,
        fontFamily: fonts.medium,
        textAlign: "left"
    },
    estimatedTxt: {
        color: colors.gray1,
        fontFamily: fonts.regular,
        fontSize: 12,
        marginTop: 10,
        textAlign: "left"
    },
    orderInfoContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    infoBox: {
        alignItems: "center",
        marginTop: 10
    },
    orderStatusTxt: {
        fontSize: 10,
        marginTop: 5,
        fontFamily:fonts.regular,
        color:colors.gray1
    }
})