import React, { useEffect } from 'react'
import { StatusBar, StyleSheet, Text, TouchableOpacity, View, BackHandler } from 'react-native'
import LottieView from 'lottie-react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

import { IMAGES, COLORS, FONTS } from '../../contants/contants'
import { ACTION_TYPES } from '../../redux/reducers/actionTypes'
import ButtonText from '../../componets/ButtonText'

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
                <View
                    style={{
                        width: '100%',
                        height: '80%'
                    }}
                >
                    <LottieView
                        source={IMAGES.THANK_YOU}
                        autoPlay
                        loop={false}
                        speed={0.6}
                    />
                </View>
                <ButtonText
                    text='DONE'
                    onPress={onDonePress}
                />
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default OrderSuccessScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
})
