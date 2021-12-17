import React, { useRef, useEffect, useState } from 'react'
import {
    Animated,
    View,
    TouchableOpacity,
    ScrollView,
    ImageBackground,
    Switch,
    BackHandler,
    useWindowDimensions,
    Image
} from 'react-native'
import { Text, Title, Caption } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import LottieView from 'lottie-react-native'

import { COLORS, IMAGES } from '../../contants/contants'
import { styles } from './styles'
import { t } from '../../locales/index'
import {
    InputCustom,
    Header,
    ButtonText,
    LoadingModal
} from '../../components'


const LoginScreen = () => {
    const { width } = useWindowDimensions()
    let REMEMBER_CONTENT_WIDTH = '100%'
    if (width >= 700) {
        REMEMBER_CONTENT_WIDTH = '70%'
    }
    if (width >= 1024) {
        REMEMBER_CONTENT_WIDTH = '50%'
    }

    const navigation = useNavigation()
    const [loading, setLoading] = useState(false)

    const animatedValue = useRef(new Animated.Value(0)).current
    const translateY = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [20, 0]
    })
    const contentTranslateY = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [-20, 0]
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
            {/* Loading */}
            {
                loading &&
                <LoadingModal />
            }
            {/* Header */}
            <Header
                headerTitle={t('login')}
                showCloseIcon
                onClosePress={() => navigation.goBack()}
            />
            <ImageBackground
                style={{
                    flex: 1,
                    paddingHorizontal: 20
                }}
                source={IMAGES.LOGIN_REGISTER_BG}
            >
                <ScrollView
                    contentContainerStyle={{
                        paddingVertical: 20
                    }}
                >
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
                    <Animated.View
                        style={[styles.content, {
                            transform: [
                                {
                                    translateY: contentTranslateY
                                }
                            ]
                        }]}
                    >
                        <InputCustom
                            label='Email Address'
                            keyboardType='email-address'
                            autoCapitalize='none'
                        />
                        <InputCustom
                            label='Password'
                            isPassword={true}
                        />
                        <View style={[styles.rememberContent, {
                            width: REMEMBER_CONTENT_WIDTH
                        }]}>
                            <View style={styles.rememberMeWrapper}>
                                <Switch
                                    trackColor={{ false: "#FFF", true: "#EEE" }}
                                    thumbColor={isEnabled ? COLORS.primary : '#FFF'}
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
                    </Animated.View>
                    <Animated.View style={{
                        transform: [
                            {
                                translateY
                            }
                        ]
                    }}>
                        <ButtonText
                            text={t('login')}
                            onPress={onLoginPress}
                            containerStyle={{
                                marginBottom: 15
                            }}
                        />
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
            </ImageBackground>
        </View>
    )
}

export default LoginScreen