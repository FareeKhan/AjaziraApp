import { LogBox, Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/userProfile/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductDetails from '../screens/userProfile/ProductDetails';
import PaymentScreen from '../screens/userProfile/PaymentScreen';
import MyCartScreen from '../screens/userProfile/MyCartScreen';
import Notifications from '../screens/userProfile/Notifications';
import ProfileScreen from '../screens/userProfile/ProfileScreen';
import PersonalData from '../screens/userProfile/PersonalData';
import SettingScreen from '../screens/userProfile/SettingScreen';
import OrderDetail from '../screens/userProfile/OrderDetail';
import OrderInformation from '../screens/userProfile/OrderInformation';
import ViewOrders from '../screens/userProfile/ViewOrders';
import SearchScreen from '../screens/userProfile/SearchScreen';
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { colors } from '../constant/colors';
import { useTranslation } from 'react-i18next';
import { fonts } from '../constant/fonts';
import FavoriteScreen from '../screens/userProfile/FavoriteScreen';
import RatingScreen from '../screens/userProfile/RatingScreen';
import CategoryScreenProduct from '../screens/userProfile/CategoryScreenProduct';

LogBox.ignoreAllLogs()

export const StackNavigation = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="BottomTab" component={BottomTab} />
            <Stack.Screen name="ProductDetails" component={ProductDetails} />
            <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
            <Stack.Screen name="MyCartScreen" component={MyCartScreen} />
            <Stack.Screen name="PersonalData" component={PersonalData} />
            <Stack.Screen name="SettingScreen" component={SettingScreen} />
            <Stack.Screen name="OrderDetail" component={OrderDetail} />
            <Stack.Screen name="OrderInformation" component={OrderInformation} />
            <Stack.Screen name="ViewOrders" component={ViewOrders} />
            <Stack.Screen name="SearchScreen" component={SearchScreen} />
            <Stack.Screen name="FavoriteScreen" component={FavoriteScreen} />
            <Stack.Screen name="RatingScreen" component={RatingScreen} />
            <Stack.Screen name="CategoryScreenProduct" component={CategoryScreenProduct} />
        </Stack.Navigator>
    )
}

export const BottomTab = () => {
    const {t} = useTranslation()
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: colors.secondary,
                tabBarInactiveTintColor: colors.gray,
                tabBarStyle: {
                    backgroundColor: colors.white,
                    height: Platform.OS == 'ios'? 80:60,
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    // borderTopWidth: 2,
                    // borderColor: '#3B3EFF',
                    // borderLeftWidth: 2,
                    // borderRightWidth: 2,
                    // marginLeft: -3,
                    // marginRight: -3,
                    position: 'absolute',
                  },
                  tabBarHideOnKeyboard: 'true',
            }}
           


        >
            <Tab.Screen
                name="HomeScreen"
                component={HomeScreen}
                
                options={{
                    
                    tabBarLabel:t("home"),
                    tabBarLabelStyle: {
                        fontFamily:fonts.regular,

                        
                    },
                    tabBarIcon: ({focused}) => {
                        return (
                            <Entypo name={'home'} size={20} color={focused ? colors.secondary : colors.gray} />
                        )
                    }
                }}
            />
            <Tab.Screen
                name="MyCartScreen"
                component={MyCartScreen}
                options={{
                    tabBarLabel:t("cart"),
                    tabBarLabelStyle: {
                        fontFamily:fonts.regular,
                        
                    },
                    tabBarIcon: ({focused}) => {
                        return (
                            <MaterialIcons name={'shopping-bag'} size={25} color={focused ? colors.secondary : colors.gray} />
                        )
                    }
                }}
            />
            <Tab.Screen
                name="Notifications"
                component={Notifications}
                options={{
                    tabBarLabel:t("notification"),
                    tabBarLabelStyle: {
                        fontFamily:fonts.regular,
                        
                    },
                    tabBarIcon: ({focused}) => {
                        return (
                            <MaterialCommunityIcons name={'bell'} size={22} color={focused ? colors.secondary : colors.gray} />
                        )
                    }
                }}
            />
            <Tab.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={{
                    tabBarLabel:t("profile"),
                    tabBarLabelStyle: {
                        fontFamily:fonts.regular,
                        
                    },
                    tabBarIcon: ({focused}) => {
                        return (
                            <FontAwesome5 name={'user-alt'} size={20} color={focused ? colors.secondary : colors.gray} />
                        )
                    }
                }}
            />
        </Tab.Navigator>
    )
}



const styles = StyleSheet.create({})