import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, TextInput, StyleSheet } from 'react-native'
import { statusBarHeight, width, iosHeaderHeight } from '../../utils' 
import SearchInput from '../widget/SearchInput'

export default class HomePageHeader extends Component {

	render () {
		return (
			<View style={styles.homePageHeader}>
				<SearchInput
					style={styles.searchInput} 
					placeholder={'搜索'}
				/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	homePageHeader: {
		position: 'absolute',
		flexDirection: 'row',
		alignItems: 'center',
    width: width,
    height: iosHeaderHeight,
    top: statusBarHeight,
    zIndex: 9999
	},
	searchInput: {
		marginHorizontal: 15
	}
})