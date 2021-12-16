import React from 'react'
import {
    View,
    Text,
    Image,
    useWindowDimensions,
    TouchableOpacity
} from 'react-native'
import { PanGestureHandler } from 'react-native-gesture-handler';

import { COLORS, IMAGES } from '../contants/contants'

const FloatingMenu = ({ onPress }) => {
    const { width } = useWindowDimensions()
    return (
        <PanGestureHandler>
            <TouchableOpacity
                style={{
                    position: 'absolute',
                    zIndex: 999,
                    right: 0,
                    bottom: 70
                }}
                onPress={onPress}
            >

                <Image
                    source={IMAGES.FLOATING_MENU_ICON}
                    style={{
                        width: width * .17,
                        height: width * .17
                    }}
                />
            </TouchableOpacity>
        </PanGestureHandler>
    )
}

export default FloatingMenu
