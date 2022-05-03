import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity
} from "react-native";
import { circle } from "react-native/Libraries/Animated/Easing";

export default class ForgetPassword extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#16a085",
      elevation: null
    }
  };

  onForgetPress() {
        this.props.navigation.navigate("Login");
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Username"
          keyboardType="email-address"
          autoCapitalize="none"
          underlineColorAndroid={"grey"}
          autoCorrect={false}
          style={styles.input}
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
        />
        <TouchableOpacity
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={this.onForgetPress.bind(this)}>
          <Text style={styles.buttonText}>Forget Password</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1.2,
    justifyContent: "flex-start",
    backgroundColor: "white",
    padding: 20,
    paddingTop: 160
  },
  input: {
    height: 40,
    marginBottom: 10,
    paddingHorizontal: 10
  },
  buttonContainer: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
    borderRadius: 30,
},
  buttonText: {
    textAlign: "center",
    color: "#FFF",
    fontWeight: "700"
  },loginButton: {
    backgroundColor: "#6200EE",
},
});