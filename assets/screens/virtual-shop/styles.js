import { StyleSheet, Platform, PixelRatio, StatusBar } from 'react-native'
import { setHeight, setWidth, FONTS, COLORS } from '../../contants/contants'
import { isIphoneX } from 'react-native-iphone-x-helper'

const ratio = PixelRatio.get()

let LOGO_SIZE = 35

if ((Platform.OS == 'ios' && ratio < 3) || (Platform.OS == 'android' && ratio < 2.5)) {
    LOGO_SIZE = 30
}

export const styles = StyleSheet.create({
    headerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        position: 'absolute',
        zIndex: 2,
        backgroundColor: 'rgba(237, 175, 168, 1)',
        width: '100%'
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
        width: LOGO_SIZE,
        height: LOGO_SIZE,
        right: 20,
        position: 'absolute',
        tintColor: COLORS.white
    },
    container: {
        flex: 1
    },
    itemImage: {
        position: 'absolute',
    },
    popupMenu: {
        position: 'absolute',
        bottom: 0,
        width: '100%'
    },
    filterButtonWrapper: {
        width: setWidth(36),
        backgroundColor: COLORS.primary,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        flexDirection: 'row',
        paddingHorizontal: 5,
        paddingBottom: isIphoneX() ? 20 : 5,
        paddingTop: 5
    },
    filterButtonText: {
        marginRight: 5,
        color: COLORS.white,
        fontFamily: FONTS.MeridiesAntiqua,
    },
    filterContentWrapper: {
        width: '100%',
        maxHeight: setHeight(65),
        backgroundColor: COLORS.white,
        borderRadius: 10,
        padding: 20,
        position: 'absolute',
        bottom: 0,
        zIndex: 1
    },
    filterCloseIcon: {
        alignSelf: 'flex-end'
    },
    filterItemWrapper: {
        paddingVertical: 10,
    },
    filterItemText: {
        color: COLORS.primary,
        fontFamily: FONTS.MeridiesAntiqua,
        textAlign: 'center'
    }
})