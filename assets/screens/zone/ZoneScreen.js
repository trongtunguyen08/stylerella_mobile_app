import React, { useState } from 'react'
import { View, StatusBar } from 'react-native'
import { styles } from './styles'
import Header from '../../componets/Header'
import TabView from '../../componets/TabView'

const ZoneScreen = (props) => {
    const { headerTitle } = props.route.params

    return (
        <View style={styles.container}>
            <Header
                headerTitle={headerTitle}
            />
            <TabView />
        </View>
    )
}

export default ZoneScreen


