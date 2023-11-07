import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert, Image } from 'react-native';

export default class loginView extends Component {
  constructor (props) {
    super (props)
    this.state = {
      email: '',
      password: '',
    };
  }

  validateEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  validatePassword = (password) => {
    // Contraseña de al menos 8 caracteres con al menos una letra mayúscula y un número:
    const passwordRegex = /^(?=.*\d).{8,}$/;
    return passwordRegex.test(password);
  };

  handleLogin = () => {
    const { email, password } = this.state;

    if (!this.validateEmail(email)) {
      Alert.alert('Por favor, ingresa un correo electrónico válido.');
    } else if (!this.validatePassword(password)) {
      Alert.alert('La contraseña no cumple con los requisitos.');
    } else {
      // Validación exitosa.
      Alert.alert('Has iniciado sesión correctamente!');
    }
  };

  render() {
    return (
      <View style={styles.container}>
        
        <Image
          style={styles.logo}
          source={require('./assets/Gojo.jpg',)}
        />

        <Text style={styles.subTitle}>Sign in to your account</Text>

        <TextInput
          placeholder="fulanito@gmail.com"
          style={styles.textInput}
          onChangeText={(text) => this.setState({email: text})}
          value={this.state.email}
        />

        <TextInput
          placeholder="password"
          style={styles.textInput}
          onChangeText={(text) => this.setState({ password: text })}
          value={this.state.password}
          secureTextEntry={true}
        /> 

      <View style={styles.buttonContainer}>
        <Button
          title="Log In"
          onPress={this.handleLogin}
            accessibilityLabel="Log in button"/>

      </View>

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

  logo: {
    width: 200,
    height: 100
  },

  TextInput: {
    marginBottom:5, 
    borderBottomWidth:1
  },
});
