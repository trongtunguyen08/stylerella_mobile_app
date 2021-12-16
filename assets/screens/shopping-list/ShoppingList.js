import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import {
    Alert,
    FlatList,
    View,
    Platform,
    BackHandler,
    TouchableOpacity,
    Image,
    ScrollView,
    TextInput,
    KeyboardAvoidingView
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import * as Haptics from 'expo-haptics'
import { Ionicons } from '@expo/vector-icons'
import { Title, Text, Caption } from 'react-native-paper'
import CheckBox from 'react-native-check-box'
import { Rating } from 'react-native-elements'
import LottieView from 'lottie-react-native'

import { styles } from './styles'
import { IMAGES, COLORS } from '../../contants/contants'
import { ACTION_TYPES } from '../../redux/reducers/actionTypes'
import { Header, ButtonText, FloatingMenu } from '../../components'

const ShoppingList = () => {
    const dispath = useDispatch()
    const navigation = useNavigation()
    const { items } = useSelector(state => state.shoppingListReducer.listProduct)

    let orderTotal = 0
    let checkOrderTotal = () => {
        items.forEach((item) => {
            if (item.isChecked == true) {
                orderTotal += item.quantity * item.salePrice.replace('$', '')
            }
        })
        return orderTotal
    }

    useEffect(() => {
        const backAction = () => {
            navigation.goBack()
            return true
        };

        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        )

        return () => backHandler.remove()
    }, [])

    const onBackPress = () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
        navigation.goBack()
    }

    const onCheckAllPress = () => {
        dispath({
            type: ACTION_TYPES.CHECK_ALL
        })
    }

    const selectItem = (id) => {
        dispath({
            type: ACTION_TYPES.SELECT_ITEM,
            payload: id
        })
    }

    const onRemovePress = (id) => {
        Alert.alert(
            'Warning',
            'You want to remove a product from your shopping cart?',
            [
                {
                    text: "CANCEL",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: "REMOVE",
                    style: 'destructive',
                    onPress: () => {
                        dispath({
                            type: ACTION_TYPES.REMOVE_FROM_SHOPPING_LIST,
                            payload: id
                        })
                    }
                }
            ]
        )
    }

    const onDecreaseAmount = (id, quantity) => {
        if (quantity > 1) {
            dispath({
                type: ACTION_TYPES.DECREASE_AMOUNT,
                payload: id
            })
        } else {
            Alert.alert(
                'Warning',
                'You want to remove a product from your shopping cart?',
                [
                    {
                        text: "CANCEL",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel"
                    },
                    {
                        text: "REMOVE",
                        style: 'destructive',
                        onPress: () => {
                            dispath({
                                type: ACTION_TYPES.REMOVE_FROM_SHOPPING_LIST,
                                payload: id
                            })
                        }
                    }
                ]
            )
        }
    }

    const onIncreaseAmount = (id, quantity, inStock) => {
        if (quantity == inStock) {
            Alert.alert(
                'WARNING',
                `Cannot add to cart. Limit ${inStock}`
            )
        } else {
            dispath({
                type: ACTION_TYPES.INCREASE_AMOUNT,
                payload: id
            })
        }

    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            {/* Floating Menu */}
            <FloatingMenu />

            {/* Header */}
            <Header
                headerTitle='Shopping Cart'
                rightIcon={'search-outline'}
                onPressRightIcon={() => { }}
            />

            {/* Nav bar */}
            <View style={styles.navBarContainer}>
                <TouchableOpacity
                    onPress={onBackPress}
                    style={styles.backIconWrapper}
                >
                    <Ionicons
                        name='arrow-back-outline'
                        color={COLORS.primary}
                        size={30}
                    />
                </TouchableOpacity>
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    horizontal
                >
                    <TouchableOpacity
                        style={styles.buttonWrapper}
                    >
                        <Text style={styles.buttonText}>Shopping Chart</Text>
                    </TouchableOpacity>
                    {
                        items.length > 0 &&
                        <TouchableOpacity
                            style={styles.buttonWrapper}
                            onPress={onCheckAllPress}
                        >
                            <Ionicons
                                name='checkmark-done-outline'
                                color={COLORS.highlight}
                                size={18}
                            />
                            <Text style={styles.buttonText}>Check/Uncheck All</Text>
                        </TouchableOpacity>
                    }

                    <TouchableOpacity
                        style={styles.buttonWrapper}
                    >
                        <Ionicons
                            name='trash-outline'
                            color={COLORS.highlight}
                            size={18}
                        />
                        <Text style={styles.buttonText}>Trash</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>

            {/* Shopping List */}
            {
                items.length > 0
                    ?
                    <FlatList
                        data={items}
                        keyExtractor={item => item.id.toString()}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => {
                            return (
                                <View>
                                    <View style={styles.itemContainer}>
                                        <CheckBox
                                            isChecked={item.isChecked}
                                            onClick={() => selectItem(item.id)}
                                            checkBoxColor={COLORS.primary}
                                        />
                                        <Image
                                            source={item.image}
                                            style={styles.itemImage}
                                        />
                                        <View style={styles.itemDetailsWrapper}>
                                            <Text style={styles.productName} numberOfLines={2}>{item.name}</Text>
                                            <Rating
                                                showRating={false}
                                                imageSize={15}
                                                style={styles.rating}
                                            />
                                            <Caption style={styles.originalPriceText}>Original Price {item.originalPrice}</Caption>
                                            <Title style={styles.salePrice} numberOfLines={1}>{item.salePrice}</Title>
                                            <View style={styles.amountWrapper}>
                                                <TouchableOpacity
                                                    style={styles.buttonAmountWrapper}
                                                    onPress={() => onDecreaseAmount(item.id, item.quantity)}
                                                >
                                                    <Text style={styles.amountText}>-</Text>
                                                </TouchableOpacity>
                                                <Text style={styles.quantity}>{item.quantity}</Text>
                                                <TouchableOpacity
                                                    style={[styles.buttonAmountWrapper, {
                                                        backgroundColor: item.quantity == item.inStock ? '#EEE' : COLORS.primary
                                                    }]}
                                                    onPress={() => onIncreaseAmount(item.id, item.quantity, item.inStock)}
                                                >
                                                    <Text style={[styles.amountText, {
                                                        color: item.quantity == item.inStock ? COLORS.gray : COLORS.white
                                                    }]}>+</Text>
                                                </TouchableOpacity>
                                            </View>
                                            <TouchableOpacity
                                                style={styles.removeProductWrapper}
                                                onPress={() => onRemovePress(item.id)}
                                            >
                                                <Ionicons
                                                    name='close-circle-outline'
                                                    color={COLORS.highlight}
                                                    size={18}
                                                />
                                                <Text style={styles.buttonText}>Remove</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <View style={styles.divider} />
                                </View>
                            )
                        }}
                        ListFooterComponent={() => {
                            return (
                                <>
                                    {
                                        items.length > 0
                                            ?
                                            <View>
                                                <View style={styles.receiptWrapper} >
                                                    <View>
                                                        <View style={styles.receiptItemWrapper}>
                                                            <Text style={styles.receiptItemTitle}>Product Price: </Text>
                                                            <Title style={styles.receiptItemValue}>${checkOrderTotal()}</Title>
                                                        </View>
                                                        <View style={styles.receiptItemWrapper}>
                                                            <Text style={styles.receiptItemTitle}>Freight: </Text>
                                                            <Title style={styles.receiptItemValue}>$00.00</Title>
                                                        </View>
                                                        <View style={styles.receiptItemWrapper}>
                                                            <Text style={styles.receiptItemTitle}>Points Discount: </Text>
                                                            <Title style={styles.receiptItemValue}>$000.00</Title>
                                                        </View>
                                                        <View style={styles.receiptItemWrapper}>
                                                            <Text style={styles.receiptItemTitle}>Promo Code: </Text>
                                                            <TextInput
                                                                style={styles.promoInput}
                                                                autoCapitalize={"characters"}
                                                            />
                                                        </View>
                                                        <View style={styles.divider} />
                                                        <View style={styles.receiptItemWrapper}>
                                                            <Title style={styles.receiptItemTitle}>Order Total: </Title>
                                                            <Title style={styles.receiptItemValue}>$000.00</Title>
                                                        </View>
                                                    </View>
                                                </View>
                                                <ButtonText
                                                    text='CHECKOUT'
                                                    disabled={checkOrderTotal() > 0 ? false : true}
                                                    onPress={() => navigation.navigate('PaymentDetails')}
                                                    containerStyle={{
                                                        backgroundColor: checkOrderTotal() > 0 ? COLORS.primary : COLORS.gray,
                                                        marginTop: 15,
                                                        marginBottom: 30
                                                    }}
                                                />
                                            </View>
                                            : null
                                    }
                                </>
                            )
                        }}
                    />
                    :
                    <View style={styles.emptyViewWrapper}>
                        <LottieView
                            source={IMAGES.SHOPPING_BAG_ERROR}
                            autoPlay
                            loop
                        />
                    </View>
            }

        </KeyboardAvoidingView>
    )
}

export default ShoppingList
