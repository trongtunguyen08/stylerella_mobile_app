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
    BackHandler
} from 'react-native'
import { Title, Text } from 'react-native-paper'
import * as Haptics from 'expo-haptics'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

import { COLORS, IMAGES, setHeight, width } from '../../contants/contants'
import { styles } from './styles'
import { t } from '../../locales/index'

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
    const { headerTitle } = props.route.params
    const navigation = useNavigation()
    const [loading, setLoading] = useState(true)

    const [openMenu, setOpenMenu] = useState(false)

    const onFilterPressed = async () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
        await setOpenMenu(openMenu => !openMenu)
    }

    const translateYAnimatedValue = useRef(new Animated.Value(0)).current
    const translateY = translateYAnimatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [-20, 0]
    })
    const onLoadEnd = () => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)
        setTimeout(() => {
            Animated.timing(
                translateYAnimatedValue,
                {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: true
                }
            ).start()
        }, 1100)
    }

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
        <ImageBackground
            source={IMAGES.VIRUAL_SHOPS_BG}
            style={styles.container}
            resizeMode='stretch'
            onLoadEnd={onLoadEnd}
        >
            {
                loading
                    ?
                    <View style={{
                        flex: 1,
                        backgroundColor: 'white',
                        justifyContent: 'center'
                    }}>
                        <ActivityIndicator
                            color={COLORS.primary}
                        />
                    </View>
                    :
                    <>
                        <View
                            style={styles.headerContainer}
                        >
                            <SafeAreaProvider>
                                <SafeAreaView>
                                    <View style={styles.headerContent}>
                                        <TouchableOpacity
                                            style={styles.headerBackIcon}
                                            onPress={onBackPress}
                                        >
                                            <Ionicons
                                                name='arrow-back-outline'
                                                color={COLORS.white}
                                                size={BACK_ICON_SIZE}
                                            />
                                        </TouchableOpacity>
                                        <Title style={styles.headerText}>{headerTitle}</Title>
                                        <Image
                                            source={IMAGES.STYLERELLA2}
                                            style={styles.headerRightIamge}
                                        />
                                    </View>
                                </SafeAreaView>
                            </SafeAreaProvider>
                        </View>
                        <Animated.FlatList
                            data={DATA}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={item => item.id + 'product'}
                            pagingEnabled
                            renderItem={({ item }) => {
                                return (
                                    <TouchableOpacity
                                        activeOpacity={0.7}
                                        style={styles.item}
                                        onPress={() => navigation.navigate('ProductDetails')}
                                    >
                                        <Animated.Image
                                            source={item.image}
                                            style={[styles.itemImage, {
                                                transform: [
                                                    {
                                                        translateY: translateY
                                                    }
                                                ]
                                            }]}
                                            resizeMode='stretch'
                                        />
                                    </TouchableOpacity>
                                )
                            }}
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
    )
}

export default VirtualShopScreen
