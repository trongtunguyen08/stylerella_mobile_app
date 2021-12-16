import React, { useEffect } from 'react'
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    StatusBar,
    Image,
    TouchableOpacity,
    BackHandler,
    useWindowDimensions
} from 'react-native'
import { Title, Headline } from 'react-native-paper'
import LottieView from 'lottie-react-native'

import { COLORS, IMAGES, FONTS } from '../../contants/contants'
import { ButtonText } from '../../components'

const SuccessScreen = ({ navigation }) => {
    const { width, height } = useWindowDimensions()
    let LOGO_SIZE = width * .4
    if (width >= 700) {
        LOGO_SIZE = width * .25
    }
    if (width >= 1024) {
        LOGO_SIZE = width * .15
    }

    useEffect(() => {
        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            () => { return true }
        )

        return () => backHandler.remove()
    }, [])

    return (
        <View style={styles.container}>
            <StatusBar barStyle='dark-content' backgroundColor={COLORS.white} />
            <LottieView
                source={IMAGES.CONGRATS}
                style={{
                    position: 'absolute',
                    zIndex: -1
                }}
                autoPlay
                loop={false}
            />
            <View style={[styles.contentView, {
                height: height * .6,
            }]}>
                <Image
                    source={IMAGES.LOGO_BOLD}
                    style={{
                        width: LOGO_SIZE,
                        height: LOGO_SIZE,
                        alignSelf: 'center'
                    }}
                    resizeMode='stretch'
                />
                <View style={styles.bodyWrapper}>
                    <Headline style={styles.text}>Successfully Verified</Headline>
                    <Text style={styles.text}>Please enjoy your shop</Text>
                </View>

                <ButtonText
                    text='Done'
                    onPress={() => navigation.replace('Map')}
                />
            </View>
        </View>
    )
}

export default SuccessScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentView: {
        width: '100%',
        justifyContent: 'space-between',
        zIndex: 999
    },
    bodyWrapper: {
        alignItems: 'center'
    },
    text: {
        color: COLORS.primary,
        fontFamily: FONTS.MeridiesAntiqua
    },
    buttonWrapper: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: COLORS.white,
        fontFamily: FONTS.MeridiesAntiqua
    }
})
