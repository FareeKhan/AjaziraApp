import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenView from '../../components/ScreenView'
import HeaderBox from '../../components/HeaderBox'
import { useTranslation } from 'react-i18next'
import ProductDataCard from '../../components/ProductDataCard'
import { useSelector } from 'react-redux'

const FavoriteScreen = ({ navigation }) => {
    const favoriteData = useSelector((state) => state?.favorite?.AddInFavorite)

    const { t } = useTranslation()

    const onProductPress = () => {
        navigation.navigate("ProductDetails")
    }

    return (
        <ScreenView>
            <HeaderBox
                title={t("favorite")}
                style={{ width: "60%", marginBottom: 30 }}
            />


            {/* <ProductDataCard
                data={favoriteData}
                onProductPress={onProductPress}
            /> */}

            <ProductDataCard
                data={favoriteData}
                flatListContainerStyle={{ paddingHorizontal: 0 }}
            />




        </ScreenView>
    )
}

export default FavoriteScreen

const styles = StyleSheet.create({})