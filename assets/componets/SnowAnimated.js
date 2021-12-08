import React from 'react'
import { StyleSheet, Animated, View } from 'react-native'
import LottieView from 'lottie-react-native'

import { IMAGES, setWidth, setHeight } from '../contants/contants'

const SnowAnimated = () => {
    return (
        <>
            <Animated.View
                style={[styles.snowWrapper, {
                    opacity: 1
                }]}
            >
                <LottieView
                    source={IMAGES.SNOW}
                    autoPlay
                    loop
                    style={styles.snow}
                    speed={0.5}
                />
                <LottieView
                    source={IMAGES.SNOW}
                    autoPlay
                    loop
                    style={styles.snow}
                    speed={0.5}
                />
                <LottieView
                    source={IMAGES.SNOW}
                    autoPlay
                    loop
                    style={styles.snow}
                    speed={0.5}
                />
            </Animated.View>
            <Animated.View
                style={[styles.snowWrapperRight, {
                    opacity: 1
                }]}
            >
                <LottieView
                    source={IMAGES.SNOW}
                    autoPlay
                    loop
                    style={styles.snow}
                    speed={0.5}
                />
                <LottieView
                    source={IMAGES.SNOW}
                    autoPlay
                    loop
                    style={styles.snow}
                    speed={0.5}
                />
                <LottieView
                    source={IMAGES.SNOW}
                    autoPlay
                    loop
                    style={styles.snow}
                    speed={0.5}
                />
            </Animated.View>
        </>
    )
}

export default SnowAnimated

const styles = StyleSheet.create({
    snowWrapper: {
        zIndex: 1,
        position: 'absolute',
        top: '15%',
        left: '5%'
    },
    snowWrapperRight: {
        zIndex: 1,
        position: 'absolute',
        top: '15%',
        right: '5%'
    },
    snow: {
        width: setWidth(20),
        height: setHeight(10),
    },
})
