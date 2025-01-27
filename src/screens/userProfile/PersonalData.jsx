import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import ScreenView from '../../components/ScreenView'
import HeaderBox from '../../components/HeaderBox'
import { useTranslation } from 'react-i18next'
import Entypo from 'react-native-vector-icons/Entypo'
import { colors } from '../../constant/colors'
import LabelInput from '../../components/LabelInput'
import CustomButton from '../../components/CustomButton'
import { fonts } from '../../constant/fonts'
import { gender } from '../../constant/data'
import ImagePicker from 'react-native-image-crop-picker';
import Animated, { FadeInDown } from 'react-native-reanimated'


const PersonalData = () => {
  const { t } = useTranslation()
  const [isGender, setIsGender] = useState(false)
  const [selectedGender, setSelectedGender] = useState('')
  const GenderData = gender(t)
  const [image, setImage] = useState("https://a.storyblok.com/f/191576/1200x800/a3640fdc4c/profile_picture_maker_before.webp");

  const handleGenderSelection = (item) => {
    setSelectedGender(item?.label)
    setIsGender(false)
  }



  const takeImageFromGallery = () => {
    ImagePicker.openPicker({
      width: 70,
      height: 70,
      cropping: false,
    })
      .then(image => {
        const ff = image?.path;
        setImage(ff);
        console.log('image', ff);
        console.log(image);
      })
      .catch(error => {
        console.log(error);
      });
  };



  return (
    <ScreenView scrollable={true}>
      <HeaderBox
        title={t("personalData")}
        style={{ width: "65%" }}
      />

<Animated.View entering={FadeInDown.delay(300)}>

      <View style={{ alignSelf: "center", marginVertical: 30 }}>
        <Image borderRadius={50} style={styles.imgStyle} source={{ uri: image }} />
        <TouchableOpacity onPress={() => takeImageFromGallery()} style={styles.whitePlusBg}>
          <Entypo name={'camera'} color={colors.secondary} size={15} />
        </TouchableOpacity>
      </View>

      <LabelInput
        label={t("fullName")}
        placeholder={t("enterName")}
      />

      <Text style={[styles.label, styles.inputStyle]}>{t("gender")}</Text>
      <TouchableOpacity onPress={() => setIsGender(!isGender)} style={styles.genderBox}>
        <Text style={{ color: selectedGender == '' ? colors.gray1 : colors.black, fontFamily: fonts.regular }}>{selectedGender ? selectedGender : t("selectGender")}</Text>
        <Entypo name={'chevron-small-down'} size={25} />
      </TouchableOpacity>

      {isGender &&
        <View style={{ padding: 15, backgroundColor: colors.white }}>
          {

            GenderData?.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => handleGenderSelection(item)} style={{ backgroundColor: colors.white }}>
                  <Text style={styles.genderLabel}>{item?.label}</Text>

                  {
                    GenderData?.length - 1 !== index &&
                    <View style={styles.border} />
                  }
                </TouchableOpacity>
              )
            })
          }
        </View>}

      <LabelInput
        label={t("phone")}
        placeholder={"+971 55 123123123"}
        style={styles.inputStyle}
        keyboardType='number-pad'
      />

      <LabelInput
        label={t("email")}
        placeholder={t("enterEmail")}
        style={styles.inputStyle}
      />

      <CustomButton
        title={t("save")}
        btnStyle={{ marginTop: 60 }}

      />

</Animated.View>


    </ScreenView>



  )
}

export default PersonalData

const styles = StyleSheet.create({
  whitePlusBg: {
    width: 27,
    height: 27,
    backgroundColor: colors.white,
    borderRadius: 50,
    position: "absolute",
    bottom: -5,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  imgStyle: {
    width: 80,
    height: 80,
    borderWidth: 1.5,
    borderColor: colors.secondary

  },
  genderBox: {
    height: 50,
    backgroundColor: colors.white,
    borderRadius: 7,
    paddingHorizontal: 10,
    marginTop: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 5
  },
  inputStyle: { marginTop: 10 },
  label: {
    color: colors.black,
    fontFamily: fonts.regular,
    textAlign: "left"
  },
  border: {
    height: 1,
    width: "100%",
    backgroundColor: colors.gray5,
    marginVertical: 10
  },
  genderLabel: {
    textAlign: "left",
    fontFamily: fonts.regular,
    color: colors.black
  }
})