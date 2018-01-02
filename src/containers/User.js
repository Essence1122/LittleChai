import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavigationActions } from '../utils'
import { StyleSheet, View, Image, Button } from 'react-native'
import { TabBarIcon } from '../components'

@connect()
class User extends Component {

  static navigationOptions = {
    header: null,
    tabBarLabel: '我的',
    tabBarIcon: ({ focused, tintColor }) =>
      <TabBarIcon 
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

export default User