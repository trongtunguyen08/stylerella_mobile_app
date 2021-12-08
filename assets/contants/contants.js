import { Dimensions, StatusBar } from "react-native"

export const { width, height } = Dimensions.get('window')

export const setWidth = (value) => {
    return (width * value) / 100
}

export const setHeight = (value) => {
    return ((height + StatusBar.currentHeight) * value) / 100
}

export const FONTS = {
    MeridiesAntiqua: 'MeridiesAntiqua',
    PingFangTC: 'PingFangTC'
}

export const COLORS = {
    primary: '#EDAFA8',
    highlight: '#b2837e',
    black: '#000',
    white: '#FFF',
    gray: '#808080'
}

export const IMAGES = {
    FACEBOOK: require('../images/facebook.png'),
    GOOGLE: require('../images/google.png'),
    WECHAT: require('../images/wechat.png'),
    BUTTERFLY: require('../images/butterfly.png'),
    BUTTON: require('../images/button3.png'),
    LANDING_BACKGROUND: require('../images/landing.png'),
    STYLERELLA: require('../images/stylerella.png'),
    STYLERELLA2: require('../images/stylerella2.png'),
    LOGO: require('../images/logo.png'),
    MAP: require('../images/map.png'),
    TREE: require('../images/tree.png'),
    BALLOON: require('../images/balloon.png'),
    FALL_LEAF: require('../contants/fall_leaf.json'),
    BUTTERFLY_ANIMATION: require('../contants/butterfly_animation.json'),
    BUTTERFLY_ANIMATION2: require('../contants/butterfly_animation2.json'),
    WATER_RIPPLE: require('../contants/water_ripple.json'),
    BIRD: require('../contants/bird.json'),
    BIRDS: require('../contants/birds.json'),
    RAIN: require('../contants/rain.json'),
    CONGRATS: require('../contants/congrats.json'),
    LOADING: require('../contants/loading.json'),
    CITY_GIRL: require('../images/city_girl.png'),
    MIRROR: require('../images/mirror.png'),
    GLOW: require('../contants/glow.json'),
    SNOW: require('../contants/snow.json'),
    FALLING_SNOW: require('../images/falling_snow.png'),
    SUN: require('../images/sun.png'),
    SHOP_LIST_BG: require('../images/shoplistbg.png'),
    LV: require('../images/LV.png'),
    GUCCI: require('../images/Gucci.png'),
    CHANRL: require('../images/Chanel.png'),
    HERMES: require('../images/Hermes.png'),
    BAG: require('../images/bag.png'),
    VIRUAL_SHOPS_BG: require('../images/Virtual_Shops_BG.png'),
    VIRTUAL_BAG: require('../images/Bag_Virtual.png'),
    FRAME: require('../images/frame.png'),
    SHARE_BUTTON: require('../images/share.png'),
    BOOKMARK: require('../images/bookmark.png'),
    BAG_DETAILS: require('../images/bag-details.png'),
    LOGO_BOLD: require('../images/logo_bold.png'),
    SHOPPING_BAG_ERROR: require('../contants/shopping_bag_error.json'),
    THANK_YOU: require('../contants/thank_you.json'),
}