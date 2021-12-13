import React from 'react'
import {
    StyleSheet,
    Animated,
    useWindowDimensions
} from 'react-native'
import LottieView from 'lottie-react-native'

import { IMAGES } from '../contants/contants'

const FallLeaf = (props) => {
    const { width, height } = useWindowDimensions()
    let FALL_LEAF_WIDTH = width * .1
    let FALL_LEAF_TOP = height * .53
    let FALL_LEAF_LEFT = width + width * .54

    if (width >= 700) {
        FALL_LEAF_WIDTH = width * .08
        FALL_LEAF_TOP = height * .45
        FALL_LEAF_LEFT = width + width * .04
    }

    if (width >= 1024) {
        FALL_LEAF_WIDTH = width * .045
        FALL_LEAF_TOP = height * .5
        FALL_LEAF_LEFT = width * .52
    }
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
                    ],
                    top: FALL_LEAF_TOP,
                    left: FALL_LEAF_LEFT
                }]}
            >
                <LottieView
                    style={{ width: FALL_LEAF_WIDTH }}
                    source={IMAGES.FALL_LEAF}
                    autoPlay
                    loop
                    speed={0.5}
                />
                <LottieView
                    style={{ width: FALL_LEAF_WIDTH }}
                    source={IMAGES.FALL_LEAF}
                    autoPlay
                    loop
                    speed={0.5}
                />
                <LottieView
                    style={{ width: FALL_LEAF_WIDTH }}
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

const styles = StyleSheet.create({
    fallLeafWrapper: {
        position: 'absolute',
        zIndex: 6
    }
})
