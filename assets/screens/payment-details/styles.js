import { StyleSheet, Platform, PixelRatio, StatusBar } from 'react-native'
import { COLORS, IMAGES, setWidth, setHeight, FONTS } from '../../contants/contants'

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
        width: '100%',
        height: setHeight(11) + StatusBar.currentHeight / 2,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: 'rgba(237, 175, 168, 1)'
    },
    headerContent: {
        marginTop: Platform.OS == 'android' ? StatusBar.currentHeight / 2 : 15,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: setWidth(100)
    },
    headerTitleText: {
        fontFamily: FONTS.MeridiesAntiqua,
        color: COLORS.white,
        textAlign: 'center'
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
    bodyContainer: {
        flex: 1
    },
    titleText: {
        color: COLORS.gray,
        fontFamily: FONTS.PingFangTC
    },
    productItemWrapper: {
        flexDirection: 'row',
        marginVertical: 5
    },
    productItemImage: {
        width: setWidth(30),
        height: setWidth(30),
        borderRadius: 5
    },
    productItemDetailsWrapper: {
        margin: 10,
        justifyContent: 'space-between',
        width: setWidth(70) - 60
    },
    productName: {
        fontFamily: FONTS.PingFangTC,
        color: COLORS.gray
    },
    quantityWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    quantityText: {
        fontFamily: FONTS.PingFangTC,
        color: COLORS.black
    },
    menuWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 5
    },
    menuTitleText: {
        fontFamily: FONTS.PingFangTC,
        color: COLORS.gray
    },
    codeInput: {
        padding: 10,
        borderRadius: 5,
        borderWidth: 0.5,
        width: '50%',
        borderColor: COLORS.gray
    },
    pickerTitleWrapper: {
        backgroundColor: '#EEE',
        paddingVertical: 15,
        paddingLeft: 20
    },
    checkbox: {
        marginRight: 5
    },
    pickerMenuWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 5,
        marginHorizontal: 20
    },
    pickerTitleText: {
        fontFamily: FONTS.PingFangTC,
        color: COLORS.black
    },
    pickerItemText: {
        fontFamily: FONTS.PingFangTC,
        color: COLORS.gray
    },
    confirmWrapper: {
        backgroundColor: COLORS.primary,
        width: '80%',
        paddingVertical: 15,
        borderRadius: 20,
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 20,
        marginBottom: 40
    },
    confirmText: {
        color: COLORS.white,
        fontFamily: FONTS.MeridiesAntiqua
    }
})