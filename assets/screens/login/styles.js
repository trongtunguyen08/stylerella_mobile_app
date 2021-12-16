import { StyleSheet } from 'react-native'
import { FONTS, COLORS } from '../../contants/contants'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    content: {
        flex: 1,
        padding: 20
    },
    titleWrapper: {
        alignSelf: 'center',
        marginBottom: 10
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
    rememberContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center'
    },
    rememberMeWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    rememberMeText: {
        fontFamily: FONTS.MeridiesAntiqua,
        color: COLORS.white,
        marginLeft: 5
    },
    forgotText: {
        fontFamily: FONTS.MeridiesAntiqua,
        color: COLORS.white
    },
    footerLoginWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center'
    },
    alreadyHaveAccountText: {
        fontFamily: FONTS.MeridiesAntiqua,
        color: COLORS.white
    },
    loginText: {
        fontFamily: FONTS.MeridiesAntiqua,
        color: COLORS.white,
        marginLeft: 5
    },
    floatingButterfly: {
        position: 'absolute',
        right: 45 / 2,
        bottom: 45,
        zIndex: 999,
        tintColor: COLORS.white
    }
})