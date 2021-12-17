import React from 'react'
import {
    TouchableOpacity,
    View,
    useWindowDimensions
} from 'react-native'
import { Text } from 'react-native-paper'

import { COLORS, FONTS } from '../contants/contants'

const ButtonText = ({
    text,
    containerStyle,
    textStyle,
    onPress,
    noBorder,
    disabled,
    onLayout
}) => {
    const { width, height } = useWindowDimensions()
    let BUTTON_HEIGHT = height * .052
    let BUTTON_WIDTH = '75%'

    if (width >= 700) {
        BUTTON_HEIGHT = height * .04
        BUTTON_WIDTH = '65%'
    }

    if (width >= 1024) {
        BUTTON_HEIGHT = height * .05
        BUTTON_WIDTH = '45%'
    }
    return (
        <TouchableOpacity
            activeOpacity={0.6}
            onPress={onPress}
            disabled={disabled}
        >
            <View
                style={{
                    width: BUTTON_WIDTH,
                    height: BUTTON_HEIGHT,
                    padding: 1.5,
                    backgroundColor: COLORS.primary,
                    borderWidth: noBorder ? 0 : 1,
                    borderColor: COLORS.white,
                    alignSelf: 'center',
                    ...containerStyle
                }}
                onLayout={onLayout}
            >
                <View
                    style={{
                        flex: 1,
                        borderWidth: noBorder ? 0 : 1,
                        borderColor: COLORS.white,
                        paddingVertical: 5,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Text
                        style={{
                            textAlign: 'center',
                            fontFamily: FONTS.MeridiesAntiqua,
                            color: COLORS.white,
                            ...textStyle
                        }}
                    >
                        {text}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ButtonText
