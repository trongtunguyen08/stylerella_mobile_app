import { Ionicons } from '@expo/vector-icons'
import React, { useState, useEffect, useRef } from 'react'
import {
    FlatList,
    Image,
    ImageBackground,
    Pressable,
    ActivityIndicator,
    View,
    TouchableOpacity,
    Animated,
    BackHandler,
    useWindowDimensions,
    StatusBar
} from 'react-native'
import { Title, Text } from 'react-native-paper'
import * as Haptics from 'expo-haptics'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

import { COLORS, IMAGES, setHeight } from '../../contants/contants'
import { styles } from './styles'
import { t } from '../../locales/index'
import { Header, FloatingMenu, LoadingModal } from '../../components'

const AnimatedIcons = Animated.createAnimatedComponent(Ionicons)


const DATA = [
    {
        id: 1,
        image: IMAGES.VIRTUAL_BAG
    },
    {
        id: 2,
        image: IMAGES.VIRTUAL_BAG
    },
    {
        id: 3,
        image: IMAGES.VIRTUAL_BAG
    }
]

const FILTER_DATA = [
    {
        id: 1,
        name: 'Handbags'
    },
    {
        id: 2,
        name: `Wallets & Small Leather Goods`
    },
    {
        id: 3,
        name: 'Accesseries'
    },
    {
        id: 4,
        name: 'Shoes'
    },
    {
        id: 5,
        name: 'Watches'
    },
    {
        id: 6,
        name: 'Jewellery'
    },
    {
        id: 7,
        name: 'Make Up'
    },
    {
        id: 7,
        name: 'Fragrances'
    }
]

let BACK_ICON_SIZE = 30

const VirtualShopScreen = (props) => {
    const { width, height } = useWindowDimensions()
    let IMAGE_WIDTH = width * .6
    let IMAGE_HEIGHT = height * .25
    let IMAGE_TOP = height * .35
    let IMAGE_LEFT = width * .52 - (IMAGE_WIDTH / 2)
    if (width >= 700) {
        IMAGE_WIDTH = width * .5
        IMAGE_HEIGHT = height * .3
        IMAGE_TOP = height * .46
        IMAGE_LEFT = width * .5 - (IMAGE_WIDTH / 2)
    }
    if (width >= 1024) {
        IMAGE_WIDTH = width * .5
        IMAGE_HEIGHT = height * .5
        IMAGE_TOP = height * .45
        IMAGE_LEFT = width * .5 - (IMAGE_WIDTH / 2)
    }

    const { headerTitle } = props.route.params
    const navigation = useNavigation()
    const [loading, setLoading] = useState(true)

    const [openMenu, setOpenMenu] = useState(false)

    const onFilterPressed = async () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
        await setOpenMenu(openMenu => !openMenu)
    }

    const itemOpacity = useRef(new Animated.Value(0)).current
    const itemTranslateY = itemOpacity.interpolate({
        inputRange: [0, 1],
        outputRange: [-20, 0]
    })
    const onImageItemEndLoad = () => {
        setTimeout(() => {
            setLoading(false)
            Animated.timing(
                itemOpacity,
                {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: true
                }
            ).start()
        }, 1000)
    }
    const onLoadEnd = () => {
        onImageItemEndLoad()
    }

    const scrollX = useRef(new Animated.Value(0)).current

    const onBackPress = () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
        navigation.goBack()
    }

    const FilterItem = () => {
        const animatedValue = useRef(new Animated.Value(0)).current
        const filterTranslateY = animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [setHeight(100), 0]
        })

        useEffect(() => {
            Animated.spring(
                animatedValue,
                {
                    toValue: 1,
                    useNativeDriver: true
                }
            ).start()
        }, [])

        const onClosePress = () => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
            Animated.spring(
                animatedValue,
                {
                    toValue: 0,
                    useNativeDriver: true
                }
            ).start()
            setTimeout(() => {
                setOpenMenu(false)
            }, 250)
        }
        return (
            <Animated.View style={[styles.filterContentWrapper, {
                transform: [
                    {
                        translateY: filterTranslateY
                    }
                ],
                opacity: animatedValue
            }]}>
                <TouchableOpacity
                    style={styles.filterCloseIcon}
                    onPress={onClosePress}
                >
                    <Ionicons
                        name='close-outline'
                        size={30}
                        color={COLORS.highlight}
                    />
                </TouchableOpacity>
                <FlatList
                    data={FILTER_DATA}
                    keyExtractor={item => item.name}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity style={styles.filterItemWrapper}>
                                <Text style={styles.filterItemText}>{item.name}</Text>
                            </TouchableOpacity>
                        )
                    }}
                />
            </Animated.View>
        )
    }

    return (
        <>
            {/* Header */}
            <Header
                headerTitle={headerTitle}
                headerTitleStyle={{
                    textTransform: 'uppercase'
                }}
                showCloseIcon
                onClosePress={() => navigation.goBack()}
            />
            <ImageBackground
                source={IMAGES.VIRUAL_SHOPS_BG}
                style={{ flex: 1 }}
                resizeMode='stretch'
                onLoadEnd={onLoadEnd}
            >
                {
                    loading
                        ?
                        <LoadingModal />
                        :
                        <>
                            {/* List Products */}
                            <FloatingMenu />
                            <Animated.FlatList
                                data={DATA}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                keyExtractor={item => `Product-${item.id}`}
                                pagingEnabled
                                renderItem={({ item, index }) => {
                                    let inputRange = [(index - 0.4) * width, index * width, (index + 0.4) * width]
                                    return (
                                        <Animated.View
                                            style={{
                                                opacity: itemOpacity,
                                                transform: [{
                                                    translateY: itemTranslateY
                                                }]
                                            }}
                                        >
                                            <TouchableOpacity
                                                activeOpacity={0.7}
                                                style={{
                                                    width, height,
                                                    zIndex: 9999
                                                }}
                                                onPress={() => navigation.navigate('ProductDetails')}
                                            >
                                                <Animated.Image
                                                    source={item.image}
                                                    style={[styles.itemImage, {
                                                        transform: [
                                                            {
                                                                translateY: scrollX.interpolate({
                                                                    inputRange,
                                                                    outputRange: [-30, 0, -30]
                                                                })
                                                            },
                                                            {
                                                                scale: scrollX.interpolate({
                                                                    inputRange,
                                                                    outputRange: [0, 1, 0]
                                                                })
                                                            }
                                                        ],
                                                        opacity: scrollX.interpolate({
                                                            inputRange,
                                                            outputRange: [0, 1, 0]
                                                        }),
                                                        width: IMAGE_WIDTH,
                                                        height: IMAGE_HEIGHT,
                                                        top: IMAGE_TOP,
                                                        left: IMAGE_LEFT
                                                    }]}
                                                    resizeMode='stretch'
                                                    onLoadEnd={onImageItemEndLoad}
                                                />
                                            </TouchableOpacity>
                                        </Animated.View>
                                    )
                                }}
                                onScroll={Animated.event(
                                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                                    {
                                        useNativeDriver: true
                                    }
                                )}
                            />

                            {/* Filter Button */}
                            <Animated.View style={[styles.popupMenu]}>
                                {
                                    openMenu &&
                                    <FilterItem />
                                }
                                {/* Button Open/Close */}
                                <Pressable
                                    hitSlop={{ top: 20, right: 20, bottom: 20, left: 20 }}
                                    onPress={onFilterPressed}
                                >
                                    <Animated.View style={styles.filterButtonWrapper}>
                                        <Text style={styles.filterButtonText}>{t('filter')}</Text>
                                        <AnimatedIcons
                                            name='caret-up-outline'
                                            size={18}
                                            color={COLORS.white}
                                        />
                                    </Animated.View>
                                </Pressable>
                            </Animated.View>
                        </>

                }
            </ImageBackground >
        </>
    )
}

export default VirtualShopScreen
