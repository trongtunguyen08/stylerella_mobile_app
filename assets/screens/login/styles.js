import { StyleSheet, Platform, StatusBar } from 'react-native'
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
    headerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: COLORS.primary,
        marginBottom: 20
    },
    headerContent: {
        marginTop: Platform.OS == 'android' ? StatusBar.currentHeight / 2 : 15,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    headerText: {
        fontFamily: FONTS.MeridiesAntiqua,
        color: COLORS.white,
        textAlign: 'center',
        textTransform: 'uppercase'
    },
    headerBackIcon: {
        position: 'absolute',
        left: 20,
    },
    headerRightIamge: {
        right: 20,
        position: 'absolute',
        tintColor: COLORS.white
    },
    titleWrapper: {
        alignSelf: 'center',
        marginBottom: 10
    },
    titleText: {
        fontFamily: FONTS.MeridiesAntiqua,
        color: COLORS.primary,
        textAlign: 'center'
    },
    subTitleText: {
        fontFamily: FONTS.MeridiesAntiqua,
        color: COLORS.primary,
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
        color: COLORS.highlight,
        marginLeft: 5
    },
    forgotText: {
        fontFamily: FONTS.MeridiesAntiqua,
        color: COLORS.highlight
    },
    registerButtonWrapper: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    registerText: {
        color: COLORS.white,
        fontFamily: FONTS.MeridiesAntiqua
    },
    footerLoginWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center'
    },
    alreadyHaveAccountText: {
        fontFamily: FONTS.MeridiesAntiqua,
        color: COLORS.gray
    },
    loginText: {
        fontFamily: FONTS.MeridiesAntiqua,
        color: COLORS.highlight,
        marginLeft: 5
    }
})