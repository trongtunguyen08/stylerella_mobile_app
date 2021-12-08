import React, { useEffect, useRef, useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet, Animated, PixelRatio, Platform, Pressable } from 'react-native'
import * as Haptics from 'expo-haptics'
import { isIphoneX } from 'react-native-iphone-x-helper'
import { Text } from 'react-native-paper'

import { FONTS, setWidth, width, COLORS } from '../contants/contants'
import { t } from '../locales/index'
import MenuOfStylerella from './MenuOfStylerella'

const AnimatedIcons = Animated.createAnimatedComponent(Ionicons)

const PopupMenu = (props) => {
    const { menuOpacityAnimated } = props

    const [openMenu, setOpenMenu] = useState(false)
    const buttonAnimatedValue = useRef(new Animated.Value(0)).current
    const iconRotate = buttonAnimatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['360deg', '180deg']
    })

    const onButtonPressed = async () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
        await setOpenMenu(openMenu => !openMenu)

        if (openMenu) {
            Animated.timing(
                buttonAnimatedValue,
                {
                    toValue: 0,
                    duration: 250,
                    useNativeDriver: true
                }
            ).start()
        } else {
            Animated.timing(
                buttonAnimatedValue,
                {
                    toValue: 1,
                    duration: 250,
                    useNativeDriver: true
                }
            ).start()
        }
    }

    const RenderMenu = () => {
        if (openMenu) {
            return <MenuOfStylerella />
        }
        return null
    }
    return (
        <>
            <Animated.View style={[styles.popupMenu, {
                opacity: menuOpacityAnimated
            }]}>
                <RenderMenu />

                {/* Button Open/Close */}
                <Pressable
                    hitSlop={{ top: 20, right: 20, bottom: 20, left: 20 }}
                    onPress={() => onButtonPressed()}
                >
                    <Animated.View style={styles.filterButtonWrapper}>
                        <Text style={styles.filterButtonText}>{t('filter')}</Text>
                        <AnimatedIcons
                            name='caret-up-outline'
                            size={18}
                            color={COLORS.white}
                            style={[{
                                transform: [
                                    {
                                        rotate: iconRotate
                                    }
                                ]
                            }]}
                        />
                    </Animated.View>
                </Pressable>
            </Animated.View>
        </>
    )
}

export default PopupMenu

const styles = StyleSheet.create({
    popupMenu: {
        position: 'absolute',
        bottom: 0,
        width: '100%'
    },
    filterButtonWrapper: {
        width: setWidth(30),
        backgroundColor: COLORS.primary,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        flexDirection: 'row',
        paddingHorizontal: 5,
        paddingBottom: isIphoneX() ? 25 : 5,
        paddingTop: 5
    },
    filterButtonText: {
        marginRight: 5,
        color: COLORS.white,
        fontFamily: FONTS.MeridiesAntiqua,
    }
})
