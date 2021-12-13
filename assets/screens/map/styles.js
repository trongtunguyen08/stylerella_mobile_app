import { StyleSheet } from 'react-native'
import { COLORS } from '../../contants/contants'

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    scrollViewContainer: {
        flex: 1
    },
    indicator: {
        position: 'absolute',
        alignSelf: 'center',
        top: '50%'
    },
    imageBackground: {
        zIndex: 3,
        flex: 1
    },
    treeWrapper: {
        zIndex: 5,
        position: 'absolute'
    },
    balloonWrapper: {
        zIndex: 5,
        position: 'absolute'
    },
    buttonWrapper: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontFamily: 'MeridiesAntiqua',
        color: COLORS.white
    },
    cityGirlButton: {
        position: 'absolute',
        zIndex: 2
    },
    cityGirlBuildingWrapper: {
        position: 'absolute',
        zIndex: 2
    },
    mirrorWrapper: {
        position: 'absolute',
        zIndex: 2
    },
    yogaLivingButton: {
        position: 'absolute',
        zIndex: 2
    },
    picnicButton: {
        position: 'absolute',
        zIndex: 999
    }
})