import React, { useRef, useMemo, useState } from 'react';
import { View, Modal, StyleSheet, Text, TouchableOpacity } from 'react-native';
import SectionTitleSubTitle from './SectionTitleSubTitle';
import { useTranslation } from 'react-i18next';
import ScreenTitle from './ScreenTitle';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { colors } from '../constant/colors';
import { fonts } from '../constant/fonts';
import CustomButton from './CustomButton';
import { useNavigation } from '@react-navigation/native';


const ForgotModal = ({modalVisible,setModalVisible,selectedItem,setSelectedItem,onPress}) => {
  const { t } = useTranslation(t)


  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <TouchableOpacity activeOpacity={1} onPress={()=> setModalVisible(false)} style={{flex:1}}>
          </TouchableOpacity>
          <View style={styles.modalView}>

            <View style={{ width: 50, height: 3, backgroundColor: colors.gray1, alignSelf: "center", borderRadius: 50, marginTop: 10, marginBottom: 30 }} />


            <ScreenTitle title={t('forgotPassword')} subTitle={t('forgotSubModal')} />


            <TouchableOpacity onPress={()=>setSelectedItem("sms")} style={[styles.modalContainer, { marginTop: 30 }, selectedItem == 'sms' && {borderWidth:1,borderColor:colors.primary}]}>
              <View style={styles.iconBox}>
                <MaterialIcons name={'phone-in-talk'} color={colors.black} size={20} />
              </View>
              <View style={{marginTop:-5}}>
                <Text style={styles.sms}>{t('viaSms')}</Text>
                <Text style={styles.value}>+12 8347 2838 28</Text>
              </View>
              {
                selectedItem == 'sms'&&
              <Ionicons name={'checkmark-circle'} color={colors.secondary} size={20} style={{ marginLeft: "auto" }} />


              }
            </TouchableOpacity>



            <TouchableOpacity onPress={()=>setSelectedItem("mail")} style={[styles.modalContainer,  selectedItem == 'mail' && {borderWidth:1,borderColor:colors.primary}]}>

              <View style={styles.iconBox}>
                <MaterialIcons name={'mail'} color={colors.black} size={20} />
              </View>
              <View style={{marginTop:-5}}>
                <Text style={styles.sms}>{t('viaEmail')}</Text>
                <Text style={styles.value}>abc@gmail.com</Text>
              </View>
              {
                selectedItem == 'mail'&&
              <Ionicons name={'checkmark-circle'} color={colors.secondary} size={20} style={{ marginLeft: "auto" }} />


              }
            </TouchableOpacity>


            <CustomButton
              title={t('continue')}
              btnStyle={{ marginTop: 10 }}
              onPress={onPress}

            />

          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: "#00000030"
  },
  modalView: {
    backgroundColor: "#e4e4e4",
    borderRadius: 20,
    paddingHorizontal: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    paddingBottom: 30
  },
  button: {
    borderRadius: 20,
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
  },
  iconBox: {
    backgroundColor: "#f5f5ff",
    width: 40,
    height: 40,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  sms: {
    fontFamily: fonts.regular,
    color: colors.gray1,
    marginBottom: 10
  },
  modalContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingVertical: 15,
    backgroundColor: colors.white,
    paddingHorizontal: 15,

    borderRadius: 15,
    marginBottom: 15
  },
  value:{
    color:colors.black,
    fontFamily:fonts.regular
  }
});


export default ForgotModal;
