import { StyleSheet, Platform, PixelRatio, StatusBar } from 'react-native'
import { FONTS, COLORS, setHeight, setWidth } from '../../contants/contants'

const ratio = PixelRatio.get()

let LOGO_SIZE = 35

if ((Platform.OS == 'ios' && ratio < 3) || (Platform.OS == 'android' && ratio < 2.5)) {
    LOGO_SIZE = 30
}

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
        width: '100%',
        height: setHeight(11) + StatusBar.currentHeight / 2,
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
        flexDirection: 'row',
        width: setWidth(100)
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
        width: LOGO_SIZE,
        height: LOGO_SIZE,
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
        alignItems: 'center'
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
        width: setWidth(65),
        height: setWidth(18),
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    registerText: {
        color: COLORS.white,
        fontFamily: FONTS.MeridiesAntiqua,
        marginBottom: setWidth(18) / 5
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