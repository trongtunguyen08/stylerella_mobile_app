import React, { useRef, useEffect, useState } from 'react'
import {
    Animated,
    Platform,
    ScrollView,
    ImageBackground,
    KeyboardAvoidingView,
    BackHandler,
    Image,
    TextInput,
    View,
    useWindowDimensions
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Caption, Title, Text } from 'react-native-paper'

import { IMAGES, COLORS, FONTS } from '../../contants/contants'
import { styles } from './styles'
import { t } from '../../locales/index'
import {
    InputCustom,
    Header,
    ButtonText,
    LoadingModal
} from '../../components'

const RegisterScreen = () => {
    const { width } = useWindowDimensions()
    const navigation = useNavigation()
    const [loading, setLoading] = useState(true)
    const [floatingButterfyShow, setFloatingButterfyShow] = useState(false)

    const onBackPress = () => {
        navigation.goBack()
    }

    const onRegisterPress = () => {
        setLoading(true)
        setFloatingButterfyShow(true)
        setTimeout(() => {
            navigation.replace('Success')
        }, 2000)
    }

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
    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            {/* Loading */}
            {
                loading &&
                <LoadingModal />
            }
            {/* Header */}
            <Header
                headerTitle={t('register')}
                showCloseIcon={true}
                onClosePress={onBackPress}
            />
            <ImageBackground
                source={IMAGES.LOGIN_REGISTER_BG}
                style={styles.content}
                resizeMode='stretch'
                onLoadEnd={() => setLoading(false)}
            >
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        padding: 20
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
                        <Title style={styles.titleText}>CREATE AN ACCOUNT</Title>
                        <Caption style={styles.subTitleText}>{`After create an account,\n you can browse and buy more brands`}</Caption>
                    </Animated.View>
                    <Animated.View
                        style={{
                            transform: [
                                {
                                    translateY: contentTranslateY
                                }
                            ]
                        }}
                    >
                        <InputCustom
                            label='First Name'
                            autoCapitalize='words'
                        />
                        <InputCustom
                            label='Last Name'
                            autoCapitalize='words'
                        />
                        <InputCustom
                            label='Email Address'
                            keyboardType='email-address'
                            autoCapitalize='none'
                        />
                        <InputCustom
                            label='Mobile Number'
                            keyboardType='phone-pad'
                            returnKeyType='done'
                        />
                        <InputCustom
                            label='Password'
                            isPassword={true}
                        />
                        <InputCustom
                            label='Confirm Password'
                            isPassword={true}
                        />
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginVertical: 5,
                                width: (width >= 700) ? '75%' : (width >= 1024 ? '55%' : '100%'),
                                alignSelf: 'center'
                            }}
                        >
                            <Text
                                style={{
                                    fontFamily: FONTS.MeridiesAntiqua,
                                    color: COLORS.white
                                }}
                            >
                                Referral Code
                            </Text>
                            <TextInput
                                style={{
                                    fontFamily: FONTS.MeridiesAntiqua,
                                    color: COLORS.white,
                                    marginLeft: 20,
                                    borderWidth: 0.5,
                                    borderRadius: 10,
                                    padding: 10,
                                    borderColor: COLORS.white,
                                    flex: 1
                                }}
                                autoCorrect={false}
                                autoCapitalize='none'
                                autoComplete='off'
                            />
                        </View>
                    </Animated.View>

                    <Animated.View style={{
                        transform: [
                            {
                                translateY
                            }
                        ]
                    }}>
                        {
                            floatingButterfyShow &&
                            <Image
                                source={IMAGES.BUTTERFLY}
                                style={styles.floatingButterfly}
                            />
                        }

                        <ButtonText
                            text={t('register')}
                            containerStyle={{
                                marginVertical: 10
                            }}
                            onPress={onRegisterPress}
                        />
                    </Animated.View>

                    <Animated.View
                        style={{
                            transform: [
                                {
                                    translateY
                                }
                            ]
                        }}
                    >
                        <ButtonText
                            text='Already have an Account'
                            onPress={() => {
                                navigation.navigate('Login')
                            }}
                        />
                    </Animated.View>
                </ScrollView>
            </ImageBackground>
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen
