import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { fonts } from '../constant/fonts'
import { colors } from '../constant/colors'

const SectionTitleSubTitle = ({ title, subTitle, onPress, style }) => {
    return (
        <View style={[styles.Box, style]}>
            <Text style={styles.title}>{title}</Text>


            {
                subTitle &&
                <TouchableOpacity onPress={onPress}>
                    <Text style={styles.subTitle}>{subTitle}</Text>
                </TouchableOpacity>
            }

        </View>
    )
}

export default SectionTitleSubTitle

const styles = StyleSheet.create({
    Box: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 15
    },
    title: {
        fontSize: 16,
        fontFamily: fonts.semiBold,
    },
    subTitle: {
        fontFamily: fonts.medium,
        color: colors.primary
    },
})