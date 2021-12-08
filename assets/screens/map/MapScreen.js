import React, { useState, useRef, useEffect } from 'react'
import {
    StatusBar,
    ImageBackground,
    View,
    ActivityIndicator,
    Animated,
    Pressable,
    TouchableOpacity,
    Alert, BackHandler
} from 'react-native'
import { Text } from 'react-native-paper'
import * as Haptics from 'expo-haptics'

import { styles } from './styles'
import { IMAGES, width, COLORS, FONTS } from '../../contants/contants'
import { t } from '../../locales/index'
import { useNavigation } from '@react-navigation/native'
import { getRandomNumber } from '../../contants/getRandomNumber'
import WaterRipple from '../../componets/WaterRipple'
import FallLeaf from '../../componets/FallLeaf'
import Birds from '../../componets/Birds'
import SnowAnimated from '../../componets/SnowAnimated'
import Rain from '../../componets/Rain'
import Glow from '../../componets/Glow'
import Sun from '../../componets/Sun'
import PopupMenu from '../../componets/PopupMenu'
import FallingSnow from '../../componets/FallingSnow'


const BackgroundAnimated = Animated.createAnimatedComponent(ImageBackground)

const MapScreen = () => {
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
                        opacity: backgroundOpacity
                    }]}
                    resizeMode='stretch'
                    onLoadEnd={onBackgroundEndLoad}
                >
                    {/* Tree */}
                    <TouchableOpacity
                        onPress={onTreePressed}
                        style={styles.treeWrapper}
                        activeOpacity={0.8}
                    >
                        <Animated.Image
                            source={IMAGES.TREE}
                            style={[styles.tree, {
                                opacity: backgroundOpacity,
                                transform: [
                                    {
                                        translateY: treeTranslateY
                                    }
                                ]
                            }]}
                            resizeMode={'stretch'}

                        />
                    </TouchableOpacity>

                    {/* City Girl Bulding */}
                    <TouchableOpacity
                        onPress={onCytiGirlBuildingPressed}
                        style={styles.cityGirlBuildingWrapper}
                        activeOpacity={0.9}
                    >
                        <Animated.Image
                            source={IMAGES.CITY_GIRL}
                            style={[styles.cityGirlBuilding, {
                                transform: [
                                    {
                                        scale: cityGirlBuildingScale
                                    }
                                ]
                            }]}
                            resizeMode='stretch'
                        />
                    </TouchableOpacity>
                    <BackgroundAnimated
                        style={[styles.buttonWrapper, styles.cityGirlButton, {
                            opacity: buttonOpacity,
                            transform: [
                                {
                                    translateY: buttonTranlateY
                                },
                                {
                                    scale: cityGirlButtonScale
                                }
                            ]
                        }]}
                        source={IMAGES.BUTTON}
                        resizeMode={'stretch'}
                    >
                        <Pressable
                            hitSlop={{ top: 20, right: 60, bottom: 20, left: 60 }}
                            onPress={() => {
                                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
                                navigation.navigate('Zone', { headerTitle: t('city_girl') })
                            }}
                        >
                            <Text style={styles.buttonText}>{t('city_girl')}</Text>
                        </Pressable>
                    </BackgroundAnimated>

                    {/* Yoga Living Button */}
                    <TouchableOpacity
                        onPress={onMirrorPressed}
                        style={[styles.mirrorWrapper, {
                            transform: [
                                {
                                    scale: mirrorScale
                                }
                            ]
                        }]}
                        activeOpacity={0.9}
                    >
                        <Animated.Image
                            source={IMAGES.MIRROR}
                            style={[styles.mirror, {
                                opacity: mirrorOpacity
                            }]}
                            resizeMode='stretch'
                        />
                    </TouchableOpacity>
                    <BackgroundAnimated
                        style={[styles.buttonWrapper, styles.yogaLivingButton, {
                            opacity: buttonOpacity,
                            transform: [
                                {
                                    translateY: buttonTranlateY
                                },
                                {
                                    scale: yogaButtonScale
                                }
                            ]
                        }]}
                        source={IMAGES.BUTTON}
                        resizeMode={'stretch'}
                    >
                        <Pressable
                            hitSlop={{ top: 20, right: 60, bottom: 20, left: 60 }}
                            onPress={() => alert("Yoga Living")}
                        >
                            <Text style={styles.buttonText}>{t('yoga_living')}</Text>
                        </Pressable>
                    </BackgroundAnimated>

                    {/* Balloon */}
                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={onBalloonPressed}
                        style={styles.balloonWrapper}
                    >
                        <Animated.Image
                            source={IMAGES.BALLOON}
                            style={[styles.balloon, {
                                opacity: buttonOpacity,
                                transform: [
                                    {
                                        translateY: buttonTranlateY
                                    },
                                    {
                                        scale: balloonScale
                                    }
                                ]
                            }]}
                            resizeMode={'stretch'}
                        />
                    </TouchableOpacity>
                    {/* Picnic Button */}
                    <BackgroundAnimated
                        style={[styles.buttonWrapper, styles.picnicButton, {
                            opacity: buttonOpacity,
                            transform: [
                                {
                                    translateY: buttonTranlateY
                                },
                                {
                                    scale: picnicButtonScale
                                }
                            ]
                        }]}
                        source={IMAGES.BUTTON}
                        resizeMode={'stretch'}
                    >
                        <Pressable
                            hitSlop={{ top: 20, right: 60, bottom: 20, left: 60 }}
                            onPress={() => alert("Picnic")}
                        >
                            <Text style={styles.buttonText}>{t('picnic')}</Text>
                        </Pressable>
                    </BackgroundAnimated>

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
                isLoading && <ActivityIndicator style={styles.indicator} size='large' color={COLORS.primary} />
            }

            {/*  Popup Menu */}
            <PopupMenu
                menuOpacityAnimated={backgroundOpacity}
            />
        </View>
    )
}

export default MapScreen