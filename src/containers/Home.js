import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavigationActions, iosHeaderHeight } from '../utils'
import { StyleSheet, View, ListView, StatusBar } from 'react-native'
import { TabBarItem, HomePageHeader, HomePageBanner, ArticleCard } from '../components'
import * as data from '../data'

const bannerHeight = 189
const scrollHeight = bannerHeight - iosHeaderHeight
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

  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2 });
    StatusBar.setBarStyle('light-content')
  }

  state = {
    headerVisible: true,
    headerOpacity: 0
  }

  gotoDetail = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'Detail' }))
  }

  onScroll = (e) => {
    let y = e.nativeEvent.contentOffset.y
    let visible = true
    let opacity = 0
    if(y > scrollHeight && this.state.headerOpacity === 1) {
      return false
    }
    visible = y < 0 ? false : true
    opacity = y <= scrollHeight ? y / scrollHeight : 1
    this.setState({
      headerVisible: visible,
      headerOpacity: opacity
    })
  }

  renderRow = (rowData, sectionID, rowID) => (
    <ArticleCard key={rowData._id} {...rowData} />
  )

  renderHeader = () => (
    <HomePageBanner height={bannerHeight} images={data.images}/>
  )

  render() {
    return (
      <View style={styles.container}>
        <HomePageHeader {...this.state}/>
        <ListView
          dataSource={this.ds.cloneWithRows(data.articles)}
          renderRow={this.renderRow}
          onEndReachedThreshold={40}
          renderHeader={this.renderHeader}
          enableEmptySections
          onScroll={this.onScroll}
        />
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
