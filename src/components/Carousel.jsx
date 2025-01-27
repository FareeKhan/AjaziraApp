// import { Dimensions, FlatList, ImageBackground, StyleSheet, Text, View } from 'react-native'
// import React, { useEffect, useRef, useState } from 'react'
// import { colors } from '../constant/colors';
// import { fonts } from '../constant/fonts';
// import { useTranslation } from 'react-i18next';


// const { width } = Dimensions.get('screen')

// const Carousel = () => {
//     const {t} = useTranslation()
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const flatListRef = useRef(null);

//     const carouselItems = [
//         "https://s3-alpha-sig.figma.com/img/5cf5/6b61/d20e70e5f1e5bb148f57d3cfdc55bcee?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MwHouwM5-2572-37UXvXe3quw08oGgUD8b2tAadGwzWg5J585o6DCYmx8~o4LifbKFxnfjiqvWTQcX0~G1QVRW5amkb3VLP8uzX-gKzASfy338MgGP6sJ~Q3s5r~4foL7Pgm0q9Rw25pnwkIjAsPIR1YBGBi0vhsCW4~S7qmT5xGeJPpSwjMyG1FwiBx0RJ0jCoy7vcjiNttwTmHTdyrCB9NFnKZz4R7ROs5M5vZohP6gI~36jpvfqCuYtRtbMmPV0-RXdRD3ixNtQIEpptMECuYkqxEcL5BkE~JizQrF0sruJ0ACrl7L4~ZzkAkb284zdyZS9SVnC~N5uRdiRhfRw__",
//         "https://s3-alpha-sig.figma.com/img/5cf5/6b61/d20e70e5f1e5bb148f57d3cfdc55bcee?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MwHouwM5-2572-37UXvXe3quw08oGgUD8b2tAadGwzWg5J585o6DCYmx8~o4LifbKFxnfjiqvWTQcX0~G1QVRW5amkb3VLP8uzX-gKzASfy338MgGP6sJ~Q3s5r~4foL7Pgm0q9Rw25pnwkIjAsPIR1YBGBi0vhsCW4~S7qmT5xGeJPpSwjMyG1FwiBx0RJ0jCoy7vcjiNttwTmHTdyrCB9NFnKZz4R7ROs5M5vZohP6gI~36jpvfqCuYtRtbMmPV0-RXdRD3ixNtQIEpptMECuYkqxEcL5BkE~JizQrF0sruJ0ACrl7L4~ZzkAkb284zdyZS9SVnC~N5uRdiRhfRw__",
//         "https://s3-alpha-sig.figma.com/img/5cf5/6b61/d20e70e5f1e5bb148f57d3cfdc55bcee?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MwHouwM5-2572-37UXvXe3quw08oGgUD8b2tAadGwzWg5J585o6DCYmx8~o4LifbKFxnfjiqvWTQcX0~G1QVRW5amkb3VLP8uzX-gKzASfy338MgGP6sJ~Q3s5r~4foL7Pgm0q9Rw25pnwkIjAsPIR1YBGBi0vhsCW4~S7qmT5xGeJPpSwjMyG1FwiBx0RJ0jCoy7vcjiNttwTmHTdyrCB9NFnKZz4R7ROs5M5vZohP6gI~36jpvfqCuYtRtbMmPV0-RXdRD3ixNtQIEpptMECuYkqxEcL5BkE~JizQrF0sruJ0ACrl7L4~ZzkAkb284zdyZS9SVnC~N5uRdiRhfRw__",
//     ];

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentIndex((prevIndex) => {
//                 const nextIndex = (prevIndex + 1) % carouselItems.length;
//                 flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
//                 return nextIndex;
//             });
//         }, 2500);

//         return () => clearInterval(interval);
//     }, []);
//     return (
//         <View style={{ zIndex: 100,  }}>

//             <FlatList
//                 ref={flatListRef}
//                 data={carouselItems}
//                 horizontal
//                 pagingEnabled
//                 showsHorizontalScrollIndicator={false}
//                 keyExtractor={(item, index) => index.toString()}
//                 renderItem={({ item }) => (
//                     <View style={styles.imageContainer}>
//                         {/* <Image source={{ uri: item }} style={styles.image} /> */}

//                         <ImageBackground source={{ uri: item }} style={styles.image} >

//                             <View style={{ paddingTop: 40, paddingHorizontal: 20 }}>
//                                 <Text style={styles.title}>Lorem Ipsum</Text>
//                                 <Text style={styles.subTxt}>{t("specialPromotion")}</Text>
//                                 <Text style={styles.subTxt}>{t("onlyValid")}</Text>
//                             </View>
//                         </ImageBackground>

//                     </View>
//                 )}
//             />


//             <View style={{flexDirection:"row",justifyContent:"center",backgroundColor:colors.gray5}}>
//             {
//                 carouselItems?.map((item, index) => {
//                     return (
//                         <View key={index} style={{ width: 10, height: 10, backgroundColor:  currentIndex == index ? colors.secondary: colors.gray4, borderRadius: 50,marginRight:5 ,marginTop:10,marginBottom:20}} />
//                     )
//                 })
//             }
//             </View>

//         </View>
//     )
// }

// export default Carousel

// const styles = StyleSheet.create({
//     title: {
//         fontFamily: fonts.semiBold,
//         color: colors.white,
//         fontSize: 20,
//         paddingBottom: 15,
//         textAlign:"left"


//     },
//     subTxt: {
//         fontFamily: fonts.regular,
//         color: colors.white,
//         fontSize: 14,
//         textAlign:"left"
//     },
//     imageContainer: {
//         width: width,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     image: {
//         width: width,
//         height: 150,
//         borderRadius: 10,
//     },
// })

import React, { useEffect, useRef, useState } from 'react';
import {
    Dimensions,
    FlatList,
    ImageBackground,
    StyleSheet,
    Text,
    View,
    Animated,
    Platform,
    Image,
} from 'react-native';
import { colors } from '../constant/colors';
import { fonts } from '../constant/fonts';
import { useTranslation } from 'react-i18next';
import Carousels from 'react-native-reanimated-carousel';

const { width } = Dimensions.get('screen');
const ITEM_WIDTH = width * 0.8; // 80% of the screen width
const ITEM_SPACING = (width - ITEM_WIDTH) / 2; // Space for centering

const Carousel = () => {
    const { t } = useTranslation();
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselItems = [
        'https://earlsmeats.com/wp-content/uploads/2021/08/iStock-857433268.jpg',
        'https://www.marksmobilebutchers.co.uk/wp-content/uploads/2021/03/marksmobilebutchers-freezer-fillers-cat-image.jpg',
        'https://www.crbgroup.com/wp-content/uploads/2020/09/cell-based-meat-mobile.jpg',
    ];


  
    return (
        <View style={{ zIndex: 100 }}>
            <Carousels
                loop
                width={width}
                height={width / 2}
                autoPlay={true}
                pagingEnabled
                // data={[...new Array(6).keys()]}
                data={carouselItems}
                scrollAnimationDuration={2000}
                onSnapToItem={(index) => setCurrentIndex(index)}
                // onSnapToItem={handleCurrentIndex}
                renderItem={({ item, index }) => (
                    <ImageBackground source={{ uri: item }} style={{ width: "100%", height: 170 }} >
                        <View style={styles.imageContainer}>
                            <Text style={styles.imageTitle}>Lorem Ipsum</Text>
                            <Text style={styles.imageSubTitle}>Special promotion{'\n'}only valid today</Text>
                        </View>
                    </ImageBackground>
                )}
            />
            <View style={styles.pagination}>
                {carouselItems.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.paginationDot,
                            {
                                backgroundColor:
                                currentIndex === index
                                        ? colors.secondary
                                        : colors.gray4,
                            },
                        ]}
                    />
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontFamily: fonts.semiBold,
        color: colors.white,
        fontSize: 20,
        paddingBottom: 15,
        textAlign: 'left',
    },
    subTxt: {
        fontFamily: fonts.regular,
        color: colors.white,
        fontSize: 14,
        textAlign: 'left',
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
    },
    inactiveImage: {
        opacity: 0.5, // Dim inactive images
        backgroundColor: 'rgba(255, 255, 255, 0.3)', // Apply white shadow effect
    },
    pagination: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20,
        marginTop: -15
    },
    paginationDot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 5,
    },
    imageContainer: { paddingHorizontal: 20, paddingVertical: 30 },
    imageTitle: { fontSize: 18, color: "#fff", fontFamily: fonts.semiBold,textAlign:"left" },
    imageSubTitle: { fontFamily: fonts.regular, color: "#fff", paddingTop: 10,textAlign:"left"  }



});

export default Carousel;
