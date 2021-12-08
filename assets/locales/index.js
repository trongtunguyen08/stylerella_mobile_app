import * as Localization from 'expo-localization'
import i18n from 'i18n-js'

import en from './en.json'
import sc from './sc.json'
import tc from './tc.json'

i18n.fallbacks = true

i18n.translations = { en, sc, tc }

//Set app to local phone settings
const getLanguage = async () => {
    try {
        let choice = await Localization.locale
        if (choice.substring(0, 7) == 'zh-Hans') {
            i18n.locale = 'sc'
        } else if (choice.substring(0, 7) == 'zh-Hant') {
            i18n.locale = 'tc'
        } else {
            choice = 'en'
            i18n.locale = choice
        }
    } catch (error) {
        console.log('Unable to get locale')
    }
}

getLanguage()

export function t(name) {
    return i18n.t(name)
}