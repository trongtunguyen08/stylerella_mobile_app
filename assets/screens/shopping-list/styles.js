import { StyleSheet, StatusBar, Platform, PixelRatio } from 'react-native'
import { COLORS, setHeight, setWidth, FONTS } from '../../contants/contants'

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
        zIndex: 2,
        backgroundColor: 'rgba(237, 175, 168, 1)'
    },
    headerContent: {
        marginTop: Platform.OS == 'android' ? StatusBar.currentHeight / 2 : 15,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        width: setWidth(100)
    },
    headerTitleText: {
        color: COLORS.white,
        fontFamily: FONTS.MeridiesAntiqua
    },
    headerBackIcon: {
        marginRight: 20
    },
    headerLeftIamge: {
        width: LOGO_SIZE,
        height: LOGO_SIZE,
        tintColor: COLORS.white,
        marginLeft: 20
    },
    navBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10
    },
    backIconWrapper: {
        paddingHorizontal: 15
    },
    buttonWrapper: {
        padding: setWidth(3),
        backgroundColor: 'rgba(237, 175, 168, 0.15)',
        borderRadius: 20,
        marginHorizontal: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    buttonText: {
        color: COLORS.highlight,
        fontFamily: FONTS.PingFangTC
    },
    itemContainer: {
        flexDirection: 'row',
        padding: 5
    },
    itemImage: {
        width: setWidth(40),
        height: setWidth(40),
        marginHorizontal: 10
    },
    itemDetailsWrapper: {
        flex: 1
    },
    productName: {
        fontFamily: FONTS.MeridiesAntiqua,
        color: COLORS.highlight
    },
    rating: {
        alignSelf: 'flex-start',
        marginVertical: 5
    },
    originalPriceText: {
        textDecorationLine: 'line-through',
        fontFamily: FONTS.MeridiesAntiqua,
    },
    salePrice: {
        fontFamily: FONTS.MeridiesAntiqua,
        color: COLORS.primary
    },
    amountWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    buttonAmountWrapper: {
        backgroundColor: COLORS.primary,
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    amountText: {
        color: COLORS.white,
        fontFamily: FONTS.MeridiesAntiqua
    },
    quantity: {
        color: COLORS.highlight,
        marginHorizontal: 10
    },
    divider: {
        width: '90%',
        height: 0.5,
        backgroundColor: COLORS.highlight,
        alignSelf: 'center',
        marginVertical: 10
    },
    receiptWrapper: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingRight: 20
    },
    receiptItemWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    receiptItemTitle: {
        fontFamily: FONTS.MeridiesAntiqua,
        color: COLORS.primary,
        marginRight: 40
    },
    receiptItemValue: {
        color: COLORS.highlight
    },
    checkoutWrapper: {
        width: '85%',
        paddingVertical: 15,
        backgroundColor: COLORS.primary,
        borderRadius: 20,
        alignSelf: 'center',
        alignItems: 'center',
        marginBottom: 30,
        marginTop: 20
    },
    promoInput: {
        padding: 5,
        borderRadius: 5,
        borderWidth: 0.5,
        width: setWidth(30),
        borderColor: COLORS.primary,
        fontFamily: FONTS.MeridiesAntiqua,
        color: COLORS.highlight,
        textTransform: 'uppercase'
    },
    checkoutText: {
        fontFamily: FONTS.MeridiesAntiqua,
        color: COLORS.white
    },
    removeProductWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },
    emptyViewWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    emptyText: {
        fontFamily: FONTS.MeridiesAntiqua,
        color: COLORS.highlight
    }
})