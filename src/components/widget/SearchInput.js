import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { View, Image, StyleSheet, Text } from 'react-native'
import { pt } from '../../utils'

export default class SearchInput extends PureComponent {

	static propTypes = {
		placeholder: PropTypes.string,
		backgroundColor: PropTypes.string,
	}

	static defaultProps = {
		placeholder: '',
		backgroundColor: 'rgba(255, 255, 255, 0.2)'
	}

	render () {
		const { placeholder, style, backgroundColor } = this.props
		return (
			<View style={[styles.searchInputWrapper, style, {backgroundColor}]}>
				<Image source={require('../../assets/homepage/search.png')}/>
				<Text style={styles.placeholder}>{placeholder}</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	searchInputWrapper: {
		flex: 1,
		height: pt(28),
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: pt(14)
	},
	placeholder: {
		fontSize: pt(14),
		color: '#ffffff',
		marginLeft: pt(9.5)
	}
})