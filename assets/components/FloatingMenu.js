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
    let ICON_SIZE = width * .17
    if (width >= 700) {
        ICON_SIZE = width * .1
    }
    if (width >= 1024) {
        ICON_SIZE = width * .07
    }
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
                        width: ICON_SIZE,
                        height: ICON_SIZE
                    }}
                />
            </TouchableOpacity>
        </PanGestureHandler>
    )
}

export default FloatingMenu
