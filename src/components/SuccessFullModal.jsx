import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import { colors } from '../constant/colors'
import Success from '../assets/svg/succes.svg'
import { fonts } from '../constant/fonts'
import { useTranslation } from 'react-i18next'
import CustomButton from './CustomButton'
import { useNavigation } from '@react-navigation/native'

const SuccessFullModal = ({ setSuccessFullModal, successFullModal }) => {
    const { t } = useTranslation()
const navigation = useNavigation()

    const onPressContinue = ()=>{
        setSuccessFullModal(false)
       navigation.navigate("BottomTab",{
        screen:"HomeScreen"
       })
    }
    return (
        <View>

        
            <Modal
                animationType="slide"
                transparent={true}
                visible={successFullModal}
                onRequestClose={() => {
                    setSuccessFullModal(!successFullModal);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Success width={200} height={200} />
                        <Text style={{ fontSize: 20, fontFamily: fonts.medium, color: colors.secondary, textAlign: "center" }}>{t("successMsg")}</Text>
                        <CustomButton
                            title={t("continueShopping")}
                            btnStyle={{paddingVertical:10,paddingHorizontal:20,marginTop:20}}
                            onPress={onPressContinue}
                        />
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default SuccessFullModal

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
})