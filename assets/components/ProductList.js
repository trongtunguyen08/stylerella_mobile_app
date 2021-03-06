import { useNavigation } from '@react-navigation/native'
import React, { useRef, useState } from 'react'
import { PixelRatio, Platform, StatusBar } from 'react-native'
import {
    StyleSheet,
    View,
    ImageBackground,
    FlatList,
    Image,
    TouchableOpacity,
    useWindowDimensions,
    Alert
} from 'react-native'
import { Rating } from 'react-native-elements'
import { Text, Subheading, Caption, Snackbar } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'

import { COLORS, FONTS, IMAGES, setHeight } from '../contants/contants'
import { ACTION_TYPES } from '../redux/reducers/actionTypes'
import FloatingMenu from './FloatingMenu'
import LoadingModal from './LoadingModal'

const DATA = [
    {
        id: 1,
        image: IMAGES.BAG,
        name: `GG Marmont matelassé mini bag`,
        originalPrice: '$17000.00',
        salePrice: '$16000.00',
        inStock: 5
    },
    {
        id: 2,
        image: IMAGES.BAG,
        name: `GG Marmont matelassé mini bag`,
        originalPrice: '$17000.00',
        salePrice: '$16000.00',
        inStock: 16
    },
    {
        id: 3,
        image: IMAGES.BAG,
        name: `GG Marmont matelassé mini bag`,
        originalPrice: '$17000.00',
        salePrice: '$16000.00',
        inStock: 3
    },
    {
        id: 4,
        image: IMAGES.BAG,
        name: `GG Marmont matelassé mini bag`,
        originalPrice: '$17000.00',
        salePrice: '$16000.00',
        inStock: 10
    },
    {
        id: 5,
        image: IMAGES.BAG,
        name: `GG Marmont matelassé mini bag`,
        originalPrice: '$17000.00',
        salePrice: '$16000.00',
        inStock: 7
    },
    {
        id: 6,
        image: IMAGES.BAG,
        name: `GG Marmont matelassé mini bag`,
        originalPrice: '$17000.00',
        salePrice: '$16000.00',
        inStock: 5
    },
    {
        id: 7,
        image: IMAGES.BAG,
        name: `GG Marmont matelassé mini bag`,
        originalPrice: '$17000.00',
        salePrice: '$16000.00',
        inStock: 15
    },
]

const ProductList = () => {
    const { width, height } = useWindowDimensions()
    let WIDTH = (width - 30) / 2
    let PADDING_VER = 14
    let MARGIN_HO = 5
    let IMAGE_HEIGHT = height * .18
    const ratio = PixelRatio.get()
    if (Platform.OS == 'ios' && ratio < 3 && width < 400) {
        PADDING_VER = 7
    }
    if (Platform.OS == 'android') {
        PADDING_VER = 7
    }
    if (width >= 700) {
        WIDTH = (width - 50) / 4
    }
    if (width >= 1024) {
        WIDTH = (width - 60) / 5
        IMAGE_HEIGHT = height * .25
    }
    //
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()
    const selectedProduct = (item) => dispatch({
        type: ACTION_TYPES.ADD_TO_SHOPPING_LIST,
        payload: item
    })
    const { items } = useSelector(state => state.shoppingListReducer.listProduct)

    const navigation = useNavigation()

    const [errorSnackbarVisible, setErrorSnackbarVisible] = useState(false)
    const ErrorSnackbar = () => {
        return (
            <Snackbar
                theme={{ colors: { accent: '#E5EEC1' } }}
                visible={errorSnackbarVisible}
                onDismiss={() => setErrorSnackbarVisible(false)}
                duration={1500}
                style={{
                    backgroundColor: 'red',
                    marginBottom: 40,
                }}
                action={{
                    label: 'DISMISS',
                    onPress: () => {
                        setErrorSnackbarVisible(false)
                    }
                }}
            >
                {`ERROR\nThe number of products in stock has exceeded!`}
            </Snackbar>
        )
    }

    const [successSnackbarVisible, setSuccessSnackbarVisible] = useState(false)
    const SuccessSnackbar = () => {
        return (
            <Snackbar
                theme={{ colors: { accent: '#E5EEC1' } }}
                visible={successSnackbarVisible}
                onDismiss={() => setSuccessSnackbarVisible(false)}
                duration={1500}
                style={{
                    backgroundColor: '#3EACA8',
                    marginBottom: 40
                }}
                action={{
                    label: 'GO TO CART',
                    onPress: () => {
                        navigation.navigate('ShoppingList')
                    }
                }}
            >
                {`SUCCESSED\nThe Product has been added to cart. Do you want to go to the shopping cart?`}
            </Snackbar>
        )
    }

    const onAddToBagButtonPressed = (item) => {
        let tempt = items.filter(product => product.id == item.id)
        if (tempt.length == 0) {
            setSuccessSnackbarVisible(true)
            selectedProduct({ ...item, quantity: 1, isChecked: false })
        } else {
            if (tempt[0].quantity == tempt[0].inStock) {
                setErrorSnackbarVisible(true)
                setSuccessSnackbarVisible(false)
            } else {
                setSuccessSnackbarVisible(true)
                selectedProduct({ ...item, quantity: 1, isChecked: false })
            }
        }
    }

    return (
        <>
            <ImageBackground
                source={IMAGES.SHOP_LIST_BG}
                style={styles.container}
                blurRadius={5}
                onLoadEnd={() => setLoading(false)}
            >
                <FloatingMenu />
                {
                    loading && <LoadingModal />
                }
                <FlatList
                    data={DATA}
                    keyExtractor={item => item.id.toString()}
                    showsVerticalScrollIndicator={false}
                    scrollEventThrottle={1900}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity
                                key={index}
                                style={[styles.itemWrapper, {
                                    width: WIDTH,
                                    marginHorizontal: MARGIN_HO
                                }]}
                                activeOpacity={0.7}
                                onPress={() => navigation.navigate('ProductDetails')}
                            >
                                <Image
                                    source={item.image}
                                    style={[styles.imageItem, {
                                        width: '100%',
                                        height: IMAGE_HEIGHT
                                    }]}
                                />
                                <View style={styles.itemDetailsWrapper}>
                                    <Text numberOfLines={2} style={styles.itemName}>{item.name}</Text>
                                    <Rating
                                        showRating={false}
                                        imageSize={10}
                                        style={styles.rating}
                                    />
                                    <Caption numberOfLines={1} style={styles.originalPrice}>Original Price {item.originalPrice}</Caption>
                                    <Subheading numberOfLines={1} style={styles.salePrice}>{item.salePrice}</Subheading>
                                    <TouchableOpacity
                                        style={[styles.addToCartWrapper, {
                                            paddingVertical: PADDING_VER
                                        }]}
                                        onPress={() => onAddToBagButtonPressed(item)}
                                    >
                                        <Text numberOfLines={1} style={styles.addToCartText}>Add to Cart</Text>
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                    contentContainerStyle={{
                        marginLeft: 5,
                        paddingBottom: height * .07,
                        flexDirection: 'row',
                        flexWrap: 'wrap'
                    }}
                />
                <ErrorSnackbar />
                <SuccessSnackbar />
            </ImageBackground>
        </>
    )
}

export default ProductList

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    itemWrapper: {
        backgroundColor: COLORS.white,
        marginTop: 10,
        borderRadius: 10,
    },
    imageItem: {
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10
    },
    itemDetailsWrapper: {
        flex: 1,
        padding: 10,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    itemName: {
        fontFamily: FONTS.PingFangTC
    },
    rating: {
        alignSelf: 'flex-start',
        marginVertical: 5
    },
    originalPrice: {
        fontFamily: FONTS.PingFangTC
    },
    salePrice: {
        fontFamily: FONTS.PingFangTC,
        color: COLORS.highlight
    },
    addToCartWrapper: {
        backgroundColor: COLORS.primary,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    addToCartText: {
        fontFamily: FONTS.MeridiesAntiqua,
        color: COLORS.white
    }
})
