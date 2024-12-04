import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenView from '../../components/ScreenView'
import HeaderBox from '../../components/HeaderBox'
import { useTranslation } from 'react-i18next'
import { notificationData } from '../../constant/data'
import { colors } from '../../constant/colors'
import { fonts } from '../../constant/fonts'
import Animated, { FadeInDown } from 'react-native-reanimated'

const Notifications = () => {
    const { t } = useTranslation()

    const notification = notificationData(t)




    const renderItem = ({ item, index }) => {
        return (
            <View >
                <Text style={styles.dayTxt}>{item?.day}</Text>
                {
                    item?.data?.map((item, index) => {
                        return (
                            <View key={index} style={styles.dataContainer}>
                                <View style={styles.iconBg}>
                                    {item?.icon}
                                </View>
                                <View style={styles.txtContainer}>
                                    <Text style={styles.dataTitle}>{item?.title}</Text>
                                    <Text style={styles.subData}>{item?.subTitle}</Text>
                                </View>
                            </View>

                        )
                    })
                }
            </View>
        )
    }

    return (
        <ScreenView>


            <Text style={styles.title}>{t("notification")}</Text>

            <Animated.View entering={FadeInDown.delay(300)}>


                <FlatList
                    data={notification}
                    keyExtractor={(item, index) => index?.toString()}
                    renderItem={renderItem}

                />


            </Animated.View>



        </ScreenView>
    )
}

export default Notifications

const styles = StyleSheet.create({

    dayTxt: {
        marginTop: 10,
        fontFamily: fonts.medium,
        color: colors.gray1,
        marginTop: 35,
        marginBottom: 15,
        textAlign: "left"

    },
    title: {
        fontSize: 15,
        fontFamily: fonts.medium,
        color: colors.black,
        textAlign: "center"

    },
    iconBg: {
        width: 40,
        height: 40,
        backgroundColor: colors.white,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center"

    },
    dataContainer: {
        flexDirection: "row",
        // alignItems: "center",
        gap: 15,
        marginBottom: 20
    },
    txtContainer: {
        width: "95%",


    },
    dataTitle: {
        fontSize: 16,
        fontFamily: fonts.medium,
        color: colors.black,
        width: "90%",
        textAlign: "left"
    },
    subData: {
        marginTop: 10,
        fontFamily: fonts.regular,
        color: colors.gray1,
        width: "90%",
        textAlign: "left"


    },
})