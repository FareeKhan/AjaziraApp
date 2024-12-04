import { FlatList, I18nManager, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../constant/colors'
import { fonts } from '../constant/fonts'

const HorizontalData = ({ onPress, selectedValue, setSelectedValue, item, firstValue, secondValue }) => {



    return (
        // <TouchableOpacity onPress={onPress} style={[styles.weightContainer, { backgroundColor: selectedValue == item?.id ? colors.secondary : colors.white }]} >
        //     <Text style={[styles.weightTxt, { color: selectedValue == item?.id ? colors.white : colors.black }]}>{item?.weight}, {item?.year}</Text>
        //     <Text style={[styles.priceTxt, { color: selectedValue == item?.id ? colors.white : colors.black }
        //     ]}>{item?.price}</Text>
        // </TouchableOpacity>

        <TouchableOpacity onPress={onPress} style={[styles.weightContainer, { backgroundColor: selectedValue == item?.id ? colors.secondary : colors.white }]} >
            <Text style={[styles.weightTxt, { color: selectedValue == item?.id ? colors.white : colors.black }]}>{firstValue}</Text>
            <Text style={[styles.priceTxt, { color: selectedValue == item?.id ? colors.white : colors.black }
            ]}>{secondValue}</Text>
        </TouchableOpacity>
    )
}

export default HorizontalData

const styles = StyleSheet.create({
    weightContainer: {
        backgroundColor: colors.secondary,
        paddingVertical: I18nManager.isRTL? 10 : 20,
        // paddingHorizontal: 20,
        width:135,
        borderRadius: 50,
        marginRight:I18nManager.isRTL? 0 : 15,
        marginLeft:I18nManager.isRTL? 15 : 0,
        alignItems:"center"
    },
    weightTxt: {
        fontSize: 12,
        fontFamily: fonts.regular,
        color: colors.white
    },
    priceTxt: {
        fontSize: 15,
        fontFamily: fonts.regular,
        color: colors.white,
        marginTop: 4,
        textAlign: "center"

    }
})