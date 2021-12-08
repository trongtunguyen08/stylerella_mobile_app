import { StyleSheet, Platform, PixelRatio, StatusBar } from 'react-native'
import { width, height, setWidth, setHeight, COLORS } from '../../contants/contants'

let IMAGE_WIDTH = width * 3
let BUTTON_WIDTH = setWidth(35)
let BUTTON_HEIGHT = setWidth(18)

let CITY_GIRL_BUILDING_WIDTH = setWidth(60)
let CITY_GIRL_BUILDING_HEIGHT = setHeight(45)
let CITY_GIRL_BUILDING_TOP = setHeight(28)
let CITY_GIRL_BUILDING_LEFT = setWidth(10)
let CITY_GIRL_BUTTON_BOTTOM = setHeight(25)
let CITY_GIRL_BUTTON_LEFT = setWidth(27)

let MIRROR_WIDTH = setWidth(25)
let MIRROR_HEIGHT = setHeight(33)
let MIRROR_RIGHT = setWidth(75)
let MIRROR_TOP = setHeight(37)
let YOGA_LIVING_BUTTON_RIGHT = setWidth(35)
let YOGA_LIVING_BUTTON_TOP = setHeight(32)

let PICNIC_BUTTON_TOP = setHeight(23)
let PICNIC_BUTTON_LEFT = setWidth(65)

let TREE_WIDTH = setWidth(61)
let TREE_HEIGHT = setHeight(44)
let TREE_TOP = setHeight(27.5)
let TREE_LEFT = width + setWidth(20)

let BALLOON_WIDTH = setWidth(32)
let BALLOON_HEIGHT = setHeight(20)
let BALLOON_TOP = setHeight(4)
let BALLON_LEFT = setWidth(65)

const ratio = PixelRatio.get()

// iOS
if (Platform.OS === 'ios' && ratio < 3) {
    TREE_WIDTH = setWidth(60)
    TREE_HEIGHT = setHeight(46)
    TREE_TOP = setHeight(26)
}

// Android
if (Platform.OS === 'android' && ratio <= 2) {
    TREE_WIDTH = setWidth(60)
    TREE_HEIGHT = setHeight(46)
    TREE_TOP = setHeight(26)
    CITY_GIRL_BUILDING_TOP = setHeight(28)
    BALLOON_TOP = setHeight(5)
    MIRROR_TOP = setHeight(37)
}

if (Platform.OS === 'android' && ratio <= 1.69) {
    BUTTON_HEIGHT = setWidth(13)
    TREE_TOP = setHeight(26)
    CITY_GIRL_BUILDING_TOP = setHeight(27)
    MIRROR_TOP = setHeight(37)
}

if (width >= 700) {
    IMAGE_WIDTH = width * 2
    BUTTON_WIDTH = setWidth(25)
    BUTTON_HEIGHT = setWidth(10)
    CITY_GIRL_BUTTON_BOTTOM = setHeight(26)
    CITY_GIRL_BUTTON_LEFT = setWidth(21)
    YOGA_LIVING_BUTTON_RIGHT = setWidth(21)
    YOGA_LIVING_BUTTON_TOP = setHeight(35)
    TREE_WIDTH = setWidth(42)
    TREE_TOP = setHeight(26)
    TREE_LEFT = setWidth(78)
    BALLOON_WIDTH = setWidth(27)
    BALLOON_HEIGHT = setHeight(23)
    BALLOON_TOP = setHeight(4)
    BALLON_LEFT = setWidth(38)
    PICNIC_BUTTON_TOP = setHeight(26)
    PICNIC_BUTTON_LEFT = setWidth(41)
    CITY_GIRL_BUILDING_WIDTH = setWidth(40)
    CITY_GIRL_BUILDING_HEIGHT = setHeight(40)
    CITY_GIRL_BUILDING_TOP = setHeight(33)
    CITY_GIRL_BUILDING_LEFT = setWidth(6)
    CITY_GIRL_BUTTON_LEFT = setWidth(16)
    MIRROR_WIDTH = setWidth(16)
    MIRROR_RIGHT = setWidth(51)
}

if (width >= 1024) {
    IMAGE_WIDTH = width
    BUTTON_WIDTH = setWidth(15)
    BUTTON_HEIGHT = setWidth(7)
    CITY_GIRL_BUTTON_BOTTOM = setHeight(26)
    CITY_GIRL_BUTTON_LEFT = setWidth(21)
    YOGA_LIVING_BUTTON_RIGHT = setWidth(10)
    YOGA_LIVING_BUTTON_TOP = setHeight(35)
    TREE_WIDTH = setWidth(24)
    TREE_TOP = setHeight(26)
    TREE_LEFT = setWidth(37)
    BALLOON_WIDTH = setWidth(17)
    BALLOON_HEIGHT = setHeight(23)
    BALLOON_TOP = setHeight(5)
    BALLON_LEFT = setWidth(17)
    PICNIC_BUTTON_TOP = setHeight(27)
    PICNIC_BUTTON_LEFT = setWidth(19)
    CITY_GIRL_BUILDING_WIDTH = setWidth(20)
    CITY_GIRL_BUILDING_HEIGHT = setHeight(37)
    CITY_GIRL_BUILDING_TOP = setHeight(35)
    CITY_GIRL_BUILDING_LEFT = setWidth(3.5)
    CITY_GIRL_BUTTON_LEFT = setWidth(7)
    MIRROR_WIDTH = setWidth(8)
    MIRROR_RIGHT = setWidth(25.5)
}

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    scrollViewContainer: {
        flex: 1
    },
    indicator: {
        position: 'absolute',
        alignSelf: 'center',
        top: '50%'
    },
    imageBackground: {
        width: IMAGE_WIDTH,
        height: setHeight(100),
        zIndex: 3,
        flex: 1
    },
    treeWrapper: {
        zIndex: 5,
        position: 'absolute',
        top: TREE_TOP,
        left: TREE_LEFT,
    },
    tree: {
        width: TREE_WIDTH,
        height: TREE_HEIGHT
    },
    balloonWrapper: {
        zIndex: 5,
        position: 'absolute',
        top: BALLOON_TOP,
        left: BALLON_LEFT
    },
    balloon: {
        width: BALLOON_WIDTH,
        height: BALLOON_HEIGHT,
    },
    buttonWrapper: {
        width: BUTTON_WIDTH,
        height: BUTTON_HEIGHT,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontFamily: 'MeridiesAntiqua',
        color: COLORS.white,
        marginBottom: BUTTON_HEIGHT / 5
    },
    cityGirlButton: {
        position: 'absolute',
        bottom: CITY_GIRL_BUTTON_BOTTOM,
        left: CITY_GIRL_BUTTON_LEFT,
        zIndex: 2
    },
    cityGirlBuildingWrapper: {
        position: 'absolute',
        top: CITY_GIRL_BUILDING_TOP,
        left: CITY_GIRL_BUILDING_LEFT,
        zIndex: 2
    },
    cityGirlBuilding: {
        width: CITY_GIRL_BUILDING_WIDTH,
        height: CITY_GIRL_BUILDING_HEIGHT,
    },
    mirrorWrapper: {
        position: 'absolute',
        right: MIRROR_RIGHT,
        top: MIRROR_TOP,
        zIndex: 2
    },
    mirror: {
        width: MIRROR_WIDTH,
        height: MIRROR_HEIGHT
    },
    yogaLivingButton: {
        position: 'absolute',
        right: YOGA_LIVING_BUTTON_RIGHT,
        top: YOGA_LIVING_BUTTON_TOP,
        zIndex: 2
    },
    picnicButton: {
        position: 'absolute',
        top: PICNIC_BUTTON_TOP,
        left: PICNIC_BUTTON_LEFT,
        zIndex: 999
    }
})