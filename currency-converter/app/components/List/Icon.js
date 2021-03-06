import React from 'react';
import { Image, View } from 'react-native';
import PropTypes from 'prop-types';

import checkmarkImage from './images/check.png';
import styles from './styles';

const Icon = ({ checkmark, visible, iconBackground }) => {
  const iconStyles = [styles.icon];
  if (visible) {
    iconStyles.push(styles.iconVisible);
  }

  if (iconBackground) {
    iconStyles.push({ backgroundColor: iconBackground });
  }

  return (
    <View style={iconStyles}>
      {checkmark ? (
        <Image style={styles.checkIcon} resizeMode="contain" source={checkmarkImage} />
      ) : null}
    </View>
  );
};

Icon.propTypes = {
  checkmark: PropTypes.bool,
  visible: PropTypes.bool,
  iconBackground: PropTypes.string
};

export default Icon;
