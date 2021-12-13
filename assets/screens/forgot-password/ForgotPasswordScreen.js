import React, { useRef, useState, useEffect } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import {
    Animated,
    View,
    StatusBar,
    TouchableOpacity,
    Image,
    ScrollView,
    ImageBackground,
    Switch,
    BackHandler,
    PixelRatio,
    Platform,
    useWindowDimensions
} from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { Text, Title, Caption } from 'react-native-paper'
import LottieView from 'lottie-react-native'

import { COLORS, IMAGES } from '../../contants/contants'
import { styles } from './styles'
import { t } from '../../locales/index'
import InputCustom from '../../componets/InputCustom'

const ForgotPasswordScreen = () => {
    const { width, height } = useWindowDimensions()
    const ratio = PixelRatio.get()
    let LOGO_SIZE = 35
    let BUTTON_WIDTH = width * .65
    let BUTTON_HEIGHT = width * .18
    if (width >= 700) {
        BUTTON_WIDTH = width * .45
        BUTTON_HEIGHT = width * .1
    }
    if (width >= 1024) {
        BUTTON_WIDTH = width * .4
        BUTTON_HEIGHT = width * .07
    }
    if ((Platform.OS == 'ios' && ratio < 3) || (Platform.OS == 'android' && ratio < 2.5)) {
        LOGO_SIZE = 30
    }

    const navigation = useNavigation()
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
        <View style={styles.container}>
            {/* Header */}
            <View
                style={[styles.headerContainer, {
                    width: width,
                    height: height * .11 + StatusBar.currentHeight / 2
                }]}
            >
                <SafeAreaProvider>
                    <SafeAreaView>
                        <View style={[styles.headerContent, {
                            width: width
                        }]}>
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
                            <Title numberOfLines={1} style={styles.headerText}>Forgot Password</Title>
                            <Image
                                source={IMAGES.STYLERELLA2}
                                style={[styles.headerRightIamge, {
                                    width: LOGO_SIZE,
                                    height: LOGO_SIZE
                                }]}
                            />
                        </View>
                    </SafeAreaView>
                </SafeAreaProvider>
            </View>
            <Animated.View
                style={[styles.titleWrapper, {
                    transform: [
                        {
                            translateY
                        }
                    ]
                }]}
            >
                <Title style={styles.titleText}>CANNOT LOGIN?</Title>
                <Caption style={styles.subTitleText}>{`Enter your email, phone number or username,\nwe're link to restore access to\nyour account will be sent to you.`}</Caption>
            </Animated.View>
            <View style={styles.body}>
                <InputCustom
                    leftIconName='color-wand-outline'
                    placeholder='Email, Phone Number or Username'
                    autoCapitalize='none'
                />
                <Animated.View style={{
                    transform: [
                        {
                            translateY
                        }
                    ]
                }}>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => navigation.replace('Landing')}
                    >
                        <ImageBackground
                            source={IMAGES.BUTTON}
                            style={[styles.forgotButtonWrapper, {
                                width: BUTTON_WIDTH,
                                height: BUTTON_HEIGHT
                            }]}
                            resizeMode='stretch'
                        >
                            <Text style={[styles.forgotText, {
                                marginBottom: BUTTON_HEIGHT / 5
                            }]}>Send Login Link</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                </Animated.View>
            </View>
        </View>
    )
}

export default ForgotPasswordScreen
