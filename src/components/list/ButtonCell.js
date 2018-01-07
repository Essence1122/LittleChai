import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Image from '../widget/Image'
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native'

export default class ButtonCell extends PureComponent {

	static propTypes = {
	  image: PropTypes.oneOfType([
	  	PropTypes.number,
	  	PropTypes.string
	  ]).isRequired,
	  label: PropTypes.string.isRequired
	}

	_onPressButton () {

	}

	render () {
		const { image, label } = this.props
		return (
			<TouchableHighlight
				style={styles.touch}
				onPress={this._onPressButton}
				activeOpacity={0.85}
				underlayColor={'rgba(255, 255, 255, 0.5)'}
			>
				<View style={styles.cellContainer}>
					<Image style={{marginTop: 22}} source={image}/>
					<Text style={{marginTop: 12.5, fontSize: 13, color: '#28293E'}}>{label}</Text>
				</View>
			</TouchableHighlight>
		)
	}
}

const styles = StyleSheet.create({
	touch: {
		width: 100,
		height: 120,
		borderRadius: 4,
		marginTop: 22
	},
	cellContainer: {
		flex: 1,
		borderRadius: 4,
		backgroundColor: '#ffffff',
		alignItems: 'center',
		shadowOffset: {width: 0, height: 2},  
    shadowOpacity: 0.2,  
    shadowRadius: 5,  
    shadowColor: '#1e2775'
	}
})