import React, { useEffect, useRef } from 'react'
import { StyleSheet, Animated, useWindowDimensions } from 'react-native'
import { IMAGES } from '../contants/contants'

const FallingSnow = () => {
    const { width, height } = useWindowDimensions()
    let SNOW_WIDTH = width * 3
    let SNOW_HEIGHT = height * .45
    if (width >= 700) {
        SNOW_WIDTH = width * 2
        SNOW_HEIGHT = height * .45
    }
    if (width >= 1024) {
        SNOW_WIDTH = width
        SNOW_HEIGHT = height * .4
    }
    const opacityValue = useRef(new Animated.Value(0)).current
    useEffect(() => {
        Animated.timing(
            opacityValue,
            {
                toValue: 1,
                duration: 20000,
                useNativeDriver: true
            }
        ).start()
    }, [])
    return (
        <Animated.View style={[styles.container, {
            width: SNOW_WIDTH
        }]}>
            <Animated.Image
                source={IMAGES.FALLING_SNOW}
                style={{
                    opacity: opacityValue,
                    width: SNOW_WIDTH,
                    height: SNOW_HEIGHT
                }}
            />
        </Animated.View>
    )
}

export default FallingSnow

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        opacity: 0.9
    }
})
