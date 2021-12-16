import React from 'react'
import {
    View,
    useWindowDimensions,
    ActivityIndicator,
    Animated
} from 'react-native'
import { Text } from 'react-native-paper'
import { COLORS, FONTS } from '../contants/contants'

const LoadingModal = () => {
    const { width, height } = useWindowDimensions()
    const animatedOpacityValue = React.useRef(new Animated.Value(0)).current
    const animatedScaleValue = React.useRef(new Animated.Value(0)).current
    const opacity = animatedOpacityValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1]

    })
    const scale = animatedScaleValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1]

    })

    React.useEffect(() => {
        Animated.sequence([
            Animated.timing(
                animatedOpacityValue,
                {
                    toValue: 1,
                    duration: 250,
                    useNativeDriver: true
                }
            ),
            Animated.spring(
                animatedScaleValue,
                {
                    toValue: 1.1,
                    useNativeDriver: true
                }
            )
        ]).start()
    }, [])

    return (
        <Animated.View
            style={{
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                backgroundColor: 'rgba(0,0,0,0.8)',
                zIndex: 999,
                justifyContent: 'center',
                alignItems: 'center',
                opacity
            }}
        >
            <Animated.View
                style={{
                    backgroundColor: COLORS.white,
                    height: width * .3,
                    width: width * .3,
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    transform: [
                        {
                            scale
                        }
                    ]
                }}
            >
                <ActivityIndicator color={COLORS.primary} />
                <Text
                    style={{
                        fontFamily: FONTS.MeridiesAntiqua,
                        color: COLORS.highlight,
                        marginTop: 15
                    }}
                >
                    Please wait...
                </Text>
            </Animated.View>
        </Animated.View>
    )
}

export default LoadingModal
