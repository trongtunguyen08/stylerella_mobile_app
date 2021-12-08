import React, { useEffect, useRef } from 'react'
import { StyleSheet, Animated } from 'react-native'
import { IMAGES, width, setWidth, setHeight } from '../contants/contants'

const FallingSnow = () => {
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
        <Animated.View style={styles.container}>
            <Animated.Image
                source={IMAGES.FALLING_SNOW}
                style={[styles.snow, {
                    opacity: opacityValue
                }]}
            />
        </Animated.View>
    )
}

export default FallingSnow

const styles = StyleSheet.create({
    container: {
        width: width * 3,
        position: 'absolute',
        bottom: 0,
        opacity: 0.8
    },
    snow: {
        width: width * 3,
        height: setHeight(40)
    }
})
