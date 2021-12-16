import React, { useEffect, useRef } from 'react'
import { StyleSheet, Animated, useWindowDimensions } from 'react-native'

import { IMAGES } from '../contants/contants'

const Sun = () => {
    const { width, height } = useWindowDimensions()
    let SUN_RIGHT = width * .5
    let SUN_TOP = height * .07
    let SUN_SIZE = width * .3
    if (width >= 700) {
        SUN_RIGHT = width * .31
        SUN_SIZE = width * .2

    }
    if (width >= 1020) {
        SUN_RIGHT = width * .16
        SUN_SIZE = width * .10

    }

    const opacityValue = useRef(new Animated.Value(0)).current
    const animationValue = useRef(new Animated.Value(0)).current
    const rotateValue = animationValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    })

    useEffect(() => {
        Animated.timing(
            opacityValue,
            {
                toValue: 1,
                duration: 2000,
                useNativeDriver: true
            }
        ).start()
        Animated.loop(
            Animated.timing(
                animationValue,
                {
                    toValue: 1,
                    duration: 110000,
                    useNativeDriver: true
                }
            )
        ).start()

    }, [])
    return (
        <Animated.View style={[styles.container, {
            opacity: opacityValue,
            right: SUN_RIGHT,
            top: SUN_TOP
        }]}>
            <Animated.Image
                source={IMAGES.SUN}
                style={{
                    transform: [
                        {
                            rotate: rotateValue
                        }
                    ],
                    width: SUN_SIZE,
                    height: SUN_SIZE
                }}
            />
        </Animated.View>
    )
}

export default Sun

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
    }
})
