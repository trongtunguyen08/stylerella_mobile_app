import { StyleSheet, Platform, PixelRatio } from 'react-native'
import { setWidth, width } from '../../contants/contants'

const ratio = PixelRatio.get()

let LOGO_SIZE = setWidth(30)

if (Platform.OS === 'android' && ratio <= 2) {
    LOGO_SIZE = setWidth(20)
}

if (Platform.OS === 'ios' && ratio < 3) {
    LOGO_SIZE = setWidth(20)
}

if (width >= 700) {
    LOGO_SIZE = setWidth(10)
}

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    background: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: LOGO_SIZE,
        height: LOGO_SIZE,
        marginLeft: 20
    }
})