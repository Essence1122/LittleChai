import React, { Component } from 'react'
import { View, ImageBackground, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import Image from '../widget/Image'
import { width, pt } from '../../utils'

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
		height: pt(250),
		backgroundColor: '#F6F7F9',
		borderBottomLeftRadius: pt(10),
		borderBottomRightRadius: pt(10),
		shadowOffset: {width: 0, height: pt(2)},  
    shadowOpacity: 0.2,  
    shadowRadius: pt(5),  
    shadowColor: '#1e2775'
	},
	userHeaderImage: {
		width: '100%', 
		height: '100%',
		flexDirection: 'column',
		alignItems: 'center',
		borderBottomLeftRadius: pt(10),
		borderBottomRightRadius: pt(10)
	},
	imageWrapper: {
		width: pt(102),
		height: pt(102),
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: pt(51),
		marginTop: pt(45.5),
		backgroundColor: 'rgba(236,233,255,1)',
		shadowOffset: {width: 0, height: 0},  
    shadowOpacity: 0.6,  
    shadowRadius: pt(3),  
    shadowColor: '#fff'
	},
	imageInner: {
		alignItems: 'center',
		justifyContent: 'center',
		width: pt(84),
		height: pt(84),
		borderRadius: pt(42),
		backgroundColor: '#fff'
	},
	headerImage: {
		width: pt(78),
		height: pt(78),
		borderRadius: pt(39)
	},
	nickName: {
		marginTop: pt(12),
		fontSize: pt(22),
		color: '#ffffff',
		backgroundColor: 'transparent'
	},
	signature: {
		marginTop: pt(14),
		marginHorizontal: pt(84),
		lineHeight: pt(15),
		fontSize: pt(12),
		color: 'rgba(255, 255, 255, 0.5)',
		backgroundColor: 'transparent',
		textAlign: 'center'
	}
})