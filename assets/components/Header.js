import React from 'react'
import {
    View,
    Text,
    useWindowDimensions,
    TouchableOpacity,
    StatusBar,
    ImageBackground,
    Platform,
    Image
} from 'react-native'

import { Title } from 'react-native-paper'

import { COLORS, IMAGES, FONTS } from '../contants/contants'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'

const Header = ({ headerTitle, headerTitleStyle, showCloseIcon, onClosePress, rightIcon, onPressRightIcon }) => {
    const { width, height } = useWindowDimensions()
    let LOGO_SIZE = width * .1
    let CLOSE_ICON_SIZE = width * .07
    if (width >= 700) {
        LOGO_SIZE = width * .07
        CLOSE_ICON_SIZE = width * .05
    }
    if (width >= 1024) {
        LOGO_SIZE = width * .05
        CLOSE_ICON_SIZE = width * .04
    }
    return (
        <ImageBackground
            style={{
                alignItems: 'center',
                flexDirection: 'row',
                height: height * .11 + (StatusBar.currentHeight / 2),
            }}
            source={IMAGES.LANDING_BACKGROUND}
        >
            <StatusBar barStyle='light-content' backgroundColor={COLORS.primary} />
            <SafeAreaProvider>
                <SafeAreaView
                    style={{
                        marginTop: Platform.OS == 'android' ? StatusBar.currentHeight / 2 : 10,

                    }}
                >
                    <View
                        style={{
                            justifyContent: 'center'
                        }}
                    >
                        <Image
                            source={IMAGES.STYLERELLA2}
                            style={{
                                position: 'absolute',
                                width: LOGO_SIZE,
                                height: LOGO_SIZE,
                                left: 20,
                                tintColor: COLORS.white
                            }}
                        />
                        <Title
                            style={{
                                fontFamily: FONTS.MeridiesAntiqua,
                                color: COLORS.white,
                                textAlign: 'center',
                                ...headerTitleStyle
                            }}
                        >
                            {headerTitle}
                        </Title>
                        {
                            showCloseIcon &&
                            <TouchableOpacity
                                style={{
                                    position: 'absolute',
                                    right: 20
                                }}
                                onPress={onClosePress}
                            >
                                <Ionicons
                                    name='close-outline'
                                    size={CLOSE_ICON_SIZE}
                                    color={COLORS.white}
                                />
                            </TouchableOpacity>
                        }
                        {
                            rightIcon &&
                            <TouchableOpacity
                                style={{
                                    position: 'absolute',
                                    right: 20
                                }}
                                onPress={onPressRightIcon}
                            >
                                <Ionicons
                                    name={rightIcon}
                                    size={CLOSE_ICON_SIZE}
                                    color={COLORS.white}
                                />
                            </TouchableOpacity>
                        }

                    </View>
                </SafeAreaView>
            </SafeAreaProvider>

        </ImageBackground>
    )
}

export default Header
