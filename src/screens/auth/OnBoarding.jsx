import { Dimensions, FlatList, I18nManager, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { colors } from '../../constant/colors'
const { width, height } = Dimensions.get('screen')
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useTranslation } from 'react-i18next'
import { fonts } from '../../constant/fonts'
import { getOnBoardingData } from '../../constant/data'
import { useDispatch } from 'react-redux'
import { onBoarding } from '../../redux/Auth'


const OnBoarding = ({ navigation }) => {


    const dispatch = useDispatch()
    const { t } = useTranslation()
    const onBoardingData = getOnBoardingData(t)
    const [currentIndex, setCurrentIndex] = useState(0)

    const flatListRef = useRef(null);

    const scrollNext = (e) => {
        const x = e.nativeEvent.contentOffset.x;
        const width = Dimensions.get('window').width;
        const newIndex = Math.floor(x / width + 0.8);
        setCurrentIndex(newIndex);
    }

    const handleNextPress = async () => {
        const nextIndex = currentIndex + 1;
        if (nextIndex < onBoardingData.length) {

            const scrollIndex = I18nManager.isRTL 
            ? onBoardingData.length - 1 - nextIndex 
            : nextIndex;
            flatListRef.current.scrollToIndex({ index: scrollIndex, animated: true });
            setCurrentIndex(nextIndex);
        } else {
            dispatch(onBoarding(true))
            navigation.navigate('PhoneNoScreen')
        }
    };

    const onPressSkip = ()=>{
        dispatch(onBoarding(true))
        navigation.navigate('PhoneNoScreen')
    }


    const renderItem = ({ item, index }) => {
        const isLastIndex = onBoardingData?.length != index + 1
        return (
            <ImageBackground style={styles.imgStyle} source={item?.image}>
                <View style={styles.dataContainer}>
                    <Text style={styles.title}>{item?.title}</Text>
                    <Text style={styles.subTitle}>{item?.subTitle}</Text>

                    <View style={{ flexDirection: "row", alignSelf: "center" }}>
                        {
                            onBoardingData?.map((item, index) => {
                                return (
                                    <View key={index} style={[styles.paginationLine, { backgroundColor: currentIndex == index ? colors.white : colors.gray }]} />
                                )
                            })
                        }
                    </View>


                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingBottom: 20, }}>
                        {
                            <TouchableOpacity onPress={onPressSkip}>
                                {isLastIndex &&
                                    <Text style={styles.bottomTxt}>{t("skip")}</Text>}
                            </TouchableOpacity>
                        }

                        <TouchableOpacity onPress={handleNextPress} style={{ flexDirection: "row", alignItems: 'center', gap: 5 }}>
                            <Text style={styles.bottomTxt}>{t("next")}</Text>
                            <MaterialCommunityIcons name='arrow-top-right' color={colors.white} size={18} style={{ transform: [{ rotate:  I18nManager.isRTL ? '220deg': '45deg' }] }} />
                        </TouchableOpacity>
                    </View>
                </View>

            </ImageBackground>
        )
    }
    return (
        <View style={styles.mainContainer}>
            <FlatList
                ref={flatListRef}
                data={onBoardingData}
                horizontal
                pagingEnabled
                keyExtractor={(item, index) => index?.toString()}
                renderItem={renderItem}
                onScroll={scrollNext}
                scrollEventThrottle={16}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default OnBoarding

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    imgStyle: {
        width: width,
        // height: height,
        justifyContent: "flex-end",
        paddingBottom: 30,
        paddingHorizontal: 30
    },

    dataContainer: {
        backgroundColor: colors.primary,
        paddingHorizontal: 30,
        borderRadius: 40,
        paddingTop: 10
    },
    title: {
        textAlign: "center",
        fontSize: 35,
        color: colors.white,
        fontWeight: "500",
        paddingVertical: 15,
        lineHeight: 42,
        fontFamily: fonts.semiBold

    },
    subTitle: {
        color: colors.white,
        alignSelf: "center",
        textAlign: "center",
        fontSize: 14,
        fontFamily: fonts.regular
    },
    paginationLine: {
        width: 20,
        height: 5,
        backgroundColor: colors.white,
        marginTop: 30,
        marginBottom: 90,
        marginRight: 10,
        borderRadius: 50
    },
    bottomTxt: {
        color: colors.white,
        fontFamily: fonts.regular
        // fontFamily:"Poppins-Black"
    }
})