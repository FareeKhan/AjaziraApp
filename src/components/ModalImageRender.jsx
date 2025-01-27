import { StyleSheet, Text, View, Modal, Image, Dimensions, ImageBackground, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
const {width,height} = Dimensions.get('screen')

const ModalImageRender = ({onPress,modalVisible}) => {
    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    onPress()
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <ImageBackground borderRadius={10} source={require('../assets/ModalImage.png')} style={{ width: width-90, height: height-300,resizeMode:'contain'}} >
                          <TouchableOpacity onPress={onPress} style={{alignItems:"flex-end",padding:10}}>
                        <AntDesign name={'close'} color={'#fff'} size={24} />
                          </TouchableOpacity>
                        </ImageBackground>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default ModalImageRender

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00000090',

    },
    modalView: {
        margin: 20,
        borderRadius: 20,
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
        color: 'red'
    },
})