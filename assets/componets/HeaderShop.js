import React from 'react'
import {
    Image,
    ImageBackground,
    SafeAreaView,
    StyleSheet,
    View,
    StatusBar,
    Platform,
    PixelRatio,
    useWindowDimensions
} from 'react-native'
import { COLORS, FONTS, IMAGES } from '../contants/contants'
import { Title } from 'react-native-paper'

const HeaderShop = (props) => {
    const { width, height } = useWindowDimensions()
    const { title } = props
    return (
        <ImageBackground
            source={IMAGES.LANDING_BACKGROUND}
            style={[styles.headerContainer, {
                width,
                height: height * .12 + StatusBar.currentHeight / 2,
            }]}
        >
            <SafeAreaView>
                <View style={[styles.headerContent, {
                    width
                }]}>
                    <Image
                        source={IMAGES.STYLERELLA2}
                        style={styles.headerLeftIamge}
                    />
                    <Title style={styles.headerText}>{title}</Title>
                </View>
            </SafeAreaView>
        </ImageBackground>
    )
}

export default HeaderShop

const ratio = PixelRatio.get()

let LOGO_SIZE = 40

if ((Platform.OS == 'ios' && ratio < 3) || (Platform.OS == 'android' && ratio < 2.5)) {
    LOGO_SIZE = 35
}

const styles = StyleSheet.create({
    headerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    headerContent: {
        marginTop: Platform.OS == 'android' ? StatusBar.currentHeight : 15,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    headerText: {
        fontFamily: FONTS.MeridiesAntiqua,
        color: COLORS.white,
        textAlign: 'center'
    },
    headerLeftIamge: {
        width: LOGO_SIZE,
        height: LOGO_SIZE,
        left: 20,
        position: 'absolute',
        tintColor: COLORS.white
    }
})
