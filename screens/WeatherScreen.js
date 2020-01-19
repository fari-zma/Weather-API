import React from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';
import { Card, CardItem } from 'native-base';

export default class WeatherScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: [],
    };
  }

  getWeatherFromApi = () => {
    const cityName = this.props.navigation.getParam('cityName', '');

    let path = 'https://samples.openweathermap.org/data/2.5/weather?q='.concat(cityName)
    .concat('&appid=b6907d289e10d714a6e88b30761fae22');
    console.log(path);

    return(
      fetch(path)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          isLoading: false,
          dataSource: this.state.dataSource.concat(responseJson),
        });
      })
      .catch(error => console.log(error))
    );
  };

  componentDidMount() {
    this.getWeatherFromApi();
  }

  render() {

    if(this.state.isLoading) {
      return(
        <View style={styles.progress}>
          <ActivityIndicator size='large' color='#EA7773' />
        </View>
      );
    }

    _KeyExtractor = (datasource, index) => datasource.id;

    return (
      <FlatList
      data= {this.state.dataSource}
      keyExtractor= {this._KeyExtractor}
      renderItem= {({item})=> (
        <Card>
          <CardItem>
            <View style={styles.userinfo}>
              <Text style={styles.text}> Main: {item.weather[0].main}</Text>
              <Text style={styles.text}> Description: {item.weather[0].description}</Text>
              <Text style={styles.text}> Temperature: {item.main.temp}</Text>
              <Text style={styles.text}> Pressure: {item.main.pressure}</Text>
              <Text style={styles.text}> Humidity: {item.main.humidity}</Text>
            </View>
          </CardItem>
        </Card>
      )}
      ></FlatList>
    );
  }
}

const styles = StyleSheet.create({
  userinfo: {
    flexDirection: "column",
    margin: 5,
  },
  text: {
      fontSize: 16
  },
  progress: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});