import { FlatList, I18nManager, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ScreenView from '../../components/ScreenView'
import HeaderBox from '../../components/HeaderBox'
import { useTranslation } from 'react-i18next'
import { OrderData } from '../../constant/data'
import { colors } from '../../constant/colors'
import { fonts } from '../../constant/fonts'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const ViewOrders = ({navigation}) => {
    const { t } = useTranslation()

    const orderData = OrderData(t)


    const renderItem = ({ item, index }) => {
        const statusValue = item?.status == 1 ? t("outDelivery") : t("delivered")
        const statusColor = item?.status == 1 ? colors.orange : colors.secondary
        return (
            <View style={styles.dataContainer}>
                <View style={{}}>
                    <View style={styles.orderTopContainer}>
                        <View>
                            <Text style={styles.orderId}>{t("orderId")} {item?.orderID}</Text>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                {
                                    item?.images?.map((item, index) => {
                                        return (
                                            <View key={index} style={{ marginRight: 15, marginTop: 8 }}>
                                                <Image source={{ uri: item }} style={{ width: 50, height: 65 }} borderRadius={15} />
                                            </View>
                                        )
                                    })
                                }
                            </View>
                        </View>


                        <View>
                            <Text style={{ color: statusColor, textAlign: "right" ,fontFamily:fonts.regular}}>{statusValue}</Text>
                            <Text style={{ color: colors.gray1, marginTop: 5 }}>{item?.orderDate}</Text>
                        </View>
                    </View>



                    <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10, marginBottom: 20, justifyContent: "space-between", marginRight: 15 }}>
                        <Text style={{ color: colors.gray1, fontFamily: fonts.medium }}>3 {t("items")}</Text>
                        <Text style={{ fontFamily: fonts.bold, color: colors.black1 }}>{t("total")}: {item?.price}</Text>
                    </View>




                    <View style={styles.btnContainer}>
                        <TouchableOpacity style={styles.renderDataBtn}>
                            <Ionicons name={'refresh'} color={colors.secondary} size={16} />
                            <Text style={{ color: colors.black1, fontFamily: fonts.regular }}>{t("reOrder")}</Text>
                        </TouchableOpacity>


                        <TouchableOpacity style={[styles.renderDataBtn]}>
                            <Ionicons name={'star'} color={colors.yellow} size={16} style={{ marginLeft: -10 }} />
                            <Text style={{ color: colors.black1, fontFamily: fonts.regular }}>{t("rate")}</Text>
                        </TouchableOpacity>
                    </View>
                </View>


                <TouchableOpacity onPress={()=>navigation.navigate('OrderDetail')} style={{ alignSelf: "flex-end", top: -10 }}>
                    <MaterialIcons name={I18nManager.isRTL ? "arrow-back-ios": "arrow-forward-ios"} size={20} color={colors.black} />
                </TouchableOpacity>

            </View>
        )
    }


    return (
        <ScreenView scrollable={true} style={{ marginHorizontal: -20 }}>
            <HeaderBox
                title={t("orders")}
                style={{ width: "58%", paddingLeft: 20 }}

            />



            {/********* OrderData  **********/}



            <FlatList
                data={orderData}
                keyExtractor={(item, index) => index?.toString()}
                renderItem={renderItem}

            />

        </ScreenView>
    )
}

export default ViewOrders

const styles = StyleSheet.create({
    dataContainer: {
        backgroundColor: colors.white.concat(50),
        marginTop: 10,
        paddingTop: 12,
        paddingBottom: 5,
        paddingHorizontal: 35,
    },
    orderTopContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    btnContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        width: "90%"

    },
    renderDataBtn: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: colors.secondary,
        paddingVertical: 8,
        width: "40%",
        borderRadius: 15,
        justifyContent: "center",
        gap: 10

    },
  
    orderId:{
         color: colors.black1,
          fontFamily: fonts.medium ,
          textAlign:"left"
        }
})