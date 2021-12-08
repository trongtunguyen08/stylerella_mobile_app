import React from 'react'
import { StyleSheet, View, Image, Animated } from 'react-native'
import { Text, Title } from 'react-native-paper'

import { t } from '../locales/index'
import { FONTS, COLORS } from '../contants/contants'
import { TouchableOpacity } from 'react-native'

const MembershipBonus = (props) => {
    const { goBack } = props
    return (
        <Animated.View style={styles.container}>
            <Title style={[styles.text, styles.headerText]}>{t('membership_bonus')}</Title>
            <View style={styles.divider} />
            <View style={styles.itemWrapper}>
                <Text style={[styles.text]}>Current Bonus Balance</Text>
                <Title style={[styles.text, styles.itemValueText]}>0000</Title>
            </View>
            <View style={styles.divider} />
            <View style={styles.itemWrapper}>
                <Text style={[styles.text]}>Regerral Friend Code</Text>
                <Title style={[styles.text, styles.itemValueText]}>0000</Title>
            </View>
            <TouchableOpacity
                onPress={goBack}
                style={styles.goBackWrapper}
            >
                <Text style={styles.text}>{t('go_back')}</Text>
            </TouchableOpacity>
        </Animated.View>
    )
}

export default MembershipBonus

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        right: 0,
        top: -50,
        backgroundColor: 'rgba(237, 175, 168, 0.7)',
        padding: 25,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    divider: {
        height: 0.5,
        backgroundColor: COLORS.white,
        width: '100%'
    },
    text: {
        color: COLORS.white,
        fontFamily: FONTS.MeridiesAntiqua
    },
    itemWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 15
    },
    headerText: {
        marginBottom: 15
    },
    itemValueText: {
        marginTop: 5
    },
    goBackWrapper: {
        backgroundColor: COLORS.primary,
        paddingVertical: 10,
        width: '90%',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
