import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'

import StackNavigator from './StackNavigator'
import configureStore from '../redux/store'

const Store = configureStore()

const RootNavigator = () => {
    return (
        <Provider store={Store}>
            <NavigationContainer>
                <StackNavigator />
            </NavigationContainer>
        </Provider>
    )
}

export default RootNavigator
