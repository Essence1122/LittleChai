import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createAction, width, height } from '../utils'
import { View, Image, Animated, StatusBar, StyleSheet, Easing } from 'react-native'

@connect()
class SplashScreen extends Component {
	static navigationOptions = ({ navigation }) => ({
    header: null,
  });
  state = {
  	opacity: new Animated.Value(1),
  	zIndex: 99,
  	statusBar: true
  }
	shouldComponentUpdate(nextProps, nextState) {
		return this.state.zIndex !== nextState.zIndex ||
			this.state.statusBar !== nextState.statusBar ||
			this.state.opacity._value !== nextState.opacity._value
	}
	componentDidMount() {
		this.timer = setTimeout(() => {
			this._fadeOut()
		}, 3000);
	}
	_fadeOut = () => {
		const { dispatch } = this.props
		Animated.timing(this.state.opacity, {
			toValue: 0,
			duration: 300,
			easing: Easing.linear,
		}).start(() => {
			this.setState({zIndex: -1, statusBar: false}, () => {
				dispatch(createAction('home/showMainScreen')())
			})
		})
	}
	componentWillUnmount() {
		clearTimeout(this.timer)
	}
	render() {
		const { zIndex, opacity, statusBar } = this.state
		return (
			<Animated.View 
				style={[styles.splashContainer,
					{
						zIndex: zIndex,
						opacity: opacity
					}
				]}
			>
				<StatusBar hidden={statusBar}/>
				<Image 
					style={styles.splashImage}
					source={require('../assets/tabbar/mine_selected.png')} 
					resizeMode={'cover'}
				/>
			</Animated.View>
		)
	}
}
const styles = StyleSheet.create({
	splashContainer: {
		position: 'absolute', 
		top: 0
	},
	splashImage: {
		width: width,
		height: height
	}
})
export default SplashScreen