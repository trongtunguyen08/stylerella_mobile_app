import React, { useState, useRef, useEffect } from 'react'
import {
    View,
    ImageBackground,
    StatusBar,
    Alert,
    TouchableOpacity,
    Animated,
    Easing,
    BackHandler
} from 'react-native'
import * as Haptics from 'expo-haptics'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import LottieView from 'lottie-react-native'
import { Text } from 'react-native-paper'

import { styles } from './styles'
import { IMAGES, setWidth, width } from '../../contants/contants'
import { t } from '../../locales/index'

const LandingScreen = () => {
    const navigation = useNavigation()
    const buttonOpacity = useRef(new Animated.Value(0)).current
    const buttonTranslateY = buttonOpacity.interpolate(
        {
            inputRange: [0, 1],
            outputRange: [-10, 0]
        }
    )
    const socialButtonTranslateY = buttonOpacity.interpolate(
        {
            inputRange: [0, 1],
            outputRange: [20, 0]
        }
    )

    //butterfly anumation wrapper
    const [contentWidth, setContentWidth] = useState(0)
    const [contentHeight, setcontentHeight] = useState(0)
    const [butterflyWidth, setButterflyWidth] = useState(0)
    const [butterflyHeight, setButterflyHeight] = useState(0)

    //when press to Register Button
    const [resSpeed, setResSpeed] = useState(0.1)
    const [resButtonX, setResButtonX] = useState(0)
    const [resButtonY, setResButtonY] = useState(0)
    const [resButtonWidth, setResButtonWidth] = useState(0)
    const [resButtonHeight, setResButtonHeight] = useState(0)
    const [butterflyXForRes, setButterflyXForRes] = useState(0)
    const [butterflyYForRes, setButterflyYForRes] = useState(0)
    let butterflyForRegisterAnimation = useRef(new Animated.Value(0)).current
    let outPut = [0, contentWidth - butterflyXForRes - (width - resButtonWidth)]
    if (width >= 700) {
        outPut = [0, contentWidth - butterflyXForRes - ((width - resButtonWidth) * 1.5)]
    }
    const butterflyForResTranslateX = butterflyForRegisterAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: outPut
    })
    const butterflyForResTranslateY = butterflyForRegisterAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, resButtonY - butterflyYForRes + butterflyHeight / 7]
    })
    const butterflyRotateForRegister = butterflyForRegisterAnimation.interpolate({
        inputRange: [
            0,
            0.8,
            1
        ],
        outputRange: [
            '-20deg',
            '-86deg',
            '-20deg'
        ]
    })
    const onRegisterPressed = async () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
        setResSpeed(1)
        Animated.timing(
            butterflyForRegisterAnimation,
            {
                toValue: 1,
                duration: 3500,
                useNativeDriver: true
            }
        ).start()
        setTimeout(() => {
            navigation.navigate('Register')
            setResSpeed(0.1)
            Animated.timing(
                butterflyForRegisterAnimation,
                {
                    toValue: 0,
                    useNativeDriver: true
                }
            ).start()
        }, 3500)
    }

    //When press to Login Button
    const [logSpeed, setLogSpeed] = useState(0.1)
    const [butterflyXForLogin, setButterflyXForLogin] = useState(0)
    const [butterflyYForLogin, setButterflyYForLogin] = useState(0)
    const [loginButtonY, setLoginButtonY] = useState(0)
    let butterflyForLoginAnimation = useRef(new Animated.Value(0)).current
    let outPutForLogin = [
        0,
        contentWidth - butterflyXForLogin - (width - resButtonWidth)
    ]
    if (width >= 700) {
        outPutForLogin = [
            0,
            contentWidth - butterflyXForLogin - ((width - resButtonWidth) * 1.5)
        ]
    }
    const butterflyForLoginTranslateX = butterflyForLoginAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: outPutForLogin
    })
    const butterflyForLoginTranslateY = butterflyForLoginAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [
            0,
            loginButtonY - butterflyYForLogin + butterflyHeight / 7
        ]
    })
    const butterflyRotateForLogin = butterflyForLoginAnimation.interpolate({
        inputRange: [
            0,
            0.25,
            0.5,
            0.75,
            1
        ],
        outputRange: [
            '0deg',
            '-80deg',
            '-80deg',
            '-90deg',
            '-20deg'
        ]
    })
    const onLoginPressed = async () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
        setLogSpeed(1)
        Animated.timing(
            butterflyForLoginAnimation,
            {
                toValue: 1,
                duration: 2500,
                useNativeDriver: true
            }
        ).start()
        setTimeout(() => {
            navigation.navigate('Login')
            setLogSpeed(0.1)
            Animated.timing(
                butterflyForLoginAnimation,
                {
                    toValue: 0,
                    useNativeDriver: true
                }
            ).start()
        }, 2500)
    }

    //When press to Login as Guest Button
    const [guestSpeed, setGuestSpeed] = useState(0.1)
    const [butterflyXForGuest, setButterflyXForGuest] = useState(0)
    const [butterflyYForGuest, setButterflyYForGuest] = useState(0)
    const [guestButtonY, setGuestButtonY] = useState(0)
    let butterflyForGuestAnimation = useRef(new Animated.Value(0)).current
    let input = [
        0,
        1,
    ]
    let outPutForGuest = [
        0,
        contentWidth - butterflyXForGuest - (width - resButtonWidth)
    ]
    if (width >= 700) {
        outPutForGuest = [
            0,
            contentWidth - butterflyXForGuest - ((width - resButtonWidth) * 1.5)
        ]
    }
    const butterflyForGuestTranslateX = butterflyForGuestAnimation.interpolate({
        inputRange: input,
        outputRange: outPutForGuest
    })
    const butterflyForGuestTranslateY = butterflyForGuestAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [
            0,
            guestButtonY - butterflyYForGuest + butterflyHeight / 7
        ]
    })
    const butterflyRotateForGuest = butterflyForGuestAnimation.interpolate({
        inputRange: [
            0,
            0.25,
            0.5,
            0.75,
            1
        ],
        outputRange: [
            '0deg',
            '-10deg',
            '-50deg',
            '-60deg',
            '-20deg',
        ]
    })
    const onLoginAsGuestPressed = async () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
        setGuestSpeed(1)
        Animated.timing(
            butterflyForGuestAnimation,
            {
                toValue: 1,
                duration: 2500,
                easing: Easing.linear,
                useNativeDriver: true
            }
        ).start()
        setTimeout(() => {
            navigation.replace('Map')
            Animated.timing(
                butterflyForGuestAnimation,
                {
                    toValue: 0,
                    useNativeDriver: true
                }
            ).start()
        }, 2500)
    }

    //When press to Google Button
    const onGooglePressed = () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
    }

    // When press to Facebook Button
    const onFacebookPressed = () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
    }

    //When press to WeChat Button
    const onWeChatPressed = () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
    }

    useEffect(() => {
        Animated.timing(
            buttonOpacity,
            {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
            }
        ).start()
    }, [])
    useEffect(() => {
        const backAction = () => {
            Alert.alert("Hold on!", "Are you sure you want to go exit app?", [
                {
                    text: "Cancel",
                    onPress: () => null,
                    style: "cancel"
                },
                { text: "YES", onPress: () => BackHandler.exitApp() }
            ]);
            return true
        };

        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        )

        return () => backHandler.remove()
    }, [])

    return (
        <SafeAreaProvider>
            <ImageBackground
                style={styles.container}
                source={IMAGES.LANDING_BACKGROUND}
                resizeMode='cover'
            >
                <SafeAreaView>
                    <StatusBar barStyle='light-content' translucent backgroundColor='transparent' />
                    <View
                        onLayout={({ nativeEvent }) => {
                            var { width, height } = nativeEvent.layout
                            setContentWidth(width)
                            setcontentHeight(height)
                        }}
                    >

                        {/* Image header */}
                        <Animated.Image
                            source={IMAGES.LOGO}
                            style={[styles.logo, {
                                opacity: buttonOpacity,
                                transform: [
                                    {
                                        translateY: socialButtonTranslateY
                                    }
                                ]
                            }]}
                            resizeMode='contain'
                        />

                        {/* Logo */}
                        <Animated.Image
                            source={IMAGES.STYLERELLA}
                            style={[styles.stylerellaLogo, {
                                opacity: buttonOpacity,
                                transform: [
                                    {
                                        translateY: socialButtonTranslateY
                                    }
                                ]
                            }]}
                            resizeMode='contain'
                        />

                        {/* Butterfly animation for Register button */}
                        <Animated.View
                            style={[styles.butterflyAnimatedRegisterWrapper, {
                                transform: [
                                    {
                                        translateX: butterflyForResTranslateX
                                    },
                                    {
                                        translateY: butterflyForResTranslateY
                                    },
                                    {
                                        rotate: butterflyRotateForRegister
                                    }
                                ]
                            }]}
                            onLayout={({ nativeEvent }) => {
                                var { x, y, width, height } = nativeEvent.layout
                                setButterflyXForRes(x)
                                setButterflyYForRes(y)
                                setButterflyWidth(width)
                                setButterflyHeight(height)
                            }}
                        >
                            <LottieView
                                source={IMAGES.BUTTERFLY_ANIMATION2}
                                autoPlay
                                loop
                                speed={resSpeed}
                                style={styles.butterfly_animation}
                            />
                        </Animated.View>

                        {/* Butterfly animation for Login button */}
                        <Animated.View
                            style={[styles.butterflyAnimatedLoginWrapper, {
                                transform: [
                                    {
                                        translateX: butterflyForLoginTranslateX
                                    },
                                    {
                                        translateY: butterflyForLoginTranslateY
                                    },
                                    {
                                        rotate: butterflyRotateForLogin
                                    }
                                ]
                            }]}
                            onLayout={({ nativeEvent }) => {
                                var { x, y, width, height } = nativeEvent.layout
                                setButterflyXForLogin(x)
                                setButterflyYForLogin(y)
                            }}
                        >
                            <LottieView
                                source={IMAGES.BUTTERFLY_ANIMATION2}
                                autoPlay
                                loop
                                speed={logSpeed}
                                style={styles.butterfly_animation}
                            />
                        </Animated.View>

                        {/* Butterfly animation for Guest button */}
                        <Animated.View
                            style={[styles.butterflyAnimatedGuestWrapper, {
                                transform: [
                                    {
                                        translateX: butterflyForGuestTranslateX
                                    },
                                    {
                                        translateY: butterflyForGuestTranslateY
                                    },
                                    {
                                        rotate: butterflyRotateForGuest
                                    }
                                ]
                            }]}
                            onLayout={({ nativeEvent }) => {
                                var { x, y, width, height } = nativeEvent.layout
                                setButterflyXForGuest(x)
                                setButterflyYForGuest(y)
                            }}
                        >
                            <LottieView
                                source={IMAGES.BUTTERFLY_ANIMATION2}
                                autoPlay
                                loop
                                speed={guestSpeed}
                                style={styles.butterfly_animation}
                            />
                        </Animated.View>

                        {/* Register Button */}
                        <Animated.View
                            style={{
                                opacity: buttonOpacity,
                                transform: [
                                    {
                                        translateY: buttonTranslateY
                                    }
                                ]
                            }}
                            onLayout={({ nativeEvent }) => {
                                var { x, y, width, height } = nativeEvent.layout
                                setResButtonX(x)
                                setResButtonY(y)
                                setResButtonWidth(width)
                                setResButtonHeight(height)
                            }}
                        >
                            <TouchableOpacity
                                activeOpacity={0.6}
                                onPress={onRegisterPressed}
                            >
                                <ImageBackground
                                    source={IMAGES.BUTTON}
                                    style={[styles.button, { marginBottom: -15 }]}
                                    resizeMode='stretch'
                                >
                                    <Text style={styles.buttonText}>{t('register')}</Text>

                                </ImageBackground>
                            </TouchableOpacity>
                        </Animated.View>

                        {/* Login Button */}
                        <Animated.View
                            onLayout={({ nativeEvent }) => {
                                var { x, y, width, height } = nativeEvent.layout
                                setLoginButtonY(y)
                            }}
                            style={{
                                opacity: buttonOpacity,
                                transform: [
                                    {
                                        translateY: buttonTranslateY
                                    }
                                ]
                            }}
                        >
                            <TouchableOpacity
                                activeOpacity={0.6}
                                onPress={onLoginPressed}
                            >
                                <ImageBackground
                                    source={IMAGES.BUTTON}
                                    style={[styles.button, { marginBottom: -15 }]}
                                    resizeMode='stretch'
                                >
                                    <Text style={styles.buttonText}>{t('login')}</Text>

                                </ImageBackground>
                            </TouchableOpacity>
                        </Animated.View>

                        {/* Continue as Guest Button */}
                        <Animated.View
                            onLayout={({ nativeEvent }) => {
                                var { x, y, width, height } = nativeEvent.layout
                                setGuestButtonY(y)
                            }}
                            style={{
                                opacity: buttonOpacity,
                                transform: [
                                    {
                                        translateY: buttonTranslateY
                                    }
                                ]
                            }}
                        >
                            <TouchableOpacity
                                activeOpacity={0.6}
                                onPress={onLoginAsGuestPressed}
                            >
                                <ImageBackground
                                    source={IMAGES.BUTTON}
                                    style={[styles.button, { marginBottom: -15 }]}
                                    resizeMode='stretch'
                                >
                                    <Text style={styles.buttonText}>{t('guest')}</Text>

                                </ImageBackground>
                            </TouchableOpacity>
                        </Animated.View>

                        {/* Login by social */}
                        <View
                            style={styles.socialLoginWrapper}
                        >
                            <TouchableOpacity
                                activeOpacity={0.6}
                                onPress={onGooglePressed}
                            >
                                <Animated.Image
                                    source={IMAGES.GOOGLE}
                                    style={[styles.socilaIcon, {
                                        opacity: buttonOpacity,
                                        transform: [
                                            {
                                                translateY: socialButtonTranslateY
                                            }
                                        ]
                                    }]}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                activeOpacity={0.6}
                                onPress={onFacebookPressed}
                            >
                                <Animated.Image
                                    source={IMAGES.FACEBOOK}
                                    style={[styles.socilaIcon, {
                                        opacity: buttonOpacity,
                                        transform: [
                                            {
                                                translateY: socialButtonTranslateY
                                            }
                                        ]
                                    }]}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                activeOpacity={0.6}
                                onPress={onWeChatPressed}
                            >
                                <Animated.Image
                                    source={IMAGES.WECHAT}
                                    style={[styles.socilaIcon, {
                                        opacity: buttonOpacity,
                                        transform: [
                                            {
                                                translateY: socialButtonTranslateY
                                            }
                                        ]
                                    }]}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </SafeAreaView>
            </ImageBackground>
        </SafeAreaProvider>
    )
}

export default LandingScreen
