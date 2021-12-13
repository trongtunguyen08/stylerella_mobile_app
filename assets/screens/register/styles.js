import { StyleSheet, StatusBar, Platform } from 'react-native'
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
        backgroundColor: COLORS.primary
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
        color: COLORS.primary
    },
    subTitleText: {
        fontFamily: FONTS.MeridiesAntiqua,
        color: COLORS.primary,
        textAlign: 'center'
    },
    registerButtonWrapper: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
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