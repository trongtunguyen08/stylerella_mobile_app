import React from 'react'
import {
    Animated,
    StyleSheet
} from 'react-native'
import LottieView from 'lottie-react-native'

import { IMAGES, width, setHeight, setWidth } from '../contants/contants'

const WaterRipple = () => {
    return (
        <>
            <Animated.View
                style={styles.waterRippleWrapper}
            >
                <LottieView
                    source={IMAGES.WATER_RIPPLE}
                    autoPlay
                    loop
                    style={styles.waterRipple}
                    speed={0.7}
                />
            </Animated.View>
            <Animated.View
                style={styles.waterRippleWrapper2}
            >
                <LottieView
                    source={IMAGES.WATER_RIPPLE}
                    autoPlay
                    loop
                    style={styles.waterRipple}
                    speed={0.9}
                />
            </Animated.View>
            <Animated.View
                style={styles.waterRippleWrapper3}
            >
                <LottieView
                    source={IMAGES.WATER_RIPPLE}
                    autoPlay
                    loop
                    style={styles.waterRipple}
                    speed={0.8}
                />
            </Animated.View>
            <Animated.View
                style={styles.waterRippleWrapper4}
            >
                <LottieView
                    source={IMAGES.WATER_RIPPLE}
                    autoPlay
                    loop
                    style={styles.waterRipple}
                    speed={0.7}
                />
            </Animated.View>
            <Animated.View
                style={styles.waterRippleWrapper5}
            >
                <LottieView
                    source={IMAGES.WATER_RIPPLE}
                    autoPlay
                    loop
                    style={styles.waterRipple}
                    speed={0.4}
                />
            </Animated.View>
            <Animated.View
                style={styles.waterRippleWrapper6}
            >
                <LottieView
                    source={IMAGES.WATER_RIPPLE}
                    autoPlay
                    loop
                    style={styles.waterRipple}
                    speed={0.5}
                />
            </Animated.View>
            <Animated.View
                style={styles.waterRippleWrapper7}
            >
                <LottieView
                    source={IMAGES.WATER_RIPPLE}
                    autoPlay
                    loop
                    style={styles.waterRipple}
                    speed={0.3}
                />
            </Animated.View>
        </>
    )
}

export default WaterRipple

const styles = StyleSheet.create({
    waterRipple: {
        width: 90,
        opacity: 0.7
    },
    waterRippleWrapper: {
        position: 'absolute',
        left: width >= 1024 ? setWidth(40) : setWidth(100),
        bottom: setHeight(10)
    },
    waterRippleWrapper2: {
        position: 'absolute',
        left: width >= 1024 ? setWidth(50) : width + setWidth(5),
        bottom: setHeight(15)
    },
    waterRippleWrapper3: {
        position: 'absolute',
        left: width >= 1024 ? setWidth(30) : width + setWidth(50),
        bottom: setHeight(8)
    },
    waterRippleWrapper4: {
        position: 'absolute',
        left: width >= 1024 ? setWidth(10) : setWidth(50),
        bottom: setHeight(8)
    },
    waterRippleWrapper5: {
        position: 'absolute',
        left: width >= 1024 ? setWidth(5) : setWidth(30),
        bottom: setHeight(15)
    },
    waterRippleWrapper6: {
        position: 'absolute',
        left: width >= 1024 ? setWidth(67) : width * 2,
        bottom: setHeight(15)
    },
    waterRippleWrapper7: {
        position: 'absolute',
        left: width >= 1024 ? setWidth(65) : (setWidth(100) * 1.9),
        bottom: setHeight(5)
    }
})
