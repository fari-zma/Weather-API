import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import WeatherScreen from './screens/WeatherScreen';
import GetCityScreen from './screens/GetCityScreen';

const MainNavigator = createStackNavigator({
  GetCity: { screen: GetCityScreen },
  Weather: { screen: WeatherScreen }
},
{
  defaultNavigationOptions: {
    title: 'Weather API',
    headerTintColor: '#fff',
    headerTitleStyle: {color: '#fff'},
    headerStyle: {backgroundColor:'#EA7773'}
  }
});

const App = createAppContainer(MainNavigator);
export default App;