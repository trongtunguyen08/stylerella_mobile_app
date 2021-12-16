import { StyleSheet, StatusBar, Platform } from 'react-native'
import { FONTS, COLORS } from '../../contants/contants'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%'
    },
    content: {
        flex: 1,
        paddingHorizontal: 20,
    },
    titleWrapper: {
        alignSelf: 'center',
        marginVertical: 10
    },
    titleText: {
        fontFamily: FONTS.MeridiesAntiqua,
        color: COLORS.white,
        textAlign: 'center'
    },
    subTitleText: {
        fontFamily: FONTS.MeridiesAntiqua,
        color: COLORS.white,
        textAlign: 'center'
    },
    floatingButterfly: {
        position: 'absolute',
        bottom: 45,
        right: 45 / 2,
        tintColor: COLORS.white,
        zIndex: 999
    }
})