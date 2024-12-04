import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CustomScrollView = ({children }) => {
    return (
        <ScrollView showsHorizontalScrollIndicator={false} style={{marginHorizontal:-20,paddingLeft:20,}} horizontal contentContainerStyle={{paddingRight:20}}>
            {children}
        </ScrollView>
    )
}

export default CustomScrollView

const styles = StyleSheet.create({})