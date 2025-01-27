import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { fonts } from '../constant/fonts'
import { colors } from '../constant/colors'

const CartProducts = ({ data }) => {


    const renderItem = ({ item, index }) => {
        return (
            <View style={styles.box}>
                <Image borderRadius={10} source={{ uri: item?.image }} style={styles.imageStyle} />
                <View style={{width:"50%",alignItems:"flex-start"}}>
                    <Text numberOfLines={1} style={styles.title}>{item?.productName}</Text>
                    <Text style={styles.price}>{`AED ${item?.price}`} </Text>
                </View>

                <View style={{ marginLeft: "auto" }}>
                    <Text style={styles.itemTxt}>{item?.counter} item</Text>
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
        fontFamily: fonts.semiBold,
        color:colors.black
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