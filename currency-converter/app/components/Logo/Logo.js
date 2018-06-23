import React from 'react';
import { Image, ImageBackground, Text, View } from 'react-native';

import backgroundImage from './images/background.png';
import logoImage from './images/logo.png';
import styles from './styles';

const Logo = () => (
  <View style={styles.container}>
    <ImageBackground resizeMode="contain" style={styles.containerImage} source={backgroundImage}>
      <Image resizeMode="contain" style={styles.image} source={logoImage} />
    </ImageBackground>
    <Text style={styles.text}>Currency Converter</Text>
  </View>
);

export default Logo;
