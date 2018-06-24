import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

//import Home from './screens/Home';
import Themes from './screens/Themes';

EStyleSheet.build({
  $border: '#E2E2E2',
  $darkText: '#343434',
  $inputText: '#797979',
  $lightGray: '#F0F0F0',
  $primaryBlue: '#4F6D7A',
  $primaryGreen: '#00BD9D',
  $primaryPurple: '#9E768F',
  $primaryOrange: '#D57A66',
  $white: '#fff'
});

// in build, you can say outline: 1 to get an outline of each component

//export default () => <Home />;
export default () => <Themes />;
