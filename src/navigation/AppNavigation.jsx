import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackNavigation } from './BottomTab';

import { useSelector } from 'react-redux';
import i18next from 'i18next';
import AuthNavigation from './AuthNavigation';

const AppNavigation = () => {
    const Stack = createNativeStackNavigator();
    const isLanguage = useSelector(state => state.auth.isLanguage);
    const { token } = useSelector(state => state.auth.loginData);
 


    useEffect(() => {
        i18next.changeLanguage(isLanguage)
    }, [isLanguage]);

    return (
        <NavigationContainer>
            <Stack.Navigator >
                {
                    token ?
                        <Stack.Screen component={StackNavigation} name='StackNavigation' options={{ headerShown: false }} />
                        :
                        <Stack.Screen component={AuthNavigation} name='AuthNavigation' options={{ headerShown: false }} />

                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation

const styles = StyleSheet.create({})