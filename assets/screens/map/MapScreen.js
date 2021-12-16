import React, { useState, useRef, useEffect } from 'react'
import {
    StatusBar,
    ImageBackground,
    View,
    Animated,
    TouchableOpacity,
    Alert,
    BackHandler,
    useWindowDimensions,
    Platform,
    PixelRatio
} from 'react-native'
import * as Haptics from 'expo-haptics'
import { useNavigation } from '@react-navigation/native'

import { styles } from './styles'
import { IMAGES } from '../../contants/contants'
import { t } from '../../locales/index'
import { getRandomNumber } from '../../contants/getRandomNumber'
import {
    ButtonText,
    WaterRipple,
    FallLeaf,
    Birds,
    SnowAnimated,
    Rain,
    Glow,
    Sun,
    PopupMenu,
    FallingSnow,
    FloatingMenu,
    LoadingModal
} from '../../components'



const BackgroundAnimated = Animated.createAnimatedComponent(ImageBackground)

const MapScreen = () => {
    const { width, height } = useWindowDimensions()
    const setHeight = (value) => {
        return ((height + StatusBar.currentHeight) * value) / 100
    }
    let IMAGE_WIDTH = width * 3
    let IMAGE_HEIGHT = setHeight(100)

    let CITY_GIRL_BUILDING_WIDTH = width * .6
    let CITY_GIRL_BUILDING_HEIGHT = setHeight(45)
    let CITY_GIRL_BUILDING_TOP = setHeight(28)
    let CITY_GIRL_BUILDING_LEFT = width * .1
    let CITY_GIRL_BUTTON_BOTTOM = setHeight(25)
    let CITY_GIRL_BUTTON_LEFT = width * .27

    let MIRROR_WIDTH = width * .25
    let MIRROR_HEIGHT = setHeight(33)
    let MIRROR_RIGHT = width * .75
    let MIRROR_TOP = setHeight(37)
    let YOGA_LIVING_BUTTON_RIGHT = width * .35
    let YOGA_LIVING_BUTTON_TOP = setHeight(32)

    let PICNIC_BUTTON_TOP = setHeight(24)
    let PICNIC_BUTTON_LEFT = width * .65

    let TREE_WIDTH = width * .61
    let TREE_HEIGHT = setHeight(44)
    let TREE_TOP = setHeight(27.5)
    let TREE_LEFT = width + width * .2

    let BALLOON_WIDTH = width * .32
    let BALLOON_HEIGHT = setHeight(20)
    let BALLOON_TOP = setHeight(4)
    let BALLON_LEFT = width * .65

    const ratio = PixelRatio.get()

    // iOS
    if (Platform.OS === 'ios' && ratio < 3) {
        TREE_WIDTH = width * .6
        TREE_HEIGHT = setHeight(46)
        TREE_TOP = setHeight(26)
    }

    // Android
    if (Platform.OS === 'android' && ratio <= 2) {
        TREE_WIDTH = width * .6
        TREE_HEIGHT = height * .46
        TREE_TOP = setHeight(26)
        CITY_GIRL_BUILDING_TOP = setHeight(28)
        BALLOON_TOP = setHeight(5)
        MIRROR_TOP = setHeight(37)
    }

    if (Platform.OS === 'android' && ratio <= 1.69) {
        TREE_TOP = setHeight(26)
        CITY_GIRL_BUILDING_TOP = setHeight(27)
        MIRROR_TOP = setHeight(37)
    }

    if (width >= 700) {
        IMAGE_WIDTH = width * 2
        CITY_GIRL_BUTTON_BOTTOM = setHeight(26)
        CITY_GIRL_BUTTON_LEFT = width * .21
        YOGA_LIVING_BUTTON_RIGHT = width * .21
        YOGA_LIVING_BUTTON_TOP = setHeight(35)
        TREE_WIDTH = width * .42
        TREE_TOP = setHeight(26)
        TREE_LEFT = width * .78
        BALLOON_WIDTH = width * .27
        BALLOON_HEIGHT = setHeight(23)
        BALLOON_TOP = setHeight(4)
        BALLON_LEFT = width * .38
        PICNIC_BUTTON_TOP = setHeight(26)
        PICNIC_BUTTON_LEFT = width * .41
        CITY_GIRL_BUILDING_WIDTH = width * .4
        CITY_GIRL_BUILDING_HEIGHT = setHeight(40)
        CITY_GIRL_BUILDING_TOP = setHeight(33)
        CITY_GIRL_BUILDING_LEFT = width * .06
        CITY_GIRL_BUTTON_LEFT = width * .16
        MIRROR_WIDTH = width * .16
        MIRROR_RIGHT = width * .51
    }

    if (width >= 1024) {
        IMAGE_WIDTH = width
        CITY_GIRL_BUTTON_BOTTOM = setHeight(26)
        CITY_GIRL_BUTTON_LEFT = width * .21
        YOGA_LIVING_BUTTON_RIGHT = width * .1
        YOGA_LIVING_BUTTON_TOP = setHeight(35)
        TREE_WIDTH = width * .24
        TREE_TOP = setHeight(26)
        TREE_LEFT = width * .37
        BALLOON_WIDTH = width * .17
        BALLOON_HEIGHT = setHeight(23)
        BALLOON_TOP = setHeight(5)
        BALLON_LEFT = width * .17
        PICNIC_BUTTON_TOP = setHeight(27)
        PICNIC_BUTTON_LEFT = width * .19
        CITY_GIRL_BUILDING_WIDTH = width * .2
        CITY_GIRL_BUILDING_HEIGHT = setHeight(37)
        CITY_GIRL_BUILDING_TOP = setHeight(35)
        CITY_GIRL_BUILDING_LEFT = width * .035
        CITY_GIRL_BUTTON_LEFT = width * .07
        MIRROR_WIDTH = width * .08
        MIRROR_RIGHT = width * .255
    }
    //
    const navigation = useNavigation()
    const [isLoading, setIsLoading] = useState(true)
    let ref = useRef()
    const randomBumber = getRandomNumber()

    let backgroundOpacity = useRef(new Animated.Value(0)).current
    let buttonOpacity = useRef(new Animated.Value(0)).current
    let cityGirlBuildingScale = useRef(new Animated.Value(1)).current
    let cityGirlButtonScale = useRef(new Animated.Value(0)).current
    let balloonScale = useRef(new Animated.Value(1)).current
    let picnicButtonScale = useRef(new Animated.Value(0)).current
    let mirrorOpacity = useRef(new Animated.Value(0)).current
    let mirrorScale = useRef(new Animated.Value(1)).current
    let yogaButtonScale = useRef(new Animated.Value(0)).current

    let treeTranslateY = backgroundOpacity.interpolate({
        inputRange: [0, 1],
        outputRange: [-10, 0]
    })

    let buttonTranlateY = buttonOpacity.interpolate({
        inputRange: [0, 1],
        outputRange: [-30, 0]
    })

    useEffect(() => {
        if (width >= 700) {
            ref.current.scrollTo({ x: width / 2, y: 0 })
        } else {
            ref.current.scrollTo({ x: width, y: 0 })
        }
    }, [])

    useEffect(() => {
        const backAction = () => {
            Alert.alert("Hold on!", "Are you sure you want to go exit app?", [
                {
                    text: "Cancel",
                    onPress: () => null,
                    style: "cancel"
                },
                { text: "YES", onPress: () => BackHandler.exitApp() }
            ]);
            return true
        };

        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        )

        return () => backHandler.remove()
    }, [])

    // When the image background end load
    const onBackgroundEndLoad = () => {
        setIsLoading(false)
        Animated.timing(
            backgroundOpacity,
            {
                toValue: 1,
                duration: 1500,
                useNativeDriver: true
            }
        ).start()

        Animated.loop(
            Animated.sequence([
                Animated.timing(
                    buttonOpacity,
                    {
                        toValue: 1,
                        duration: 1500,
                        useNativeDriver: true
                    }
                ),
                Animated.timing(
                    buttonOpacity,
                    {
                        toValue: 0.8,
                        duration: 1500,
                        useNativeDriver: true
                    }
                )
            ]),
        ).start()

        Animated.loop(
            Animated.sequence([
                Animated.timing(
                    mirrorOpacity,
                    {
                        toValue: 1,
                        duration: 1000,
                        useNativeDriver: true
                    }
                ),
                Animated.timing(
                    mirrorOpacity,
                    {
                        toValue: 0.5,
                        duration: 1000,
                        useNativeDriver: true
                    }
                )
            ]),
        ).start()
    }

    // When press city girl building
    const onCytiGirlBuildingPressed = () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
        Animated.sequence([
            Animated.timing(
                cityGirlBuildingScale,
                {
                    toValue: 1.03,
                    duration: 50,
                    useNativeDriver: true
                }
            ),
            Animated.timing(
                cityGirlBuildingScale,
                {
                    toValue: 1,
                    duration: 50,
                    useNativeDriver: true
                }
            ),
            Animated.timing(
                cityGirlButtonScale,
                {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: true
                }
            )
        ]).start()
    }

    //When press balloon
    const onBalloonPressed = () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
        Animated.sequence([
            Animated.timing(
                balloonScale,
                {
                    toValue: 1.1,
                    duration: 100,
                    useNativeDriver: true

                }
            ),
            Animated.timing(
                balloonScale,
                {
                    toValue: 1,
                    duration: 100,
                    useNativeDriver: true

                }
            ),
            Animated.timing(
                picnicButtonScale,
                {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: true

                }
            ),
        ]).start()
    }

    // When press mirror
    const onMirrorPressed = () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
        Animated.sequence([
            Animated.timing(
                mirrorScale,
                {
                    toValue: 1.05,
                    duration: 50,
                    useNativeDriver: true
                }
            ),
            Animated.timing(
                mirrorScale,
                {
                    toValue: 1,
                    duration: 50,
                    useNativeDriver: true
                }
            ),
            Animated.timing(
                yogaButtonScale,
                {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: true
                }
            )
        ]).start()
    }

    // when press tree
    const onTreePressed = () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
        Animated.sequence([
            Animated.timing(
                cityGirlButtonScale,
                {
                    toValue: 1,
                    useNativeDriver: true
                }
            ),
            Animated.timing(
                picnicButtonScale,
                {
                    toValue: 1,
                    useNativeDriver: true
                }
            ),
            Animated.timing(
                yogaButtonScale,
                {
                    toValue: 1,
                    useNativeDriver: true
                }
            ),
        ]).start()
    }

    return (
        <View style={styles.container}>
            <StatusBar barStyle='light-content' translucent backgroundColor='transparent' />
            <FloatingMenu />
            <Animated.ScrollView
                ref={ref}
                horizontal
                style={styles.scrollViewContainer}
                showsHorizontalScrollIndicator={false}
                bounces={false}
            >
                <BackgroundAnimated
                    source={IMAGES.MAP}
                    style={[styles.imageBackground, {
                        opacity: backgroundOpacity,
                        width: IMAGE_WIDTH,
                        height: IMAGE_HEIGHT
                    }]}
                    resizeMode='stretch'
                    onLoadEnd={onBackgroundEndLoad}
                >
                    {/* Tree */}
                    <TouchableOpacity
                        onPress={onTreePressed}
                        style={[styles.treeWrapper, {
                            top: TREE_TOP,
                            left: TREE_LEFT
                        }]}
                        activeOpacity={0.8}
                    >
                        <Animated.Image
                            source={IMAGES.TREE}
                            style={{
                                opacity: backgroundOpacity,
                                transform: [
                                    {
                                        translateY: treeTranslateY
                                    }
                                ],
                                width: TREE_WIDTH,
                                height: TREE_HEIGHT
                            }}
                            resizeMode={'stretch'}

                        />
                    </TouchableOpacity>

                    {/* City Girl Bulding */}
                    <TouchableOpacity
                        onPress={onCytiGirlBuildingPressed}
                        style={[styles.cityGirlBuildingWrapper, {
                            top: CITY_GIRL_BUILDING_TOP,
                            left: CITY_GIRL_BUILDING_LEFT
                        }]}
                        activeOpacity={0.9}
                    >
                        <Animated.Image
                            source={IMAGES.CITY_GIRL}
                            style={{
                                transform: [
                                    {
                                        scale: cityGirlBuildingScale
                                    }
                                ],
                                width: CITY_GIRL_BUILDING_WIDTH,
                                height: CITY_GIRL_BUILDING_HEIGHT
                            }}
                            resizeMode='stretch'
                        />
                    </TouchableOpacity>
                    <Animated.View
                        style={{
                            position: 'absolute',
                            opacity: buttonOpacity,
                            transform: [
                                {
                                    translateY: buttonTranlateY
                                },
                                {
                                    scale: cityGirlButtonScale
                                }
                            ],
                            bottom: CITY_GIRL_BUTTON_BOTTOM,
                            left: CITY_GIRL_BUTTON_LEFT,
                            zIndex: 999
                        }}
                    >
                        <ButtonText
                            text={t('city_girl')}
                            noBorder
                            containerStyle={{
                                width: 150,
                                borderRadius: 10
                            }}
                            onPress={() => {
                                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
                                navigation.navigate('Zone', { headerTitle: t('city_girl') })
                            }}
                        />
                    </Animated.View>

                    {/* Yoga Living Button */}
                    <TouchableOpacity
                        onPress={onMirrorPressed}
                        style={[styles.mirrorWrapper, {
                            transform: [
                                {
                                    scale: mirrorScale
                                }
                            ],
                            right: MIRROR_RIGHT,
                            top: MIRROR_TOP
                        }]}
                        activeOpacity={0.9}
                    >
                        <Animated.Image
                            source={IMAGES.MIRROR}
                            style={{
                                opacity: mirrorOpacity,
                                width: MIRROR_WIDTH,
                                height: MIRROR_HEIGHT
                            }}
                            resizeMode='stretch'
                        />
                    </TouchableOpacity>
                    <Animated.View
                        style={{
                            position: 'absolute',
                            opacity: buttonOpacity,
                            transform: [
                                {
                                    translateY: buttonTranlateY
                                },
                                {
                                    scale: yogaButtonScale
                                }
                            ],
                            right: YOGA_LIVING_BUTTON_RIGHT,
                            top: YOGA_LIVING_BUTTON_TOP,
                            zIndex: 999
                        }}
                    >
                        <ButtonText
                            text={t('yoga_living')}
                            noBorder
                            containerStyle={{
                                width: 150,
                                borderRadius: 10
                            }}
                            onPress={() => alert("Yoga Living")}
                        />
                    </Animated.View>

                    {/* Balloon */}
                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={onBalloonPressed}
                        style={[styles.balloonWrapper, {
                            top: BALLOON_TOP,
                            left: BALLON_LEFT
                        }]}
                    >
                        <Animated.Image
                            source={IMAGES.BALLOON}
                            style={{
                                opacity: buttonOpacity,
                                transform: [
                                    {
                                        translateY: buttonTranlateY
                                    },
                                    {
                                        scale: balloonScale
                                    }
                                ],
                                width: BALLOON_WIDTH,
                                height: BALLOON_HEIGHT
                            }}
                            resizeMode={'stretch'}
                        />
                    </TouchableOpacity>
                    {/* Picnic Button */}
                    <Animated.View
                        style={{
                            position: 'absolute',
                            top: PICNIC_BUTTON_TOP,
                            left: PICNIC_BUTTON_LEFT,
                            opacity: buttonOpacity,
                            transform: [
                                {
                                    translateY: buttonTranlateY
                                },
                                {
                                    scale: picnicButtonScale
                                }
                            ],
                            zIndex: 999
                        }}
                    >
                        <ButtonText
                            text={t('picnic')}
                            noBorder
                            containerStyle={{
                                width: 150,
                                borderRadius: 10
                            }}
                            onPress={() => alert("Picnic")}
                        />
                    </Animated.View>

                    {/* Animation */}
                    {
                        randomBumber == 0 &&
                        <>
                            <Birds />
                            <FallLeaf
                                backgroundOpacity={backgroundOpacity}
                                treeTranslateY={treeTranslateY}
                            />
                            <Sun />
                            <WaterRipple />
                        </>
                    }
                    {
                        randomBumber == 1 &&
                        <>
                            <SnowAnimated />
                            <FallingSnow />
                        </>
                    }
                    {
                        randomBumber == 2 &&
                        <>
                            <WaterRipple />
                            <Rain />
                            <Sun />
                        </>
                    }
                    <Glow
                        treeTranslateY={treeTranslateY}
                    />
                </BackgroundAnimated>
            </Animated.ScrollView>
            {
                isLoading && <LoadingModal />
            }

            {/*  Popup Menu */}
            <PopupMenu
                menuOpacityAnimated={backgroundOpacity}
            />
        </View>
    )
}

export default MapScreen