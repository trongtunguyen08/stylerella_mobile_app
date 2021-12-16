import React, { useState, useCallback, useRef, useEffect } from 'react'
import {
    Animated,
    View,
    TouchableOpacity,
    Image,
    ScrollView,
    ImageBackground,
    KeyboardAvoidingView,
    Platform,
    PixelRatio,
    useWindowDimensions,
    StatusBar
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Title, Text, Caption, TextInput, Paragraph } from 'react-native-paper'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { Rating } from 'react-native-elements'

import { styles } from './styles'
import { COLORS, FONTS, IMAGES, setHeight, setWidth } from '../../contants/contants'
import { useNavigation } from '@react-navigation/native'
import FloatingMenu from '../../componets/FloatingMenu'
import Header from '../../componets/Header'

const KeyboardAvoidingViewAnimated = Animated.createAnimatedComponent(KeyboardAvoidingView)

const SpecificationRender = () => {
    const [textShown, setTextShown] = useState(false); //To show ur remaining Text
    const [lengthMore, setLengthMore] = useState(false); //to show the "Read more & Less Line"
    const toggleNumberOfLines = () => { //To toggle the show text or hide it
        setTextShown(!textShown)
    }
    const onTextLayout = useCallback(e => {
        setLengthMore(e.nativeEvent.lines.length >= 4); //to check the text is more than 4 lines or not
    }, [])

    const opacityValue = useRef(new Animated.Value(0)).current
    const translateX = opacityValue.interpolate({
        inputRange: [0, 1],
        outputRange: [-setWidth(100), 0]
    })
    useEffect(() => {
        Animated.spring(
            opacityValue,
            {
                toValue: 1,
                useNativeDriver: true
            }
        ).start()
    }, [])

    return (
        <Animated.View style={[styles.tabContentWrapper, {
            transform: [
                {
                    translateX
                }
            ]
        }]}>
            <ScrollView
                nestedScrollEnabled={true}
                showsVerticalScrollIndicator={false}
            >
                <Text style={styles.productDes}>Product Description</Text>
                <Paragraph
                    onTextLayout={onTextLayout}
                    numberOfLines={textShown ? undefined : 4}
                    style={styles.desText}
                >
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait
                </Paragraph>
                {
                    lengthMore ? <Text
                        onPress={toggleNumberOfLines}
                        style={styles.readMoreButtonText}>{textShown ? 'Read less...' : 'Read more...'}</Text>
                        : null
                }
                <TouchableOpacity style={styles.footerButtonWrapper}>
                    <Text style={styles.footerText}>Delivery and Return</Text>
                    <Text style={styles.footerText}>{`>`}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerButtonWrapper}>
                    <Text style={styles.footerText}>Store Terms</Text>
                    <Text style={styles.footerText}>{`>`}</Text>
                </TouchableOpacity>
            </ScrollView>
        </Animated.View>
    )
}

const ReviewRender = () => {
    const opacityValue = useRef(new Animated.Value(0)).current
    const translateX = opacityValue.interpolate({
        inputRange: [0, 1],
        outputRange: [setWidth(100), 0]
    })
    useEffect(() => {
        Animated.spring(
            opacityValue,
            {
                toValue: 1,
                useNativeDriver: true
            }
        ).start()
    }, [])
    return (
        <Animated.View
            style={[styles.tabContentWrapper, {
                transform: [
                    {
                        translateX
                    }
                ]
            }]}
        >
            <TextInput
                label='Title...'
                theme={{
                    colors: {
                        primary: COLORS.primary,
                        text: COLORS.gray
                    },
                    fonts: {
                        regular: {
                            fontFamily: FONTS.MeridiesAntiqua
                        }
                    }
                }}
                style={{
                    backgroundColor: 'transparent'
                }}
            />
            <TextInput
                label='Review content...'
                multiline
                theme={{
                    colors: {
                        primary: COLORS.primary,
                        text: COLORS.gray
                    },
                    fonts: {
                        regular: {
                            fontFamily: FONTS.MeridiesAntiqua
                        }
                    }
                }}
                style={{
                    backgroundColor: 'transparent'
                }}
            />
            <TouchableOpacity
                style={styles.sendReviewButtonWrapper}
                activeOpacity={0.8}
            >
                <Text style={styles.sendText}>Send</Text>
            </TouchableOpacity>
        </Animated.View>
    )
}

const ProductDetailsScreen = () => {
    const { width, height } = useWindowDimensions()
    let BODY_WIDTH = '100%'
    let IMAGE_FRAME_SIZE = width * .6
    let PRODUCT_IMAGE_WIDTH = width * .45
    let PRODUCT_IMAGE_HEIGHT = width * .45
    let ICON_SIZE = width * .11
    if (width >= 700) {
        BODY_WIDTH = '70%'
        IMAGE_FRAME_SIZE = width * .4
        PRODUCT_IMAGE_WIDTH = width * .3
        PRODUCT_IMAGE_HEIGHT = width * .3
        ICON_SIZE = width * .06
    }

    const navigation = useNavigation()

    const [initialTabIndex, setInitialTabIndex] = useState(0)

    const onTabOnePress = () => {
        setInitialTabIndex(0)
    }

    const onTabTwoPress = () => {
        setInitialTabIndex(1)
    }

    const animatedValue = useRef(new Animated.Value(0)).current
    const translateX = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [setHeight(100), 1]
    })

    useEffect(() => {
        Animated.spring(
            animatedValue, {
            toValue: 1,
            useNativeDriver: true
        }
        ).start()
    }, [])

    const onBackPress = () => {
        navigation.goBack()
    }

    return (
        <KeyboardAvoidingViewAnimated
            style={[styles.container, {
                transform: [
                    {
                        translateY: translateX
                    }
                ]
            }]}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            {/* Floating Menu */}
            <FloatingMenu />

            {/* Header */}
            <Header
                headerTitle='Product Details'
                showCloseIcon
                onClosePress={onBackPress}
            />

            {/* Body */}
            <ScrollView
                style={[styles.bodyContainer, {
                    width: BODY_WIDTH
                }]}
                showsVerticalScrollIndicator={false}
            >
                <View>
                    <ImageBackground
                        source={IMAGES.FRAME}
                        style={[styles.imageFrame, {
                            width: IMAGE_FRAME_SIZE,
                            height: IMAGE_FRAME_SIZE
                        }]}
                        resizeMode='stretch'
                    >
                        <Image
                            source={IMAGES.BAG_DETAILS}
                            style={{
                                width: PRODUCT_IMAGE_WIDTH,
                                height: PRODUCT_IMAGE_HEIGHT
                            }}
                            resizeMode='stretch'
                        />
                    </ImageBackground>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                marginLeft: ICON_SIZE,
                                marginTop: -ICON_SIZE / 2
                            }}
                        >
                            <Image
                                source={IMAGES.SHARE_BUTTON}
                                style={{
                                    width: ICON_SIZE,
                                    height: ICON_SIZE
                                }}
                                resizeMode='stretch'
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                marginRight: ICON_SIZE,
                                marginTop: -ICON_SIZE / 2
                            }}
                        >
                            <Image
                                source={IMAGES.BOOKMARK}
                                style={{
                                    width: ICON_SIZE,
                                    height: ICON_SIZE
                                }}
                                resizeMode='stretch'
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <Title
                    style={styles.productName}
                    numberOfLines={2}
                >GG Marmont</Title>
                <Title
                    style={styles.productName}
                    numberOfLines={2}
                >GG Marmont</Title>
                <View style={styles.priceWrapper}>
                    <Caption style={styles.originalPriceText}>Original Price</Caption>
                    <Caption style={styles.originalPrice}>$1700.00</Caption>
                </View>
                <Title style={styles.salePrice}>$1600.00</Title>
                <Rating
                    showRating={false}
                    imageSize={15}
                    style={styles.rating}
                />
                <View style={styles.quantityWrapper}>
                    {/* Quantity */}
                    <View style={styles.quantityWrapper}>
                        <TouchableOpacity style={styles.quantityButtonWrapper}>
                            <Text style={styles.quantityButtonText}>-</Text>
                        </TouchableOpacity>
                        <Text style={styles.totalQuantity}>1</Text>
                        <TouchableOpacity style={styles.quantityButtonWrapper}>
                            <Text style={styles.quantityButtonText}>+</Text>
                        </TouchableOpacity>
                    </View>
                    {/* Add to Bag Button */}
                    <TouchableOpacity style={styles.addToBagWrapper}>
                        <Text style={styles.addToBagText}>Add to Bag</Text>
                    </TouchableOpacity>
                </View>
                <Caption style={styles.itemStatusText}>In Stock</Caption>
                {/* Specification and Comments */}
                <View style={styles.tabContainer}>
                    <TouchableOpacity
                        style={[styles.tabButtonWrapper, {
                            borderColor: initialTabIndex == 0 ? COLORS.highlight : '#EEE'
                        }]}
                        onPress={onTabOnePress}
                        activeOpacity={0.8}
                    >
                        <Ionicons
                            name='receipt-outline'
                            size={setWidth(5)}
                            color={initialTabIndex == 0 ? COLORS.highlight : COLORS.gray}
                        />
                        <Text style={[styles.tabTitleText, {
                            color: initialTabIndex == 0 ? COLORS.highlight : COLORS.gray
                        }]}>Specification</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.tabButtonWrapper, {
                            borderColor: initialTabIndex == 1 ? COLORS.highlight : '#EEE'
                        }]}
                        onPress={onTabTwoPress}
                        activeOpacity={0.8}
                    >
                        <Ionicons
                            name='newspaper-outline'
                            size={setWidth(5)}
                            color={initialTabIndex == 1 ? COLORS.highlight : COLORS.gray}
                        />
                        <Text style={[styles.tabTitleText, {
                            color: initialTabIndex == 1 ? COLORS.highlight : COLORS.gray
                        }]}>Write a Review</Text>
                    </TouchableOpacity>
                </View>
                {
                    initialTabIndex == 0 && <SpecificationRender />
                }
                {
                    initialTabIndex == 1 && <ReviewRender />
                }
            </ScrollView>
        </KeyboardAvoidingViewAnimated>
    )
}

export default ProductDetailsScreen
