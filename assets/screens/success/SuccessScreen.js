import React, { useRef, useState, useEffect } from 'react'
import { StyleSheet, Text, View, ImageBackground, Animated, StatusBar, Image, TouchableOpacity, BackHandler, Alert } from 'react-native'
import { Title } from 'react-native-paper'
import LottieView from 'lottie-react-native'

import { COLORS, IMAGES, setWidth, setHeight, FONTS } from '../../contants/contants'

const SuccessScreen = ({ navigation }) => {
    useEffect(() => {
        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            () => { return true }
        )

        return () => backHandler.remove()
    }, [])

    return (
        <View style={styles.container}>
            <StatusBar barStyle='dark-content' backgroundColor={COLORS.white} />
            <LottieView
                source={IMAGES.CONGRATS}
                style={{
                    position: 'absolute',
                    zIndex: -1
                }}
                autoPlay
                loop={false}
            />
            <View style={styles.contentView}>
                <Image
                    source={IMAGES.LOGO_BOLD}
                    style={styles.logo}
                    resizeMode='stretch'
                />
                <View style={styles.bodyWrapper}>
                    <Title style={styles.text}>Successfully Verified</Title>
                    <Text style={styles.text}>Please enjoy your shop</Text>
                </View>
                <TouchableOpacity
                    onPress={() => navigation.replace('Map')}
                >
                    <ImageBackground
                        source={IMAGES.BUTTON}
                        style={styles.buttonWrapper}
                        resizeMode='stretch'
                    >
                        <Text style={styles.buttonText}>Done</Text>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SuccessScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentView: {
        height: setHeight(60),
        width: '100%',
        justifyContent: 'space-between',
        zIndex: 999
    },
    logo: {
        width: setWidth(40),
        height: setWidth(40),
        alignSelf: 'center'
    },
    bodyWrapper: {
        alignItems: 'center'
    },
    text: {
        color: COLORS.primary,
        fontFamily: FONTS.MeridiesAntiqua
    },
    buttonWrapper: {
        width: setWidth(65),
        height: setWidth(18),
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: COLORS.white,
        fontFamily: FONTS.MeridiesAntiqua,
        marginBottom: setWidth(18) / 5
    }
})
