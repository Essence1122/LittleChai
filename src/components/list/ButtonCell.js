import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Image from '../widget/Image'
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native'
import { pt } from '../../utils'

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
					<Image style={{marginTop: pt(22)}} source={image}/>
					<Text style={{marginTop: pt(12.5), fontSize: pt(13), color: '#28293E'}}>{label}</Text>
				</View>
			</TouchableHighlight>
		)
	}
}

const styles = StyleSheet.create({
	touch: {
		width: pt(100),
		height: pt(120),
		borderRadius: pt(4),
		marginTop: pt(22)
	},
	cellContainer: {
		flex: 1,
		borderRadius: pt(4),
		backgroundColor: '#ffffff',
		alignItems: 'center',
		shadowOffset: {width: 0, height: pt(2)},  
    shadowOpacity: 0.2,  
    shadowRadius: pt(5),  
    shadowColor: '#1e2775'
	}
})