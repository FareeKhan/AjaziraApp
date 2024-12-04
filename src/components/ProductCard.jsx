import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import { colors } from '../constant/colors'
import { fonts } from '../constant/fonts'

const ProductCard = ({item}) => {
    return (
        <View style={styles.productContainer}>
            <Image source={{ uri: item?.image }} style={{ width: 150, height: 120 }} borderRadius={15} />
            <Text style={styles.productTitle}>{item?.title}</Text>


            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
                    <Entypo name={'star'} size={20} color={colors.primary} />
                    <Text style={styles.ratingTxt}>{item?.rating}</Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
                    <SimpleLineIcons name={'location-pin'} size={22} color={colors.primary} />
                    <Text style={styles.ratingTxt}>{item?.distance}</Text>
                </View>
            </View>

            <Text style={styles.discPrice}>AED {item?.discountPrice}</Text>
            <Text style={styles.regPrice}>AED {item?.regularPrice}</Text>

        </View>
    )
}

export default ProductCard

const styles = StyleSheet.create({
    productContainer: {
        backgroundColor: colors.white,
        padding: 10,
        borderRadius: 8,
        marginBottom: 12,
        width:"48%"
    },
    productTitle: {
        color: colors.black,
        fontFamily: fonts.regular,
        fontSize: 19,
        paddingTop: 13,
        paddingBottom: 2
    },
    ratingTxt: {
        color: colors.black,
        fontFamily: fonts.medium
    },
    discPrice: {
        fontSize: 17,
        fontFamily: fonts.bold,
        color: colors.secondary,
        paddingTop: 10
    },
    regPrice: {
        fontSize: 12,
        fontFamily: fonts.bold,
        color: colors.secondary,
        textDecorationLine: "line-through",
        paddingLeft: 10,
        paddingTop: 3
    },
})