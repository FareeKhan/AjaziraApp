import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';

const height=Dimensions.get('screen')

const Splash = ({navigation}) => {
    const isOnBoarding = useSelector((state) => state.auth.isOnBoarding);

    console.log('sss',isOnBoarding)

    useEffect(() => {
        const timer = setTimeout(() => {
            if(isOnBoarding){
                navigation.navigate('PhoneNoScreen');
            }else{
                navigation.navigate('OnBoarding');
            }
        }, 1000);
    
        return () => clearTimeout(timer);
    }, [isOnBoarding]);


    return (
        <View style={styles.container}>
            <Image style={{ width:"100%",flex:1}}  source={require('../assets/SplashImage.png')}/>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})