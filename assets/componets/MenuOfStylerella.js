import React, { useRef, useEffect, useState } from 'react'
import { StyleSheet, Animated, TouchableOpacity, View, Image, Platform, PixelRatio } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Divider } from 'react-native-elements'
import { Text, Title } from 'react-native-paper'

import { t } from '../locales/index'
import { FONTS, setWidth, width, COLORS, IMAGES } from '../contants/contants'
import AccountDetails from './AccountDetails'


const MenuOfStylerella = () => {
    const navigation = useNavigation()
    const [rootMenu, setRootMenu] = useState(true)
    const menuOpacity = useRef(new Animated.Value(0)).current
    useEffect(() => {
        Animated.timing(
            menuOpacity,
            {
                toValue: 1,
                duration: 250,
                useNativeDriver: true
            }
        ).start()
    }, [])

    const onAccountDetailsPress = () => {
        setRootMenu(false)
    }

    const onLogout = () => {
        navigation.replace('Landing')
    }

    return (
        <>
            {
                rootMenu
                    ?
                    <Animated.View style={[styles.menuContainer, {
                        opacity: menuOpacity
                    }]}>
                        <View style={styles.menuTitleWrapper}>
                            <Title style={styles.menuTitleText}>{t('menu_of_stylerella')}</Title>
                            <Image
                                source={IMAGES.STYLERELLA2}
                                style={styles.stylerellaLogo}
                                resizeMode='contain'
                            />
                        </View>

                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={onAccountDetailsPress}
                        >
                            <Animated.View style={[styles.menuItemWrapper, styles.menuItemWrapperFirst]}>
                                <Text style={styles.itemText}>{t('account_details')}</Text>
                            </Animated.View>
                        </TouchableOpacity>
                        <Divider orientation="horizontal" color={COLORS.primary} />
                        <TouchableOpacity
                            activeOpacity={0.8}
                        >
                            <Animated.View style={[styles.menuItemWrapper]}>
                                <Text style={styles.itemText}>{t('my_orders')}</Text>
                            </Animated.View>
                        </TouchableOpacity>
                        <Divider orientation="horizontal" color={COLORS.primary} />
                        <TouchableOpacity
                            activeOpacity={0.8}
                        >
                            <Animated.View style={[styles.menuItemWrapper]}>
                                <Text style={styles.itemText}>{t('my_wish_list')}</Text>
                            </Animated.View>
                        </TouchableOpacity>
                        <Divider orientation="horizontal" color={COLORS.primary} />
                        <TouchableOpacity
                            activeOpacity={0.8}
                        >
                            <Animated.View style={[styles.menuItemWrapper]}>
                                <Text style={styles.itemText}>{t('request_return')}</Text>
                            </Animated.View>
                        </TouchableOpacity>
                        <Divider orientation="horizontal" color={COLORS.primary} />
                        <TouchableOpacity
                            activeOpacity={0.8}
                        >
                            <Animated.View style={[styles.menuItemWrapper]}>
                                <Text style={styles.itemText}>{t('address_book')}</Text>
                            </Animated.View>
                        </TouchableOpacity>
                        <Divider orientation="horizontal" color={COLORS.primary} />
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => navigation.navigate('ShoppingList')}
                        >
                            <Animated.View style={[styles.menuItemWrapper]}>
                                <Text style={styles.itemText}>Shopping Cart</Text>
                            </Animated.View>
                        </TouchableOpacity>
                        <Divider orientation="horizontal" color={COLORS.primary} />
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={onLogout}
                        >
                            <Animated.View style={[styles.menuItemWrapper, styles.menuItemWrapperLast]}>
                                <Text style={styles.itemText}>{t('logout')}</Text>
                            </Animated.View>
                        </TouchableOpacity>
                    </Animated.View>
                    :
                    <AccountDetails
                        onBackPressed={() => setRootMenu(true)}
                    />
            }
        </>
    )
}

export default MenuOfStylerella

let MENU_WIDTH = setWidth(75)
let LOGO_SIZE = 45

const ratio = PixelRatio.get()

if (Platform.OS == 'ios' && ratio < 3) {
    LOGO_SIZE = 35
}

if (width >= 700) {
    MENU_WIDTH = setWidth(50)
    LOGO_SIZE = 50
}

if (width >= 1024) {
    MENU_WIDTH = setWidth(35)
    LOGO_SIZE = 50
}

const styles = StyleSheet.create({
    menuContainer: {
        backgroundColor: 'rgba(237, 175, 168, 0.7)',
        width: MENU_WIDTH,
        borderRadius: 5,
        marginBottom: 15,
        marginLeft: 2,
        padding: 5,
    },
    menuTitleWrapper: {
        flexDirection: 'row',
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    menuTitleText: {
        color: COLORS.white,
        fontFamily: FONTS.MeridiesAntiqua
    },
    stylerellaLogo: {
        width: LOGO_SIZE,
        height: LOGO_SIZE,
        tintColor: COLORS.white,
        marginLeft: 10
    },
    menuItemWrapperFirst: {
        marginTop: 10,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10
    },
    menuItemWrapperLast: {
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10
    },
    menuItemWrapper: {
        paddingVertical: 12,
        backgroundColor: COLORS.white
    },
    itemText: {
        textAlign: 'center',
        color: COLORS.primary,
        fontFamily: FONTS.MeridiesAntiqua,
    }
})
