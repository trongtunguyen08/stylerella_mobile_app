import React, { useState, useRef, useEffect } from 'react'
import { Animated, StyleSheet, Text, View, TextInput, Platform, PixelRatio, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import * as Haptics from 'expo-haptics'

import { COLORS, FONTS, width } from '../contants/contants'

const InputAnimated = Animated.createAnimatedComponent(TextInput)

const InputCustom = (props) => {
    const { placeholder, value, onChangeText, leftIconName, isPassword } = props
    let ICON_SIZE = 22

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
        <View style={[styles.container]}>
            {
                leftIconName && <Ionicons name={leftIconName} size={ICON_SIZE} style={styles.inputIconLeft} />
            }
            <InputAnimated
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                style={[styles.input, {
                    transform: [
                        {
                            translateY
                        }
                    ]
                }]}
                placeholderTextColor={COLORS.primary}
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
                    <Ionicons name={RIGHT_ICON_NAME} size={ICON_SIZE} style={styles.inputIconRight} />
                </TouchableOpacity>
            }
        </View>
    )
}

export default InputCustom

const ratio = PixelRatio.get()

let MARGIN_BOTTOM = 10
let PADDING = Platform.OS == 'android' ? 14 : 18
let FONT_SIZE = 18

if (ratio <= 2) {
    MARGIN_BOTTOM = 5
    PADDING = Platform.OS == 'android' ? 7 : 10
    FONT_SIZE = 12
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginBottom: MARGIN_BOTTOM,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 1,
        padding: PADDING,
        borderColor: COLORS.primary,
    },
    input: {
        fontFamily: FONTS.MeridiesAntiqua,
        color: COLORS.highlight,
        fontSize: FONT_SIZE,
        flex: 1
    },
    inputIconLeft: {
        color: COLORS.primary,
        marginRight: 10
    },
    inputIconRight: {
        color: COLORS.primary,
        marginLeft: 10
    }
})
