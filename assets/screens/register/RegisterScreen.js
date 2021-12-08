import React, { useRef, useEffect, useState } from 'react'
import {
    Animated,
    Platform,
    View,
    StatusBar,
    TouchableOpacity,
    Image,
    ScrollView,
    ImageBackground,
    KeyboardAvoidingView,
    BackHandler,
    Alert
} from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { Caption, Text, Title } from 'react-native-paper'
import LottieView from 'lottie-react-native'

import { COLORS, IMAGES } from '../../contants/contants'
import { styles } from './styles'
import { t } from '../../locales/index'
import InputCustom from '../../componets/InputCustom'

const RegisterScreen = () => {
    const navigation = useNavigation()
    const [loading, setLoading] = useState(false)

    const onBackPress = () => {
        navigation.goBack()
    }

    const onRegisterPress = () => {
        setLoading(true)
        setTimeout(() => {
            navigation.replace('Success')
        }, 2000)
    }

    const animatedValue = useRef(new Animated.Value(0)).current
    const translateY = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [20, 0]
    })

    useEffect(() => {
        Animated.timing(
            animatedValue,
            {
                toValue: 1,
                duration: 500,
                useNativeDriver: true
            }
        ).start()
    }, [])
    useEffect(() => {
        const backAction = () => {
            navigation.goBack()
            return true
        };

        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        )

        return () => backHandler.remove()
    }, [])
    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <StatusBar barStyle='light-content' translucent backgroundColor={COLORS.primary} />
            {/* Lading */}
            {
                loading &&
                <LottieView
                    source={IMAGES.LOADING}
                    autoPlay
                    loop
                    style={{
                        position: 'absolute',
                        zIndex: 999
                    }}
                />
            }
            {/* Header */}
            <View
                style={styles.headerContainer}
            >
                <SafeAreaProvider>
                    <SafeAreaView>
                        <View style={styles.headerContent}>
                            <TouchableOpacity
                                style={styles.headerBackIcon}
                                onPress={onBackPress}
                            >
                                <Ionicons
                                    name='arrow-back-outline'
                                    color={COLORS.white}
                                    size={30}
                                />
                            </TouchableOpacity>
                            <Title style={styles.headerText}>{t('register')}</Title>
                            <Image
                                source={IMAGES.STYLERELLA2}
                                style={styles.headerRightIamge}
                            />
                        </View>
                    </SafeAreaView>
                </SafeAreaProvider>
            </View>
            <ScrollView style={styles.content}>

                <Animated.View
                    style={[styles.titleWrapper, {
                        transform: [
                            {
                                translateY
                            }
                        ]
                    }]}
                >
                    <Title style={styles.titleText}>CREATE AN ACCOUNT</Title>
                    <Caption style={styles.subTitleText}>{`After create an account,\n you can browse and buy more brands`}</Caption>
                </Animated.View>

                <InputCustom
                    leftIconName='people-outline'
                    placeholder='First Name'
                    autoCapitalize='words'
                />
                <InputCustom
                    leftIconName='people-outline'
                    placeholder='Last Name'
                    autoCapitalize='words'
                />
                <InputCustom
                    leftIconName='mail-open-outline'
                    placeholder='Email Address'
                    keyboardType='email-address'
                    autoCapitalize='none'
                />
                <InputCustom
                    leftIconName='call-outline'
                    placeholder='Mobile Number'
                    keyboardType='phone-pad'
                    returnKeyType='done'
                />
                <InputCustom
                    leftIconName='lock-closed-outline'
                    placeholder='Password'
                    isPassword={true}
                />
                <InputCustom
                    leftIconName='lock-closed-outline'
                    placeholder='Confirm Password'
                    isPassword={true}
                />
                <InputCustom
                    leftIconName='cash-outline'
                    placeholder='Referral Code'
                />
                <Animated.View style={{
                    transform: [
                        {
                            translateY
                        }
                    ]
                }}>
                    <TouchableOpacity
                        onPress={onRegisterPress}
                    >
                        <ImageBackground
                            source={IMAGES.BUTTON}
                            style={styles.registerButtonWrapper}
                            resizeMode='stretch'
                        >
                            <Text style={styles.registerText}>Register</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                </Animated.View>
                <Animated.View
                    style={[styles.footerLoginWrapper, {
                        transform: [
                            {
                                translateY
                            }
                        ]
                    }]}
                >
                    <Text style={styles.alreadyHaveAccountText}>Already have an account?</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Login')}
                    >
                        <Text style={styles.loginText}>Login</Text>
                    </TouchableOpacity>
                </Animated.View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen
