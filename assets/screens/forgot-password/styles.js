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
    headerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: COLORS.primary,
        marginBottom: 20
    },
    headerContent: {
        marginTop: Platform.OS == 'android' ? StatusBar.currentHeight : 15,
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
    body: {
        padding: 20
    },
    forgotButtonWrapper: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    forgotText: {
        color: COLORS.white,
        fontFamily: FONTS.MeridiesAntiqua
    },
})