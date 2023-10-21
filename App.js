import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View, Button, Switch, TextInput, Alert } from 'react-native';

export default class App extends Component {
  constructor (props) {
    super (props)
    this.state = {
      switchValue: false,
      name: "",
    };
  }

  onChange = (value) => {
    console.warn(`El switch cambiará a ${value}`)
    this.setState({switchValue: value})
  }

  onPressLearnMore = () => {
    Alert.alert(`${this.state.name}`, ` Es lo que se escribió`)
  }
  

  render() {
    return (
      <View style={styles.container}>
        
        <TextInput
        onChangeText={(text)=>this.setState({name:text})}
        style={{marginBottom:5, borderBottomWidth:1}}
        />
        <Switch
        onValueChange={()=> this.onChange(!this.state.switchValue)}
        value={this.state.switchValue}/>

        <Button
        onPress={this.onPressLearnMore}
        title='Learn More'
        color="#841584"
        accessibilityLabel='Learn more about this purple button'/>

        <Text>Hello!</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
