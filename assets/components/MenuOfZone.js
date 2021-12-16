import { Ionicons } from '@expo/vector-icons'
import React, { useRef, useEffect, useState } from 'react'
import { StyleSheet, View, Animated, TouchableOpacity, Pressable, Platform, PixelRatio } from 'react-native'
import * as Haptics from 'expo-haptics'
import { Text, Title, Caption, Headline } from 'react-native-paper'

import { COLORS, FONTS, setHeight, width } from '../contants/contants'
import { useNavigation } from '@react-navigation/native'

const MenuOfZone = (props) => {
    const navigation = useNavigation()
    const [openCategoryMenu, setOpenCategoryMenu] = useState(false)
    const { onCloseButtonPress, openMenu } = props
    const animatedValue = useRef(new Animated.Value(0)).current
    const translateYValue = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [setHeight(30), 0]
    })

    useEffect(() => {
        Animated.spring(
            animatedValue,
            {
                toValue: 1,
                useNativeDriver: true
            }
        ).start()
    }, [])

    const onClosePress = () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
        Animated.spring(
            animatedValue,
            {
                toValue: 0,
                useNativeDriver: true
            }
        ).start()
        setTimeout(() => {
            onCloseButtonPress(false)
        }, 250);
    }

    return (
        <View>
            <Animated.View style={[styles.container, {
                transform: [
                    {
                        translateY: translateYValue
                    }
                ]
            }]}>
                {/* Close Button */}
                <Pressable
                    style={styles.closeButton}
                    onPress={onClosePress}
                    hitSlop={{ top: 20, right: 20, bottom: 20, left: 20 }}
                >
                    <Ionicons
                        name='close-outline'
                        size={30}
                        color={COLORS.white}
                    />
                </Pressable>
                {/* Menu Item */}
                <View style={styles.menuItemContainer}>
                    <TouchableOpacity
                        style={styles.itemWrapper}
                        onPress={() => setOpenCategoryMenu(true)}
                    >
                        <Title style={styles.itemText}>International Branding</Title>
                        <Title style={styles.itemText}>{`>`}</Title>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.itemWrapper}
                        onPress={() => setOpenCategoryMenu(true)}
                    >
                        <Title style={styles.itemText}>Local Branding</Title>
                        <Title style={styles.itemText}>{`>`}</Title>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.itemWrapper}
                        onPress={() => {
                            openMenu(false)
                        }}
                    >
                        <Title style={styles.itemText}>Virtual Shops</Title>
                        <Title style={styles.itemText}>{`>`}</Title>
                    </TouchableOpacity>
                </View>
            </Animated.View >
        </View>
    )
}

export default MenuOfZone

let WIDTH = '100%'
const ratio = PixelRatio.get()

if (width >= 700) {
    WIDTH = '80%'
}
if (width >= 1024) {
    WIDTH = '50%'
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(237, 175, 168, 0.95)',
        position: 'absolute',
        width: WIDTH,
        zIndex: 999,
        bottom: 0,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        alignSelf: 'center'
    },
    closeButton: {
        alignSelf: 'flex-end',
        marginRight: 20,
        marginTop: 10
    },
    menuItemContainer: {
        padding: 20,
        justifyContent: 'space-around',
        flex: 1
    },
    itemWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
    },
    itemText: {
        color: COLORS.white,
        fontFamily: FONTS.MeridiesAntiqua
    }
})
