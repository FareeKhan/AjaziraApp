import { Image, Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderBox from '../../components/HeaderBox'
import ScreenView from '../../components/ScreenView'
import { useTranslation } from 'react-i18next'
import { colors } from '../../constant/colors'
import { fonts } from '../../constant/fonts'
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomButton from '../../components/CustomButton'

const RatingScreen = () => {
    const { t } = useTranslation()
    return (
        <ScreenView>
            <HeaderBox
                title={t("rating")}
                style={{ width: "55%" }}
            />
            <View style={{ alignItems: "center", marginTop: 40 }}>
                <Image style={{ width: "70%", height: 140 }} source={require('../../assets/star.png')} />
                <Text style={styles.rateUs}>{t("rateUs")}</Text>
                <Text style={styles.orderPlace}>{t("orderPlaces")}</Text>
            </View>


            <View style={{ alignItems: 'center',marginTop:90 }}>
                <Stars
                    default={2.5}
                    count={5}
                    half={false}
                    starSize={100} 
                    fullStar={<Icon size={35} name={'star'} style={[styles.myStarStyle]}  color={"red"}/>}
                    emptyStar={<Icon size={35}  name={'star-outline'} style={[styles.myStarStyle, styles.myEmptyStarStyle]}  color={"red"}/>}
                    halfStar={<Icon size={35}  name={'star-half'} style={[styles.myStarStyle]}  color={"red"}/>}
                />
            </View>


            <Text style={styles.great}>{t("great")+"!"}</Text>


           <View style={{flex:1,justifyContent:"flex-end",marginBottom:Platform.OS=='ios'? 30:20}}>
           <CustomButton 
            title={t("submit")}
            />
           </View>


        </ScreenView>
    )
}

export default RatingScreen

const styles = StyleSheet.create({
    rateUs: {
        color: colors.black,
        fontFamily: fonts.medium,
        fontSize: 19,
        marginTop: -15,
        marginBottom: 20
    },
    orderPlace: {
        color: colors.gray1,
        fontFamily: fonts.medium,
        // fontSize:19,
        marginTop: -15,
        marginBottom: 20
    },
    myStarStyle: {
        color: colors.yellow,
        backgroundColor: 'transparent',
        textShadowColor: colors.gray1,
      },
      myEmptyStarStyle: {
        color: 'white',
      },
      great:{
        textAlign:"center",
        marginTop:5,
        fontFamily:fonts.semiBold,
        color:colors.black,
        fontSize:16
      }
})