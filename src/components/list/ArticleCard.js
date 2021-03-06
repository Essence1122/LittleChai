/**
@component 首页文章卡片列表
@author huangyang
@date 2018/01/05
*/
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { 
	View, 
	Image, 
	StyleSheet, 
	Text, 
	TouchableHighlight 
} from 'react-native'
import { pt } from '../../utils'

export default class ArticleCard extends PureComponent {

	static propTypes = {
	  image: PropTypes.oneOfType([
	  	PropTypes.number,
	  	PropTypes.string
	  ]).isRequired,
	  title: PropTypes.string.isRequired,
	  content: PropTypes.string.isRequired,
	  author: PropTypes.string.isRequired,
	  time: PropTypes.string.isRequired,
	  comment: PropTypes.number.isRequired,
	  like: PropTypes.number.isRequired
	}
	
	_onPressButton () {

	}

	render () {
		const { image, title, content, author, time, comment, like } = this.props
		return (
			<TouchableHighlight 
				onPress={this._onPressButton}
				style={styles.touch}
				activeOpacity={0.85}
				underlayColor={'rgba(255, 255, 255, 0.5)'}
			>
				<View style={styles.cardWrapper}>
					<Image
						resizeMode='cover'
						source={image} 
						style={{width: pt(100), height: pt(100), marginLeft: pt(17)}}
					/>
					<View style={{height: '100%', flex: 1, flexDirection: 'row'}}>
						<View style={styles.textArea}>
							<Text numberOfLines={2} style={styles.title}>{title}</Text>
							<Text numberOfLines={2} style={styles.content}>{content}</Text>
							<View style={styles.favarate}>
								<View style={styles.row}>
									<Text style={styles.author}>{author}</Text>
									<Text style={styles.dot}>·</Text>
									<Text style={styles.time}>{time}</Text>
								</View>
								<View style={styles.row}>
									<View style={styles.row}>
										<Image source={require('../../assets/homepage/comment.png')}/>
										<Text style={styles.number}>{comment}</Text>
									</View>
									<View style={[styles.row, styles.like]}>
										<Image source={require('../../assets/homepage/like.png')}/>
										<Text style={styles.number}>{like}</Text>
									</View>
								</View>
							</View>
						</View>
					</View>
				</View>
			</TouchableHighlight>
		)
	}
}

const styles = StyleSheet.create({
	touch: {
		height: pt(150),
		marginHorizontal: pt(15),
		marginBottom: pt(13),
		borderRadius: pt(5),
		shadowOffset: {width: 0, height: pt(2)},  
    shadowOpacity: 0.2,  
    shadowRadius: pt(5),  
    shadowColor: '#1e2775'
	},
	cardWrapper: {
		flex: 1,
		borderRadius: pt(5),
		backgroundColor: '#ffffff',
		flexDirection: 'row',
		alignItems: 'center'
	},
	textArea: {
		flex: 1,
		marginLeft: pt(19),
		marginTop: pt(20.5),
		marginBottom: pt(17),
		justifyContent: 'space-between'
	},
	title: {
		fontSize: pt(18),
		fontWeight: '600', 
		lineHeight: pt(22),
		color: '#2B2C2E',
		marginRight: pt(12.5)
	},
	content: {
		color: '#2B2C2E',
		fontSize: pt(14),
		lineHeight: pt(18),
		top: pt(-3),
		marginRight: pt(20)
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		flexWrap: 'nowrap'
	},
	author: {
		lineHeight: pt(14),
		fontSize: pt(13),
		color: '#888A8E',
		bottom: pt(0.5)	
	},
	dot: {
		color: '#888A8E',
		marginHorizontal: pt(1)
	},
	time: {
		lineHeight: pt(14),
		fontSize: pt(13),
		color: '#888A8E'
	},
	favarate: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginRight: pt(19)
	},
	number: {
		lineHeight: pt(14),
		fontSize: pt(13),
		color: '#ADB0B6',
		marginLeft: pt(3)
	},
	like: {
		marginLeft: pt(10)
	}
})