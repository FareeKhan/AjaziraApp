import { I18nManager, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../constant/colors'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { fonts } from '../constant/fonts'
import { useNavigation } from '@react-navigation/native'

const HeaderBox = ({ title, right, style, onPress, filter,ThreeDots, deleted,isShare }) => {
    const navigation = useNavigation()
    return (
        <View style={[styles.container, style]}>
            <TouchableOpacity onPress={()=>navigation.goBack()} style={styles.btnStyle}>
                <AntDesign name={I18nManager.isRTL? 'right': 'left'} size={15} color={colors.black} />
            </TouchableOpacity>

            <Text style={styles.title}>{title}</Text>


            {
                right &&
                <TouchableOpacity onPress={onPress} style={styles.btnStyle}>
                    <AntDesign name={'left'} size={15}  color={colors.black} />
                </TouchableOpacity>

            }

            {
                ThreeDots &&
                <TouchableOpacity onPress={onPress} style={styles.btnStyle}>
                    <Entypo name={'dots-three-horizontal'} size={15} color={colors.black}  />
                </TouchableOpacity>

            }

            {
                deleted &&
                <TouchableOpacity onPress={onPress} style={styles.btnStyle}>
                    <AntDesign name={'delete'} size={15} color={colors.red} />
                </TouchableOpacity>

            }  
            
            {
                isShare &&
                <TouchableOpacity onPress={onPress} style={styles.btnStyle}>
                    <EvilIcons name={'share-google'} size={28} color={colors.black} />
                </TouchableOpacity>

            }

           
        </View>
    )
}

export default HeaderBox

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    btnStyle: {
        width: 30,
        height: 30,
        backgroundColor: colors.white,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        fontSize: 15,
        fontFamily: fonts.medium,
        color: colors.black

    }
})