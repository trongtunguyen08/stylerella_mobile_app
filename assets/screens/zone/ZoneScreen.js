import React, { useState } from 'react'
import { View, StatusBar } from 'react-native'
import { styles } from './styles'
import { Header, TabView } from '../../components'

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


