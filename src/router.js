import React, { PureComponent } from 'react'
import { View, BackHandler, Animated, Easing } from 'react-native'
import {
  StackNavigator,
  TabNavigator,
  TabBarBottom,
  addNavigationHelpers,
  NavigationActions,
} from 'react-navigation'
import { connect } from 'react-redux'
import Login from './containers/Login'
import Home from './containers/Home'
import Account from './containers/Account'
import Detail from './containers/Detail'
import SplashScreen from './containers/SplashScreen'
import GuidePages from './containers/GuidePages'
import Project from './containers/Project'
import User from './containers/User'

const HomeNavigator = TabNavigator(
  {
    Home: { screen: Home },
    Project: { screen: Project },
    User: { screen: User },
  },
  {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: false,
    lazyLoad: true,
    tabBarOptions: {
      //设置tab文字选中颜色
      activeTintColor: '#863ADA',
      //设置tab文字初始颜色
      inactiveTintColor: '#C5D1E9',
      style: {
        backgroundColor: '#ffffff',
        borderTopColor: '#b7b7b7',
      },
      backBehavior: 'none',
      labelStyle: {
        fontSize: 10,
        marginTop: 14,
        marginBottom: 2.5,
      },
    },
  }
)

const MainNavigator = StackNavigator(
  {
    HomeNavigator: { screen: HomeNavigator },
    Detail: { screen: Detail },
  },
  {
    headerMode: 'float',
  }
)

const AppNavigator = StackNavigator(
  {
    Main: { screen: MainNavigator },
    Login: { screen: Login },
  },
  {
    headerMode: 'none',
    mode: 'modal',
    navigationOptions: {
      gesturesEnabled: false,
    },
    transitionConfig: () => ({
      transitionSpec: {
        duration: 300,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
      },
      screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps
        const { index } = scene

        const height = layout.initHeight
        const translateY = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [height, 0, 0],
        })

        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1],
        })

        return { opacity, transform: [{ translateY }] }
      },
    }),
  }
)

function getCurrentScreen(navigationState) {
  if (!navigationState) {
    return null
  }
  const route = navigationState.routes[navigationState.index]
  if (route.routes) {
    return getCurrentScreen(route)
  }
  return route.routeName
}

@connect(({ router, home }) => ({ router, home }))
class Router extends PureComponent {
  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.backHandle)
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.backHandle)
  }

  backHandle = () => {
    const currentScreen = getCurrentScreen(this.props.router)
    if (currentScreen === 'Login') {
      return true
    }
    if (currentScreen !== 'Home') {
      this.props.dispatch(NavigationActions.back())
      return true
    }
    return false
  }

  render() {
    const { dispatch, router, home } = this.props
    const navigation = addNavigationHelpers({ dispatch, state: router })
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, opacity: home.opacity}}>
          <AppNavigator navigation={navigation} />
        </View>
      </View>
    )
  }
}

export function routerReducer(state, action = {}) {
  return AppNavigator.router.getStateForAction(action, state)
}

export default Router
