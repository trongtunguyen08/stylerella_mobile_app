import { StyleSheet, PixelRatio, Platform } from 'react-native'
import { COLORS, width, height, FONTS, setWidth, setHeight } from '../../contants/contants'

let BUTTON_WIDTH = setWidth(65)
let BUTTON_HEIGHT = setWidth(18)
let ICON = setWidth(20)
let LOGO_WIDTH = setWidth(82)
let LOGO_HEIGHT = setHeight(47)
let STYLERELLA_WIDTH = setWidth(30)
let BUTTERFLY_ANIMATION_WIDTH = setWidth(12)

const ratio = PixelRatio.get()

if (width >= 700) {
    BUTTON_WIDTH = setWidth(45)
    BUTTON_HEIGHT = setWidth(10)
    ICON = setWidth(12)
    STYLERELLA_WIDTH = setWidth(20)
    FONT_SIZE = 20
    BUTTERFLY_ANIMATION_WIDTH = setWidth(6)
}

if (width >= 1024) {
    BUTTON_WIDTH = setWidth(35)
    BUTTON_HEIGHT = setWidth(6)
    ICON = setWidth(8)
    STYLERELLA_WIDTH = setWidth(10)
    FONT_SIZE = 20
    BUTTERFLY_ANIMATION_WIDTH = setWidth(4)
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: LOGO_WIDTH,
        height: LOGO_HEIGHT,
    },
    logoLandscape: {
        width: LOGO_WIDTH,
        height: LOGO_HEIGHT,
    },
    stylerellaLogo: {
        width: STYLERELLA_WIDTH,
        height: STYLERELLA_WIDTH,
        marginLeft: 20,
        alignSelf: 'center'
    },
    contentWrapper: {
        alignItems: 'center',
        zIndex: -1
    },
    button: {
        width: BUTTON_WIDTH,
        height: BUTTON_HEIGHT,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    buttonText: {
        fontFamily: FONTS.MeridiesAntiqua,
        color: COLORS.white,
        marginBottom: BUTTON_HEIGHT / 5
    },
    socialLoginWrapper: {
        flexDirection: 'row',
        width: BUTTON_WIDTH,
        justifyContent: width >= 700 ? 'space-evenly' : 'space-between',
        alignSelf: 'center'
    },
    socilaIcon: {
        width: ICON,
        height: ICON
    },
    butterflyAnimatedRegisterWrapper: {
        position: 'absolute',
        left: '50%',
        top: '2%',
        zIndex: 1
    },
    butterflyAnimatedLoginWrapper: {
        bottom: '45%',
        left: width >= 700 ? '12%' : '1%',
        position: 'absolute',
        zIndex: 1
    },
    butterflyAnimatedGuestWrapper: {
        position: 'absolute',
        right: width >= 700 ? '10%' : '2%',
        top: '40%',
        zIndex: 1
    },
    butterfly_animation: {
        width: BUTTERFLY_ANIMATION_WIDTH,
        transform: [
            {
                rotate: '120deg'
            }
        ],

    },
    butterflyAnimationWrapper: {
        position: 'absolute'
    },
    butterflyAnimation: {
        width,
        height
    }
})