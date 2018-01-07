import { Dimensions, PixelRatio } from 'react-native'
import { Constants } from 'expo'

const dpr = PixelRatio.get()

export const isString = (string) => Object.prototype.toString.call(string) === '[object String]'

export { NavigationActions } from 'react-navigation'

export const delay = time => new Promise(resolve => setTimeout(resolve, time))

export const createAction = type => payload => ({ type, payload })

export const { width, height } = Dimensions.get('window')

export const onePixel = 1 / dpr

export const statusBarHeight = Constants.statusBarHeight

export const iosHeaderHeight = 64

export const pt = (pt) => pt * (width / 375) 