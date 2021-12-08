import React, { useEffect, useRef } from 'react'
import { StyleSheet, Animated } from 'react-native'

import { IMAGES, setWidth, setHeight, width } from '../contants/contants'

const Sun = () => {
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
            opacity: opacityValue
        }]}>
            <Animated.Image
                source={IMAGES.SUN}
                style={[styles.sun, {
                    transform: [
                        {
                            rotate: rotateValue
                        }
                    ]
                }]}
            />
        </Animated.View>
    )
}

export default Sun
let SUN_RIGHT = setWidth(50)
let SUN_TOP = setHeight(7)
let SUN_SIZE = setWidth(30)

if (width >= 700) {
    SUN_RIGHT = setWidth(31)
    SUN_SIZE = setWidth(20)

}

if (width >= 1020) {
    SUN_RIGHT = setWidth(16)
    SUN_SIZE = setWidth(10)

}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        right: SUN_RIGHT,
        top: SUN_TOP
    },
    sun: {
        width: SUN_SIZE,
        height: SUN_SIZE
    }
})
