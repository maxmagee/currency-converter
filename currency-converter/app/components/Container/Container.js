import React from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView } from 'react-native';

import styles from './styles';

const Container = ({ children, backgroundColor }) => {
  const containerStyles = [styles.container, { backgroundColor }];
  return <SafeAreaView style={containerStyles}>{children}</SafeAreaView>;
};

Container.propTypes = {
  children: PropTypes.any,
  backgroundColor: PropTypes.string
};

export default Container;
