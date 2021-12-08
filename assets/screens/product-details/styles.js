import { StyleSheet, Platform, StatusBar, PixelRatio } from 'react-native'
import { FONTS, COLORS, setHeight, setWidth } from '../../contants/contants'

const ratio = PixelRatio.get()

let LOGO_SIZE = 35

if ((Platform.OS == 'ios' && ratio < 3) || (Platform.OS == 'android' && ratio < 2.5)) {
    LOGO_SIZE = 30
}

export const styles = StyleSheet.create({
    container: {
        flex: 1
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
    headerText: {
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
        flex: 1,
        height: '100%',
        backgroundColor: COLORS.white,
        paddingHorizontal: 20,
        paddingTop: 10
    },
    imageFrame: {
        width: setWidth(60),
        height: setWidth(60),
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    productImage: {
        height: setWidth(35),
        maxWidth: setWidth(50),
        maxHeight: setWidth(50),
    },
    icon: {
        width: setWidth(11),
        height: setWidth(11)
    },
    shareButton: {
        marginLeft: setWidth(11),
        marginTop: -setWidth(11) / 1.5
    },
    bookmarkButton: {
        marginRight: setWidth(11),
        marginTop: -setWidth(11) / 1.5
    },
    productName: {
        alignSelf: 'center',
        fontFamily: FONTS.MeridiesAntiqua,
        color: COLORS.highlight
    },
    priceWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5
    },
    originalPriceText: {
        fontFamily: FONTS.PingFangTC,
        textDecorationLine: 'line-through'
    },
    originalPrice: {
        fontFamily: FONTS.PingFangTC,
        marginLeft: 5,
        marginRight: 15
    },
    salePrice: {
        fontFamily: FONTS.PingFangTC,
        color: COLORS.primary
    },
    rating: {
        alignSelf: 'flex-start'
    },
    quantityWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 5
    },
    quantityButtonWrapper: {
        width: 30,
        height: 30,
        borderRadius: 5,
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center'
    },
    quantityButtonText: {
        color: COLORS.white,
        fontFamily: FONTS.MeridiesAntiqua
    },
    totalQuantity: {
        fontFamily: FONTS.MeridiesAntiqua,
        paddingHorizontal: 20,
        color: COLORS.highlight
    },
    addToBagWrapper: {
        paddingVertical: 10,
        paddingHorizontal: 25,
        backgroundColor: COLORS.primary,
        borderRadius: 20
    },
    addToBagText: {
        color: COLORS.white,
        fontFamily: FONTS.MeridiesAntiqua
    },
    itemStatusText: {
        marginVertical: 10,
        fontFamily: FONTS.PingFangTC,
        color: COLORS.highlight
    },
    tabContainer: {
        flexDirection: 'row',
        width: '100%'
    },
    tabButtonWrapper: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        paddingVertical: 10
    },
    tabTitleText: {
        fontFamily: FONTS.MeridiesAntiqua,
        marginLeft: 5
    },
    tabContentWrapper: {
        backgroundColor: '#FFF',
        flex: 1,
        paddingBottom: 50
    },
    productDes: {
        fontFamily: FONTS.MeridiesAntiqua,
        color: COLORS.gray,
        marginVertical: 10
    },
    desText: {
        fontFamily: FONTS.PingFangTC,
        color: COLORS.black,
    },
    readMoreButtonText: {
        fontFamily: FONTS.MeridiesAntiqua,
        marginTop: 10,
        color: COLORS.gray,
    },
    footerButtonWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10
    },
    footerText: {
        fontFamily: FONTS.MeridiesAntiqua
    },
    sendReviewButtonWrapper: {
        backgroundColor: COLORS.primary,
        width: '50%',
        alignSelf: 'center',
        marginTop: 20,
        alignItems: 'center',
        paddingVertical: 10,
        borderRadius: 15
    },
    sendText: {
        fontFamily: FONTS.MeridiesAntiqua,
        color: COLORS.white
    }
})