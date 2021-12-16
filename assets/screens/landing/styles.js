import { StyleSheet } from 'react-native'
import { COLORS, FONTS } from '../../contants/contants'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    stylerellaLogo: {
        marginLeft: 20,
        alignSelf: 'center'
    },
    contentWrapper: {
        alignItems: 'center',
        zIndex: -1
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    buttonText: {
        fontFamily: FONTS.MeridiesAntiqua,
        color: COLORS.white
    },
    socialLoginWrapper: {
        flexDirection: 'row',
        alignSelf: 'center',
    },
    butterflyAnimatedRegisterWrapper: {
        position: 'absolute',
        left: '50%',
        top: '2%',
        zIndex: 1
    },
    butterflyAnimatedLoginWrapper: {
        bottom: '45%',
        position: 'absolute',
        zIndex: 1
    },
    butterflyAnimatedGuestWrapper: {
        position: 'absolute',
        top: '40%',
        zIndex: 1
    },
    butterfly_animation: {
        transform: [
            {
                rotate: '120deg'
            }
        ],

    },
    butterflyAnimationWrapper: {
        position: 'absolute'
    }
})