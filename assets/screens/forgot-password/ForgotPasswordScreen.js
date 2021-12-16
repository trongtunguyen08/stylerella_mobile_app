import React, { useRef, useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import {
    Animated,
    View,
    ImageBackground,
    BackHandler
} from 'react-native'
import { Caption } from 'react-native-paper'

import { IMAGES } from '../../contants/contants'
import { styles } from './styles'
import {
    InputCustom,
    Header,
    ButtonText,
    LoadingModal
} from '../../components'

const ForgotPasswordScreen = () => {
    const navigation = useNavigation()
    const animatedValue = useRef(new Animated.Value(0)).current
    const translateY = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [20, 0]
    })
    const [loading, setLoading] = useState(true)

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
            {/* Loading */}
            {loading && <LoadingModal />}
            {/* Header */}
            <Header
                headerTitle='Cannot Login?'
                showCloseIcon
                onClosePress={() => navigation.goBack()}
            />
            <ImageBackground
                source={IMAGES.LOGIN_REGISTER_BG}
                style={{
                    flex: 1,
                    padding: 20
                }}
                onLoadEnd={() => setLoading(false)}
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
                    <Caption style={styles.subTitleText}>{`Enter your email, phone number or username,\nwe're link to restore access to\nyour account will be sent to you.`}</Caption>
                </Animated.View>
                <View style={styles.body}>
                    <InputCustom
                        label='Email, Phone Number or Username'
                        autoCapitalize='none'
                    />
                    <Animated.View
                        style={{
                            transform: [
                                {
                                    translateY
                                }
                            ],
                            marginTop: 15
                        }}>
                        <ButtonText
                            text='Send Login Link'
                            onPress={() => navigation.replace('Landing')}
                        />
                    </Animated.View>
                </View>
            </ImageBackground>
        </View>
    )
}

export default ForgotPasswordScreen
