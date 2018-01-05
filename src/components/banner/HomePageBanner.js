import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Image, StyleSheet, Text } from 'react-native'
import Swiper from 'react-native-swiper'
import { isString, width } from '../../utils'

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
			let source = null
			let url = image.url
			if (isString(url) && new RegExp('^(http|https)?://').test(url)) {
				source = {uri: url}
			} else {
				source = url
			}
			return (
				<View style={styles.swiperItems} key={url}>
					<Image source={source} style={{width: width, height: height}}></Image>
				</View>
			)
		})
		return (
			<View style={{height: height}}>
				<Swiper autoplay autoplayTimeout={3.5}>
        	{SwiperItems}
      	</Swiper>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	swiperItems: {
		flex: 1
	}
})