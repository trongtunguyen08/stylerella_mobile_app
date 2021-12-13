import React, { useRef, useEffect, useState } from 'react'
import {
    StyleSheet,
    Animated,
    TouchableOpacity,
    View,
    Image,
    Platform,
    PixelRatio,
    useWindowDimensions
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Divider } from 'react-native-elements'
import { Text, Title } from 'react-native-paper'

import { t } from '../locales/index'
import { FONTS, setWidth, width, COLORS, IMAGES } from '../contants/contants'
import MembershipBonus from './MembershipBonus'


const AccountDetails = (props) => {
    const { width, height } = useWindowDimensions()
    let MENU_WIDTH = width * .8
    let LOGO_SIZE = 45
    let MARGIN_LEFT = 5
    const ratio = PixelRatio.get()
    if (Platform.OS == 'ios' && ratio < 3) {
        LOGO_SIZE = 35
    }
    if (width >= 700) {
        MENU_WIDTH = width * .55
        LOGO_SIZE = 50
        MARGIN_LEFT = width * .2
    }
    if (width >= 1024) {
        MENU_WIDTH = width * .40
        LOGO_SIZE = 50
        MARGIN_LEFT = width * .15
    }

    const { onBackPressed } = props
    const navigation = useNavigation()
    const [membershipBonusMenu, setMembershipBonusMenu] = useState(false)
    const animatedValue = useRef(new Animated.Value(0)).current
    const translateX = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [setWidth(100), 0]
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

    return (
        <>
            <Animated.View style={[styles.menuContainer, {
                transform: [
                    {
                        translateX
                    }
                ],
                width: MENU_WIDTH,
                marginLeft: MARGIN_LEFT
            }]}>
                <View style={styles.menuTitleWrapper}>
                    <Title style={styles.menuTitleText}>{t('account_details')}</Title>
                    <Image
                        source={IMAGES.STYLERELLA2}
                        style={[styles.stylerellaLogo, {
                            width: LOGO_SIZE,
                            height: LOGO_SIZE
                        }]}
                        resizeMode='contain'
                    />
                </View>
                <View style={[styles.itemWrapper, styles.itemFirst]}>
                    <Text style={styles.itemName}>{t('first_name')}</Text>
                    <Text style={styles.itemValue}>Tai Man, Peter</Text>
                </View>
                <Divider orientation="horizontal" color={COLORS.primary} />
                <View style={styles.itemWrapper}>
                    <Text style={styles.itemName}>{t('last_name')}</Text>
                    <Text style={styles.itemValue}>Chan</Text>
                </View>
                <Divider orientation="horizontal" color={COLORS.primary} />
                <View style={styles.itemWrapper}>
                    <Text style={styles.itemName}>{t('email')}</Text>
                    <Text style={styles.itemValue}>example@gmail.com</Text>
                </View>
                <Divider orientation="horizontal" color={COLORS.primary} />
                <View style={styles.itemWrapper}>
                    <Text style={styles.itemName}>{t('mobile')}</Text>
                    <Text style={styles.itemValue}>999000</Text>
                </View>
                <Divider orientation="horizontal" color={COLORS.primary} />
                <TouchableOpacity
                    style={styles.itemWrapper}
                    activeOpacity={0.8}
                >
                    <Text style={styles.itemName}>{t('change_password')}</Text>
                    <Text style={styles.itemValue}>{`>`}</Text>
                </TouchableOpacity>
                <Divider orientation="horizontal" color={COLORS.primary} />
                <TouchableOpacity
                    style={styles.itemWrapper}
                    activeOpacity={0.8}
                    onPress={() => {
                        setMembershipBonusMenu(true)
                    }}
                >
                    <Text style={styles.itemName}>{t('membership_bonus')}</Text>
                    <Text style={styles.itemValue}>{`>`}</Text>
                </TouchableOpacity>
                <Divider orientation="horizontal" color={COLORS.primary} />
                <TouchableOpacity
                    style={[styles.itemWrapper, styles.itemLast]}
                    activeOpacity={0.8}
                    onPress={onBackPressed}
                >
                    <Text style={styles.itemValue}>{`<`}</Text>
                    <Text style={styles.itemName}>{t('go_back')}</Text>
                </TouchableOpacity>
            </Animated.View>
            {
                membershipBonusMenu &&
                <MembershipBonus
                    goBack={() => setMembershipBonusMenu(false)}
                />
            }
        </>
    )
}

export default AccountDetails

const styles = StyleSheet.create({
    menuContainer: {
        backgroundColor: 'rgba(237, 175, 168, 0.7)',
        borderRadius: 5,
        marginBottom: 15,
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
        fontFamily: 'MeridiesAntiqua'
    },
    stylerellaLogo: {
        tintColor: COLORS.white,
        marginLeft: 10
    },
    itemFirst: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    itemLast: {
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    itemWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 25,
        backgroundColor: COLORS.white,
        paddingVertical: 15,
        alignItems: 'center'
    },
    itemName: {
        color: COLORS.highlight,
        fontFamily: 'MeridiesAntiqua'
    },
    itemValue: {
        color: COLORS.primary,
        fontFamily: 'MeridiesAntiqua'
    }

})
