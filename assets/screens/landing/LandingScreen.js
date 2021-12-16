import React, { useState, useRef, useEffect } from 'react'
import {
    View,
    ImageBackground,
    StatusBar,
    Alert,
    TouchableOpacity,
    Animated,
    Easing,
    BackHandler,
    useWindowDimensions,
    PixelRatio,
    Platform
} from 'react-native'
import * as Haptics from 'expo-haptics'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import LottieView from 'lottie-react-native'

import { styles } from './styles'
import { IMAGES, COLORS } from '../../contants/contants'
import { t } from '../../locales/index'
import { ButtonText, LoadingModal } from '../../components'

const LandingScreen = () => {
    const { width, height } = useWindowDimensions()
    let ICON = width * .2
    let LOGO_WIDTH = width * .9
    let LOGO_HEIGHT = height * .54
    let STYLERELLA_WIDTH = width * .45
    let BUTTERFLY_ANIMATION_WIDTH = width * .12

    const ratio = PixelRatio.get()

    if (Platform.OS === 'ios' && ratio <= 2) {
        LOGO_WIDTH = width * .8
    }

    if (width >= 700) {
        ICON = width * .12
        STYLERELLA_WIDTH = width * .2
        BUTTERFLY_ANIMATION_WIDTH = width * .06
        LOGO_WIDTH = width * .7
        LOGO_HEIGHT = height * .6
    }

    if (width >= 1024) {
        ICON = width * .08
        STYLERELLA_WIDTH = width * .1
        BUTTERFLY_ANIMATION_WIDTH = width * .04
        LOGO_WIDTH = width * .5
        LOGO_HEIGHT = height * .6
    }

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
    let outPut = [0, contentWidth - butterflyXForRes - (width - resButtonWidth) * 2]
    if (width >= 700) {
        outPut = [0, contentWidth - butterflyXForRes - (width - resButtonWidth)]
    }
    const butterflyForResTranslateX = butterflyForRegisterAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: outPut
    })
    const butterflyForResTranslateY = butterflyForRegisterAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, resButtonY - butterflyYForRes]
    })
    const butterflyRotateForRegister = butterflyForRegisterAnimation.interpolate({
        inputRange: [0, 0.8, 1],
        outputRange: ['-20deg', '-86deg', '-20deg']
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
        contentWidth - butterflyXForLogin - (width - resButtonWidth) * 2
    ]
    if (width >= 700) {
        outPutForLogin = [
            0,
            contentWidth - butterflyXForLogin - (width - resButtonWidth)
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
    let outPutForGuest = [
        0,
        contentWidth - butterflyXForGuest - (width - resButtonWidth) * 2
    ]
    if (width >= 700) {
        outPutForGuest = [0, contentWidth - butterflyXForGuest - (width - resButtonWidth)]
    }
    const butterflyForGuestTranslateX = butterflyForGuestAnimation.interpolate({
        inputRange: [0, 1],
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
        inputRange: [0, 0.25, 0.5, 0.75, 1],
        outputRange: ['0deg', '-10deg', '-50deg', '-60deg', '-20deg']
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

    //When logo end load
    const [showLoadingModal, setShowLoadingModal] = useState(true)
    const onLogoEndLoad = () => {
        setShowLoadingModal(false)
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
            >
                <StatusBar barStyle='light-content' backgroundColor={COLORS.primary} />
                {showLoadingModal && <LoadingModal />}

                <SafeAreaView>
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
                            style={{
                                opacity: buttonOpacity,
                                transform: [
                                    {
                                        translateY: socialButtonTranslateY
                                    }
                                ],
                                width: LOGO_WIDTH,
                                height: LOGO_HEIGHT,
                                alignSelf: 'center'
                            }}
                            resizeMode='stretch'
                            onLoadEnd={onLogoEndLoad}
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
                                ],
                                width: STYLERELLA_WIDTH,
                                height: height * .1,
                                marginBottom: 10
                            }]}
                            resizeMode='stretch'
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
                                style={[styles.butterfly_animation, {
                                    width: BUTTERFLY_ANIMATION_WIDTH
                                }]}
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
                                ],
                                left: width >= 700 ? '12%' : '1%'
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
                                style={[styles.butterfly_animation, {
                                    width: BUTTERFLY_ANIMATION_WIDTH,
                                }]}
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
                                ],
                                right: width >= 700 ? '10%' : '2%'
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
                                style={[styles.butterfly_animation, {
                                    width: BUTTERFLY_ANIMATION_WIDTH
                                }]}
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
                            <ButtonText
                                text={t('register')}
                                onPress={onRegisterPressed}
                                containerStyle={{
                                    marginBottom: 10
                                }}
                            />
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
                            <ButtonText
                                text={t('login')}
                                onPress={onLoginPressed}
                                containerStyle={{
                                    marginBottom: 10
                                }}
                            />
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
                            <ButtonText
                                text={t('guest')}
                                onPress={onLoginAsGuestPressed}
                                containerStyle={{
                                    marginBottom: 10
                                }}
                            />
                        </Animated.View>

                        {/* Login by social */}
                        <View
                            style={[styles.socialLoginWrapper, {
                                width: '75%',
                                justifyContent: width >= 700 ? 'space-evenly' : 'space-between',
                            }]}
                        >
                            <TouchableOpacity
                                activeOpacity={0.6}
                                onPress={onGooglePressed}
                            >
                                <Animated.Image
                                    source={IMAGES.GOOGLE}
                                    style={{
                                        opacity: buttonOpacity,
                                        transform: [
                                            {
                                                translateY: socialButtonTranslateY
                                            }
                                        ],
                                        width: ICON,
                                        height: ICON
                                    }}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                activeOpacity={0.6}
                                onPress={onFacebookPressed}
                            >
                                <Animated.Image
                                    source={IMAGES.FACEBOOK}
                                    style={{
                                        opacity: buttonOpacity,
                                        transform: [
                                            {
                                                translateY: socialButtonTranslateY
                                            }
                                        ],
                                        width: ICON,
                                        height: ICON
                                    }}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                activeOpacity={0.6}
                                onPress={onWeChatPressed}
                            >
                                <Animated.Image
                                    source={IMAGES.WECHAT}
                                    style={{
                                        opacity: buttonOpacity,
                                        transform: [
                                            {
                                                translateY: socialButtonTranslateY
                                            }
                                        ],
                                        width: ICON,
                                        height: ICON
                                    }}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </SafeAreaView>
            </ImageBackground>
        </SafeAreaProvider >
    )
}

export default LandingScreen
