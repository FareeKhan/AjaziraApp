import { Platform, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../constant/colors'
import LinearGradient from 'react-native-linear-gradient'

const ScreenView = ({ children, scrollable,style,bottomGradient }) => {
    return (


        <LinearGradient
            colors={['#53B17559', '#EEEEEE', '#EEEEEE', '#53B17559']}

            // locations={[0, 0.11, 0.88, 1]}
            locations={[0, 0.11,bottomGradient?bottomGradient: 0.88, 1]}
            style={[styles.mainContainer,style]}>
            {
                scrollable ?

                    <ScrollView contentContainerStyle={{ paddingBottom: 100}} showsVerticalScrollIndicator={false}>
                        {children}
                    </ScrollView>


                    :
                    children
            }
        </LinearGradient>
    )
}

export default ScreenView

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colors.white,
        paddingTop: Platform.OS == 'ios' ? 55 : 25,
        paddingHorizontal: 20
    }
})