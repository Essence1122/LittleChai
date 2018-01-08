import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet } from 'react-native'
import Swiper from 'react-native-swiper'
import Image from '../widget/Image'
import { isString, width, pt } from '../../utils'

export default class HomePageBanner extends Component {

	static propTypes = {
	  height: PropTypes.number,
	  images: PropTypes.array.isRequired
	}

	static defaultProps = {
	  images: []
	}

	render () {
		const { height, images } = this.props
		const SwiperItems = images.map((image) => {
			return (
				<View style={styles.swiperItems} key={image.url}>
					<Image source={image.url} style={{width: width, height: height}}/>
				</View>
			)
		})
		return (
			<View style={{height: height, marginBottom: pt(22)}}>
				<Swiper 
					autoplay 
					autoplayTimeout={4}
					paginationStyle={{bottom: pt(10)}}
		      dot={ <View style={styles.dot}></View> }
		      activeDot={ <View style={[styles.dot ,styles.activeDot]}></View> }
				>
        	{SwiperItems}
      	</Swiper>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	swiperItems: {
		flex: 1
	},
	activeDot: {
		width: pt(12),
		backgroundColor: '#ffffff',
	},
	dot: {
		width: pt(6),
		height: pt(6),
		borderRadius: pt(6),
		marginLeft: pt(4),
		marginRight: pt(4),
		backgroundColor: 'rgba(255, 255, 255, 0.8)'
	}
})