import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image,
  KeyboardAvoidingView,
  AsyncStorage
} from "react-native";


export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      password: "",
      password_confirmation: ""
    };
  }

  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#16a085",
      elevation: null
    }
  };

  onRegisterPress() {
    const { email, password, name } = this.state;
    console.log(email);
    console.log(name);
    console.log(password);
    if (this.state.name) {
      this.props.navigation.navigate('Loginn');
    this.setState({
      email: '',
      password: '',
      name: ''
    });
    }
  }

  render() {
    return (
      <View behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
          <Text style={styles.subtext}>SIGN UP</Text>
        </View>
        <KeyboardAvoidingView>
          <TextInput
            value={this.state.name}
            onChangeText={name => this.setState({ name })}
            style={styles.input}
            placeholder="Name"
            returnKeyType="next"
            onSubmitEditing={() => this.emailInput.focus()}
          />
          <TextInput
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            style={styles.input}
            returnKeyType="next"
            ref={input => (this.emailInput = input)}
            onSubmitEditing={() => this.passwordCInput.focus()}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Email"
          />
          <TextInput
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            ref={input => (this.passwordCInput = input)}
            onSubmitEditing={() => this.passwordInput.focus()}
            returnKeyType="next"
          />
          <TextInput
            value={this.state.password}
            onChangeText={password_confirmation => this.setState({ password_confirmation })}
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry={true}
            returnKeyType="go"
            ref={input => (this.passwordInput = input)}
          />
        </KeyboardAvoidingView>
        <TouchableHighlight
          onPress={this.onRegisterPress.bind(this)}
          style={[styles.buttonContainer, styles.loginButton]}
        >
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1.2,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
    padding: 20
  },
  input: {
    height: 40,
    width: 350,
    marginBottom: 10,
    paddingHorizontal: 10
  },
  
  buttonContainer: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    width:350,
    marginBottom: 20,
    borderRadius: 30,
  },
  loginButton: {
    backgroundColor: "#6200EE",
  },
  buttonText: {
    fontSize: 18,
    alignSelf: "center",
    textAlign: "center",
    color: "#FFF",
    fontWeight: "700"
  },
  subtext: {
    marginBottom: 20,
    color: "#6200EE",
    width: 160,
    textAlign: "center",
    fontSize: 35,
    fontWeight: "bold",
    marginTop: 70
  }
});