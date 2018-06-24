import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

//import Home from './screens/Home';
import CurrencyList from './screens/CurrencyList';

EStyleSheet.build({
  $border: '#E2E2E2',
  $inputText: '#797979',
  $lightGray: '#F0F0F0',
  $primaryBlue: '#4F6D7A',
  $white: '#fff'
});

// in build, you can say outline: 1 to get an outline of each component

//export default () => <Home />;
export default () => <CurrencyList />;
