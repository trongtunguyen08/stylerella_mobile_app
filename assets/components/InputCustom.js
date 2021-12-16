import React, { useState, useRef, useEffect } from 'react'
import { Animated, StyleSheet, Text, View, TextInput, Platform, PixelRatio, TouchableOpacity, useWindowDimensions } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import * as Haptics from 'expo-haptics'

import { COLORS, FONTS, width } from '../contants/contants'
import { Caption } from 'react-native-paper'

const InputAnimated = Animated.createAnimatedComponent(TextInput)

const InputCustom = (props) => {
    const { width, height } = useWindowDimensions()
    const { label, value, onChangeText, isPassword } = props
    let ICON_SIZE = 22
    let INPUT_WIDTH = '100%'

    if (width >= 700) {
        INPUT_WIDTH = '75%'
    }
    if (width >= 1024) {
        INPUT_WIDTH = '55%'
    }

    const [hiding, setHiding] = useState(isPassword)
    let RIGHT_ICON_NAME = ''
    if (hiding) {
        RIGHT_ICON_NAME = 'eye-outline'
    } else {
        RIGHT_ICON_NAME = 'eye-off-outline'
    }

    const animatedValue = useRef(new Animated.Value(0)).current
    const translateY = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [-20, 0]
    })

    useEffect(() => {
        Animated.timing(
            animatedValue,
            {
                toValue: 1,
                duration: 500,
                useNativeDriver: true
            }
        ).start()
    }, [])

    return (
        <View style={{
            width: INPUT_WIDTH,
            alignSelf: 'center'
        }}>
            <Caption
                style={{
                    color: COLORS.white,
                    fontFamily: FONTS.MeridiesAntiqua
                }}
            >
                {label}
            </Caption>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderBottomWidth: 0.5,
                    marginBottom: 10,
                    borderBottomColor: COLORS.white
                }}
            >
                <InputAnimated
                    value={value}
                    onChangeText={onChangeText}
                    style={{
                        transform: [
                            {
                                translateY
                            }
                        ],
                        flex: 1,
                        paddingVertical: 10,
                        fontFamily: FONTS.MeridiesAntiqua,
                        color: COLORS.white
                    }}
                    secureTextEntry={hiding}
                    {
                    ...props
                    }
                />
                {
                    isPassword &&
                    <TouchableOpacity
                        onPress={() => {
                            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
                            setHiding(hiding => !hiding)
                        }}
                    >
                        <Ionicons
                            name={RIGHT_ICON_NAME}
                            size={ICON_SIZE}
                            color={COLORS.white}
                        />
                    </TouchableOpacity>
                }
            </View>
        </View>
    )
}

export default InputCustom