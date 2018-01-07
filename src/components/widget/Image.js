import React, { PureComponent } from 'react'
import { Image } from 'react-native'
import { isString } from '../../utils'

export default class Component extends PureComponent {

	render () {
		let source = this.props.source
		if (isString(source) && new RegExp('^(http|https)?://').test(source)) {
			source = {uri: source, cache: 'force-cache'}
		}
		const props = {...this.props, source}
		return (
			<Image {...props}/>
		)
	}
}