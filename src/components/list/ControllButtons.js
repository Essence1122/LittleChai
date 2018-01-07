import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import ButtonCell from './ButtonCell'
import { View, StyleSheet } from 'react-native'

export default class ControllButtons extends PureComponent {

	static propTypes = {
	  buttons: PropTypes.array.isRequired
	}

	render () {
		let array = []
		return (
			<View style={styles.container}>
				{this.props.buttons.map((button, index) => {
					if (index % 3 === 0) {
						array = []
					}
					array.push(<ButtonCell key={button.image} {...button}/>)
					if ((index + 1) % 3  === 0 ) {
						return (
							<View key={`row_${index}`} style={styles.row}>
								{array}
							</View>
						)
					}
				})
			}
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginHorizontal: 15
	},
	row: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	}
})