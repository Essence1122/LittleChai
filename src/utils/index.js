import { Dimensions } from 'react-native'

export { NavigationActions } from 'react-navigation'

export const delay = time => new Promise(resolve => setTimeout(resolve, time))

export const createAction = type => payload => ({ type, payload })

export const { width, height } = Dimensions.get('window')