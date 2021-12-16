import React from 'react'
import {
    StyleSheet,
    Animated,
    useWindowDimensions
} from 'react-native'
import LottieView from 'lottie-react-native'

import { IMAGES, setWidth, setHeight, width } from '../contants/contants'

const Glow = (props) => {
    const { width, height } = useWindowDimensions()
    let GLOW_WIDTH = width * .8
    let GLOW_LEFT = width + width * .08
    let GLOW_TOP = height * .31

    if (width >= 700) {
        GLOW_WIDTH = width * .6
        GLOW_LEFT = width * .69
        GLOW_TOP = height * .31
    }

    if (width >= 1024) {
        GLOW_WIDTH = width * .4
        GLOW_LEFT = width * .27
        GLOW_TOP = height * .24
    }
    const { treeTranslateY } = props
    return (
        <>
            <Animated.View
                style={[styles.glowWrapper, {
                    transform: [{
                        translateY: treeTranslateY
                    }],
                    left: GLOW_LEFT,
                    top: GLOW_TOP
                }]}
            >
                <LottieView
                    source={IMAGES.GLOW}
                    autoPlay
                    loop
                    style={[styles.glow, {
                        width: GLOW_WIDTH
                    }]}
                    speed={0.3}
                />
            </Animated.View>
        </>
    )
}

export default Glow

const styles = StyleSheet.create({
    glowWrapper: {
        position: 'absolute',
        zIndex: 1
    },
    glow: {
        opacity: 0.8
    }
})
