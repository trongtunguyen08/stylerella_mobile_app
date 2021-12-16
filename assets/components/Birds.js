import React from 'react'
import { StyleSheet, Animated } from 'react-native'
import LottieView from 'lottie-react-native'

import { IMAGES, setWidth, setHeight } from '../contants/contants'

const Birds = () => {
    return (
        <>
            <Animated.View
                style={[styles.birdsWrapper, {
                    opacity: 0.5
                }]}
            >
                <LottieView
                    source={IMAGES.BIRDS}
                    autoPlay
                    loop
                    style={styles.birds}
                    speed={0.5}
                />
            </Animated.View>
        </>
    )
}

export default Birds

const styles = StyleSheet.create({
    birdsWrapper: {
        zIndex: 1,
    },
    birds: {
        width: setWidth(50),
        height: setHeight(35),
    },
})
