import React, { useState } from 'react'
import { StatusBar, TouchableOpacity, View, Image, ScrollView, TextInput } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { useSelector, useDispatch } from 'react-redux'
import { Ionicons } from '@expo/vector-icons'
import { Title, Text, Subheading } from 'react-native-paper'
import CheckBox from 'react-native-check-box'
import { useNavigation } from '@react-navigation/native'

import { styles } from './styles'
import { COLORS, IMAGES, setWidth, setHeight, FONTS } from '../../contants/contants'
import ButtonText from '../../componets/ButtonText'
import FloatingMenu from '../../componets/FloatingMenu'
import Header from '../../componets/Header'

const PaymentDetailsScreen = () => {
    const navigation = useNavigation()
    const { items } = useSelector(state => state.shoppingListReducer.listProduct)
    const listProducts = items.filter(item => item.isChecked == true)
    // Delivery methods
    const [pickAtStore, setPickAtStore] = useState(true)
    const [pickAtHome, setPickAtHome] = useState(false)
    // Payment methods
    const [visa, setVisa] = useState(true)
    const [fps, setFps] = useState(false)
    const [payMe, setPayMe] = useState(false)
    return (
        <View style={styles.container}>
            <FloatingMenu />
            {/* Header */}
            <Header
                headerTitle='Payment Details'
                showCloseIcon
                onClosePress={() => navigation.goBack()}
            />

            {/* Body */}
            <ScrollView
                style={styles.bodyContainer}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: 30
                }}
            >
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
                            isChecked={pickAtStore}
                            onClick={() => {
                                setPickAtStore(true)
                                setPickAtHome(false)
                            }}
                        />
                        <Text style={styles.pickerItemText}>Pick up at the store</Text>
                    </View>
                    <View style={styles.pickerMenuWrapper}>
                        <CheckBox
                            checkBoxColor={COLORS.gray}
                            style={styles.checkbox}
                            isChecked={pickAtHome}
                            onClick={() => {
                                setPickAtStore(false)
                                setPickAtHome(true)
                            }}
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
                            isChecked={visa}
                            onClick={() => {
                                setVisa(true)
                                setFps(false)
                                setPayMe(false)
                            }}

                        />
                        <Text style={styles.pickerItemText}>VISA / Master Cart / AE</Text>
                    </View>
                    <View style={styles.pickerMenuWrapper}>
                        <CheckBox
                            checkBoxColor={COLORS.gray}
                            style={styles.checkbox}
                            isChecked={fps}
                            onClick={() => {
                                setVisa(false)
                                setFps(true)
                                setPayMe(false)
                            }}
                        />
                        <Text style={styles.pickerItemText}>FPS</Text>
                    </View>
                    <View style={styles.pickerMenuWrapper}>
                        <CheckBox
                            checkBoxColor={COLORS.gray}
                            style={styles.checkbox}
                            isChecked={payMe}
                            onClick={() => {
                                setVisa(false)
                                setFps(false)
                                setPayMe(true)
                            }}
                        />
                        <Text style={styles.pickerItemText}>PayMe</Text>
                    </View>
                </View>
                <ButtonText
                    text='CONFIRM PAYMET'
                    onPress={() => navigation.replace('OrderSuccess')}
                    containerStyle={{
                        marginTop: 15,
                    }}
                />
            </ScrollView>
        </View>
    )
}

export default PaymentDetailsScreen

