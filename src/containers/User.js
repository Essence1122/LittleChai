import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavigationActions } from '../utils'
import { StyleSheet, View, Image, Button } from 'react-native'
import { TabBarItem, UserHeader, ControllButtons } from '../components'
import * as data from '../data'

const buttons = [
  {image: require('../assets/mine/praise.png'), label: '赞过的'},
  {image: require('../assets/mine/collection.png'), label: '收藏的'},
  {image: require('../assets/mine/readed.png'), label: '读过的'},
  {image: require('../assets/mine/tag.png'), label: '标签'},
  {image: require('../assets/mine/advice.png'), label: '意见反馈'},
  {image: require('../assets/mine/setting.png'), label: '设置'}
]
@connect()
class User extends Component {

  static navigationOptions = {
    header: null,
    tabBarLabel: '我的',
    tabBarIcon: ({ focused, tintColor }) =>
      <TabBarItem 
        focused={focused}
        icon={require('../assets/tabbar/mine_unselected.png')}
        activedIcon={require('../assets/tabbar/mine_selected.png')}
      />,
  }

  gotoDetail = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'Detail' }))
  }

  render() {
    return (
      <View style={styles.container}>
        <UserHeader {...data.userinfo}/>
        <ControllButtons buttons={buttons}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default User
