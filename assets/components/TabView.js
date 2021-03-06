import React, { useState, useCallback, useEffect } from 'react'
import { Ionicons } from '@expo/vector-icons'
import {
    StyleSheet,
    Animated,
    TouchableOpacity,
    View,
    Pressable,
    BackHandler,
    useWindowDimensions
} from 'react-native'
import * as Haptics from 'expo-haptics'
import { isIphoneX } from 'react-native-iphone-x-helper'
import { Text } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

import { COLORS, FONTS } from '../contants/contants'
import ShopList from './ShopList.js'
import ProductList from './ProductList'
import MenuOfZone from './MenuOfZone'

import { t } from '../locales/index'

const AnimatedIcons = Animated.createAnimatedComponent(Ionicons)

const TabView = () => {
    const { width, height } = useWindowDimensions()
    const navigation = useNavigation()
    const [tabIndex, setTabIndex] = useState(0)
    const onShopListPress = () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
        setTabIndex(0)
        setOpenMenu(false)
    }
    const onProductListPress = () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
        setTabIndex(1)
        setOpenMenu(false)
    }

    const [openMenu, setOpenMenu] = useState(false)

    const onButtonPressed = async () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
        setOpenMenu(openMenu => !openMenu)
    }
    useEffect(() => {
        const backAction = () => {
            navigation.goBack()
            return true
        };

        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        )

        return () => backHandler.remove()
    }, [])

    const PopupZoneMenu = () => {
        return (
            <>
                <View style={[styles.popupMenu]}>
                    {/* Button Open/Close */}
                    <Pressable
                        onPress={() => onButtonPressed()}
                    >
                        <View style={[styles.filterButtonWrapper, {
                            width: width * .36,
                        }]}>
                            <Text style={styles.filterButtonText}>{t('filter')}</Text>
                            <AnimatedIcons
                                name='caret-up-outline'
                                size={18}
                                color={COLORS.white}
                            />
                        </View>
                    </Pressable>
                </View>
                {
                    openMenu &&
                    <MenuOfZone
                        onCloseButtonPress={setOpenMenu}
                        openMenu={setOpenMenu}
                    />
                }
            </>
        )
    }

    const RenderItem = useCallback(() => {
        if (tabIndex == 0) {
            return (
                <>
                    <ShopList />
                </>
            )
        }
        if (tabIndex == 1) {
            return (
                <>
                    <ProductList />
                </>
            )
        }
    }, [tabIndex])

    return (
        <>
            <Animated.View style={[styles.container, {
                height: height * .055
            }]}>
                <TouchableOpacity
                    style={[styles.backIcon, {
                        width: width * .2,
                    }]}
                    onPress={() => navigation.goBack()}
                >
                    <Ionicons
                        name='arrow-back-outline'
                        color={COLORS.primary}
                        size={24}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.tabViewItem, {
                        backgroundColor: tabIndex == 0 ? COLORS.primary : COLORS.white
                    }]}
                    onPress={onShopListPress}
                    activeOpacity={0.7}
                >
                    <Text style={[styles.tabBarText, {
                        color: tabIndex == 0 ? COLORS.white : COLORS.primary
                    }]}>Shop List</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.tabViewItem, {
                        backgroundColor: tabIndex == 1 ? COLORS.primary : COLORS.white
                    }]}
                    onPress={onProductListPress}
                    activeOpacity={0.7}
                >
                    <Text style={[styles.tabBarText, {
                        color: tabIndex == 1 ? COLORS.white : COLORS.primary
                    }]}>Product List</Text>
                </TouchableOpacity>
            </Animated.View>
            <RenderItem />
            <PopupZoneMenu />
        </>
    )
}

export default TabView

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    backIcon: {
        backgroundColor: COLORS.white,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    tabViewItem: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },
    tabBarText: {
        fontFamily: FONTS.MeridiesAntiqua
    },
    popupMenu: {
        position: 'absolute',
        bottom: 0,
        width: '100%'
    },
    filterButtonWrapper: {
        backgroundColor: COLORS.primary,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        flexDirection: 'row',
        paddingBottom: isIphoneX() ? 20 : 5,
        paddingTop: 5
    },
    filterButtonText: {
        marginRight: 5,
        color: COLORS.white,
        fontFamily: FONTS.MeridiesAntiqua,
    }
})
