import React, { Component } from 'react'
import { View, ImageBackground, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import Image from '../widget/Image'
import { width } from '../../utils'

export default class UserHeader extends Component {

	static propTypes = {
	  image: PropTypes.oneOfType([
	  	PropTypes.number,
	  	PropTypes.string
	  ]).isRequired,
	  nickname: PropTypes.string.isRequired,
	  signature: PropTypes.string.isRequired
	}

	render () {
		const { image, nickname, signature } = this.props
		return (
			<View style={styles.userHeader}>
				<ImageBackground
					style={styles.userHeaderImage} 
					source={require('../../assets/mine/bg.png')}
					resizeMode='cover'
					>
						<View style={styles.imageWrapper}>
							<View style={styles.imageInner}>
								<Image style={styles.headerImage} source={image}/>
							</View>
						</View>
						<Text style={styles.nickName}>{nickname}</Text>
						<Text numberOfLines={2} style={styles.signature}>{signature}</Text>
				</ImageBackground>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	userHeader: {
		width: width,
		height: 250,
		backgroundColor: '#F6F7F9',
		borderBottomLeftRadius: 10,
		borderBottomRightRadius: 10,
		shadowOffset: {width: 0, height: 2},  
    shadowOpacity: 0.2,  
    shadowRadius: 5,  
    shadowColor: '#1e2775'
	},
	userHeaderImage: {
		width: '100%', 
		height: '100%',
		flexDirection: 'column',
		alignItems: 'center',
		borderBottomLeftRadius: 10,
		borderBottomRightRadius: 10
	},
	imageWrapper: {
		width: 102,
		height: 102,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 51,
		marginTop: 45.5,
		backgroundColor: 'rgba(236,233,255,1)',
		shadowOffset: {width: 0, height: 0},  
    shadowOpacity: 0.6,  
    shadowRadius: 3,  
    shadowColor: '#fff'
	},
	imageInner: {
		alignItems: 'center',
		justifyContent: 'center',
		width: 84,
		height: 84,
		borderRadius: 42,
		backgroundColor: '#fff'
	},
	headerImage: {
		width: 78,
		height: 78,
		borderRadius: 39
	},
	nickName: {
		marginTop: 12,
		fontSize:22,
		color: '#ffffff',
		backgroundColor: 'transparent'
	},
	signature: {
		marginTop: 14,
		marginHorizontal: 84,
		lineHeight: 15,
		fontSize: 12,
		color: 'rgba(255, 255, 255, 0.5)',
		backgroundColor: 'transparent',
		textAlign: 'center'
	}
})