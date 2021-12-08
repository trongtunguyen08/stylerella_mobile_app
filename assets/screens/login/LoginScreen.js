import React, { useRef, useEffect, useState } from 'react'
import { Animated, View, StatusBar, TouchableOpacity, Image, ScrollView, ImageBackground, Switch, BackHandler } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import { Text, Title, Caption } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import LottieView from 'lottie-react-native'

import { COLORS, IMAGES } from '../../contants/contants'
import { styles } from './styles'
import { t } from '../../locales/index'
import InputCustom from '../../componets/InputCustom'


const LoginScreen = () => {
    const navigation = useNavigation()
    const [loading, setLoading] = useState(false)

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

    const [isEnabled, setIsEnabled] = useState(false)
    const toggleSwitch = () => setIsEnabled(previousState => !previousState)

    const onLoginPress = () => {
        setLoading(true)
        setTimeout(() => {
            navigation.replace('Map')
        }, 2000)
    }

    return (
        <View style={styles.container}>
            <StatusBar barStyle='light-content' backgroundColor={COLORS.primary} />
            {/* Loading */}
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
                                onPress={() => navigation.goBack()}
                            >
                                <Ionicons
                                    name='arrow-back-outline'
                                    color={COLORS.white}
                                    size={30}
                                />
                            </TouchableOpacity>
                            <Title style={styles.headerText}>{t('login')}</Title>
                            <Image
                                source={IMAGES.STYLERELLA2}
                                style={styles.headerRightIamge}
                            />
                        </View>
                    </SafeAreaView>
                </SafeAreaProvider>
            </View>
            <ScrollView>
                <Animated.View
                    style={[styles.titleWrapper, {
                        transform: [
                            {
                                translateY
                            }
                        ]
                    }]}
                >
                    <Title style={styles.titleText}>LOGIN TO SHOP YOUR FAVORITE PRODUCTS</Title>
                    <Caption style={styles.subTitleText}>{`Here, you can buy brand from all over`}</Caption>
                </Animated.View>
                <View style={styles.content}>
                    <InputCustom
                        leftIconName='mail-open-outline'
                        placeholder='Email Address'
                        keyboardType='email-address'
                        autoCapitalize='none'
                    />
                    <InputCustom
                        leftIconName='lock-closed-outline'
                        placeholder='Password'
                        isPassword={true}
                    />
                    <View style={styles.rememberContent}>
                        <View style={styles.rememberMeWrapper}>
                            <Switch
                                trackColor={{ false: "#767577", true: "#EEE" }}
                                thumbColor={isEnabled ? COLORS.primary : '#EEE'}
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                            <Text style={styles.rememberMeText}>Remember Me</Text>
                        </View>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('ForgotPassword')}
                        >
                            <Text style={styles.forgotText}>Forgot Password?</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Animated.View style={{
                    transform: [
                        {
                            translateY
                        }
                    ]
                }}>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={onLoginPress}
                    >
                        <ImageBackground
                            source={IMAGES.BUTTON}
                            style={styles.registerButtonWrapper}
                            resizeMode='stretch'
                        >
                            <Text style={styles.registerText}>{t('login')}</Text>
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
                    <Text style={styles.alreadyHaveAccountText}>New here?</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Register')}
                    >
                        <Text style={styles.loginText}>{t('register')}</Text>
                    </TouchableOpacity>
                </Animated.View>
            </ScrollView>
        </View>
    )
}

export default LoginScreen