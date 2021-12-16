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
    disabled
}) => {
    const { width, height } = useWindowDimensions()
    return (
        <TouchableOpacity
            activeOpacity={0.6}
            onPress={onPress}
            disabled={disabled}
        >
            <View
                style={{
                    width: '75%',
                    height: height * .052,
                    padding: 1.5,
                    backgroundColor: COLORS.primary,
                    borderWidth: noBorder ? 0 : 1,
                    borderColor: COLORS.white,
                    alignSelf: 'center',
                    ...containerStyle
                }}
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
