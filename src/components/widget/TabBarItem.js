import React, { PureComponent } from 'react'
import { 
   View, 
   Image, 
   StyleSheet, 
   Animated, 
   TouchableWithoutFeedback,
   Easing
} from 'react-native'
import { pt } from '../../utils'
import shallowEqual from 'fbjs/lib/shallowEqual'

export default class TabBarIcon extends PureComponent {

  static defaultProps = {
    style: null,
  }

  state = {
    opacity: new Animated.Value(0)
  }

  componentWillReceiveProps (nextProps) {
    this._scaleAnimation()
  }

  _scaleAnimation = () => {
    this.state.opacity.setValue(0)
    Animated.timing(
      this.state.opacity, 
      {
        toValue: 1,
        direction: 100,
      }
    ).start()
  }

  render() {
    const { focused, icon, activedIcon, style } = this.props
    const { opacity } = this.state
    return (
      <View style={style || styles.imageContainer}>
        <Image
          style={styles.image}
          source={icon}
          fadeDuration={0}
          resizeMode={'contain'}
        />
        <Animated.Image 
          style={[
            styles.activedIcon, 
            {
              opacity: focused ? opacity : 0
            }
          ]}
          source={activedIcon}
          resizeMode={'contain'}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
	imageContainer: {
    width: pt(26),
    height: pt(26),
    marginBottom: pt(6.5),
    backgroundColor: 'transparent',
    borderWidth: 0
	},
	activedIcon: {
	  position: 'absolute',
    width: pt(26),
    height: pt(26),
	  top: 0,
    backgroundColor: 'transparent'
	},
  image: {
    width: pt(26),
    height: pt(26)
  }
})