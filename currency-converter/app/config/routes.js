import { StatusBar } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../screens/Home';
import CurrencyListScreen from '../screens/CurrencyList';

export default createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: () => null
      }
    },
    CurrencyList: {
      screen: CurrencyListScreen,
      navigationOptions: ({ navigation }) => ({
        headerTitle: navigation.state.params.title
      })
    }
  },
  {
    initialRouteName: 'Home',
    mode: 'modal',
    cardStyle: { paddingTop: StatusBar.currentHeight }
  }
);
