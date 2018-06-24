import React from 'react';
import PropTypes from 'prop-types';
import { Image, TouchableOpacity, View } from 'react-native';

import gearImage from './images/gear.png';
import styles from './styles';

const Header = ({ onPress }) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Image resizeMode="contain" style={styles.icon} source={gearImage} />
    </TouchableOpacity>
  </View>
);

Header.propTypes = {
  onPress: PropTypes.func
};

export default Header;
