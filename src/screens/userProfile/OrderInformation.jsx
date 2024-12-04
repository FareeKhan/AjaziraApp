import { Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import ScreenView from '../../components/ScreenView'
import HeaderBox from '../../components/HeaderBox'
import { useTranslation } from 'react-i18next'
import LabelInput from '../../components/LabelInput'
import Entypo from 'react-native-vector-icons/Entypo'
import Fontisto from 'react-native-vector-icons/Fontisto'
import { colors } from '../../constant/colors'
import { fonts } from '../../constant/fonts'
import MapView, { Marker } from 'react-native-maps';
import CustomButton from '../../components/CustomButton'

const OrderInformation = () => {
    const { t } = useTranslation()
    const [pickupLocation, setPickupLocation] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    });



    const handleMapPress = e => {
        const { coordinate } = e.nativeEvent;
        setPickupLocation({
            latitude: coordinate.latitude,
            longitude: coordinate.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
        });

    }
    return (
        <ScreenView scrollable={true}>
            <HeaderBox
                title={t("orderInfo")}
                deleted={true}
                style={{ marginBottom: 40 }}
            />


            {/* *******Address Fields   *********** */}

            <LabelInput
                label={t("addressDetails")}
                placeholder={t("flatBuilding")}
            />

            <LabelInput
                placeholder={t("emirates")}
            />



            <View style={styles.locationTxtContainer}>
                <Text style={{ fontSize: 16, fontFamily: fonts.regular, color: colors.black }}>{t("selectLocation")}</Text>
                <TouchableOpacity style={styles.rightSideLocation}>
                    <Text style={{ fontSize: 16, fontFamily: fonts.regular, color: colors.gray7 }}>{t("addLocation")}</Text>
                    <Entypo name={'plus'} size={20} color={colors.secondary} />
                </TouchableOpacity>
            </View>




            <MapView
                style={{ width: "100%", height: 200, marginTop: 5, marginBottom: 20 }}
                initialRegion={pickupLocation}
                onPress={handleMapPress}
            >
                <Marker
                    coordinate={pickupLocation}
                    draggable
                    anchor={{ x: 0.5, y: 1 }}
                    description='Your Location'
                >
                    <Fontisto
                        name={'map-marker-alt'}
                        size={30}
                        color={colors.red}
                    />

                </Marker>
            </MapView>




            <LabelInput
                label={t("fullName")}
                placeholder={t("enterName")}
            />



            {/* Mobile Number Design */}
            <Text style={styles.label}>{t("mobileNo")}</Text>
            <View style={styles.mobileFieldsContainer}>
                <LabelInput
                    placeholder={t("+971")}
                    style={{ width: Platform.OS == 'ios' ? "20%": "22%" }}
                    inputFieldStyle={{ width: "75%" }}
                    down={true}
                />

                <LabelInput
                    placeholder={t("55")}
                    style={{ width: "18%" }}
                    inputFieldStyle={{ width: "75%", textAlign: "center" }}
                    down={true}
                />


                <LabelInput
                    placeholder={"12345678"}
                    style={{ width: "55%" }}
                />
            </View>




        <CustomButton 
        title={t("saveAddress")}
        
        
        />





        </ScreenView>
    )
}

export default OrderInformation

const styles = StyleSheet.create({
    locationTxtContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 25
    },
    rightSideLocation: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    label: {
        color: colors.black,
        fontFamily: fonts.regular,
        marginTop: 10,
        textAlign:"left"
    },
    inputContainer: {
        height: 50,
        backgroundColor: colors.white,
        borderRadius: 7,
        paddingHorizontal: 10,
        marginTop: 12,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"

    },
    inputStyle: {
        width: "90%"
    },
    mobileFieldsContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom:40
    }
})