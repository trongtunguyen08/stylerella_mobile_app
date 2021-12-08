import React from 'react'
import { StatusBar, TouchableOpacity, View, Image, ScrollView, TextInput } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { useSelector, useDispatch } from 'react-redux'
import { Ionicons } from '@expo/vector-icons'
import { Title, Text, Subheading } from 'react-native-paper'
import CheckBox from 'react-native-check-box'
import { useNavigation } from '@react-navigation/native'

import { styles } from './styles'
import { COLORS, IMAGES, setWidth, setHeight, FONTS } from '../../contants/contants'

const PaymentDetailsScreen = () => {
    const navigation = useNavigation()
    const { items } = useSelector(state => state.shoppingListReducer.listProduct)
    const listProducts = items.filter(item => item.isChecked == true)
    return (
        <View style={styles.container}>
            <StatusBar barStyle='light-content' backgroundColor={COLORS.primary} />
            {/* Header */}
            <View
                style={styles.headerContainer}
            >
                <SafeAreaProvider>
                    <SafeAreaView>
                        <View style={styles.headerContent}>
                            <TouchableOpacity
                                style={styles.headerBackIcon}
                                onPress={() => navigation.goBack()}
                            >
                                <Ionicons
                                    name='arrow-back-outline'
                                    color={COLORS.white}
                                    size={setWidth(6)}
                                />
                            </TouchableOpacity>
                            <Title style={styles.headerTitleText}>Payment Details</Title>
                            <Image
                                source={IMAGES.STYLERELLA2}
                                style={styles.headerRightIamge}
                            />
                        </View>
                    </SafeAreaView>
                </SafeAreaProvider>
            </View>

            {/* Body */}
            <ScrollView style={styles.bodyContainer}>
                <View style={{ padding: 20 }}>
                    <Subheading style={styles.titleText}>Products</Subheading>
                    {
                        listProducts.map((item) => {
                            return (
                                <View key={item.id} style={styles.productItemWrapper}>
                                    <View>
                                        <Image
                                            source={item.image}
                                            style={styles.productItemImage}
                                        />
                                    </View>
                                    <View style={styles.productItemDetailsWrapper}>
                                        <View>
                                            <Text numberOfLines={2} style={styles.productName}>{item.name}</Text>
                                            <Text numberOfLines={1} style={styles.productName}>GUCCI</Text>
                                        </View>

                                        <View style={styles.quantityWrapper}>
                                            <Text style={styles.quantityText}>${item.salePrice.replace('$', '') * item.quantity}</Text>
                                            <Text style={styles.quantityText}>Quantity: {item.quantity}</Text>
                                        </View>
                                    </View>
                                </View>
                            )
                        })
                    }
                    <View style={styles.menuWrapper}>
                        <Subheading style={styles.menuTitleText}>Shipping</Subheading>
                        <Title style={styles.menuTitleText}>$00.00</Title>
                    </View>
                    <View style={styles.menuWrapper}>
                        <Subheading style={styles.menuTitleText}>Discount</Subheading>
                        <Title style={styles.menuTitleText}>-$00.00</Title>
                    </View>
                    <View style={styles.menuWrapper}>
                        <Subheading style={styles.menuTitleText}>Total</Subheading>
                        <Title style={styles.menuTitleText}>$000.00</Title>
                    </View>
                    <View style={styles.menuWrapper}>
                        <Subheading style={styles.menuTitleText}>Points</Subheading>
                        <Title style={styles.menuTitleText}>(000000)</Title>
                    </View>
                    <View style={styles.menuWrapper}>
                        <Subheading style={styles.menuTitleText}>Discount Code</Subheading>
                        <TextInput
                            style={[styles.menuTitleText, styles.codeInput]}
                        />
                    </View>
                </View>
                <View>
                    <View style={styles.pickerTitleWrapper}>
                        <Subheading style={styles.pickerTitleText}>Delivery Methods</Subheading>
                    </View>
                    <View style={styles.pickerMenuWrapper}>
                        <CheckBox
                            style={styles.checkbox}
                            checkBoxColor={COLORS.gray}
                        />
                        <Text style={styles.pickerItemText}>Pick up at the store</Text>
                    </View>
                    <View style={styles.pickerMenuWrapper}>
                        <CheckBox
                            checkBoxColor={COLORS.gray}
                            style={styles.checkbox}
                        />
                        <Text style={styles.pickerItemText}>Deliver to your door</Text>
                    </View>
                </View>
                <View>
                    <View style={styles.pickerTitleWrapper}>
                        <Subheading style={styles.pickerTitleText}>Payment Methods</Subheading>
                    </View>
                    <View style={styles.pickerMenuWrapper}>
                        <CheckBox
                            checkBoxColor={COLORS.gray}
                            style={styles.checkbox}
                        />
                        <Text style={styles.pickerItemText}>VISA / Master Cart / AE</Text>
                    </View>
                    <View style={styles.pickerMenuWrapper}>
                        <CheckBox
                            checkBoxColor={COLORS.gray}
                            style={styles.checkbox}
                        />
                        <Text style={styles.pickerItemText}>FPS</Text>
                    </View>
                    <View style={styles.pickerMenuWrapper}>
                        <CheckBox
                            checkBoxColor={COLORS.gray}
                            style={styles.checkbox}
                        />
                        <Text style={styles.pickerItemText}>PayMe</Text>
                    </View>
                </View>
                <TouchableOpacity
                    style={styles.confirmWrapper}
                    onPress={() => navigation.replace('OrderSuccess')}
                >
                    <Text style={styles.confirmText}>CONFIRM PAYMET</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

export default PaymentDetailsScreen

