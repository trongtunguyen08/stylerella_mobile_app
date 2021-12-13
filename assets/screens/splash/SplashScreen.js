import React, { useEffect } from 'react'
import { ImageBackground, Image, View, StatusBar, ActivityIndicator, StyleSheet, useWindowDimensions, PixelRatio, Platform } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { styles } from './styles'
import { COLORS, IMAGES } from '../../contants/contants'

const SplashScreen = () => {
    const { width, height } = useWindowDimensions()
    const ratio = PixelRatio.get()
    let LOGO_SIZE = width * .3
    if (Platform.OS === 'android' && ratio <= 2) {
        LOGO_SIZE = width * .2
    }
    if (Platform.OS === 'ios' && ratio < 3) {
        LOGO_SIZE = width * .2
    }
    if (width >= 700) {
        LOGO_SIZE = width * .1
    }
    if (width >= 1024) {
        LOGO_SIZE = width * .15
    }
    const navigation = useNavigation()
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Landing')
        }, 3000)
    }, [])

    return (
        <View style={styles.container}>
            <ImageBackground
                source={IMAGES.LANDING_BACKGROUND}
                style={[StyleSheet.absoluteFillObject, styles.background]}
            >
                <StatusBar barStyle='light-content' translucent backgroundColor='transparent' />
                <Image
                    source={IMAGES.STYLERELLA}
                    style={[styles.logo, {
                        width: LOGO_SIZE,
                        height: LOGO_SIZE
                    }]}
                    resizeMode='contain'
                />
                <ActivityIndicator
                    color={COLORS.white}
                />
            </ImageBackground>
        </View>
    )
}

export default SplashScreen
