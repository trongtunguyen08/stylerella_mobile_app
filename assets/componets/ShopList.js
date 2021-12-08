import React, { useRef, useState, useEffect } from 'react'
import { Platform, TouchableOpacity } from 'react-native'
import { StyleSheet, Text, View, ImageBackground, FlatList, Image, PixelRatio, Animated, StatusBar } from 'react-native'
import { IMAGES, setHeight, setWidth, COLORS, width } from '../contants/contants'
import { useNavigation } from '@react-navigation/native'

const Data = [
    {
        index: 1,
        image: IMAGES.LV,
        name: 'Louis Vuitton'
    },
    {
        index: 2,
        image: IMAGES.GUCCI,
        name: 'GUCCI'
    },
    {
        index: 3,
        image: IMAGES.CHANRL,
        name: 'CHANEL'
    },
    {
        index: 4,
        image: IMAGES.HERMES,
        name: 'HERMES'
    }
]

const ShopList = () => {
    const navigation = useNavigation()
    let initialNum = 2
    if (width >= 700) {
        initialNum = 4
    }
    if (width >= 1024) {
        initialNum = 5
    }

    const onBrandPress = (brandName) => {
        navigation.navigate('VirtualShop', { headerTitle: brandName })
    }
    return (
        <ImageBackground
            style={[styles.container]}
            source={IMAGES.SHOP_LIST_BG}
            blurRadius={3}
        >
            <StatusBar barStyle='light-content' backgroundColor={COLORS.primary} />
            <FlatList
                data={Data}
                keyExtractor={item => item.index.toString()}
                numColumns={initialNum}
                renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity
                            key={index}
                            activeOpacity={0.8}
                            onPress={() => onBrandPress(item.name)}
                        >
                            <Image
                                source={item.image}
                                style={styles.itemImage}
                                resizeMode='stretch'
                            />
                        </TouchableOpacity>
                    )
                }}
                contentContainerStyle={{
                    marginLeft: 10,
                    paddingBottom: setHeight(7)
                }}
            />
        </ImageBackground>
    )
}

export default ShopList

let WIDTH = (width - 60) / 2
let HEIGHT = setHeight(35)
const ratio = PixelRatio.get()
console.log(width)

if (Platform.OS == 'ios' && ratio < 3 && width < 400) {
    HEIGHT = setHeight(39)
}

if (width >= 700) {
    WIDTH = (width - 100) / 4
    HEIGHT = setHeight(30)
}
if (width >= 1024) {
    WIDTH = (width - 120) / 5
    HEIGHT = setHeight(42)
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    itemImage: {
        width: WIDTH,
        height: HEIGHT,
        marginHorizontal: 10,
        marginTop: 10
    }
})
