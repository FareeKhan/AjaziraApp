import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { categoryData } from '../constant/data'
import { useTranslation } from 'react-i18next'
import { colors } from '../constant/colors'
import { fonts } from '../constant/fonts'
import { useNavigation } from '@react-navigation/native'

const CategoriesComp = ({selectedItem,setSelectedItem}) => {
    const navigation = useNavigation()
    const {t} = useTranslation()
    const catData = categoryData(t)

    const onPressCat = (item)=>{
        setSelectedItem(item?.title)
        navigation.navigate("CategoryScreenProduct",{
            title:item?.title
        })
    }

    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity onPress={()=>onPressCat(item)} style={[styles.catStyleContainer, { marginRight: 26,backgroundColor:selectedItem == item?.title ? colors.secondary: colors.white }]}>
                <Image source={item?.image} style={{ width: 60, height: 50, marginBottom: 20 }} />
                <Text style={[styles.catTxt,{color:selectedItem == item?.title ? colors.white: colors.gray3,}]}>{item?.title}</Text>
            </TouchableOpacity>
        )
    }
    return (
        <View>
            <FlatList
                data={catData}
                horizontal
                keyExtractor={(item, index) => index?.toString()}
                contentContainerStyle={{ paddingLeft: 15, marginTop: 10 }}
                renderItem={renderItem}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default CategoriesComp

const styles = StyleSheet.create({
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
})