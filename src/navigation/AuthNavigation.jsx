import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Splash from '../screens/Splash';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoarding from '../screens/auth/OnBoarding';
import LoginScreen from '../screens/auth/LoginScreen';
import PhoneNoScreen from '../screens/auth/PhoneNoScreen';
import VerificationScreen from '../screens/auth/VerificationScreen';
import CreateAccount from '../screens/auth/CreateAccount';
import ForgotPassword from '../screens/auth/ForgotPassword';
import ForgotVerification from '../screens/auth/ForgotVerification';
import ResetPassword from '../screens/auth/ResetPassword';
import { useSelector } from 'react-redux';

const AuthNavigation = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="OnBoarding" component={OnBoarding} />
            <Stack.Screen name="PhoneNoScreen" component={PhoneNoScreen} />
            <Stack.Screen name="VerificationScreen" component={VerificationScreen} />
            <Stack.Screen name="CreateAccount" component={CreateAccount} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name="ForgotVerification" component={ForgotVerification} />
            <Stack.Screen name="ResetPassword" component={ResetPassword} />
        </Stack.Navigator>
    )
}

export default AuthNavigation

const styles = StyleSheet.create({})