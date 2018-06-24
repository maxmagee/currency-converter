import React from 'react';
import PropTypes from 'prop-types';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';
import iconImage from './images/icon.png';

const ClearButton = ({ onPress, text }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.wrapper}>
        <Image resizeMode="contain" style={styles.icon} source={iconImage} />
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

ClearButton.propTypes = {
  onPress: PropTypes.func,
  text: PropTypes.string
};

export default ClearButton;
