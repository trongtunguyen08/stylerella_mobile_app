import React, { useEffect } from 'react'
import { StatusBar, StyleSheet, Text, TouchableOpacity, View, BackHandler } from 'react-native'
import LottieView from 'lottie-react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

import { IMAGES, COLORS, FONTS } from '../../contants/contants'
import { ACTION_TYPES } from '../../redux/reducers/actionTypes'

const OrderSuccessScreen = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()

    useEffect(() => {
        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            () => { return true }
        )

        return () => backHandler.remove()
    }, [])

    const onDonePress = () => {
        dispatch({
            type: ACTION_TYPES.DELETE_ITEMS_SELECTED
        })
        navigation.replace('Map')
    }
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle='dark-content' backgroundColor={COLORS.white} />
                <LottieView
                    source={IMAGES.THANK_YOU}
                    autoPlay
                    loop={false}
                    speed={0.6}
                />
                <TouchableOpacity
                    style={styles.doneWrapper}
                    onPress={onDonePress}
                >
                    <Text style={styles.doneText}>DONE</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default OrderSuccessScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    doneWrapper: {
        backgroundColor: COLORS.primary,
        width: '80%',
        paddingVertical: 15,
        borderRadius: 20,
        alignSelf: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 50
    },
    doneText: {
        fontFamily: FONTS.MeridiesAntiqua,
        color: COLORS.white
    }
})
