import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavigationActions } from '../utils'
import { StyleSheet, View, Image, Button } from 'react-native'
import { TabBarItem } from '../components'

@connect()
class Message extends Component {

  static navigationOptions = {
    header: null,
    tabBarLabel: '消息',
    tabBarIcon: ({ focused, tintColor }) =>
      <TabBarItem 
        focused={focused}
        icon={require('../assets/tabbar/message_unselected.png')}
        activedIcon={require('../assets/tabbar/message_selected.png')}
      />
  }

  gotoDetail = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'Detail' }))
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title="Goto Detail" onPress={this.gotoDetail} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 32,
    height: 32,
  },
})

export default Message
