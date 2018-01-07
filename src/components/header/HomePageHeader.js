import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { View, TextInput, StyleSheet } from 'react-native'
import { statusBarHeight, width, iosHeaderHeight } from '../../utils' 
import SearchInput from '../widget/SearchInput'

export default class HomePageHeader extends PureComponent {

	static propTypes = {
	  headerOpacity: PropTypes.number,
	  headerVisible: PropTypes.bool
	}

	componentWillReceiveProps(nextProps) {
		const { headerVisible, headerOpacity } = nextProps
		this.view.setNativeProps({
			style: {
				backgroundColor: `rgba(119, 71, 255, ${headerOpacity})`,
				opacity: headerVisible
			}
		})
	}

	render () {
		return (
			<View 
				ref={view => this.view = view}
				style={styles.homePageHeader}
			>
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
		top: 0,
		flexDirection: 'row',
		alignItems: 'center',
    width: width,
    paddingTop: statusBarHeight,
    height: iosHeaderHeight,
    zIndex: 9999
	},
	searchInput: {
		marginHorizontal: 15
	}
})