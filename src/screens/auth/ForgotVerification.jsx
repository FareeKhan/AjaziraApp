import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ScreenView from '../../components/ScreenView'
import HeaderBox from '../../components/HeaderBox'
import ScreenTitle from '../../components/ScreenTitle'
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { colors } from '../../constant/colors'
import { fonts } from '../../constant/fonts'
import { useTranslation } from 'react-i18next'
import AntDesign from 'react-native-vector-icons/AntDesign'
import CustomButton from '../../components/CustomButton'
const CELL_COUNT = 4;
const ForgotVerification = ({navigation,route}) => {
    const { t } = useTranslation()


    const {isEmail} = route?.params
    console.log('dsd',   isEmail)
    const {showValue} = route?.params
    const [value, setValue] = useState("");
    const [timeLeft, setTimeLeft] = useState(120);


    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });


    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prevItem) => {
                if (prevItem == 0) {
                    clearInterval(timer)
                    return 0
                }
                return prevItem - 1
            })

        }, 1000)
        return () => clearTimeout(timer)
    })


    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };



    return (
        <ScreenView>
            <HeaderBox
                title={t('otp')}
                style={{ width: "55%", marginBottom: 20 }}
            />

            <ScreenTitle title={isEmail ? t('emailVerification') : t('numberVerify')} subTitle={t('numberVerifySubTitle')} />
            <Text style={{color:colors.gray1,textAlign:"left"}}>{showValue}</Text>
            <CodeField
                ref={ref}
                {...props}
                value={value}
                onChangeText={setValue}
                cellCount={CELL_COUNT}
                rootStyle={styles.codeFieldRoot}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                renderCell={({ index, symbol, isFocused }) => (
                    <View
                        key={index}
                        style={[styles.cell, isFocused && styles.focusCell]}
                    >
                        <Text
                            style={[styles.cellTxt]}
                            onLayout={getCellOnLayoutHandler(index)}
                        >
                            {symbol || (isFocused ? <Cursor /> : null)}
                        </Text>
                    </View>
                )}
            />

            <Text style={styles.notAccount}> {t('notRcvOtp')} <Text onPress={() => alert('Code send successfully')} style={styles.registerTxt}>{t('resend')} </Text> </Text>


            {<View style={styles.timerBox}>
                <AntDesign name={'clockcircleo'} size={18} color={colors.gray1} />
                <Text style={styles.timerTxt}>{formatTime(timeLeft)}</Text>
            </View>}



            <CustomButton
                title={t('continue')}
                onPress={()=>navigation.navigate('ResetPassword')}

            />

        </ScreenView>
    )
}

export default ForgotVerification

const styles = StyleSheet.create({
    codeFieldRoot: {
        marginTop: 30,
        marginBottom: 10,
    },
    cell: {
        width: 60,
        height: 70,
        // lineHeight: 38,
        borderColor: "#00000030",
        alignItems: "center",
        // textAlign: 'center',
        justifyContent: "center",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: colors.white,
        paddingBottom: 5,
        backgroundColor: colors.white
    },
    cellTxt: {
        fontSize: 29,
        color: colors.black,
        fontFamily: fonts.regular
    },
    focusCell: {
        borderWidth: 1,
        borderColor: colors.primary,
    },
    notAccount: {
        fontFamily: fonts.regular,
        marginVertical: 15,
        textAlign: "center",
        color: colors.gray1,

    },
    registerTxt: {
        fontFamily: fonts.semiBold,
        color: colors.primary
    },
    timerBox: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 7,
        marginTop: 30,
        marginBottom: 25
    },
    timerTxt: {
        color: colors.gray1
    }
})