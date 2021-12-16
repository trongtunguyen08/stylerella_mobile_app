import React from 'react'
import { StyleSheet, Animated } from 'react-native'
import LottieView from 'lottie-react-native'

import { IMAGES, setHeight, width } from '../contants/contants'

const Rain = () => {
    return (
        <>
            <Animated.View
                style={styles.rainWrapper}
            >
                <LottieView
                    source={IMAGES.RAIN}
                    autoPlay
                    loop
                    style={styles.rain}
                    speed={0.5}
                />
            </Animated.View>
        </>
    )
}

export default Rain

const styles = StyleSheet.create({
    rainWrapper: {
        position: 'absolute',
        right: 0,
        zIndex: 1
    },
    rain: {
        width,
        height: setHeight(65)
    }
})
