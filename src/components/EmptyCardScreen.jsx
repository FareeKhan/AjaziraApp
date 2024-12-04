import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenView from './ScreenView'
import HeaderBox from './HeaderBox'
import { useTranslation } from 'react-i18next'
import CardEmpty from '../assets/svg/cardEmpty.svg'
import { fonts } from '../constant/fonts'
import { colors } from '../constant/colors'
import CustomButton from './CustomButton'
import { useNavigation } from '@react-navigation/native'
const { width, height } = Dimensions.get('screen')

const EmptyCardScreen = () => {
    const { t } = useTranslation()
    const navigation = useNavigation()
    return (
        <ScreenView>
            <HeaderBox
                title={t("myCart")}
                ThreeDots={true}
            />

            <View style={{ alignSelf: "center" }}>
                <CardEmpty width={width / 1.4} height={height / 2} />
            </View>

            <View style={{ top: -50 }}>
                <Text style={{ fontSize: 24, marginBottom: 30, fontFamily: fonts.bold, color: colors.black, textAlign: "center" }}>{t("ouch")}</Text>
                <Text style={{ fontSize: 16, fontFamily: fonts.regular, color: colors.gray1, textAlign: "center" }}>{t("notOrder")}</Text>
            </View>

            <CustomButton
                title={t("findMeat")}
                onPress={()=>navigation.navigate("BottomTab",{
                    screen:"HomeScreen"
                })}

            />

        </ScreenView>
    )
}

export default EmptyCardScreen

const styles = StyleSheet.create({})