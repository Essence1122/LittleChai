import React, { Component } from 'react'
import { TabBarItem } from '../components'
import { pt } from '../utils'
import { Image } from 'react-native'

export default class Add extends Component {

  static navigationOptions = {
    header: null,
    tabBarLabel: ' ',
    tabBarIcon: ({focused, tintColor}) => (
      <Image
        style={
          {width: pt(60), height: pt(60), top: pt(-10) }
        }
        source={require('../assets/tabbar/publish.png')}
      />
    ),
    tabBarOnPress: (...args) => {

    }
  }

  render() {
    return null
  }
}
