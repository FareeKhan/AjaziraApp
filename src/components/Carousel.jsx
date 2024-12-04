import { Dimensions, FlatList, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { colors } from '../constant/colors';
import { fonts } from '../constant/fonts';
import { useTranslation } from 'react-i18next';


const { width } = Dimensions.get('screen')

const Carousel = () => {
    const {t} = useTranslation()
    const [currentIndex, setCurrentIndex] = useState(0);
    const flatListRef = useRef(null);

    const carouselItems = [
        "https://s3-alpha-sig.figma.com/img/5cf5/6b61/d20e70e5f1e5bb148f57d3cfdc55bcee?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MwHouwM5-2572-37UXvXe3quw08oGgUD8b2tAadGwzWg5J585o6DCYmx8~o4LifbKFxnfjiqvWTQcX0~G1QVRW5amkb3VLP8uzX-gKzASfy338MgGP6sJ~Q3s5r~4foL7Pgm0q9Rw25pnwkIjAsPIR1YBGBi0vhsCW4~S7qmT5xGeJPpSwjMyG1FwiBx0RJ0jCoy7vcjiNttwTmHTdyrCB9NFnKZz4R7ROs5M5vZohP6gI~36jpvfqCuYtRtbMmPV0-RXdRD3ixNtQIEpptMECuYkqxEcL5BkE~JizQrF0sruJ0ACrl7L4~ZzkAkb284zdyZS9SVnC~N5uRdiRhfRw__",
        "https://s3-alpha-sig.figma.com/img/5cf5/6b61/d20e70e5f1e5bb148f57d3cfdc55bcee?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MwHouwM5-2572-37UXvXe3quw08oGgUD8b2tAadGwzWg5J585o6DCYmx8~o4LifbKFxnfjiqvWTQcX0~G1QVRW5amkb3VLP8uzX-gKzASfy338MgGP6sJ~Q3s5r~4foL7Pgm0q9Rw25pnwkIjAsPIR1YBGBi0vhsCW4~S7qmT5xGeJPpSwjMyG1FwiBx0RJ0jCoy7vcjiNttwTmHTdyrCB9NFnKZz4R7ROs5M5vZohP6gI~36jpvfqCuYtRtbMmPV0-RXdRD3ixNtQIEpptMECuYkqxEcL5BkE~JizQrF0sruJ0ACrl7L4~ZzkAkb284zdyZS9SVnC~N5uRdiRhfRw__",
        "https://s3-alpha-sig.figma.com/img/5cf5/6b61/d20e70e5f1e5bb148f57d3cfdc55bcee?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MwHouwM5-2572-37UXvXe3quw08oGgUD8b2tAadGwzWg5J585o6DCYmx8~o4LifbKFxnfjiqvWTQcX0~G1QVRW5amkb3VLP8uzX-gKzASfy338MgGP6sJ~Q3s5r~4foL7Pgm0q9Rw25pnwkIjAsPIR1YBGBi0vhsCW4~S7qmT5xGeJPpSwjMyG1FwiBx0RJ0jCoy7vcjiNttwTmHTdyrCB9NFnKZz4R7ROs5M5vZohP6gI~36jpvfqCuYtRtbMmPV0-RXdRD3ixNtQIEpptMECuYkqxEcL5BkE~JizQrF0sruJ0ACrl7L4~ZzkAkb284zdyZS9SVnC~N5uRdiRhfRw__",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                const nextIndex = (prevIndex + 1) % carouselItems.length;
                flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
                return nextIndex;
            });
        }, 2500);

        return () => clearInterval(interval);
    }, []);
    return (
        <View style={{ zIndex: 100,  }}>

            <FlatList
                ref={flatListRef}
                data={carouselItems}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={styles.imageContainer}>
                        {/* <Image source={{ uri: item }} style={styles.image} /> */}

                        <ImageBackground source={{ uri: item }} style={styles.image} >

                            <View style={{ paddingTop: 40, paddingHorizontal: 20 }}>
                                <Text style={styles.title}>Lorem Ipsum</Text>
                                <Text style={styles.subTxt}>{t("specialPromotion")}</Text>
                                <Text style={styles.subTxt}>{t("onlyValid")}</Text>
                            </View>
                        </ImageBackground>

                    </View>
                )}
            />


            <View style={{flexDirection:"row",justifyContent:"center",backgroundColor:colors.gray5}}>
            {
                carouselItems?.map((item, index) => {
                    return (
                        <View key={index} style={{ width: 10, height: 10, backgroundColor:  currentIndex == index ? colors.secondary: colors.gray4, borderRadius: 50,marginRight:5 ,marginTop:10,marginBottom:20}} />
                    )
                })
            }
            </View>

        </View>
    )
}

export default Carousel

const styles = StyleSheet.create({
    title: {
        fontFamily: fonts.semiBold,
        color: colors.white,
        fontSize: 20,
        paddingBottom: 15,
        textAlign:"left"
        

    },
    subTxt: {
        fontFamily: fonts.regular,
        color: colors.white,
        fontSize: 14,
        textAlign:"left"
    },
    imageContainer: {
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: width,
        height: 150,
        borderRadius: 10,
    },
})