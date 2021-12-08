import React, { useEffect } from 'react'
import { ImageBackground, Image, View, StatusBar, ActivityIndicator } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { styles } from './styles'
import { COLORS, IMAGES } from '../../contants/contants'

const SplashScreen = () => {
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
                style={styles.background}
            >
                <StatusBar barStyle='light-content' translucent backgroundColor='transparent' />
                <Image
                    source={IMAGES.STYLERELLA}
                    style={styles.logo}
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
