import React from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView } from 'react-native';

import styles from './styles';

const Container = ({ children }) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

Container.propTypes = {
  children: PropTypes.any
};

export default Container;
