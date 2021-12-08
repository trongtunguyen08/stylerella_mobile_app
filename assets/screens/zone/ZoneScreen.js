import React, { useState } from 'react'
import { ImageBackground, Text, View, Image, StatusBar, TouchableOpacity, SafeAreaView } from 'react-native'
import { styles } from './styles'
import { COLORS, FONTS, IMAGES } from '../../contants/contants'
import { Ionicons } from '@expo/vector-icons'
import HeaderShop from '../../componets/HeaderShop'
import TabView from '../../componets/TabView'

const ZoneScreen = (props) => {
    const { headerTitle } = props.route.params

    const [headerTitleValue, setHeaderTitleValue] = useState(headerTitle)

    return (
        <View style={styles.container}>
            <StatusBar barStyle='light-content' translucent backgroundColor='transparent' />
            <HeaderShop
                title={headerTitleValue}
            />
            <TabView
                onItemPressed={setHeaderTitleValue}
            />
        </View>
    )
}

export default ZoneScreen


