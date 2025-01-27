import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import ScreenView from '../../components/ScreenView'
import HeaderBox from '../../components/HeaderBox'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { colors } from '../../constant/colors'
import { fonts } from '../../constant/fonts'
import { useTranslation } from 'react-i18next'
import SectionTitleSubTitle from '../../components/SectionTitleSubTitle'
import CartProducts from '../../components/CartProducts'
import { CartData, PaymentMethod, timeData } from '../../constant/data'
import VisaCard from '../../assets/svg/VisaCard.svg'
import CustomButton from '../../components/CustomButton'
import Modal from 'react-native-modal'
import Entypo from 'react-native-vector-icons/Entypo'
import { generateDatesArray } from '../../constant/helper'
import MapView, { Marker } from 'react-native-maps'
import Fontisto from 'react-native-vector-icons/Fontisto'
import SuccessFullModal from '../../components/SuccessFullModal'
import { useSelector } from 'react-redux'


const PaymentScreen = ({ navigation }) => {
  const AddedProductInCart = useSelector((state) => state.cart.cartProducts)

  const { t } = useTranslation()
  const cartProducts = CartData(t)
  const paymentData = PaymentMethod(t)
  const TimeData = timeData(t)
  const [selectedPayment, setSelectedPayment] = useState(1)
  const [modalVisible, setModalVisible] = useState(false);
  const [selectDate, setSelectedData] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [successFullModal, setSuccessFullModal] = useState(false);

  // **** Modal DAta

  const [dates, setDates] = useState(generateDatesArray(new Date(), 1000));
  const [isShowDates, setIsShowDates] = useState(false);
  const [isShowTime, setIsShowTime] = useState(false);
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


  // **********

  const KeyValue = ({ leftValue, rightValue, rightStyle }) => {
    return (
      <View style={styles.keyValueContainer}>
        <Text style={styles.keyStyle}>{leftValue}</Text>
        <Text style={[styles.valueStyle, rightStyle]}>{rightValue}</Text>
      </View>
    )
  }


  const GiftDetail = ({ leftKey, rightValue, giftStyle }) => {
    return (
      <View style={[styles.giftDetailsBox, giftStyle]}>
        <Text style={styles.giftKey}>{leftKey} :</Text>
        <Text style={[styles.giftRightTxt]}>{rightValue}</Text>
      </View>
    )
  }

  const onPressPayment = (item) => {
    setSelectedPayment(item?.id)
  }


  onPressDate = (item) => {
    setSelectedData(item?.date)
    setIsShowDates(false)
  }

  onPressTime = (item) => {
    setSelectedTime(item?.label)
    setIsShowTime(false)

  }



  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity style={{}} onPress={() => onPressDate(item)}>
        <Text style={{ fontSize: 14, paddingBottom: 10, color: colors.gray1, paddingHorizontal: 5, paddingBottom: 10 }}>{item?.date}</Text>
      </TouchableOpacity>
    )

  }

  const renderTime = ({ item, index }) => {
    return (
      <TouchableOpacity style={{}} onPress={() => onPressTime(item)}>
        <Text style={{ fontSize: 14, paddingBottom: 10, color: colors.gray1, paddingHorizontal: 5, paddingBottom: 10 }}>{item?.label}</Text>
      </TouchableOpacity>
    )

  }


  const totalPrice = AddedProductInCart?.reduce((total, item) => total + item?.price, 0)

  return (
    <ScreenView >
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>

        <HeaderBox
          title={t("payment")}
          style={{ width: "58%" }}
        />

        <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.dataAndtime}>
          <AntDesign name={'clockcircleo'} color={colors.secondary} size={15} />
          <Text style={styles.timeTxt}>{selectDate ? selectDate : t("pickDate")}, {selectedTime ? selectedTime : t("pickTime")}  </Text>
        </TouchableOpacity>

        <SectionTitleSubTitle
          title={t("itemsOrdered")}
          style={{ marginVertical: 15, paddingHorizontal: 0 }}
        />

        {/* ***********  ProductCarts    ******** */}

        <CartProducts
          data={AddedProductInCart}
        />

        {/* ***********  Details Transcation    ******** */}
        <SectionTitleSubTitle
          title={t("detailsTransaction")}
          style={{ marginVertical: 15, paddingHorizontal: 0 }}
        />


        <KeyValue
          leftValue={'Raw Gazelle'}
          rightValue={'AED 0.000'}

        />

        <KeyValue
          leftValue={'Tax 10%'}
          rightValue={'AED 0.390'}

        />

        <KeyValue
          leftValue={'Total Price'}
          rightValue={`AED ${totalPrice?.toFixed(2)}`}
          rightStyle={{ color: colors.secondary, fontFamily: fonts.bold }}

        />

        {/* ******************  Map Section     *************** */}

        <View style={styles.deliverBox}>
          <Text style={styles.delvryTxt}>{t("DelTo")}:</Text>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ fontFamily: fonts.regular, color: colors.gray1 }}>{t("changeLocation")}</Text>
            <Entypo name={'plus'} size={25} color={colors.secondary} />

          </View>
        </View>

        <MapView
          style={{ width: "80%", height: 150, marginTop: 5, marginBottom: 20, alignSelf: "center" }}
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


        {/* ***** Gift Delivery Detils ******* */}
        <SectionTitleSubTitle
          title={t("giftDeliveryDetails")}
          style={{ marginVertical: 15, paddingHorizontal: 0 }}

        />


        <View style={styles.giftContainer}>
          <GiftDetail
            leftKey={t('name')}
            rightValue={'Ahmad Mohammad'}
          />

          <GiftDetail
            leftKey={t('phone')}
            rightValue={'+971 552466155'}
          />

          <GiftDetail
            leftKey={t('address')}
            rightValue={'Dubai, Downtown , 12 ST, Flat 155'}
          />

          <GiftDetail
            leftKey={t('emirates')}
            rightValue={'Emirate: Dubai'}
            giftStyle={{ marginBottom: 0 }}
          />
        </View>


        {/* ***** Pay With: ******* */}
        <SectionTitleSubTitle
          title={t("payWith")}
          style={{ marginVertical: 15, marginTop: 35 }}
        />

        {
          paymentData?.map((item, index) => {
            return (
              <TouchableOpacity onPress={() => onPressPayment(item)} key={index} style={styles.paymentContainer}>

                {
                  selectedPayment == item?.id ?
                    <View style={styles.activeCircle} />
                    :
                    <View style={styles.inActiveCircle} />
                }

                <View style={{ width: 60, alignItems: "center" }}>
                  {
                    item?.id == 1 ?
                      <View style={styles.applePayCard}>
                        {item?.icon}
                        <Text style={{ fontSize: 10, fontFamily: fonts.medium, color: colors.black }}>Pay</Text>
                      </View>

                      :
                      item?.id == 2 ?
                        <VisaCard height={40} width={33} />
                        :
                        item?.icon
                  }

                </View>
                <Text style={styles.paymentTxt}>{item?.title}</Text>
              </TouchableOpacity>
            )
          })
        }


        {/* Modal Date Picker and Time Picker */}

        {
          selectedPayment == 1 ?
            <CustomButton
              onPress={() => setSuccessFullModal(true)}
              title={'Pay'}
              btnStyle={styles.applePayBtn}
              icon={<AntDesign size={18} name={'apple1'} color={colors.white} />}
            /> :

            <CustomButton
              title={t('confirm')}
              onPress={() => setSuccessFullModal(true)}
              btnStyle={styles.greenBtn}
            />
        }




      </ScrollView>

      {
        modalVisible &&
        <View style={{ width: 1000, height: 1000, backgroundColor: "#00000050", position: "absolute" }} />
      }

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
        onBackdropPress={() => setModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <AntDesign name={'close'} color={colors.white} size={30} style={{ alignSelf: "flex-end" }} />

            </TouchableOpacity>
            <Text style={styles.modalText}>{t("dateTime")}</Text>

            {/* Date Array */}
            <View style={{ marginBottom: 10 }}>

              <TouchableOpacity onPress={() => setIsShowDates(!isShowDates)} style={[styles.genderBox, isShowDates && styles.extraStyling]}>
                <Text style={[styles.selectedValue, { color: selectDate !== '' ? colors.black : colors.gray1 }]}>{selectDate ? selectDate : t("pickDate")}</Text>
                <Entypo name={'chevron-small-down'} size={25} />
              </TouchableOpacity>
              {
                isShowDates &&
                <View style={styles.dateBorderLine}>
                  <View style={styles.innerBorderLine} />
                </View>
              }

              {
                isShowDates &&
                <View style={styles.dateDateContainer}>
                  <FlatList
                    data={dates}
                    renderItem={renderItem}
                  />
                </View>

              }
            </View>


            {/* Time Array */}
            <View>

              <TouchableOpacity onPress={() => setIsShowTime(!isShowTime)} style={[styles.genderBox, isShowTime && styles.extraStyling]}>
                <Text style={[styles.selectedValue, { color: selectedTime !== '' ? colors.black : colors.gray1 }]}>{selectedTime ? selectedTime : t("pickTime")}</Text>
                <Entypo name={'chevron-small-down'} size={25} />
              </TouchableOpacity>
              {
                isShowTime &&
                <View style={styles.dateBorderLine}>
                  <View style={styles.innerBorderLine} />
                </View>
              }



              {
                isShowTime &&
                <View style={styles.dateDateContainer}>
                  <FlatList
                    data={TimeData}
                    renderItem={renderTime}
                  />
                </View>

              }
            </View>


            {/* Button */}
            <CustomButton
              title={t('save')}
              btnStyle={{ backgroundColor: colors.white, borderWidth: 2, borderColor: colors.secondary, marginTop: 50, width: "80%", alignSelf: "center" }}
              btnTxtStyle={{ color: colors.secondary, textTransform: "uppercase" }}
              onPress={() => setModalVisible(false)}
            />

          </View>
        </View>
      </Modal>






      {
        successFullModal &&
        <View
          style={{ width: 1000, height: 1000, backgroundColor: '#00000050', position: "absolute" }}
        />
      }


      <SuccessFullModal
        successFullModal={successFullModal}
        setSuccessFullModal={setSuccessFullModal}

      />



    </ScreenView>
  )
}

export default PaymentScreen

const styles = StyleSheet.create({
  dataAndtime: {
    flexDirection: "row",
    backgroundColor: colors.white,
    padding: 10,
    borderRadius: 15,
    alignItems: "center",
    marginTop: 35,
    gap: 10

  },
  timeTxt: {
    color: colors.black,
    fontFamily: fonts.regular
  },
  keyValueContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 18
  },
  keyStyle: {
    color: colors.gray1,
    fontFamily: fonts.regular
  },
  valueStyle: {
    color: colors.black,
    fontFamily: fonts.regular

  },
  giftContainer: {
    borderWidth: 1,
    padding: 7,
    borderRadius: 10,
    borderColor: colors.secondary,
    backgroundColor: colors.white
  },
  giftDetailsBox: {
    flexDirection: "row",
    // alignItems: "center",
    marginBottom: 10,

  },
  giftKey: {

    fontFamily: fonts.semiBold,
    color: colors.gray7,
    width: "23%"
  },
  giftRightTxt: {
    color: colors.gray7,
    fontFamily: fonts.regular,
    width: "77%"

  },
  paymentTxt: {
    fontFamily: fonts.regular,
    color: colors.black
  },
  applePayBtn: {
    backgroundColor: colors.black,
    paddingVertical: 15,
    gap: 5,
    marginTop: 40
  },
  greenBtn: {
    backgroundColor: colors.secondary,
    paddingVertical: 15,
    gap: 5,
    marginTop: 40
  },
  activeCircle: {
    height: 22,
    width: 22,
    backgroundColor: colors.secondary,
    borderRadius: 50
  },
  inActiveCircle: {
    height: 22,
    width: 22,
    backgroundColor: '#fff',
    borderRadius: 50,
    borderWidth: 3,
    borderColor: colors.gray1.concat(80)
  },
  applePayCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 1,
    borderWidth: 1,
    borderRadius: 3,
    paddingVertical: 4,
    paddingHorizontal: 2,
    alignSelf: "center"
  },
  deliverBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10
  },
  delvryTxt: {
    fontSize: 16,
    fontFamily: fonts.semiBold,
    color: colors.black
  },














  centeredView: {
    flex: 1,
    justifyContent: 'center',
  },
  modalView: {
    backgroundColor: colors.primary,
    borderRadius: 60,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    paddingHorizontal: 30,
    paddingTop: 20,
    paddingBottom: 40,
    marginHorizontal: 10
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
  },
  modalText: {
    marginBottom: 15,
    color: colors.white,
    fontFamily: fonts.semiBold,
    fontSize: 16,
    textAlign: "left"
  },
  genderBox: {
    paddingTop: 12,
    paddingBottom: 12,
    backgroundColor: colors.white,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 10,
    marginTop: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 20,
    borderColor: colors.gray1,
    borderWidth: 2,

    borderBottomLeftRadius: 30, borderBottomRightRadius: 30

  },
  inputStyle: { marginTop: 10 },
  label: {
    color: colors.white,
    fontFamily: fonts.regular,
  },
  border: {
    height: 1,
    width: "100%",
    backgroundColor: colors.gray5,
    marginVertical: 10
  },
  extraStyling: {
    paddingBottom: 2,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderWidth: 0

  },
  paymentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginVertical: 6,
    marginLeft: 15
  },
  dateDateContainer: {
    paddingHorizontal: 15,
    backgroundColor: colors.white,
    height: 90,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    paddingBottom: 20,

  },
  dateBorderLine: {
    height: 2,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingBottom: 10
  },
  innerBorderLine: {
    width: "90%",
    height: 1,
    backgroundColor: colors.gray6
  },
  selectedValue: {
    fontFamily: fonts.medium,
    color: colors.black
  }

})