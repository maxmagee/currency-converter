import React, { Component } from 'react';
import { Animated, Keyboard, Platform, Text, View } from 'react-native';

import logoWithBackgroundImage from './images/logoWithBackground.png';
import styles from './styles';

const ANIMATION_DURATION = 250;

class Logo extends Component {
  constructor(props) {
    super(props);

    this.containerImageWidth = new Animated.Value(styles.$largeContainerSize);
    this.imageWidth = new Animated.Value(styles.$largeImageSize);
  }

  componentWillMount() {}

  componentDidMount() {
    let showListener = 'keyboardWillShow';
    let hideListener = 'keyboardWillHide';

    if (Platform.OS === 'android') {
      showListener = 'keyboardDidShow';
      hideListener = 'keyboardDidHide';
    }

    this.keyboardShowListener = Keyboard.addListener(showListener, this.keyboardShow);
    this.keyboardHideListener = Keyboard.addListener(hideListener, this.keyboardHide);
  }

  componentWillUnmount() {
    this.keyboardShowListener.remove();
    this.keyboardHideListener.remove();
  }

  keyboardShow = () => {
    Animated.timing(this.containerImageWidth, {
      toValue: styles.$smallContainerSize,
      duration: ANIMATION_DURATION
    }).start();
  };

  keyboardHide = () => {
    Animated.timing(this.containerImageWidth, {
      toValue: styles.$largeContainerSize,
      duration: ANIMATION_DURATION
    }).start();
  };

  render() {
    const containerImageStyle = [
      styles.containerImage,
      { width: this.containerImageWidth, height: this.containerImageWidth }
    ];

    return (
      <View style={styles.container}>
        <Animated.Image
          resizeMode="contain"
          style={containerImageStyle}
          source={logoWithBackgroundImage}
        />
        <Text style={styles.text}>Currency Converter</Text>
      </View>
    );
  }
}

export default Logo;
