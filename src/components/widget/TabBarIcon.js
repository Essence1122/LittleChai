import React, { PureComponent } from 'react'
import { 
   View, 
   Image, 
   StyleSheet, 
   Animated, 
   TouchableWithoutFeedback,
   Easing
} from 'react-native'
import shallowEqual from 'fbjs/lib/shallowEqual'

export default class TabBarIcon extends PureComponent {

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
    const { focused, icon, activedIcon } = this.props
    const { opacity } = this.state
    return (
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={icon}
          fadeDuration={0}
          resizeMode={'cover'}
        />
        <Animated.Image 
          style={[
            styles.activedIcon, 
            {
              opacity: focused ? opacity : 0
            }
          ]}
          source={activedIcon}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
	imageContainer: {
    width: 26,
    height: 26,
    marginBottom: 6.5,
	},
	activedIcon: {
	  position: 'absolute',
	  top: 0,
	}
})