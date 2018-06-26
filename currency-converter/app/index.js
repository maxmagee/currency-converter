import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Provider } from 'react-redux';

import Navigator from './config/routes';
import { AlertProvider } from './components/Alert';
import store from './config/store';
import colors from './config/colors';

// I had to create the colors config because the extended stylesheet
// wasn't setting up global variables before my other files needed them.
// So EStyleSheet.value(...) wasn't working

EStyleSheet.build({
  $border: '#E2E2E2',
  $darkText: '#343434',
  $inputText: '#797979',
  $lightGray: '#F0F0F0',
  $primaryBlue: colors.primaryBlue,
  $primaryGreen: colors.primaryGreen,
  $primaryPurple: colors.primaryPurple,
  $primaryOrange: colors.primaryOrange,
  $white: '#fff'
});

// in build, you can say outline: 1 to get an outline of each component

export default () => (
  <Provider store={store}>
    <AlertProvider>
      <Navigator onNavigationStateChange={null} />
    </AlertProvider>
  </Provider>
);
