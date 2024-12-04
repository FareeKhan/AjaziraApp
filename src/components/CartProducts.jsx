import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { fonts } from '../constant/fonts'
import { colors } from '../constant/colors'

const CartProducts = ({ data }) => {


    const renderItem = ({ item, index }) => {
        return (
            <View style={styles.box}>
                <Image borderRadius={10} source={{ uri: item?.image }} style={styles.imageStyle} />
                <View>
                    <Text style={styles.title}>{item?.title}</Text>
                    <Text style={styles.price}>{item?.price}</Text>
                </View>

                <View style={{ marginLeft: "auto" }}>
                    <Text style={styles.itemTxt}>1 item</Text>
                </View>
            </View>
        )
    }
    return (
        <View>
            <FlatList
                data={data}
                keyExtractor={(item, index) => index?.toString()}
                renderItem={renderItem}
            />
        </View>
    )
}

export default CartProducts

const styles = StyleSheet.create({
    box: {
        flexDirection: "row",
        alignItems: "center",
        gap: 15,
        marginBottom:20
    },
    imageStyle: {
        width: "25%",
        height: 75
    },
    title: {
        marginBottom: 20,
        fontSize: 15,
        fontFamily: fonts.semiBold
    },
    price: {
        fontSize: 15,
        fontFamily: fonts.bold,
        color: colors.secondary
    },
    itemTxt: {
        color: colors.gray1
    }
})