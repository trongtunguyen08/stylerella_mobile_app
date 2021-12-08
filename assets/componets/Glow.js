import React from 'react'
import { StyleSheet, Animated } from 'react-native'
import LottieView from 'lottie-react-native'

import { IMAGES, setWidth, setHeight, width } from '../contants/contants'

const Glow = (props) => {
    const { treeTranslateY } = props
    return (
        <>
            <Animated.View
                style={[styles.glowWrapper, {
                    transform: [{
                        translateY: treeTranslateY
                    }]
                }]}
            >
                <LottieView
                    source={IMAGES.GLOW}
                    autoPlay
                    loop
                    style={styles.glow}
                    speed={0.3}
                />
            </Animated.View>
        </>
    )
}

export default Glow

let GLOW_WIDTH = setWidth(80)
let GLOW_LEFT = width + setWidth(8)
let GLOW_TOP = setHeight(31)

if (width >= 700) {
    GLOW_WIDTH = setWidth(60)
    GLOW_LEFT = setWidth(69)
    GLOW_TOP = setHeight(31)
}

if (width >= 1024) {
    GLOW_WIDTH = setWidth(40)
    GLOW_LEFT = setWidth(27)
    GLOW_TOP = setHeight(24)
}

const styles = StyleSheet.create({
    glowWrapper: {
        position: 'absolute',
        left: GLOW_LEFT,
        top: GLOW_TOP,
        zIndex: 1
    },
    glow: {
        width: GLOW_WIDTH,
        opacity: 0.8
    }
})
