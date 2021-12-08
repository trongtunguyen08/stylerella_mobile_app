import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { COLORS } from '../contants/contants'

const Category = () => {
    return (
        <View style={styles.container}>
            <Text>Category</Text>
        </View>
    )
}

export default Category

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        width: '100%',
        position: 'absolute'
    }
})
