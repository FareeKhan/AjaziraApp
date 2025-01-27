import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProductDataCard from '../../components/ProductDataCard'
import { productData } from '../../constant/data'
import { useTranslation } from 'react-i18next'
import { colors } from '../../constant/colors'
import { useNavigation } from '@react-navigation/native'
import ScreenView from '../../components/ScreenView'
import HeaderBox from '../../components/HeaderBox'

const CategoryScreenProduct = ({route}) => {
    const {title} = route?.params
    const navigation = useNavigation()
    const { t } = useTranslation()
    const products = productData(t)


    const onProductPress = () => {
        // navigation.navigate("ProductDetails",{
        //     catName:title
        // })
    }

    return (
        <ScreenView >

            <HeaderBox
                title={title}
                style={{width:title?.length>=6?"60%" : "55%",marginBottom:40}}
            />


            <ProductDataCard
                catName={title}
                data={products}
                flatListStyle={{ backgroundColor: colors.gray5 }}
                onProductPress={onProductPress}
            />
        </ScreenView>
    )
}

export default CategoryScreenProduct

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    }
})