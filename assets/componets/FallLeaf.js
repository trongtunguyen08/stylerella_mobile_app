import React from 'react'
import { StyleSheet, Animated } from 'react-native'
import LottieView from 'lottie-react-native'

import { IMAGES, width, setWidth, setHeight } from '../contants/contants'

const FallLeaf = (props) => {
    const { backgroundOpacity, treeTranslateY } = props
    return (
        <>
            <Animated.View
                style={[styles.fallLeafWrapper, {
                    opacity: backgroundOpacity,
                    transform: [
                        {
                            translateY: treeTranslateY
                        }
                    ]
                }]}
            >
                <LottieView
                    style={styles.fallLeaf}
                    source={IMAGES.FALL_LEAF}
                    autoPlay
                    loop
                    speed={0.5}
                />
                <LottieView
                    style={styles.fallLeaf}
                    source={IMAGES.FALL_LEAF}
                    autoPlay
                    loop
                    speed={0.5}
                />
                <LottieView
                    style={styles.fallLeaf}
                    source={IMAGES.FALL_LEAF}
                    autoPlay
                    loop
                    speed={0.5}
                />
            </Animated.View>
        </>
    )
}

export default FallLeaf

let FALL_LEAF_WIDTH = setWidth(10)
let FALL_LEAF_TOP = setHeight(53)
let FALL_LEAF_LEFT = width + setWidth(54)

if (width >= 700) {
    FALL_LEAF_WIDTH = setWidth(8)
    FALL_LEAF_TOP = setHeight(45)
    FALL_LEAF_LEFT = width + setWidth(4)
}

if (width >= 1024) {
    FALL_LEAF_WIDTH = setWidth(4.5)
    FALL_LEAF_TOP = setHeight(50)
    FALL_LEAF_LEFT = setWidth(52)
}

const styles = StyleSheet.create({
    fallLeafWrapper: {
        position: 'absolute',
        top: FALL_LEAF_TOP,
        left: FALL_LEAF_LEFT,
        zIndex: 6
    },
    fallLeaf: {
        width: FALL_LEAF_WIDTH
    },
})
