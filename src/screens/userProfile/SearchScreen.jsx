import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import ScreenView from '../../components/ScreenView'
import HeaderBox from '../../components/HeaderBox'
import { useTranslation } from 'react-i18next'
import LabelInput from '../../components/LabelInput'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { colors } from '../../constant/colors'
import CategoriesComp from '../../components/CategoriesComp'
import SectionTitleSubTitle from '../../components/SectionTitleSubTitle'
import { fonts } from '../../constant/fonts'


const SearchScreen = () => {
    const { t } = useTranslation()
    const [selectedItem, setSelectedItem] = useState('')
    const [recentSearch, setRecentSearch] = useState([
        {
            id: 1,
            title: t("chicken"),
        },
        {
            id: 2,
            title: t("meat"),
        },
    ])




    const onPressDelete = () => {
        setRecentSearch([])
    }

    const onPressSingleDelete = (id) => {
        const filterDelete = recentSearch?.filter((item) => item?.id != id)
        setRecentSearch(filterDelete)
    }


    return (
        <ScreenView>
            <HeaderBox
                title={t("searchFood")}
                style={{ width: "62%", marginBottom: 10 }}

            />


            {/* ***** Search And Filter Input ********* */}
            <View>
                <LabelInput
                    placeholder={t('search')}
                    search={true}
                />

                <TouchableOpacity style={styles.filterIcon}>
                    <Fontisto name={'equalizer'} size={17} color={colors.black} />
                </TouchableOpacity>
            </View>


            {/* ***** Categories List ********* */}
            <View style={{ marginHorizontal: -20, paddingHorizontal: 5 }}>
                <CategoriesComp
                    selectedItem={selectedItem}
                    setSelectedItem={setSelectedItem}
                />
            </View>


            {/* *** Recent Research *** */}
            {
                recentSearch?.length > 0 &&

                <SectionTitleSubTitle
                    title={t("recentSearches")}
                    subTitle={t("delete")}
                    onPress={() => onPressDelete()}
                    style={{ marginTop: 30, marginHorizontal: -10, marginBottom: 10 }}
                />
            }


            {


                recentSearch?.map((item, index) => {
                    return (
                        <View style={styles.recentSearchDataBox}>
                            <Feather name={'search'} color={colors.gray1} size={20} />
                            <Text style={styles.searchTxt}>{item?.title}</Text>
                            <TouchableOpacity onPress={() => onPressSingleDelete(item?.id)} style={{ marginLeft: "auto" }}>
                                <AntDesign name={'close'} color={colors.black} size={20} />
                            </TouchableOpacity>

                        </View>
                    )
                })
            }

        </ScreenView>
    )
}

export default SearchScreen

const styles = StyleSheet.create({
    filterIcon: {
        position: "absolute",
        top: 20,
        right: 5,
        padding: 10
    },
    recentSearchDataBox: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        marginTop: 15
    },
    searchTxt: {
        color: colors.black,
        fontFamily: fonts.medium,
        fontSize: 15
    }
})