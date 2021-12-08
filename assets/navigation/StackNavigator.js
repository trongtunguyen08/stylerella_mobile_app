import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import SplashScreen from '../screens/splash/SplashScreen'
import LandingScreen from '../screens/landing/LandingScreen'
import MapScreen from '../screens/map/MapScreen'
import RegisterScreen from '../screens/register/RegisterScreen'
import LoginScreen from '../screens/login/LoginScreen'
import ZoneScreen from '../screens/zone/ZoneScreen'
import VirtualShopScreen from '../screens/virtual-shop/VirtualShopScreen'
import ProductDetailsScreen from '../screens/product-details/ProductDetailsScreen'
import SuccessScreen from '../screens/success/SuccessScreen'
import ForgotPasswordScreen from '../screens/forgot-password/ForgotPasswordScreen'
import ShoppingList from '../screens/shopping-list/ShoppingList'
import PaymentDetailsScreen from '../screens/payment-details/PaymentDetailsScreen'
import OrderSuccessScreen from '../screens/order-success/OrderSuccessScreen'

const Stack = createNativeStackNavigator()

const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Splash'
                component={SplashScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Landing'
                component={LandingScreen}
                options={{
                    headerShown: false,
                    animation: 'fade',
                    animationTypeForReplace: 'push',
                    gestureEnabled: false
                }}
            />
            <Stack.Screen
                name='Register'
                component={RegisterScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Login'
                component={LoginScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='ForgotPassword'
                component={ForgotPasswordScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Success'
                component={SuccessScreen}
                options={{ headerShown: false, gestureEnabled: false }}
            />
            <Stack.Screen
                name='Map'
                component={MapScreen}
                options={{ headerShown: false, gestureEnabled: false }}
            />
            <Stack.Screen
                name='Zone'
                component={ZoneScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='VirtualShop'
                component={VirtualShopScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='ProductDetails'
                component={ProductDetailsScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='ShoppingList'
                component={ShoppingList}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='PaymentDetails'
                component={PaymentDetailsScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='OrderSuccess'
                component={OrderSuccessScreen}
                options={{ headerShown: false, gestureEnabled: false }}
            />
        </Stack.Navigator>
    )
}

export default StackNavigator

