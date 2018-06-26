import EStyleSheet from 'react-native-extended-stylesheet';

import colors from '../../config/colors';
import logoWithBackgroundImageBlue from './images/logoWithBackground.png';
import logoWithBackgroundImageGreen from './images/logoWithBackgroundGreen.png';
import logoWithBackgroundImageOrange from './images/logoWithBackgroundOrange.png';
import logoWithBackgroundImagePurple from './images/logoWithBackgroundPurple.png';

const imageSources = {};

imageSources[EStyleSheet.value(colors.primaryBlue)] = logoWithBackgroundImageBlue;
imageSources[EStyleSheet.value(colors.primaryGreen)] = logoWithBackgroundImageGreen;
imageSources[EStyleSheet.value(colors.primaryOrange)] = logoWithBackgroundImageOrange;
imageSources[EStyleSheet.value(colors.primaryPurple)] = logoWithBackgroundImagePurple;

export default imageSources;
