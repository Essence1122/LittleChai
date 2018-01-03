import React, { Component } from 'react'
import { TabBarItem } from '../components'

export default class Add extends Component {

  static navigationOptions = {
    header: null,
    tabBarLabel: ' ',
    tabBarIcon: ({focused, tintColor}) => (
      <TabBarItem
        focused={ focused }
        style={
          {width: 60, height: 60, top: -10 }
        }
        icon={require('../assets/tabbar/publish.png')}
        activedIcon={require('../assets/tabbar/publish.png')}
      />
    ),
    tabBarOnPress: (...args) => {

    }
  }

  render() {
    return null
  }
}
