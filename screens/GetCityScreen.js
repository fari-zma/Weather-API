import React from 'react';
import { StyleSheet, Text, View, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Form, Item, Label, Input, Button } from 'native-base';

export default class GetCityScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        cityName: ''
    };
  }

  goTo = () => {
    if(this.state.cityName === '') 
        return
    else
        this.props.navigation.navigate('Weather', {cityName: this.state.cityName})
  };

  render() {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
            <Form style={styles.form} >
                <Item floatingLabel  style={styles.item} >
                    <Label style={styles.text}>city name</Label>
                    <Input keyboardType='default' selectionColor='#000' style={styles.input} 
                        onChangeText={ value => {this.setState({cityName: value})}} />
                </Item>
                <Button bordered style={styles.btn} onPress={() => {this.goTo()}}>
                    <Text style={styles.btnText}>Submit</Text>
                </Button>
            </Form>
        </View>
        </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  form: {
    marginTop: 100,
    marginHorizontal: 20,
  },
  item: {
    height: 70,
    borderColor: '#EA7773',
  },
  text: {
    fontSize: 16,
    color: '#EA7773',
  },
  input: {
    color: '#000',
  },
  btn: {
    marginTop: 40,
    justifyContent: "center",
    borderColor: '#EA7773',
    marginLeft: 10
  },
  btnText: {
    textAlign: "center",
    color: '#EA7773',
  },
});