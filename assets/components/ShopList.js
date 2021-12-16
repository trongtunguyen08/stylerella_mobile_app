import React, { useRef, useState, useEffect } from 'react'
import { Platform, TouchableOpacity } from 'react-native'
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    FlatList,
    Image,
    PixelRatio,
    Animated,
    StatusBar,
    useWindowDimensions
} from 'react-native'
import { IMAGES, setHeight, setWidth, COLORS, width } from '../contants/contants'
import { useNavigation } from '@react-navigation/native'
import { FloatingMenu, LoadingModal } from '../components'

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
    const { width, height } = useWindowDimensions()
    let WIDTH = (width - 60) / 2
    let HEIGHT = height * .35
    const ratio = PixelRatio.get()
    if (Platform.OS == 'ios' && ratio < 3 && width < 400) {
        HEIGHT = height * .39
    }
    if (width >= 700) {
        WIDTH = (width - 100) / 4
        HEIGHT = height * .3
    }
    if (width >= 1024) {
        WIDTH = (width - 120) / 5
        HEIGHT = height * .42
    }

    const navigation = useNavigation()
    const [loading, setLoading] = useState(true)

    const onBrandPress = (brandName) => {
        navigation.navigate('VirtualShop', { headerTitle: brandName })
    }
    return (
        <ImageBackground
            style={[styles.container]}
            source={IMAGES.SHOP_LIST_BG}
            blurRadius={3}
            onLoadEnd={() => setLoading(false)}
        >
            <FloatingMenu />
            {
                loading && <LoadingModal />
            }
            <FlatList
                data={Data}
                keyExtractor={item => item.index.toString()}
                renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity
                            key={index}
                            activeOpacity={0.8}
                            onPress={() => onBrandPress(item.name)}
                        >
                            <Image
                                source={item.image}
                                style={[styles.itemImage, {
                                    width: WIDTH,
                                    height: HEIGHT
                                }]}
                                resizeMode='stretch'
                            />
                        </TouchableOpacity>
                    )
                }}
                contentContainerStyle={{
                    marginLeft: 10,
                    paddingBottom: height * .07,
                    flexDirection: 'row',
                    flexWrap: 'wrap'
                }}
            />
        </ImageBackground>
    )
}

export default ShopList

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    itemImage: {
        marginHorizontal: 10,
        marginTop: 10
    }
})
