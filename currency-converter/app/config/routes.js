import { StatusBar } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../screens/Home';
import CurrencyListScreen from '../screens/CurrencyList';
import OptionsScreen from '../screens/Optons';
import ThemesScreen from '../screens/Themes';

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: () => null
      }
    },
    Options: {
      screen: OptionsScreen,
      navigationOptions: {
        headerTitle: 'Options'
      }
    },
    Themes: {
      screen: ThemesScreen,
      navigationOptions: {
        headerTitle: 'Themes'
      }
    }
  },
  {
    headerMode: 'screen'
  }
);

const CurrencyListStack = createStackNavigator({
  CurrencyList: {
    screen: CurrencyListScreen,
    navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.state.params.title
    })
  }
});

export default createStackNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        header: () => null
      }
    },
    CurrencyList: {
      screen: CurrencyListStack
    }
  },
  {
    initialRouteName: 'Home',
    mode: 'modal',
    cardStyle: { paddingTop: StatusBar.currentHeight },
    headerMode: 'none'
  }
);
