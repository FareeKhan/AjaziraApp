import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import { colors } from '../constant/colors'
import { fonts } from '../constant/fonts'

const SingleProductCard = ({ item, onProductPress }) => {

    const addFavorite = () => {

    }

    return (
        <View style={{flex:1}}>
            <TouchableOpacity onPress={onProductPress} style={styles.productContainer}>
                <View>
                    <Image source={{ uri: item?.image }} style={{ width: "100%", height: 120 }} borderRadius={15} />
                    <TouchableOpacity onPress={addFavorite} style={styles.heartBox}>
                        <Entypo name={'heart-outlined'} size={25} color={colors.red} />
                    </TouchableOpacity>
                </View>
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

            </TouchableOpacity>
        </View>
    )
}

export default SingleProductCard

const styles = StyleSheet.create({
    productContainer: {
        backgroundColor: colors.white,
        padding: 10,
        borderRadius: 8,
        marginBottom: 12,
        width: "48%"
    },
    heartBox: {
        width: 35,
        height: 35,
        backgroundColor: colors.white,
        borderRadius: 50,
        position: "absolute",
        right: 10,
        top: 10,
        alignItems: "center",
        justifyContent: "center"

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
        color: colors.secondary.concat(90),
        textDecorationLine: "line-through",
        paddingLeft: 10,
        paddingTop: 3
    },
})