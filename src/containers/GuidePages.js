import React, {Component} from 'react'
import {
	View, 
	StyleSheet, 
	Image, 
	TouchableWithoutFeedback,
	Text, 
	Dimensions, 
	StatusBar,
	Animated,
	Easing,
} from 'react-native'
import Swiper from 'react-native-swiper'
import { connect } from 'react-redux'
import { createAction, width, height } from '../utils'

@connect()
class GuidePages extends Component {
	state = {
  	opacity: new Animated.Value(1),
  	zIndex: 99,
  	statusBar: true
  }
	_onPress = () => {
		const { dispatch } = this.props
		Animated.timing(this.state.opacity, {
			toValue: 0,
			duration: 300,
			easing: Easing.linear
		}).start(() => {
			this.setState({
				opacity: 0,
				zIndex: -1,
				statusBar: false
			}, () => {
				dispatch(createAction('home/showMainScreen')())
			})
		})
	}
	shouldComponentUpdate(nextProps, nextState) {
		return this.state.zIndex !== nextState.zIndex ||
			this.state.statusBar !== nextState.statusBar ||
			this.state.opacity._value !== nextState.opacity._value
	}
	render(){
		const { zIndex, opacity, statusBar } = this.state
		return (
			<Animated.View 
				style={[
					styles.viewContainer, 
					{
						zIndex: zIndex,
						opacity: opacity
					}
				]}
			>
				<StatusBar hidden={statusBar}/>
				<Swiper
					loop={false}
			    index={0}
	        autoplay={false}
	        horizontal={true}
	        paginationStyle={{bottom: 26}}
	        dot={ <View style={styles.dot}></View> }
	        activeDot={ <View style={styles.activeDot}></View> }
				>
					<Image
						style={styles.page} 
						source={require('../assets/tabbar/mine_selected.png')}
						resizeMode={'cover'}
					/>
					<Image
						style={styles.page} 
						source={require('../assets/tabbar/mine_selected.png')}
						resizeMode={'cover'}
					/>
					<Image
						style={styles.page} 
						source={require('../assets/tabbar/mine_selected.png')}
						resizeMode={'cover'}
					>
						<TouchableWithoutFeedback onPress={this._onPress}>	
							<View style={styles.button}>	
								<View style={styles.textContainer}>
									<Text style={styles.text}>立即体验</Text>
								</View>
							</View>
						</TouchableWithoutFeedback>
					</Image>
				</Swiper>
			</Animated.View>
		)
	}
}
const styles = StyleSheet.create({
	viewContainer: {
		position: 'absolute', 
		top: 0,
		width: width,
		height: height,
	},
	dot: {
		width: 8,
		height: 8,
		borderRadius: 4,
		backgroundColor: '#edebe3',
		marginHorizontal: 8,
	},
	activeDot: {
		width: 16,
		height: 8,
		borderRadius: 4,
		backgroundColor: '#f7d263',
		marginHorizontal: 6,
	},
	page: {
		position: 'relative',
		width: width,
		height: height,
	},
	button: {
		top: height - 110,
		alignItems: 'center',
	},
	textContainer: {
		width: 140,
		height: 42,
		backgroundColor: '#f7d263',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 5,
	},
	text: {
		color: '#562813',
		fontSize: 20,
		fontWeight: 'bold',
	}
});
export default GuidePages