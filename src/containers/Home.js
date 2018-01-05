import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavigationActions } from '../utils'
import { StyleSheet, View, Image, Button } from 'react-native'
import { TabBarItem, HomePageHeader, HomePageBanner } from '../components'

const images = [
  {url: require('../assets/banner/banner1.png')},
  {url: require('../assets/banner/banner2.png')}
]

@connect()
class Home extends Component {

  static navigationOptions = {
    header: null,
    tabBarLabel: '首页',
    tabBarIcon: ({ focused, tintColor }) =>
      <TabBarItem 
        focused={focused}
        icon={require('../assets/tabbar/home_unselected.png')}
        activedIcon={require('../assets/tabbar/home_selected.png')}
      />
  }

  gotoDetail = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'Detail' }))
  }

  render() {
    return (
      <View style={styles.container}>
        <HomePageHeader />
        <HomePageBanner height={189} images={images}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  icon: {
    width: 32,
    height: 32,
  },
})

export default Home
